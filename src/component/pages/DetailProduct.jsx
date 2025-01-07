import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, IncrementGlobalQuantity, decrementGlobalQuantity } from "../store/store";
import NavbarComponent from "../layout/Navbar";
import { Link } from "react-router-dom";
import { TbMessage } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import {  IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { WiTime3 } from "react-icons/wi";
import { FaPlusMinus } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";
import RatingProduct from "../layout/RatingProduct";
import {Element, Link as LinkScroll} from 'react-scroll'

function DetailProduct() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList);
    const product = productList.find((item) => item.id === parseInt(id));
    const [warna, setWarna] = useState("Hitam");
    const [ukuran, setUkuran] = useState("M");
    const [detail, setDetail] = useState("#detail");
    const [selengkapnya, setSelengkapnya] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
   
  
    // Ambil data produk berdasarkan id jika tidak ada di state
    useEffect(() => {
        if (!product && id) {
            axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
                setProductDetail(res.data);
            });
        } else {
            setProductDetail(product);
        }
        window.scrollTo(0, 0);

        
    }, [id, product]);

    // Fungsi untuk menambah jumlah
    const handleIncrement = () => {
        if (productDetail.stock > 0) {
            setQuantity((prev) => prev + 1);
            dispatch(IncrementGlobalQuantity({ id: productDetail.id, quantity: 1 }));
        } 
    };

    // Fungsi untuk mengurangi jumlah
    const handleDecrement = () => {
        if (quantity > 1) {
            console.log("Decrementing quantity for product:", productDetail.id);
            setQuantity((prev) => prev - 1);
            dispatch(decrementGlobalQuantity({ id: productDetail.id, quantity: 1 }));
        }
    };

    // Fungsi untuk menambahkan ke keranjang
    const handleAddToCart = () => {
        dispatch(addToCart({ id: productDetail.id, quantity: 1 }));
    };

     

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY === 0) {
            // Scroll di paling atas, sembunyikan navbar
            setIsVisible(false);
          } else {
            // Scroll ke bawah, tampilkan navbar
            setIsVisible(true);
          }
    
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [lastScrollY]);

    return (
        <div className="h-screen">
            <NavbarComponent /> 
            <div className={isVisible ? "fixed p-4  top-20 left-0 right-0  bg-white shadow-md" : "hidden"}>
                        <ul className="flex gap-20 ml-20 ">
                            <li className="font-bold">{productDetail.title}</li>
                            <div className="flex gap-6 cursor-pointer" >
                                <li >
                                <LinkScroll to="detail"
                                smooth={true}
                                duration={500}
                                > Detail Produk</LinkScroll>
                                </li>
                                <li >
                                <LinkScroll to="ulasan"
                                smooth={true}
                                duration={500}
                                > Ulasan</LinkScroll>
                                </li>
                                <li>Diskusi</li>
                                <li>Rekomendasi</li>
                            </div>
                        </ul>
                    </div>
            <div className="container mx-auto p-6 ">
                <div className="p-8 flex mx-auto gap-6">
                    <div>
                        <img className=" w-80 h-80" src={productDetail.image} alt="" />
                    </div>
                    {/* Detail Produk */}
                    <Element name="detail" >
                    <div id="detail-product " className="w-2/2">
                        <div className="flex flex-col gap-4 p-4 border-b-2">
                            <h1 className="text-2xl font-bold">{productDetail.title}</h1>
                            <div className="flex gap-2">
                                <p className="flex gap-1 font-semibold">Terjual <span className="font-normal">{productDetail.Buying}+</span></p> <BsDot className="mt-1 text-lg" />
                                <p className="flex gap-1"><FaStar className="text-yellow-400 mt-1"/> {productDetail.Rating} <span>({productDetail.Buying} rating)</span></p><BsDot className="mt-1 text-lg" />
                                <p className="flex gap-1 font-semibold">Diskusi <span className="font-normal"> ({productDetail.diskusi})</span></p>
                            </div>
                            <h1 className="text-3xl font-bold">Rp. {(productDetail.price * 15000).toLocaleString("id-ID")}</h1>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Pilih Warna : <span className="text-slate-400 font-normal">{warna}</span></h2>
                            <div className="flex gap-4 mt-4">
                                <button className={`bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 font-bold py-2 px-4 rounded flex gap-2 ${warna === "Hitam" ? "bg-green-200 border-green-400 " : ""}`} onClick={() => setWarna("Hitam")}> <img className=" w-10 h-10 p-1 " src={productDetail.image} alt="" /> <span className={warna === "Hitam" ? "text-green-400 font-normal p-2" : "text-slate-400 font-normal p-2"}>Hitam</span></button>
                                <button className={`bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 font-bold py-2 px-4 rounded flex gap-2 ${warna === "Putih" ? "bg-green-200 border-green-400 " : ""}`} onClick={() => setWarna("Putih")}> <img className=" w-10 h-10 p-1 " src={productDetail.image} alt="" /> <span className={warna === "Putih" ? "text-green-400 font-normal p-2" : "text-slate-400 font-normal p-2"}>Putih</span> </button>
                                <button className={`bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 font-bold py-2 px-4 rounded flex gap-2 ${warna === "Biru" ? "bg-green-200 border-green-400 " : ""}`} onClick={() => setWarna("Biru")}> <img className=" w-10 h-10 p-1 " src={productDetail.image} alt="" /> <span className={warna === "Biru" ? "text-green-400 font-normal p-2" : "text-slate-400 font-normal p-2"}>Biru</span></button>
                            </div>
                        </div>
                        {productDetail.category ===  "men's clothing" || productDetail.category === "women's clothing" ? (
                            <div className="p-4 " >
                            <h2 className="text-xl font-bold">Pilih Ukuran : <span className="text-slate-400 font-normal">{ukuran}</span></h2>
                            <div className="flex gap-4 mt-4">
                                <button className={`bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 font-bold py-2 px-4 rounded-xl ${ukuran === "M" ? "bg-green-200 border-green-400 text-green-400" : ""}`} onClick={() => setUkuran("M")}>M</button>
                                <button className={`bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 font-bold py-2 px-4 rounded-xl ${ukuran === "L" ? "bg-green-200 border-green-400  text-green-400" : ""}`} onClick={() => setUkuran("L")}>L</button>
                                <button className={`bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 font-bold py-2 px-4 rounded-xl ${ukuran === "XL" ? "bg-green-200 border-green-400 text-green-400 " : ""}`} onClick={() => setUkuran("XL")}>XL</button>
                            </div>
                        </div>
                        ) : null}

                        {/* Detail dan Panduan */}
                        <div>
                            <ul className="flex gap-6 p-2 cursor-pointer border-b-2 border-t-2">
                                <li className={`${detail ? "border-b-4 border-green-400 text-green-300 " : ""} transition-all `} onClick={() => setDetail(true)}>Detail</li>
                                <li className={`${detail ? "" : "border-b-4 border-green-400 text-green-300 "} transition-all `} onClick={() => setDetail(false)}>Panduan</li>
                            </ul>
                            <div id="detail" className={`${detail ? "block" : "hidden"} p-2 `}>
                                <p>Kondisi : Baru</p>
                                <p>Min. Pemesanan : 1 Buah</p>
                                <p>Etalase : {productDetail.category}</p>
                                <p>MATERIAL: Katun combed 20s</p>
                                <p className="w-1/2 mt-4">size M
                                    Blouse:
                                    Lingkar dada 105cm estimasi (50kg - 60kg)
                                    Panjang baju  70cm
                                    Panjang tangan 58cm
                                </p>
                                <div className={selengkapnya ? "block" : "hidden"} >
                                    <p className="w-1/2 mt-4">XL
                                        Blouse:
                                        Lingkar dada 110cm (60kg - 75kg)
                                        Panjang baju  74cm
                                        Panjang tangan 58cm
                                    </p>
                                    <p className="w-1/2 mt-4">XXL
                                        Blouse:
                                        Lingkar dada 116cm (75 kg -85kg)
                                        Panjang baju  75cm
                                        Panjang tangan 60cm
                                    </p>
                                    <p className="mt-4 w-96">Deskripsi : {productDetail.description}</p>
                                    
                                </div>
                                <button className="text-green-500 mt-1" onClick={() => setSelengkapnya(!selengkapnya)}>{selengkapnya ? "Lihat lebih sedikit" : "Lihat Selengkapnya"}</button>
                            </div>
                            <div id="panduan" className={`${detail ? "hidden" : "block"} p-2`}>
                                <p>1. Pilih warna dan ukuran sesuai keinginan anda</p>
                                <p>2. Pilih metode pengiriman sesuai keinginan anda</p>
                                <img className="w-72 h-72" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/21/353d7e4f-675d-451c-832d-eac846e3f02c.jpg" alt="" />
                            </div>
                        </div>

                        {/* Nama Toko */}
                        <div className="flex justify-between p-4 border-t-2 border-b-2">
                            <div className="flex font-bold gap-4 p-2">
                                <img className="bg-slate-400 p-5 w-20 h-20 rounded-full" src="" alt="" />                              
                                <div className="flex flex-col">
                                    <h2 className="text-xl mt-1">Produsen</h2>
                                    <p className="text-green-500 mt-1">. Online</p>  
                                    <p className="flex gap-1 mt-1 font-normal"><FaStar className="text-yellow-400 mt-1" /> <span>4.8 ({productDetail.Buying})</span></p>  
                                    <p className="flex gap-1 font-normal"><WiTime3 className="mt-1 text-xl" /> <FaPlusMinus className="pt-1 mt-1 text-sm font-light" /> 8 jam pesanan diproses</p>                              
                                </div>                              
                            </div>
                            <div>
                                <button className="bg-white text-green-500 hover:bg-green-700 hover:text-white border-2 border-green-500 font-bold py-2 px-4 rounded-lg">Follow</button>
                            </div>
                        </div>

                        {/* Pengiriman */}
                        <div className="p-4 border-b-2 flex justify-between "> 
                            <div className="flex flex-col  ">
                            <h2 className="text-xl font-bold mb-2">Pengiriman</h2>
                                <div className="flex gap-2">
                                    <SlLocationPin className="mt-1" />
                                    <p>Dikirim dari <span className="font-bold">Kab. Sukabumi</span></p>
                                </div>
                                <div className="flex gap-2">
                                    <CiDeliveryTruck className="mt-1" />
                                    <p className="font-bold">Ongkir mulai Rp.11.000</p>
                                </div>
                                <p className="flex text-slate-400">Reguler <BsDot className="mt-1 pt-1"/> Estimasi tiba 20-31 Desember</p>
                            </div>
                           <div className="flex items-end">
                                <button className="text-green-400 font-semibold">Lihat Kurir Lainnya</button>
                           </div>
                        </div>
                        
                    </div>
                    </Element>
                    {/* Card Jumlah */}
                    <div className="card-jumlah border-solid border-slate-400 border-2 w-[30%] h-fit rounded-md ">
                        <h2 className="text-xl font-bold p-4">Atur jumlah dan catatan</h2>
                        <div className="flex gap-4 p-4 border-b-2">
                            <img className="w-16 h-16" src={productDetail.image} alt="" />
                            <p className="mt-4">{warna},</p>
                           {productDetail.category ===  "men's clothing" || productDetail.category === "women's clothing" ? <p className="mt-4 font-semibold">{ukuran}</p> : null}
                           
                        </div>
                        <div className="p-4 flex">
                            <div className="flex gap-6 border-solid border-2 border-gray-400 p-1 w-28 rounded-md ">
                                <button className=" text-3xl pl-1" onClick={handleDecrement}>-</button>
                                <p className="font-bold text-xl pt-1">{quantity}</p>
                                <button className="text-green-600 text-3xl" onClick={handleIncrement}>+</button>
                            </div>
                            <p className="mt-4 ml-4">Stock: {productDetail.stock === 0 ? <span className=" text-red-500">Stock Habis</span> : <span className="font-bold text-orange-500">Sisa {productDetail.stock}</span>}</p>
                        </div>
                        <div className="p-4 flex justify-between">
                            <p className="text-xl text-slate-500">Subtotal: </p>
                            <p className="font-bold text-xl">Rp. {(productDetail.price * 15000 * quantity).toLocaleString("id-ID")}</p>
                        </div>
                        
                        <div className="flex flex-col gap-4 p-4">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleAddToCart}>+ Keranjang</button>
                            <button className=" border-2 border-green-500 hover:bg-green-100 text-green-500 font-bold py-2 px-4 rounded-lg">  <Link to={`/detailProduct/${productDetail.id}`}>Beli Langsung</Link></button>
                        </div>
                        <div className="flex justify-around p-4 font-bold">
                            <div className="flex gap-2">
                                <TbMessage/>
                                <p className="text-sm">Chat</p>
                            </div>
                            <span className="text-sm">|</span>
                            <div className="flex gap-2">
                                <GoHeart/>
                                <p className="text-sm">Wishlist</p>
                            </div>
                            <span className="text-sm">|</span>
                            <div className="flex gap-2">
                                <IoShareSocialOutline/>
                                <p className="text-sm">Bagikan</p>
                            </div>
                        </div>
                    </div>
                
                </div>
                {/* Ulasan */}
                <Element name="ulasan">
                    <div id="ulasan" className="p-8">
                        <h1 className="text-2xl font-bold mb-2"> ULASAN PEMBELI </h1>
                        <RatingProduct />
                    </div>
                </Element>
            </div>
        </div>
    );
}

export default DetailProduct;
