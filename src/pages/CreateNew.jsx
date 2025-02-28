import React from 'react'
import { FaHome } from 'react-icons/fa'

const CreateNew = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className='mx-auto p-6'>
        <div className="flex justify-between items-center p-2">
          <h1 className="text-lg font-bold text-gray-800">Project Create</h1>
          <div className="flex items-center text-gray-500 space-x-2 text-sm">
            <FaHome className="text-gray-500" />
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 cursor-pointer">Project</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Project Create</span>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 mx-auto mt-3">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Project Title</h2>
          <input type="text" placeholder="Project name *" className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />

          <h2 className="text-sm font-medium text-gray-700 mb-2">Client name</h2>
          <input type="text" placeholder="Name client or company name" className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />

          <div className="grid grid-cols-3 gap-4">
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Project Rate</h2>
              <input type="number" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Project Type</h2>
              <select className="w-full border text-gray-400 text-sm border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500">
                <option>Hourly</option>
                <option>Fixed</option>
              </select>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Priority</h2>
              <select className="w-full border text-gray-400 text-sm border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Project Size</h2>
              <select className="w-full border text-gray-400 text-sm border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Starting date</h2>
              <input type="date" className="w-full border text-gray-400 text-sm border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Ending date</h2>
              <input type="date" className="w-full border text-gray-400 text-sm border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <h2 className="text-sm font-medium text-gray-700 mt-4">Enter some Details</h2>
          <textarea className="w-full border border-gray-300 p-2 rounded-md h-20 focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />

          <div className="flex justify-end mt-4 gap-2">
            <button className="bg-[#54ba4a] text-white px-4 py-2 rounded-md">Add</button>
            <button className="bg-[#fc4438] text-white px-4 py-2 rounded-md">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNew
