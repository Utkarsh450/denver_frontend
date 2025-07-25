import Home from './pages/Home'
import Navbar from "./components/Navbar"
import MainRoutes from "./routes/MainRoutes"
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentuser } from "./store/actions/userActions"
import { asyncloadproducts } from "./store/actions/productActions";
import { useEffect } from "react";
const App = () => {
   const { user } = useSelector((state) => state.userReducer);
    const { product } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
      !product && dispatch(asyncloadproducts());
        !user && dispatch(asynccurrentuser());
    }, [user, product]);

  return (
        <div className='w-full h-screen'>
    <Navbar/>
    <MainRoutes/>
    </div>
  )
}

export default App