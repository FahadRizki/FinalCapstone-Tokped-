import { useState } from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const CarouselPencarian = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = useSelector((state) => state.product.productList);
    const itemsPerPage = 5;
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= cards.length ? 0 : prevIndex + itemsPerPage
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsPerPage < 0 ? cards.length - itemsPerPage : prevIndex - itemsPerPage
        );
    };
    return (
        

        <div>
           <div className="relative w-full mt-6 mx-auto">
              <h2 className="text-2xl font-bold mb-3">Berdasarkan pencarianmu <span className="text-green-500  text-lg cursor-pointer">Lihat semua</span></h2>
              <div className="overflow-hidden">
                <div
                  className="flex carousel-container"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="w-full flex-shrink-0 p-4 "
                      style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                    >
                      <Link to={`/${card.id}`}>
                        <div className=" border-2 border-grey-200 rounded-lg p-4 flex flex-col items-center w-full h-full">
                          <div className="p-2 bg-slate-400">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-52 h-52  rounded-md mb-2  "
                          />
                          </div>
                          <div className="w-full mt-4 flex flex-col gap-1">
                            <p className="font-semibold text-gray-700">{card.title.length > 20 ? card.title.substring(0, 20) + "..." : card.title}</p>
                            <p className="font-bold text-gray-700 text-lg">Rp. {(card.price*15000).toLocaleString("id-ID")}</p>
                            <div className="flex gap-1">
                              <img className="w-4 h-4 mt-1" src="https://images.tokopedia.net/img/goldmerchant/pm_activation/badge/ic-powermerchant-130px.png" alt="" />
                              <p className="text-gray-400">Kab. Bandung Barat</p>
                            </div>
                            <div className="flex gap-1">
                              <FaStar className="text-yellow-500 mt-1" />
                              <p>{card.Rating}</p>
                              <span className="text-gray-300"> | </span>
                              <p>{card.Buying} terjual</p>
                            </div>
                          
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition duration-300  "
              >
                &larr;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition duration-300"
              >
                &rarr;
              </button>
            </div>
            <div className="w-full h-1 bg-gray-200"></div>
        </div>
            
    );
};

export default CarouselPencarian;
