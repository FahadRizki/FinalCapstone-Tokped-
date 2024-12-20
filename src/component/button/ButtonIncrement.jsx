

function ButtonIncrement(props) {
    const {handleIncrementQuantity, product} = props
    return (
        <button className="text-green-400 hover:text-green-600 text-xl font-bold py-2 px-4 rounded" onClick={() => handleIncrementQuantity(product.id)}>+</button>
    )
}

export default ButtonIncrement