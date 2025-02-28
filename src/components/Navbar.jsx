import { FaSearch, FaBell, FaStar, FaEnvelope, FaShoppingCart, FaMoon } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import usaFlag from "../assets/usa-flag.png";
import profilePic from "../assets/profile-pic.png";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md w-full border-b border-gray-200">
            {/* Left Section */}
            <div className="flex items-center gap-12">
                <div className="text-3xl font-semibold text-[#6270eb]">
                    Logo
                </div>
                <IoGridOutline className="text-2xl cursor-pointer text-gray-600" />
                <div className="relative w-[600px]">
                    <input
                        type="text"
                        placeholder="Type to Search .."
                        className="w-full rounded-lg py-2.5 px-4 pl-4 bg-gray-100 text-gray-600 placeholder-gray-400 outline-none"
                    />
                    <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 text-lg" />
                </div>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <FaBell className="text-lg text-gray-500 cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <FaStar className="text-lg text-gray-500 cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <div className="relative cursor-pointer">
                        <FaEnvelope className="text-lg text-gray-500" />
                        <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <FaShoppingCart className="text-lg text-gray-500 cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <FaMoon className="text-lg text-gray-500 cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <img src={usaFlag} alt="USA Flag" className="w-[22px] h-[22px]" />
                        <span className="text-gray-600 text-sm font-medium">EN</span>
                        <IoIosArrowDown className="text-gray-500 text-[10px]" />
                    </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
                    <div className="text-sm">
                        <p className="font-semibold text-gray-800">Helen Walter</p>
                        <p className="text-gray-500 text-xs">Admin</p>
                    </div>
                    <IoIosArrowDown className="text-gray-500" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;