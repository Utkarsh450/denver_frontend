import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { asyncupdateuser } from "../store/actions/userActions";

const volumes = ["100 ml", "70 ml", "50 ml"];

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.productReducer);
  const product = products.find((p) => p.id == id);
   const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

 const AddtoCartHandler = () => {
    if (!user) return;

    console.log("Clicked Product:", product.id);

    const updatedCart = [...(user.cart || [])];

    const index = updatedCart.findIndex((ci) => ci.product.id === product.id);

    if (index === -1) {
        updatedCart.push({ product: product, quantity: 1 });
    } else {
        updatedCart[index] = {
            ...updatedCart[index],
            quantity: updatedCart[index].quantity + 1,
        };
    }

    console.log("Cart before dispatch:", updatedCart);

    const updatedUser = { ...user, cart: updatedCart };
    dispatch(asyncupdateuser(user.id, updatedUser));
};

  const [selectedVolume, setSelectedVolume] = useState("100 ml");

  if (!product) return <p className="text-center py-10">Product not found.</p>;

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 md:px-10 py-10 max-w-[1400px] mx-auto mt-10">
      {/* LEFT SIDE - Main Image */}
      <div className="w-full rounded overflow-hidden">
        <img
          src={product.image || "/images/perfume_main.jpg"} // fallback image
          alt={product.title}
          className="w-full max-h-[500px] object-contain rounded-lg"
        />
      </div>

      {/* RIGHT SIDE - Product Info */}
      <div className="space-y-6 text-zinc-800">
        <div className="text-center lg:text-left">
          <p className="uppercase text-sm text-zinc-500">{product.category || "Perfume"}</p>
          <h2 className="text-2xl sm:text-3xl font-bold">{product.title}</h2>
          <p className="text-xl font-semibold mt-2">₹{product.price}</p>
        </div>

        <p className="text-sm sm:text-base text-zinc-600 text-center lg:text-left">
          {product.description || "Step into the world of Parfs..."}
        </p>

        {/* Volume Selector */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {volumes.map((vol) => (
            <button
              key={vol}
              onClick={() => setSelectedVolume(vol)}
              className={`px-3 py-1 border rounded-full text-sm transition ${
                selectedVolume === vol
                  ? "bg-black text-white"
                  : "border-zinc-400 text-zinc-700 hover:border-black"
              }`}
            >
              {vol}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button onClick={AddtoCartHandler} className="bg-zinc-900 text-white py-3 px-6 rounded-lg font-medium w-full active:scale-90 hover:bg-black sm:w-auto">
            ADD TO CART
          </button>
          <button className="border py-3 px-6 rounded-lg hover:bg-zinc-900 hover:text-amber-50 active:scale-90 font-medium w-full sm:w-auto">
            BUY NOW
          </button>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4 text-sm text-zinc-700">
          <details className="border-t pt-4">
            <summary className="cursor-pointer font-medium">
              CHARACTERISTICS
            </summary>
            <ul className="mt-2">
              <li>Brand: <strong>PARFS</strong></li>
              <li>Collection: <strong>2022</strong></li>
              <li>Item no: <strong>{product.id}</strong></li>
            </ul>
          </details>

          <details className="border-t pt-4">
            <summary className="cursor-pointer font-medium">DESCRIPTION</summary>
            <p className="mt-2">
              {product.longDescription || "Elevate your senses with Parfs..."}
            </p>
          </details>

          <details className="border-t pt-4">
            <summary className="cursor-pointer font-medium">PAYMENT & DELIVERY</summary>
            <p className="mt-2">Free delivery on all orders. COD available.</p>
          </details>

          <details className="border-t pt-4">
            <summary className="cursor-pointer font-medium">RETURNS</summary>
            <p className="mt-2">Returns accepted within 30 days of purchase.</p>
          </details>
        </div>
      </div>
    </div>
    <Footer />
    
    
    </>
  );
};

export default ProductDetail;
