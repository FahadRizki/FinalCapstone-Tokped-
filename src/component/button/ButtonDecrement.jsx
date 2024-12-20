

function ButtonDecrement(props) {
    const { handleDecrementQuantity, product } = props
    return (
        <button className=" text-black text-xl  font-bold py-2 px-4 rounded" onClick={() => handleDecrementQuantity(product.id)}>
            -
        </button>
    );
}

export default ButtonDecrement