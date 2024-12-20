import { GrSearch } from "react-icons/gr";

function SearchInput() {
    return (
        <div className="relative  ">
            <input
                type="search"
                id="search-navbar"
                className="border-2 border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[37rem]  sm:w-1/2  lg:w-[37rem] pl-10 p-4 "
                placeholder="Cari di Tokopedia"
            />
            <div className="absolute left-3 top-8 transform -translate-y-1/2 cursor-pointer text-xl">
                <GrSearch />
            </div>
        </div>
    )
}

export default SearchInput