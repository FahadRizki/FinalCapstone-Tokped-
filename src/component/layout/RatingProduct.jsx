

function RatingProduct() {
    return (
        <>
        <div className="flex w-2/3 p-4 bg-white border rounded-md shadow-md gap-5">
            <div className="w-1/2">
                {/* Rating Utama */}
            <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-2xl md:text-3xl font-bold">★</span>
                <span className="text-2xl md:text-4xl font-bold ml-1">4.9</span>
                <span className="text-gray-500 text-lg md:text-xl ml-1">/ 5.0</span>
            </div>

            {/* Persentase Kepuasan */}
            <p className="text-gray-600 mb-2 text-lg md:text-base">
                98% pembeli merasa puas
            </p>
            <p className="text-gray-400 mb-2 text-sm md:text-base">
                <span className="font-semibold">600</span> rating •{" "}
                <span className="font-semibold">117</span> ulasan
            </p>
            </div>

            {/* Bar Rating */}
            <div className="space-y-1 flex w-full gap-4">
                <div className="w-1/2">
                    {/* Bintang 5 */}
                    <div className="flex items-center">
                    <span className="text-yellow-400 text-xs md:text-sm mr-1">★ 5</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 md:h-3">
                        <div className="bg-green-500 h-2 md:h-3 rounded-full w-[95%]"></div>
                    </div>
                    <span className="ml-2 text-gray-600 text-xs md:text-sm">(574)</span>
                    </div>

                    {/* Bintang 4 */}
                    <div className="flex items-center">
                    <span className="text-yellow-400 text-xs md:text-sm mr-1">★ 4</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 md:h-3">
                        <div className="bg-blue-400 h-2 md:h-3 rounded-full w-[10%]"></div>
                    </div>
                    <span className="ml-2 text-gray-600 text-xs md:text-sm">(16)</span>
                    </div>

                    {/* Bintang 3 */}
                    <div className="flex items-center">
                    <span className="text-yellow-400 text-xs md:text-sm mr-1">★ 3</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 md:h-3">
                        <div className="bg-blue-400 h-2 md:h-3 rounded-full w-[5%]"></div>
                    </div>
                    <span className="ml-2 text-gray-600 text-xs md:text-sm">(6)</span>
                    </div>
                </div>

                <div className="w-1/2">
                        {/* Bintang 2 */}
                    <div className="flex items-center">
                    <span className="text-yellow-400 text-xs md:text-sm mr-1">★ 2</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 md:h-3">
                        <div className="bg-blue-400 h-2 md:h-3 rounded-full w-[1%]"></div>
                    </div>
                    <span className="ml-2 text-gray-600 text-xs md:text-sm">(1)</span>
                    </div>

                    {/* Bintang 1 */}
                    <div className="flex items-center">
                    <span className="text-yellow-400 text-xs md:text-sm mr-1">★ 1</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 md:h-3">
                        <div className="bg-blue-400 h-2 md:h-3 rounded-full w-[2%]"></div>
                    </div>
                    <span className="ml-2 text-gray-600 text-xs md:text-sm">(3)</span>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default RatingProduct