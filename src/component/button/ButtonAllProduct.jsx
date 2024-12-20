import { useDispatch } from "react-redux"
import { setProductList } from "../store/store"
function ButtonAllProduct() {
    const dispatch = useDispatch();
    const handleClick = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => dispatch(setProductList(data)));

    }
    return (
       <div >
         <button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 font-bold py-2 px-4 rounded-full m-2" onClick={handleClick}>All Product</button>
       </div>
        
    )
}

export default ButtonAllProduct