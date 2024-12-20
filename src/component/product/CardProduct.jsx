import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList, addToCart } from "../store/store";
import ButtonAddToCart from "../button/ButtonAddToCart";
import axios from "axios";
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
const CardProduct = () => {
    const products = useSelector((state) => state.product.productList);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                dispatch(setProductList(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const handleAddToCart = (product) => {
        if (!product||!product.id ) return;
        dispatch(addToCart({ id: product.id, quantity: 1 }));
    }
 
    return (
        <div className="container mx-auto py-6 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
            <div
                className="bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col justify-between"
                key={product.id}
            >
                <Link to={`/${product.id}`}>
                <div>
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-64 h-60 rounded-lg p-4"
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-gray-800">{product.title.length > 23 ? product.title.substring(0, 23) + "..." : product.title}</h2>
                        <p className="text-lg font-bold text-gray-800">Rp. {(product.price*15000).toLocaleString('id-ID')}</p>
                        <div className="flex gap-2 text-slate-500">
                            <img className="w-4 h-4 mt-1" src="https://images.tokopedia.net/img/goldmerchant/pm_activation/badge/ic-powermerchant-130px.png" alt="" />
                            <p>Jakarta Selatan</p>
                        </div>
                        <p>{product.stock} tersedia</p>
                    <div className="flex gap-1">
                        <FaStar className="text-yellow-400 mt-1"/>
                        <p>{product.Rating}</p>
                        <span className="text-gray-300">|</span>
                        <p>{product.Buying} terjual</p>
                    </div>
                    </div>
                </div>
                </Link>
                <div className="flex justify-end mt-4">
                <ButtonAddToCart handleAddToCart={handleAddToCart} product={product} />
                </div>
            </div>
            ))}
        </div>
        </div>


    );
};

export default CardProduct











