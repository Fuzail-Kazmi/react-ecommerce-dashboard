import React from "react";
import { FaCaretDown, FaCaretUp, FaChartBar, FaChevronDown, FaHome } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", pending: 3000, complete: 2500 },
  { month: "Feb", pending: 5200, complete: 3700 },
  { month: "Mar", pending: 3500, complete: 3000 },
  { month: "Apr", pending: 4100, complete: 4800 },
  { month: "May", pending: 5000, complete: 3900 },
  { month: "Jun", pending: 3700, complete: 3200 },
  { month: "Jul", pending: 4500, complete: 5400 },
];

const EcommercePg = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto p-6">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-lg font-bold text-gray-800">E-Commerce</h1>
          <div className="flex items-center text-gray-500 space-x-2 text-sm">
            <FaHome className="text-gray-500" />
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 cursor-pointer">Dashboard</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">E-Commerce</span>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2">

          {/* Top Left Box */}
          <div className="rounded-xl col-span-1 lg:col-span-1">
            <div className="bg-white h-[65%] rounded-xl shadow-sm">
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <h2 className="text-lg font-semibold text-gray-800">Profit</h2>
                <button className="bg-gray-100 px-3 py-1.5 text-sm text-gray-700 flex items-center space-x-1">
                  <span>Yearly</span>
                  <FaChevronDown className="text-gray-500 text-xs" />
                </button>
              </div>

              <div className="p-5 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaChartBar className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="text-3xl font-bold text-gray-900">$20,790<span className="text-gray-500 text-2xl">,00</span></p>
                      <span className="text-red-500 text-sm font-light flex items-center">
                        <FaCaretDown className="mr-1" /> -12.32%
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">Earned this month</p>
                  </div>
                </div>

                <div className="h-36 w-80 ">
                  <img src="/src/assets/chart-placeholder.png" alt="chart" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="h-[100% - 65%] grid grid-cols-4 divide-x divide-gray-300 bg-white shadow-md rounded-xl p-4 my-4">
              <div className="flex flex-col gap-4 px-6">
                <div>
                  <p className="text-sm text-gray-500">Ecommerce Revenue</p>
                  <p className="text-2xl font-semibold text-gray-900">$256,980</p>
                </div>
                <div className="mt-2 bg-red-100 text-red-500 text-xs font-medium px-4 py-2 rounded-sm w-max inline-flex items-center">
                  <FaCaretDown className="mr-1" /> -12.32%
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6">
                <div>
                  <p className="text-sm text-gray-500">New Customers</p>
                  <p className="text-2xl font-semibold text-gray-900">654</p>
                </div>
                <div className="mt-2 bg-green-100 text-green-500 text-xs font-medium px-4 py-2 rounded-sm w-max inline-flex items-center">
                  <FaCaretUp className="mr-1" /> +12.32%
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6">
                <div>
                  <p className="text-sm text-gray-500">Repeat Purchase Rate</p>
                  <p className="text-2xl font-semibold text-gray-900">23.64%</p>
                </div>
                <div className="mt-2 bg-red-100 text-red-500 text-xs font-medium px-4 py-2 rounded-sm w-max inline-flex items-center">
                  <FaCaretDown className="mr-1" /> -12.32%
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6">
                <div>
                  <p className="text-sm text-gray-500">Average Order Value</p>
                  <p className="text-2xl font-semibold text-gray-900">12.56%</p>
                </div>
                <div className="mt-2 bg-green-100 text-green-500 text-xs font-medium px-4 py-2 rounded-sm w-max inline-flex items-center">
                  <FaCaretUp className="mr-1" /> +12.32%
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Box */}
          <div className="bg-white shadow-md rounded-xl p-6 col-span-1">
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
              <h2 className="text-xl font-semibold text-gray-800">Top Selling (2024)</h2>
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Search:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full mt-4">
                <thead className="text-left text-gray-500 text-sm border-b border-gray-300">
                  <tr>
                    <th className="py-2 px-4"><input type="checkbox" /></th>
                    <th className="py-2">Product Name</th>
                    <th className="py-2">Client name</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Sold</th>
                    <th className="py-2">Earning</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/watch.png" className="w-10 h-10 rounded-full object-cover" alt="watch" />
                      <div>
                        <p className="text-gray-900 font-medium">Mi watch revolve</p>
                        <p className="text-gray-500 text-xs">$726</p>
                      </div>
                    </td>
                    <td className="py-3">John Keter</td>
                    <td className="py-3">Jun, 4</td>
                    <td className="py-3">400 pcs</td>
                    <td className="py-3 text-gray-900 font-medium">$78.700</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/plant.png" className="w-12 h-12.5 rounded-xs object-cover" alt="plant" />
                      <div>
                        <p className="text-gray-900 font-medium">Tree stylish pot</p>
                        <p className="text-gray-500 text-xs">$698</p>
                      </div>
                    </td>
                    <td className="py-3">Harry Venter</td>
                    <td className="py-3">Aug, 8</td>
                    <td className="py-3">266 pcs</td>
                    <td className="py-3 text-gray-900 font-medium">$64.8450</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/chair.png" className="w-12 h-12.5 rounded-xs object-cover" alt="chair" />
                      <div>
                        <p className="text-gray-900 font-medium">Wood Chair Dark</p>
                        <p className="text-gray-500 text-xs">$158</p>
                      </div>
                    </td>
                    <td className="py-3">Loadin Deo</td>
                    <td className="py-3">May, 8</td>
                    <td className="py-3">199 pcs</td>
                    <td className="py-3 text-gray-900 font-medium">$39.548</td>
                  </tr>

                  <tr>
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/shoes.png" className="w-12 h-12.5 rounded-xs object-cover" alt="shoes" />
                      <div>
                        <p className="text-gray-900 font-medium">Sneakers for men</p>
                        <p className="text-gray-500 text-xs">$942</p>
                      </div>
                    </td>
                    <td className="py-3">Fenter Jessy</td>
                    <td className="py-3">Nov, 4</td>
                    <td className="py-3">495 pcs</td>
                    <td className="py-3 text-gray-900 font-medium">$95.594</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Left Box */}
          <div className="bg-white shadow-md rounded-xl p-6 col-span-1">
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
              <h2 className="text-xl font-semibold text-gray-800">Latest Sales</h2>
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Search:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full mt-4">
                <thead className="text-left text-gray-500 text-sm border-b border-gray-300">
                  <tr>
                    <th className="py-2 px-4"><input type="checkbox" /></th>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Address</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Payment</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/customer1.png" className="w-10 h-10 rounded-full object-cover" alt="customer" />
                      <div>
                        <p className="text-gray-900 font-medium">Ernest Elliott</p>
                        <p className="text-gray-500 text-xs">ernest@gmail.com</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <p className="text-gray-900 font-medium">Shoes</p>
                      <p className="text-gray-500 text-xs">#A5647KB</p>
                    </td>
                    <td className="py-3">Germany</td>
                    <td className="py-3 text-gray-900 font-medium">$560.65</td>
                    <td className="py-3 text-gray-500 font-medium">Done</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm text-xs">Received</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/customer2.png" className="w-10 h-10 rounded-full object-cover" alt="customer" />
                      <div>
                        <p className="text-gray-900 font-medium">Helen Emmert</p>
                        <p className="text-gray-500 text-xs">helen@gmail.com</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <p className="text-gray-900 font-medium">Shirt</p>
                      <p className="text-gray-500 text-xs">#NB86H2E</p>
                    </td>
                    <td className="py-3">Switzerland</td>
                    <td className="py-3 text-gray-900 font-medium">$560.65</td>
                    <td className="py-3 text-gray-500 font-medium">Pending</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm text-xs">Shipping</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/customer3.png" className="w-10 h-10 rounded-full object-cover" alt="customer" />
                      <div>
                        <p className="text-gray-900 font-medium">Miguel Thomas</p>
                        <p className="text-gray-500 text-xs">miguel@gmail.com</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <p className="text-gray-900 font-medium">Travel Bag</p>
                      <p className="text-gray-500 text-xs">#UB654GH</p>
                    </td>
                    <td className="py-3">Argentina</td>
                    <td className="py-3 text-gray-900 font-medium">$956.42</td>
                    <td className="py-3 text-gray-500 font-medium">Done</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm text-xs">Received</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 px-4"><input type="checkbox" /></td>
                    <td className="py-3 flex items-center space-x-3">
                      <img src="/src/assets/customer4.png" className="w-10 h-10 rounded-full object-cover" alt="customer" />
                      <div>
                        <p className="text-gray-900 font-medium">Augustine Ebron</p>
                        <p className="text-gray-500 text-xs">augustin@gmail.com</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <p className="text-gray-900 font-medium">Cap</p>
                      <p className="text-gray-500 text-xs">#BAS4567</p>
                    </td>
                    <td className="py-3">Canada</td>
                    <td className="py-3 text-gray-900 font-medium">$645.23</td>
                    <td className="py-3 text-gray-500 font-medium">Pending</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm text-xs">Shipping</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Bottom Right Box */}
          <div className="bg-white shadow-md rounded-xl p-6 col-span-1">
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
              <h2 className="text-xl font-semibold text-gray-800">Sales Analytics</h2>
              <button className="bg-gray-100 px-3 py-1.5 text-sm text-gray-700 flex items-center space-x-1">
                  <span>Yearly</span>
                  <FaChevronDown className="text-gray-500 text-xs" />
                </button>
            </div>

            <div className="flex items-center space-x-6 text-sm mt-3 text-gray-600">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Pending ($4,875)
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Complete ($1,450)
              </div>
            </div>

            <div className="mt-5 h-60">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <XAxis dataKey="month" tick={{ fill: "gray" }} />
                  <YAxis tick={{ fill: "gray" }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="pending" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="complete" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePg;
