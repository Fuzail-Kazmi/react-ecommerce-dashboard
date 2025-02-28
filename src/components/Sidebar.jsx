import { useState } from "react";
import { FaShoppingCart, FaComment, FaProjectDiagram } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({
        dashboard: false,
        project: false,
        ecommerce: false,
    });

    const toggleMenu = (menu) => {
        setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <div className="w-60 min-h-screen bg-white shadow-md p-7">
            <div>
                {/* Section Label */}
                <p className="text-sm font-bold text-[#6270eb] mb-3">GENERAL</p>
                {/* Dashboard */}
                <div className="space-y-1">
                    <div className="relative">
                        <div
                            className="flex items-center justify-between py-3 text-sm font-semibold cursor-pointer text-gray-600 hover:bg-[#f4f5ff] hover:text-[#6270eb] group"
                            onClick={() => toggleMenu("dashboard")}
                        >
                            <div className="flex items-center gap-2">
                                <GoHome className="w-[20px] h-[20px] text-gray-500 group-hover:text-[#6270eb]" />
                                <span>Dashboard</span>
                            </div>
                            {openMenus.dashboard ? (
                                <IoIosArrowDown className="text-gray-500 group-hover:text-[#6270eb] transition" />
                            ) : (
                                <IoIosArrowForward className="text-gray-500 group-hover:text-[#6270eb] transition" />
                            )}
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all ${openMenus.dashboard ? "h-auto" : "h-0"}`}>
                        <NavLink to="/dashboard/ecommerce" className="block pl-8 text-sm font-medium text-gray-700 py-1 hover:text-[#6270eb]">
                            Ecommerce
                        </NavLink>
                    </div>

                    <div className="flex items-center gap-2 py-3 text-sm font-semibold cursor-pointer text-gray-600 hover:bg-[#f4f5ff] hover:text-[#6270eb] group">
                        <LuClock3 className="w-[20px] h-[20px] text-gray-500 group-hover:text-[#6270eb]" />
                        <span>Widgets</span>
                    </div>
                </div>

                {/* Section Label */}
                <p className="text-sm font-bold text-[#6270eb] mt-5 mb-5">APPLICATIONS</p>
                <div className="space-y-1">
                    {/* Project */}
                    <div
                        className="flex items-center justify-between py-3 text-sm font-semibold text-gray-600 hover:bg-[#f4f5ff] hover:text-[#6270eb] group cursor-pointer"
                        onClick={() => toggleMenu("project")}
                    >
                        <div className="flex items-center gap-2">
                            <FaProjectDiagram className="w-[18px] h-[18px] text-gray-500 group-hover:text-[#6270eb]" />
                            <span>Project</span>
                        </div>
                        {openMenus.project ? (
                            <IoIosArrowDown className="text-gray-500 group-hover:text-[#6270eb] transition" />
                        ) : (
                            <IoIosArrowForward className="text-gray-500 group-hover:text-[#6270eb] transition" />
                        )}
                    </div>
                    <div className={`overflow-hidden transition-all ${openMenus.project ? "h-auto" : "h-0"}`}>
                        <NavLink to="/ecommerce/create-new" className="block pl-8 font-medium text-sm text-gray-600 py-1 hover:text-[#6270eb]">
                            Create New
                        </NavLink>
                    </div>

                    {/* Ecommerce */}
                    <div
                        className="flex items-center justify-between py-3 text-sm font-semibold text-gray-600 hover:bg-[#f4f5ff] hover:text-[#6270eb] group cursor-pointer"
                        onClick={() => toggleMenu("ecommerce")}
                    >
                        <div className="flex items-center gap-2">
                            <FaShoppingCart className="w-[18px] h-[18px] text-gray-500 group-hover:text-[#6270eb]" />
                            <span>Ecommerce</span>
                        </div>
                        {openMenus.ecommerce ? (
                            <IoIosArrowDown className="text-gray-500 group-hover:text-[#6270eb] transition" />
                        ) : (
                            <IoIosArrowForward className="text-gray-500 group-hover:text-[#6270eb] transition" />
                        )}
                    </div>
                    <div className={`overflow-hidden transition-all ${openMenus.ecommerce ? "h-auto" : "h-0"}`}>
                        <NavLink to="/ecommerce/product-list" className="block pl-8 text-sm font-medium text-gray-600 py-1 hover:text-[#6270eb]">
                            Product List
                        </NavLink>
                    </div>

                    {/* Chat */}
                    <div className="flex items-center gap-2 py-3 text-sm font-semibold text-gray-600 hover:bg-[#f4f5ff] hover:text-[#6270eb] group">
                        <FaComment className="w-[18px] h-[18px] text-gray-500 group-hover:text-[#6270eb]" />
                        <span>Chat</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
