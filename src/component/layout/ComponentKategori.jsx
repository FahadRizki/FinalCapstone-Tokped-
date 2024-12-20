import Catergori from "../button/ButtonCategori"
import CardCaraousel from "./CardCaraousel"
function ComponentKategori() {
    return (
        <section className="container border-2 boerder-gray-300  mx-auto shadow-lg rounded-lg p-4 mt-6">
            <div className="flex gap-4">
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Kategori Pilihan</h2>
                    <CardCaraousel />
                </div>
                <div className="w-1/2">
                   <div className="flex gap-2">
                        <h2 className="text-2xl font-bold  mb-4">Top Up dan tagihan</h2>
                        <p className="text-green-500 mt-2 font-bold cursor-pointer">Lihat Semua</p>
                   </div>
                    <div className="border border-gray-200 p-6 mt-4">
                        <div className="border-b border-gray-200 w-full p-2">
                            <ul className="flex justify-between font-semibold text-slate-500">
                                <li>Pulsa</li>
                                <li>Paket Data</li>
                                <li>Flight</li>
                                <li>Listrik PLN</li>
                            </ul>
                        </div>
                        <div className="flex gap-2 mt-2 font-semibold text-slate-500">
                            <div className="w-1/2">
                                <h2>Nomor Telepon</h2>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded-md mt-2" />
                            </div>
                            <div>
                                <h2>Nominal</h2>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded-md mt-2" />
                            </div>
                            <div className="mt-8">
                                <button className="bg-slate-300 hover:bg-slate-700 hover:text-white text-slate-500 font-bold py-2 px-6 rounded">Beli</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Catergori />
        </section>
    )
}

export default ComponentKategori