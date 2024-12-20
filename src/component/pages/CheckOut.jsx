import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { IncrementGlobalQuantity, decrementGlobalQuantity } from "../store/store";
import NavbarComponent from "../layout/Navbar";
import { BiChevronRight } from "react-icons/bi";
import { Dropdown, DropdownItem } from "flowbite-react";
import { CiDiscount1 } from "react-icons/ci";
import ButtoModal from "../button/ButtonModal";
function CheckOut() {
    const { id } = useParams();
    const [checkOutProduct, setCheckOutProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList);
    const product = productList.find((item) => item.id === parseInt(id));
    const [pengiriman, setPengiriman] = useState("Pengiriman");
    const [jasa, setJasa] = useState("Pilih Kurir");

    // Ambil data produk berdasarkan id jika tidak ada di state
    useEffect(() => {
        if (!product) {
            axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
                setCheckOutProduct(res.data);
            });
        } else {
            setCheckOutProduct(product);
        }
    }, [id, product]);

    const handleIncrement = () => {
        if (checkOutProduct.stock > 0) {
            setQuantity((prev) => prev + 1);
            dispatch(IncrementGlobalQuantity(checkOutProduct.id));
        }
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
            dispatch(decrementGlobalQuantity(checkOutProduct.id));
        }
    };
    return (
       
       <div>
            <NavbarComponent />
           <div className="container mx-auto flex gap-4">
                
                <div className="container mx-auto py-6 ">
                        <h1 className="text-3xl font-bold mb-6  text-gray-800">Beli langsung</h1>
                        <div className="bg-green-100 rounded-lg shadow-md p-4 flex">
                            <img className="w-24 h-24" src="https://images.tokopedia.net/android/others/beli_langsung_keranjang.png" alt="" />
                            <h2 className="text-xl ml-4 pt-8">ini halaman terakhir proses belanjamu, Pastikan semua sudah benar, ya :)"</h2>
                        </div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 pt-7">Barang yang dibeli</h2>
                        <div>
                            <p className="font-bold">Produsen</p>
                            <p>Jakarta Barat</p>
                            <div className="flex gap-5 pt-5">
                                <img className="w-24 h-24" src={checkOutProduct.image} alt="" />
                            <div className="flex flex-col p-2 gap-1">
                                    <p>{checkOutProduct.title}</p>
                                    <p>500 gr</p>
                                    <p className="font-bold">Rp. {(checkOutProduct.price*15000).toLocaleString("id-ID")}</p>
                                    <div className="flex gap-6">
                                        <p className="font-bold text-green-600 pt-1">Tulis Catatan <span className="text-gray-400 pl-4 text-2xl">|</span></p> 
                                        <div className="flex gap-6 border-solid border-2 border-gray-400 p-1 rounded-md">
                                            <button className=" text-3xl" onClick={handleDecrement}>-</button>
                                            <p className="font-bold text-xl pt-1">{quantity}</p>
                                            <button className="text-green-600 text-3xl" onClick={handleIncrement}>+</button>
                                        </div>
                                    </div>
                            </div>
                            </div>
                            <div>
                                <p className="font-bold">Rusak uang kembali 100%</p>
                                <p>Proses klaim mudah dan instan <span className="text-green-600 font-semibold">Pelajari</span></p>
                            </div>
                            <div className="bg-gray-200 rounded-lg shadow-md p-2 flex mt-5"></div>
                            <h2 className="text-2xl font-bold mt-4">Pengiriman dan pembayaran</h2>
                            <div className="bg-slate-100 rounded-sm shadow-md p-4 flex justify-between  ">
                                <p className="font-bold">Alamat Pengiriman</p>
                                <BiChevronRight className="text-2xl"/>
                            </div>
                            <div className="bg-slate-100 rounded-sm shadow-md p-4 flex justify-evenly mt-1 font-bold">
                                <div>
                                    <p>Pilih Pengiriman</p>
                                    <Dropdown
                                        label={pengiriman}
                                        className="w-1/3 bg-white"
                                        >
                                        <Dropdown.Item onClick={() => setPengiriman("Regular")}>Regular</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setPengiriman("Express")}>Express</Dropdown.Item>
                                    </Dropdown>
                                </div>
                                <div >
                                    <p >Jasa Pengiriman</p>
                                    <Dropdown
                                        label={jasa}
                                        className="w-1/3 bg-white"
                                        >
                                        <Dropdown.Item onClick={() => setJasa("JNT")}>JNT</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setJasa("SiCepat")}>SiCepat</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setJasa("JNE")}>JNE</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setJasa("Pos Indonesia")}>Pos Indonesia</Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="bg-slate-100 rounded-sm shadow-md p-4 flex justify-between mt-1">
                                <p className="font-bold">Pilih Metode Pembayaran</p>
                                <BiChevronRight className="text-2xl"/>
                            </div>
                        </div>
                </div>
                <div className="card-total-tokopedia rounded-sm shadow-md p-4 w-1/2">
                    <div className="border-solid border-2 border-gray-200 p-6 rounded-md flex ">
                        <CiDiscount1 className="text-3xl text-green-600"/>
                        <p className="font-bold p-1">Makin hemat pakai promo</p>
                        <BiChevronRight className="text-2xl pt-1 ml-20"/>
                    </div>
                    <div>
                        <p className="font-bold text-xl p-2">Ringkasan Belanja</p>
                        <p className="font-bold p-3">Total Belanja</p>
                        <div className="flex justify-between p-3">
                            <div>
                                <p>Total Harga({quantity} Barang)</p>
                                <p>Total Ongkos Kirim</p>
                            </div>
                            <div>
                                <p>Rp. {(checkOutProduct.price * 15000* quantity).toLocaleString("id-ID")}</p>
                                <p>Rp. {checkOutProduct.ongkos}</p>
                            </div>
                        </div>
                        <div className="border-t border-b border-gray-200 p-3">
                            <p className="font-bold p-2">Biaya Transaksi</p>
                            <div className="flex justify-between p-2">
                                <div>
                                    <p>Biaya Layanan</p>
                                    <p>Baiaya Jasa Aplikasi</p>
                                </div>
                                <div>
                                    <p>Rp. {checkOutProduct.layanan}</p>
                                    <p>Rp. 0</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between p-4 font-bold text-xl  border-b border-gray-200">
                                <p >Total Pembayaran</p>
                                <p >Rp. {(checkOutProduct.price * 15000* quantity + checkOutProduct.layanan + checkOutProduct.ongkos).toLocaleString("id-ID")}</p>
                        </div>
                       <div className="p-4">
                        <ButtoModal/>
                       </div>
                    </div>
                </div>
           </div>
         
    </div>
    )
}


export default CheckOut