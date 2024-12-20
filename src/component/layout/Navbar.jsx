
import { Link } from "react-router-dom"
import ButtonLogout from "../button/ButtonLogout"
import { useEffect, useState } from "react"
import SearchInput from "../search/SearchInput"
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import {  useSelector } from "react-redux";
import ButtonAuth from "../button/ButtonAuth"
import { jwtDecode } from "jwt-decode";
function NavbarComponent() {
    const [isVisible, setIsVisible] = useState(true);
    const cart = useSelector(state => state.product.cart);
 
    const[user, setUser] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
    
        // Validasi token sebelum decode
        if (token) {
          try {
            const decoded = jwtDecode(token);
            setUser(decoded.user.charAt(0).toUpperCase() + decoded.user.slice(1)); // Asumsi 'user' adalah field di token
          } catch (error) {
            console.error("Invalid token:", error.message);
          }
        } else {
          console.warn("No token found in localStorage");
        }
      }, []);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        
    }, []);
   
    return (
       <div className={isVisible ? "" : "fixed top-0 left-0 right-0 z-50"}>
        <div className="flex p-4 gap-2 w-full bg-white">
            <div className="p-3 sm:hidden lg:block">
                <Link to="/">
                    <img className="w-52" src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" />
                </Link>
            </div>
            <div className="hidden sm:hidden lg:block">
                <h2 className="text-xl p-5 ">Kategori</h2>
            </div>
            <SearchInput />
            <div className="flex gap-4 text-2xl p-4 ">
                <Link to="/cart"><PiShoppingCartSimple /></Link>
                {cart.length > 0 ? <p className="absolute top-5 ml-4  text-sm text-white bg-red-500 rounded-full w-5 h-5 flex justify-center">{cart.length}</p>: ''}
                <IoNotificationsOutline />
                <GoMail />
            </div>
            <span className="text-2xl text-slate-400 mt-2">|</span>
            {localStorage.getItem("token")?
            <div className="hidden sm:hidden lg:flex gap-6 ml-4">
                <div className="flex gap-2 mt-1  text-slate-500">
                    <img className="w-12 h-12 bg-slate-500 rounded-full" src="https://images.tokopedia.net/img/tokopedia-lite/icons/default_v3-shopnophoto.png" alt="" />
                    <p className="mt-3">Toko</p>
                </div>
                <div className="relative flex gap-2 mt-1 text-slate-500 group">
                <img
                    className="w-12 h-12 rounded-full cursor-pointer"
                    src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/198655c8-1736-4533-83c4-b1a1c273a3ed.jpg"
                    alt="Profile"
                />
                <p className="mt-3 cursor-pointer">{user}</p>
                {/* Dropdown */}
                <div className="absolute top-14 right-0 z-20 hidden bg-white shadow-md rounded-md p-4 group-hover:block">
                    <ButtonLogout />
                </div>
                </div>

            </div>: <ButtonAuth />}
        </div>

       </div>
    )
}


export default NavbarComponent