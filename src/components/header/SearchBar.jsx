import {IoSearch} from "react-icons/io5";

export const SearchBar = () => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search for product"
                className="w-96 h-10 bg-neutral-200 rounded-2xl pl-10 focus:outline-none focus:ring-1  "
            />
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"/>
        </div>
    )
}
