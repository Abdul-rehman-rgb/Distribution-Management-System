import React, { useState } from "react";

const StockTransferReq = ({ isOpen, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantityType, setQuantityType] = useState("cartons");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Initiate Transfer</h2>

        {/* Product Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product</label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full border border-orange-500 rounded-lg px-3 py-2"
          >
            <option value="">Select Product</option>
            <option value="product1">Product 1</option>
            <option value="product2">Dropdown option 2</option>
          </select>
        </div>

        {/* Quantity Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="qtyType"
                value="pallet"
                checked={quantityType === "pallet"}
                onChange={(e) => setQuantityType(e.target.value)}
              />
              <span>Pallet</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="qtyType"
                value="cartons"
                checked={quantityType === "cartons"}
                onChange={(e) => setQuantityType(e.target.value)}
              />
              <span>Cartons</span>
            </label>
          </div>
        </div>

        {/* Quantity Input */}
        <input
          type="text"
          placeholder="e.g., 200 cartons"
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        {/* Date & Time */}
        <div className="flex gap-4 mb-4">
          <input type="date" className="w-1/2 border rounded-lg px-3 py-2" />
          <input type="time" className="w-1/2 border rounded-lg px-3 py-2" />
        </div>

        {/* Warehouses */}
        <div className="mb-4">
          <select className="w-full border rounded-lg px-3 py-2 mb-2">
            <option>Select Source Warehouse</option>
          </select>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>Select Destination Warehouse</option>
          </select>
        </div>

        {/* Note */}
        <textarea
          placeholder="Any special instructions (e.g., temperature-controlled items)"
          className="w-full border rounded-lg px-3 py-2 mb-4"
          rows={3}
        />

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="border border-orange-500 text-orange-500 rounded-lg px-6 py-2 hover:bg-orange-50"
          >
            Cancel
          </button>
          <Button
                            type="button"
                            className="bg-secondary sm:flex-1"
                        >
                            Request Stock Trasssnsfer
                        </Button>
        </div>
      </div>
    </div>
  );
};

export default StockTransferReq;
