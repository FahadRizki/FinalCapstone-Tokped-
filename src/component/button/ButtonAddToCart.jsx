import { PiShoppingCartSimple } from "react-icons/pi";
function ButtonAddToCart(props) {
    const { handleAddToCart, product } = props
    return (
        <button className="  font-bold py-2 px-4 rounded" onClick={() => handleAddToCart(product)}>
        {product.stock > 0 ? <PiShoppingCartSimple /> : "Habis"}
        {localStorage.getItem("token") ? "" : window.location.href = "/login"}
        </button>
    );
}

export default ButtonAddToCart;