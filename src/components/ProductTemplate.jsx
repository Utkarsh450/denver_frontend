import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import { useEffect } from "react";

const ProductTemplate = ({ p }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

 const AddtoCartHandler = () => {
    if (!user) return;

    console.log("Clicked Product:", p.id);

    const updatedCart = [...(user.cart || [])];

    const index = updatedCart.findIndex((ci) => ci.product.id === p.id);

    if (index === -1) {
        updatedCart.push({ product: p, quantity: 1 });
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
useEffect(() => {
  console.log("Redux user updated:", user);
}, [user]);



    return (
        <div className="bg-white rounded-xl shadow-lg p-4 transition hover:shadow-xl">
            <Link to={`/products/${p.id}`}>
                <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-contain mb-4"
                />
            </Link>

            <Link to={`/products/${p.id}`}>
                <h2 className="text-lg font-semibold text-zinc-800 mb-2 hover:underline">
                    {p.title.slice(0, 50)}...
                </h2>
            </Link>

            <p className="text-sm text-zinc-600 mb-2">
                {p.description.slice(0, 80)}...
            </p>

            <p className="text-pink-600 font-bold mb-4 text-base">
                ₹{p.price?.toLocaleString() ?? "N/A"}
            </p>

            <div className="flex justify-between items-center">
                <Link to={`/products/${p.id}`} className="text-indigo-600 text-sm font-medium">
                    More Info
                </Link>
                <button
                    onClick={AddtoCartHandler}
                    className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductTemplate;
