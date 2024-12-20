import { GoTrash } from "react-icons/go";
function ButtonRemoveInCart(props) {
    const { handleRemoveToCart, product } = props
    return (
        <button className="text-slate-400 hover:text-slate-600 text-2xl font-bold py-2 px-4 rounded" onClick={() => handleRemoveToCart(product.id)}>
            <GoTrash />
        </button>
    );
}

export default ButtonRemoveInCart