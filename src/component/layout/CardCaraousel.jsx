import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CardCaraousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = useSelector((state) => state.product.productList);
    const itemsPerPage = 4;
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
        <div >
              <div className="relative w-full max-w-5xl mx-auto">
              {/* Cards */}
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
                      className="w-1/3 flex-shrink-0 p-4 "
                      style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                    >
                      <Link to={`/${card.id}`} >
                        <div className=" border-2 border-grey-200 rounded-lg p-4 flex flex-col items-center">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-24 h-24  rounded-md mb-2"
                          />
                          <div className="w-full">
                            <p className="text-center font-bold text-gray-700">{card.title.length > 8 ? card.title.substring(0, 8) + "" : card.title}</p>
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
                className="absolute group-hover:opacity-100 left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition duration-300"
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
        </div>
    );
}

export default CardCaraousel;