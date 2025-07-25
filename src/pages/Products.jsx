import { lazy, Suspense, useState, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingProduct from "../components/LoadingProduct";
import useInfinite from "../utils/useInfinite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Products = () => {
    const { products, hasMore, fetchlazyProducts } = useInfinite();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSearch, setSelectedSearch] = useState("");
    const [isSuggestionClicked, setIsSuggestionClicked] = useState(false);
    const products1 = useSelector((state) => state.productReducer.products);

    const topProducts = products.slice(0, 5);

    const filteredProducts = useMemo(() => {
        const query = selectedSearch || searchQuery;
        if (isSuggestionClicked && selectedSearch) {
            return products.filter(
                (p) => p.title.toLowerCase() === selectedSearch.toLowerCase()
            );
        }
        return products.filter((p) =>
            p.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [products, searchQuery, selectedSearch, isSuggestionClicked]);

    const searchSuggestions = useMemo(() => {
        if (!searchQuery.trim()) return [];
        return products
            .filter((p) =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0, 5);
    }, [searchQuery, products]);
    

    return (
        <>
        <div className="bg-white text-zinc-800 min-h-screen font-sans">
            {/* Hero Section - Perfume Swiper */}
            <section className="w-full px-0 md:px-0 py-0 bg-zinc-900 rounded-b-[40px] shadow-md">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    loop
                >
                    {products1.map((i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-10 gap-8">
                                <div className="flex-1 text-center md:text-left">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-zinc-100">
                                        {i.title.slice(0, 30)}
                                    </h1>
                                    <p className="text-zinc-200 mb-6 text-sm sm:text-base">
                                        {i.description.slice(0, 100)}...
                                    </p>
                                    <Link to={`/products/${i.id}`} className="px-4 sm:px-6 py-2 sm:py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition text-sm sm:text-base">
                                        Explore Now
                                    </Link>
                                </div>
                                <div className="flex-1">
                                    <img
                                        src={i.image}
                                        alt="Perfume"
                                        className="w-full max-w-[300px] sm:max-w-md rounded mx-auto object-contain"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Search */}
            <div className="relative max-w-md mx-auto mt-12 px-4 sm:px-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full p-3 border border-zinc-300 rounded-lg shadow-sm focus:outline-indigo-500"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSelectedSearch("");
                        setIsSuggestionClicked(false);
                    }}
                />
                {searchSuggestions.length > 0 && (
                    <ul className="absolute left-0 right-0 bg-white z-10 rounded-b-lg border border-t-0 border-zinc-300 shadow max-h-60 overflow-y-auto">
                        {searchSuggestions.map((sugg) => (
                            <li
                                key={sugg.id}
                                onClick={() => {
                                    setSelectedSearch(sugg.title);
                                    setSearchQuery(sugg.title);
                                    setIsSuggestionClicked(true);
                                }}
                                className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
                            >
                                {sugg.title}
                            </li>
                        ))}
                    </ul>
                )}
                {selectedSearch && (
                    <button
                        className="mt-2 text-indigo-500 underline text-sm"
                        onClick={() => {
                            setSearchQuery("");
                            setSelectedSearch("");
                            setIsSuggestionClicked(false);
                        }}
                    >
                        Clear search
                    </button>
                )}
            </div>

            {/* Featured Section */}
            <section className="mt-16 px-4 sm:px-6 md:px-16 container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                    Featured Products
                </h2>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1.2 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    loop
                >
                    {topProducts.map((p) => (
                        <SwiperSlide key={p.id}>
                            <Suspense fallback={<LoadingProduct />}>
                                <ProductTemplate p={p} />
                            </Suspense>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* All Products */}
            <section className="mt-16 px-4 sm:px-6 md:px-16 container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                    Highly Recommended
                </h2>

                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchlazyProducts}
                    hasMore={hasMore}
                    loader={<p className="text-center">Loading more...</p>}
                    endMessage={
                        <p className="text-center mt-5 text-indigo-500">
                            <b>Yay! You've seen all our products</b>
                        </p>
                    }
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((p) => (
                                <Suspense key={p.id} fallback={<LoadingProduct />}>
                                    <ProductTemplate p={p} />
                                </Suspense>
                            ))
                        ) : (
                            <p className="text-center w-full text-lg mt-10">
                                No products match your search.
                            </p>
                        )}
                    </div>
                </InfiniteScroll>
            </section>
        </div>
        <Footer />
        
        </>
    );
};

export default Products;
