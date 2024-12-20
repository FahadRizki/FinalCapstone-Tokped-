import { useState, useEffect } from "react";
import { setProductList } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import ButtonAllProduct from "./ButtonAllProduct";
import axios from "axios";
function Catergori() {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleClick = (category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => {
                dispatch(setProductList(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div className="flex justify-center pt-10 gap-6" >
            {categories.map((category) => (
                <button
                    key={category}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow gap-7 flex items-center"
                    onClick={() => handleClick(category)}
                >   
                    <img className="w-8 h-8 " src={productList.find((product) => product.category === category)?.image} alt="" />
                    {category}
                </button>

            ))}
            <ButtonAllProduct />
        </div>
    );
}

export default Catergori;