

function ButtonLogout(props) {
     const handleLogout = () => {
            localStorage.removeItem("token")   
        }
    return (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>
    )
}

export default ButtonLogout

