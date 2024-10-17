import React from 'react';

const Content = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-md p-6 bg-gray-800 text-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Total Vouchers</h2>
          <button className="text-gray-400 hover:text-white">close</button>
        </div>
        <div className="mb-4">
          <p className="text-sm">
            USD <span className="font-bold">0.38</span> ≈{' '}
            <span className="font-bold">16.39 $Pay</span>
          </p>
        </div>
        <h3 className="text-md font-medium mb-2">Vouchers</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search voucher"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="flex mb-2">
          <button className="mr-2 px-4 py-2 border border-gray-600 rounded hover:bg-gray-700">All</button>
          <button className="mr-2 px-4 py-2 border border-gray-600 rounded hover:bg-gray-700">Void</button>
          <button className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-700">Validate</button>
        </div>
        <div className="bg-gray-700 p-4 rounded-md mb-4">
          <p className="text-sm font-medium">USD 0.38</p>
          <p className="text-sm">16.39344262295082 $PAY</p>
          <p className="text-sm">CV764655</p>
        </div>
        <p className="text-gray-400">No more vouchers</p>
      </div>
    </div>
  );
};

export default Content;
