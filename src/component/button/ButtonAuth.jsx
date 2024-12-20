import { Link } from "react-router-dom";

const ButtonAuth = () => {
    return (
       <div className="flex gap-4">
             <Link to="/login"> 
                <button className="bg-white hover:bg-gray-100 text-green-500 border border-green-500 font-bold py-2 px-4 rounded-xl m-2">
                    Daftar
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">
                    Masuk
                </button>
            </Link>
       </div>
    );
};

export default ButtonAuth;