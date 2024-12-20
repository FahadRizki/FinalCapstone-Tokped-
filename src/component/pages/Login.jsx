import axios from "axios"
import { useState } from "react"
function Login() {
   const [loginFailed, setLoginFailed] = useState("")
    const login =  (data, callback) => {
        axios.post("https://fakestoreapi.com/auth/login", data)
        .then((res) => {
            callback(true,res.data.token)
        })
        .catch((err) => {
           callback(false,err)
        })
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target); // Ambil data dari form
        const data = {
            username: formData.get("username"), // Ambil nilai input username
            password: formData.get("password"), // Ambil nilai input password
        };
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                window.location.href = "/";
            }else{
                setLoginFailed(res.response.data)
            }
        });
        
        
    }
    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
               
                    <div
                    
                    className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
                    >
                    <h2
                       
                        className="text-center text-4xl font-extrabold text-white"
                    >
                        Welcome 
              
                    </h2>
                   {
                    loginFailed? <p className="text-red-500 text-center">{loginFailed}</p> : <p    className="text-center text-gray-200">
                        Sign in to your account  
                    </p>
                        
                   }
                    <form onSubmit={handleLogin} action="#"  className="space-y-6">
                        <div    className="relative">
                        <input
                            placeholder="User name"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required=""
                            id="username"
                            name="username"
                            type="text"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            htmlFor="username"
                            >User name</label
                        >
                        </div>
                        <div    className="relative">
                        <input
                            placeholder="Password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required=""
                            id="password"
                            name="password"
                            type="password"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            htmlFor="password"
                            >Password</label
                        >
                        </div>
                        <div    className="flex items-center justify-between">
                        <label  className="flex items-center text-sm text-gray-200">
                            <input
                            className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                            type="checkbox"
                            />
                            <span   className="ml-2">Remember me</span>
                        </label>
                        <a  className="text-sm text-purple-200 hover:underline" href="#"
                            >Forgot your password?</a
                        >
                        </div>
                        <button
                        className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                        type="submit"
                      
                        >
                        Login 
                        </button>
                    </form>
                    <div    className="text-center text-gray-300">
                        Don't have an account?
                        <a  className="text-purple-300 hover:underline" href="#">Sign up</a>
                    </div>
                    </div>


            </div>


          
    )

}

export default Login