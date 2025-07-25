import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Cart = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    const cart = user?.cart || [];

    const IncreaseQuantity = (index) => {
        if (!user) return;
        const updatedCart = [...cart];
        updatedCart[index] = {
            ...updatedCart[index],
            quantity: updatedCart[index].quantity + 1,
        };
        dispatch(asyncupdateuser(user.id, { ...user, cart: updatedCart }));
    };

    const DecreaseQuantity = (index) => {
        if (!user) return;
        const updatedCart = [...cart];
        if (updatedCart[index].quantity === 1) {
            updatedCart.splice(index, 1);
        } else {
            updatedCart[index] = {
                ...updatedCart[index],
                quantity: updatedCart[index].quantity - 1,
            };
        }
        dispatch(asyncupdateuser(user.id, { ...user, cart: updatedCart }));
    };

    return (
        <>
         <div className="p-4 sm:p-8 max-w-5xl mt-10 mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">My Cart</h1>

            {cart.length > 0 ? (
                <>
                    <div className="grid gap-6">
                        {cart.map((ci, i) => (
                            <div
                                key={i}
                                className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-lg p-4 gap-4"
                            >
                                <img
                                    src={ci.product?.image || "/placeholder.png"}
                                    alt={ci.product?.title || "Product image"}
                                    className="w-32 h-32 object-contain"
                                />
                                <div className="flex-1">
                                    <Link to={`/products/${ci.product.id}`} className="text-lg font-semibold">{ci.product?.title}</Link>
                                    <p className="text-gray-600 mt-1">
                                        Price: ₹{ci.product?.price} x {ci.quantity}
                                    </p>
                                    <p className="text-xl font-bold text-green-600 mt-1">
                                        ₹{ci.product?.price * ci.quantity}
                                    </p>
                                </div>
                                <div className="flex items-center mt-4 sm:mt-0">
                                    <button
                                        onClick={() => DecreaseQuantity(i)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xl"
                                    >
                                        −
                                    </button>
                                    <span className="px-4 text-lg font-semibold">
                                        {ci.quantity}
                                    </span>
                                    <button
                                        onClick={() => IncreaseQuantity(i)}
                                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-xl"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-right">
                        <h2 className="text-2xl font-bold">
                            Total: ₹
                            {cart.reduce(
                                (total, item) =>
                                    total + item.product.price * item.quantity,
                                0
                            )}
                        </h2>
                    </div>
                </>
            ) : (
                <div className="text-center text-lg text-gray-500">
                    Your cart is empty.
                </div>
            )}
        </div>
        <Footer />
        
        </>
    );
};

export default Cart;
