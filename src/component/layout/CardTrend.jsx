import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { GrRefresh } from "react-icons/gr";
import { Link } from "react-router-dom";
function CardTrend() {
    const [trend, setTrend] = useState([]);
    const productList = useSelector((state) => state.product.productList);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=8")
            .then((res) => {
                setTrend(res.data);

        })
            .catch((err) => {
                console.log(err);
            });
            
            
    }, []);
    return (
        <div className="container mx-auto py-6 mt-7 border-b border-gray-200">
            <div className="flex gap-4">
                <h2 className="text-2xl font-bold mb-4">Lagi trending, nih</h2>
                <p className="text-green-500 mt-2 font-bold cursor-pointer flex gap-1"><GrRefresh className="text-2xl cursor-pointer" onClick={() => window.location.reload()}/>Muat lainnya</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">            
                {trend.map((product) => (
                    <Link to={`/${product.id}`} key={product.id}>
                        <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 duration-200 p-4 flex gap-6"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-24 h-24 rounded-lg"
                        />
                        <div className="mt-7">
                            <h2 className="text-lg font-bold">{product.title.length > 11 ? product.title.substring(0, 11) + "" : product.title}</h2>
                            <p>{productList.find((item) => item.id === product.id)?.stock}rb produk</p>
                        </div>
                    </div>
                    </Link>

            ))}
            </div>

        </div>
    );
}

export default CardTrend