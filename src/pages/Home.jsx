// import video from "../../public"
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

// Lazy load heavy or non-critical components
const FuzzyText = React.lazy(() => import("../components/FuzzyText"));
const Footer = React.lazy(() => import("../components/Footer"));
import { Swiper, SwiperSlide } from "swiper/react";

// You can also lazy load Swiper if it's not above-the-fold (optional)

// Optional: Lazy load animated background (commented out originally)
// const StarsBackground = React.lazy(() => import('../components/animate-ui/backgrounds/stars'));

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: false });

  const [animate, setAnimate] = useState(false);
  const products = [
    {
      title: "Mentha fresh path",
      desc: "Fresh and grounded. Mentha fresh path channels the calm energy of nature, refined into a scent that’s modern, and quietly captivating.",
      image:
        "https://denverformen.com/cdn/shop/files/Dream_100ml.png?v=1737460532&width=600", // replace with actual image path
      base: "Lavender, Bergamot",
      middle: "Iris, White Tea",
      top: "Mint",
      price: "$145.00",
    },
    {
      title: "Ocean Breeze",
      desc: "Inspired by waves and wind. Ocean Breeze is an invigorating, fresh scent with citrus tones that capture the thrill of open water.",
      image:
        "https://denverformen.com/cdn/shop/files/Autograph-Collection-20ml-Flipkart-Listing-Image-01.jpg?v=1742626648&width=600",
      base: "Cedarwood, Amber",
      middle: "Marine Accord, Sea Salt",
      top: "Lemon Zest",
      price: "$130.00",
    },
    {
      title: "Amber Noir",
      desc: "A bold and warm fragrance that evokes sophistication and timelessness, with earthy undertones and a seductive finish.",
      image:
        "https://denverformen.com/cdn/shop/files/Dream_100ml.png?v=1737460532&width=600",
      base: "Vanilla, Musk",
      middle: "Patchouli, Rose",
      top: "Bergamot",
      price: "$165.00",
    },
    {
      title: "Floral Whispers",
      desc: "Delicate and radiant, Floral Whispers blends a garden's serenity with bright top notes, perfect for daytime charm.",
      image:
        "https://denverformen.com/cdn/shop/files/Phoenix-MOS-Lising-Image-01.jpg?v=1746267024",
      base: "Sandalwood, White Musk",
      middle: "Peony, Jasmine",
      top: "Pear Blossom",
      price: "$120.00",
    },
  ];
  const testimonials = [
    {
      name: "Anne Oliva",
      title: "Wall Painter Designer",
      feedback:
        "Coco Noir Eau de Parfum is the ultimate expression of feminine power. It lingers long after you’ve left the room. Encased in a sleek black bottle, it’s more than a fragrance — it’s a signature.",
    },
    {
      name: "Leo Khan",
      title: "Creative Director",
      feedback:
        "This perfume is an experience—elegant, powerful, and timeless. I’ve never had so many compliments!",
    },
    {
      name: "Sara Vivek",
      title: "Interior Stylist",
      feedback:
        "Elegant, modern, and bold. It defines who I am. A perfect scent for every occasion.",
    },
  ];
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    setAnimate(isInView);
  }, [isInView]);
  return (
    <main className="relative w-full h-screen">
      <section className="section-1 relative z-20 flex items-center justify-center h-screen text-center px-4">
        {/* Background Video */}
        <video
          src="/bc84ffb3574e11e396583359c3677743.mp4"
          preload="none"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="/bc84ffb3574e11e396583359c3677743.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}

        {/* Foreground content */}
        <div
          style={{ fontFamily: "Gilroy" }}
          className="relative z-20 flex items-center justify-center h-full text-center px-4"
        >
          <div className="max-w-4xl text-white">
            <Suspense
              fallback={<div className="text-white text-lg">Loading...</div>}
            >
              <FuzzyText
                fontSize="clamp(4rem, 6vw, 4.5rem)"
                lineHeight="1.2"
                fontFamily="'Floranina', sans-serif"
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
              >
                Luxury Scents That Leave
              </FuzzyText>

              <br />

              <FuzzyText
                fontSize="clamp(4rem, 6vw, 4.5rem)"
                lineHeight="1.2"
                fontFamily="Gilroy"
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
              >
                A Lasting Impression.
              </FuzzyText>
            </Suspense>

            <div className="w-fit px-4 py-3 text-sm md:text-base mx-auto mt-4 rounded-full font-semibold bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all text-white">
              <Link to="/products">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
     <section className="bg-gray-50 min-h-screen px-4 py-12">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-6xl mx-auto"
  >
    {/* Header Section */}
    <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6 sm:gap-0">
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-light text-gray-800 mb-2">
          Get 15% Off In
        </h1>
        <p className="text-xl sm:text-3xl font-light text-gray-400">
          Seasonal Product
        </p>
      </div>
      <div className="w-24 h-24 bg-gray-300 overflow-hidden rounded-full flex items-center justify-center shrink-0">
        <img
          className="w-full h-full object-cover"
          src="https://denverformen.com/cdn/shop/files/Autograph-Collection-20ml-Flipkart-Listing-Image-01.jpg?v=1742626648&width=600"
          alt=""
        />
      </div>
    </div>

    {/* Main Product Section */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Product Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-3xl h-80 sm:h-96 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://denverformen.com/cdn/shop/files/Dream_100ml.png?v=1737460532&width=600"
            alt=""
          />
          {/* Ambient lighting effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-gradient-radial from-amber-300/20 to-transparent rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-4">
          Oz Body Lotion (Unboxed)
        </h2>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="text-xl sm:text-2xl font-light text-gray-600">
            From ₹ 44615
          </span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            05 Stock
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
          Step into Step into each one of them new. Suddenly take tones,
          just like someone is around you in a clean. That perfect
          condition. Dil Yeh New. Forever! That Hag Sweet sensation and no
          you.
        </p>

        {user ? (
          <Link
            to={`/products/3`}
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            Buy Now
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            Login to Buy
          </Link>
        )}
      </div>
    </div>
  </motion.div>
</section>


      <section className="relative bg-white dark:bg-black min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 py-24">
        {/* === Hero Text === */}
        <div className="relative w-full z-10 text-center font-[Floranina] text-black dark:text-white max-w-6xl space-y-6 px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-2">
            {/* === Line 1 === */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center items-center gap-2 sm:gap-4"
            >
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                WHERE EVERY
              </h1>
              <div className="w-14 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 lg:w-24 lg:h-16 overflow-hidden rounded-full shrink-0">
                <video
                  autoPlay
                  loop
                  muted
                  preload="none"
                  playsInline
                  className="w-full h-full object-cover"
                  src="/a235cb9f172cfb899def6c71527b5c1d.mp4"
                />
              </div>
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                DROP IS A
              </h1>
            </motion.div>

            {/* === Line 2 === */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center items-center gap-2 sm:gap-4"
            >
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                PORTAL
              </h1>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 overflow-hidden rounded-full shrink-0">
                <video
                  autoPlay
                  loop
                  muted
                  preload="none"
                  playsInline
                  className="w-full h-full object-cover"
                  src="/a84a6395b8df8aea63dea3ed2051375f.mp4"
                />
              </div>
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                TO A HIDDEN
              </h1>
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                WORLD
              </h1>
            </motion.div>
          </div>
        </div>

        {/* === Animated Image Section === */}
        <motion.div
          ref={ref}
          initial={{
            width: "0%",
            background:
              "linear-gradient(90deg,#f5f5f5 0%,#d7d7d7 20%,#a6a6a6 40%,#d7d7d7 60%,#f5f5f5 80%,#ffffff 100%)",
          }}
          animate={
            animate
              ? {
                  width: "100%",
                  background: "transparent",
                  transition: { duration: 1.2, ease: "easeInOut" },
                }
              : {
                  width: "0%",
                  background:
                    "linear-gradient(90deg,#f5f5f5 0%,#d7d7d7 20%,#a6a6a6 40%,#d7d7d7 60%,#f5f5f5 80%,#ffffff 100%)",
                  transition: { duration: 1.2, ease: "easeInOut" },
                }
          }
          className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 h-[30rem] overflow-hidden transition-all rounded-lg"
        >
          <video
            autoPlay
            loop
            muted
            preload="none"
            playsInline
            className="w-full h-full object-cover"
            src="/5405b47e57f471e09c873a367d45c7a6.mp4"
          />
        </motion.div>
      </section>
      <section className="w-full py-16 bg-black text-zinc-50">
        <div className="max-w-6xl mx-4 sm:mx-8 md:mx-12 lg:mx-16 px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-y-8 mb-8"
          >
            <div>
              <p className="uppercase text-[0.6rem] font-semibold text-zinc-50 mb-1 rounded-full border border-white/30 w-fit px-3 py-1 bg-white/10 backdrop-blur-md shadow-sm">
                Our Products
              </p>
              <h2 className="font-Florania text-3xl md:text-4xl font-stretch-ultra-expanded font-semibold leading-tight">
                Discover our best collection, <br /> in other words, many fans
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                We have four flagship products, which are the main ingredients
                in <br />
                the creation of other impressive perfume products.
              </p>
            </div>
            <div className="hidden lg:flex gap-3">
              <button className="prev-btn border px-4 py-1 rounded-full flex items-center gap-1 text-sm hover:bg-zinc-800">
                <ArrowLeftIcon className="w-4 h-4" />
                Prev
              </button>
              <button className="next-btn border px-4 py-1 rounded-full flex items-center gap-1 text-sm hover:bg-zinc-800">
                Next
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            slidesPerView={1}
            spaceBetween={40}
          >
            {products.map((prod, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bottle bg-black rounded-3xl flex flex-col md:flex-row items-center gap-8 max-w-full md:h-[25rem] "
                >
                  {/* Image */}
                  <div className="w-full md:w-[50%] h-[15rem] md:h-full">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between w-full h-full p-6 md:p-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{prod.title}</h3>
                      <p className="text-sm text-zinc-50 mb-3">
                        {prod.subtitle}
                      </p>
                      <p className="text-sm text-zinc-50 mb-4">{prod.desc}</p>
                    </div>

                    <div>
                      {/* Notes */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm border rounded-lg overflow-hidden mb-4">
                        <div className="p-3">
                          <p className="text-zinc-50">Base note</p>
                          <p className="font-medium">{prod.base}</p>
                        </div>
                        <div className="p-3 border-t sm:border-t-0 sm:border-x">
                          <p className="text-zinc-50">Middle note</p>
                          <p className="font-medium">{prod.middle}</p>
                        </div>
                        <div className="p-3">
                          <p className="text-zinc-50">Top note</p>
                          <p className="font-medium">{prod.top}</p>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex justify-between items-center flex-wrap gap-4">
                        <p className="text-zinc-50 text-xl font-bold">
                          {prod.price}
                        </p>
                        <Link
                          to="/products"
                          className="bg-white text-black text-sm px-5 py-2 active:scale-90 rounded-full flex items-center gap-2 hover:bg-zinc-200"
                        >
                          <ShoppingBagIcon className="w-4 h-4" />I want this
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="relative bg-black/80 px-4 py-12 overflow-hidden">
        {/* Blurred Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover blur-md brightness-50 -z-10"
          src="./3a0ad16bfd13bf95fe749cd1ab0bb88e.mp4"
          preload="none"
          autoPlay
          loop
          muted
        />

        {/* Glassmorphic Testimonial Card */}
        <div className="max-w-5xl text-white rounded-xl mx-auto p-6 md:p-10 backdrop-blur-md shadow-md relative bg-gradient-to-br from-[#0f0f0f]/80 to-[#1c1c1c]/90 border border-white/10">
          {/* Heading */}
          <p className="text-[0.6rem] uppercase font-semibold text-zinc-50 mb-2 rounded-full border border-white/20 w-fit px-3 py-1 bg-white/5 backdrop-blur-sm">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            What our client <br /> say’s about us
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="relative"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="md:flex md:items-start md:justify-between gap-10">
                  <div className="mb-4 md:mb-0">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.title}</p>
                  </div>
                  <div className="text-sm text-gray-300 max-w-xl">
                    {item.feedback}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute top-6 right-6 flex gap-3 z-10">
              <button className="swiper-button-prev p-2 border border-white/30 rounded-full hover:bg-white/10 transition">
                <ArrowLeftIcon className="w-4 h-4" />
              </button>
              <button className="swiper-button-next p-2 border border-white/30 rounded-full hover:bg-white/10 transition">
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </Swiper>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
