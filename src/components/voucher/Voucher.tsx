import React from 'react';

import { Filter } from 'lucide-react';

const VoucherComponent: React.FC = () => {
  return (
    <div className="  p-6 rounded-lg max-w-lg mx-auto shadow-lg">
      {/* Top Section: Total Vouchers */}
      <div className="border-b border-red-500 pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-sm text-gray-400 whitespace-nowrap">
            Total Vouchers
          </h2>
          <div className="flex-grow border-t border-red-500"></div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">USD 0.38</h1>
          <span className="text-xL ">=16.439 $PAY</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative mb-4">
        <label htmlFor="">Vouchers</label>
        <div className="flex items-center">
          <input
            type="text"
            className="flex   rounded-lg px-1 py-2 focus:outline-none"
            placeholder="Search Voucher"
          />
          <button className="flex ml-2 bg-red-500  px-3 py-2 rounded-lg">
            <Filter /> <span>ALL</span>
          </button>
        </div>
      </div>

      {/* Status Filter Buttons */}
      <div>
        <h1>Status:</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="px-4 py-2  border  rounded-full">
            All
          </button>
          <button className="px-4 py-2  border  rounded-full">
            Void
          </button>
          <button className="px-4 py-2  border rounded-full">
            Validate
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 mb-2">
        <h1 className="text-2xl font-bold">USD 0.38</h1>
        <span className="text-xL ">=16.439 $PAY</span>
      </div>
      <div className="flex items-center">
        <div className="flex-grow border-t border-red-500"></div>
        <h2 className="text-sm  mx-2 whitespace-nowrap">
          No more vouchers
        </h2>
        <div className="flex-grow border-t border-red-500"></div>
      </div>
    </div>
  );
};

export default VoucherComponent;
