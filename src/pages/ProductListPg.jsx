import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const ProductListPg = () => {
  const products = [
    { img: "https://images.unsplash.com/photo-1665318458809-6898ecaeb74b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFwcGxlJTIwaVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8fDA%3D", name: "Red Shirt", amount: "56000", stock: "Sold Out", stockColor: "text-[#fc4438]", date: "2011/04/25" },
    { img: "https://images.unsplash.com/photo-1665318458809-6898ecaeb74b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFwcGxlJTIwaVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8fDA%3D", name: "Apple iPhone 13 Pro", amount: "19000", stock: "In Stock", stockColor: "text-[#54ba4a]", date: "2011/04/25" },
    { img: "https://images.unsplash.com/photo-1665318458809-6898ecaeb74b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFwcGxlJTIwaVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8fDA%3D", name: "Headphones", amount: "10000", stock: "In Stock", stockColor: "text-[#54ba4a]", date: "2011/04/25" },
    { img: "https://images.unsplash.com/photo-1665318458809-6898ecaeb74b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFwcGxlJTIwaVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8fDA%3D", name: "Wireless Headphone", amount: "15000", stock: "Sold Out", stockColor: "text-[#fc4438]", date: "2011/04/25" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-gray-800">Product List</h1>
        <div className="flex items-center text-gray-500 space-x-2 text-sm">
          <FaHome className="text-gray-500" />
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 cursor-pointer">E-Commerce</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-700 font-medium">Product List</span>
        </div>
      </div>

      <div className="bg-white shadow-md p-4 rounded-md">
        <h2 className="text-lg font-semibold text-gray-800">Individual Column Searching (Text Inputs)</h2>
        <p className="text-sm text-gray-500">
          The searching functionality provided by DataTables is useful for quickly searching through the information in the table.
        </p>
        <div className="border-b border-gray-300 my-4"></div>

        <div className="my-8 flex justify-end items-center space-x-2">
          <label className="text-gray-700 font-medium text-sm">Search:</label>
          <input
            type="text"
            className="border border-gray-300 px-4 py-1 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 w-50"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-gray-700 text-left text-sm">
                <th className="p-3">Image Name</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-t border-gray-300 text-gray-700 text-sm">
                  <td className="p-3 flex items-center space-x-3">
                    <img src={product.img} alt={product.name} className="w-12 h-12.5 rounded-xs" />
                    <span>{product.name}</span>
                  </td>
                  <td className="p-3">{product.amount}</td>
                  <td className={`p-3 font-semibold ${product.stockColor}`}>{product.stock}</td>
                  <td className="p-3">{product.date}</td>
                  <td className="p-3">
                    <button className="bg-[#fc4438] text-white px-4 py-1 text-sm rounded-md mr-2">Delete</button>
                    <button className="bg-[#54ba4a] text-white px-4 py-1 text-sm rounded-md">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-b border-gray-300 my-5"></div>
        <div className="flex justify-end items-center text-sm text-gray-500 mt-4 px-4 space-x-6">
          <div className="flex items-center space-x-1">
            <span>Rows per page:</span>
            <span className="font-medium">10</span>
            <MdKeyboardArrowDown className="text-gray-500 text-base" />
          </div>
          <div>1-10 of 10</div>
          <div className="flex items-center space-x-2">
            <MdKeyboardDoubleArrowLeft className="text-gray-400 text-lg" />
            <MdKeyboardArrowLeft className="text-gray-400 text-lg" />
            <MdKeyboardArrowRight className="text-gray-500 text-lg cursor-pointer" />
            <MdKeyboardDoubleArrowRight className="text-gray-500 text-lg cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListPg
