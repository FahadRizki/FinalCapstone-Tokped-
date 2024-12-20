import React from "react";
import { useSelector } from "react-redux";
import NavbarComponent from "../layout/Navbar";
import { useDispatch } from "react-redux";
import { removeToCart } from "../store/store";
import ButtonRemoveInCart from "../button/ButtonRemoveInCart";
import { incrementQuantity, decrementQuantity } from "../store/store";
import ButtonIncrement from "../button/ButtonIncrement";
import ButtonDecrement from "../button/ButtonDecrement";
import { GoHeart } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Cart = () => {
    const cart = useSelector((state) => state.product?.cart || []);
    const productList = useSelector((state) => state.product?.productList || []);
    const dispatch = useDispatch();
    
    
    const handleRemoveToCart = (id) => {
        dispatch(removeToCart(id));
    }
    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id));

    }
    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    }
  
    return (
        <section className="bg-gray-100 w-full h-screen" >
            <NavbarComponent />
           
            <div className="container mx-auto mt-2">
                <h1 className="text-3xl font-bold mb-3 p-4">Keranjang</h1>
                {/* {cart.length === 0 ? (
                    <h2 className="text-2xl font-bold mb-4 p-8 text-center">Cart is empty !</h2>
                ) : ''} */}
                <div className=" flex justify-between gap-6">
                    <div className="w-2/3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        {cart.length >= 1  ? (
                           <div>
                                 <div className="flex justify-between p-6">
                            <div className="flex  gap-4">
                                    <input
                                        type="checkbox"
                                        
                                        className="h-5 w-5 rounded border-gray-300 text-green-500 focus:ring-green-500 checked:bg-green-500 checked:border-green-500"
                                    />
                                    <span>Pilih Semua {cart?.length > 0 && `(${cart.length})`}</span>
                                </div>
                                <p className="text-green-500 font-bold">Hapus</p>
                            </div>
                            <div className="p-2 bg-slate-200 w-full"></div>  
                           </div>
                        ) : <div className="p-4 flex items-center justify-center gap-4 h-full">
                                <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/backfunnel/kratos/4d27af6a.svg" alt="" />
                                <div className="flex flex-col items-center">
                                    <h2 className="text-2xl font-bold">Wah, keranjang belanjamu kosong</h2>
                                    <p>Yuk, isi dengan barang-barang impianmu!</p>
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl mt-4"><Link to="/">Muali Belanja</Link></button>
                                </div>

                            </div>}
                        
                        {cart?.map((product) => (
                            <div >
                                <div className="flex gap-4 p-6 font-bold">
                                    <input
                                        type="checkbox"
                                        className="h-5 w-5 rounded border-gray-300 text-green-500 focus:ring-green-500 checked:bg-green-500 checked:border-green-500"
                                    />
                                    <h2>Prosuden</h2>
                                </div>
                                <div className="bg-white rounded-lg  p-4 flex gap-4 " key={product.id}>
                                    <div className="flex p-2 gap-4">
                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 rounded border-gray-300 text-green-500 focus:ring-green-500 checked:bg-green-500 checked:border-green-500"
                                        />
                                        <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-20 h-20 object-cover rounded-lg mb-4"
                                            />
                                    </div>
                                    <div className="w-full" >      
                                            <div className="flex gap-5 justify-between w-full">
                                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                                <p className="font-bold text-xl">Rp. {(product.price*15000).toLocaleString("id-ID")}</p>
                                            </div>
                                           <div>
                                                <p>Stock: {productList.find((item) => item.id === product.id)?.stock === 0 ? <span className="text-red-500">Stok Habis</span> : productList.find((item) => item.id === product.id)?.stock}</p>
                                           </div>
                                            <div className="flex items-end justify-end mt-4">
                                                <div className="flex gap-2">
                                                    <div className="mt-2">
                                                        <GoHeart className="text-2xl text-slate-400"></GoHeart>
                                                    </div>
                                                    <ButtonRemoveInCart handleRemoveToCart={handleRemoveToCart} product={product}></ButtonRemoveInCart>
                                                </div>
                                                <div className="flex items-center space-x-4 border border-gray-300 rounded-full p-2">
                                                    <ButtonDecrement handleDecrementQuantity={handleDecrementQuantity} product={product}></ButtonDecrement>   
                                                    <h2>{product.quantity}</h2>
                                                    <ButtonIncrement handleIncrementQuantity={handleIncrementQuantity} product={product}></ButtonIncrement>
                                                </div>
                                            </div>
                                            {/* <div className="flex flex-col gap-5 text-center">
                                            <h2>Total: Rp. {(product.price*product.quantity*15000).toLocaleString("id-ID")}</h2>
                                            <h2>Stock: {productList.find((item) => item.id === product.id)?.stock === 0 ? <span className="text-red-500">Stock Habis</span>: productList.find((item) => item.id === product.id)?.stock}</h2>
                                        
                                    
                                                
                                            </div> */}
                                    </div>
                                    {/* <div className="flex justify-end items-end">
                                        <ButtonRemoveInCart handleRemoveToCart={handleRemoveToCart} product={product}></ButtonRemoveInCart>
                                    </div> */}
                            
                                </div>
                                
                                <div className="p-2 bg-slate-200 w-full"></div>  
                            </div>
                        ))}
                    </div>
                    <div className="card border border-gray-300 w-1/3 h-fit bg-white p-6 rounded-xl">
                        <h2 className="text-xl font-bold mb-4">Ringkasan Belanja</h2>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Total</span>
                            <span className="font-bold">Rp. {cart.reduce((total, product) => total + product.price * product.quantity * 15000, 0).toLocaleString("id-ID")}</span>
                        </div>
                        <div className="border-t border-b border-gray-300 p-4 ">
                            <div className="border-2 border-green-500 p-4 rounded-lg flex justify-between">
                                <div className="flex gap-4">
                                    <img className="w-8" src="https://assets.tokopedia.net/asts/purchase-platform/icons/promo-coupon.svg" alt="" />
                                    <p className="mt-1">Makin hemat pakai promo</p>
                                </div>
                                <IoIosArrowForward className="text-lg mt-1"/>
                            </div>
                        </div>
                        <Link to={`/cart/${cart?.map((product) => product.id)}`}>
                            <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-xl mt-4">Beli</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
