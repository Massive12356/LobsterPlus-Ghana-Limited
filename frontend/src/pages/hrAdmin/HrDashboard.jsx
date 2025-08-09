import React, { useState, useRef } from "react";
import { FiPrinter, FiEdit, FiTrash2, FiPower } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const HrDashboard = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showStaffModal, setShowStaffModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const tableRef = useRef();

  // Mock data
  const [mockProducts, setMockProducts] = useState([
    {
      _id: 1,
      productName: "Bebe B77s / B80P",
      description: '8.0" One Sim, 6/256GB',
      wholesalePrice: "GHC 740",
      retailPrice: "GHC 800",
      category: "KIDS TABLET",
    },
    {
      _id: 2,
      productName: "Samsung Galaxy Tab A8",
      description: '10.5" Wi-Fi, 4/64GB',
      wholesalePrice: "GHC 1,200",
      retailPrice: "GHC 1,350",
      category: "ADULT TABLET",
    },
  ]);

  const handlePrint = () => {
    const printContents = tableRef.current.innerHTML;
    const printWindow = window.open("", "", "height=600,width=800");

    printWindow.document.write("<html><head><title>Print Report</title>");
    printWindow.document.write(`
      <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
      </style>
    `);
    printWindow.document.write("</head><body>");
    printWindow.document.write(printContents);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleEditSave = () => {
    setMockProducts((prev) =>
      prev.map((p) => (p._id === editProduct._id ? editProduct : p))
    );
    setEditProduct(null);
  };

  const handleDeleteConfirm = () => {
    setMockProducts((prev) => prev.filter((p) => p._id !== deleteProduct._id));
    setDeleteProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EE] p-4 overflow-hidden">
      {/* Top Nav */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800">
          HR Attendance Dashboard
        </h1>
        {/* Power Icon Logout */}
        <FiPower
          size={26}
          className="text-red-600 hover:text-red-800 cursor-pointer transition-colors"
          title="Logout"
          onClick={() => setLogoutModal(true)}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-end md:justify-between flex-wrap">
        {/* Date Filter */}
        <div className="flex flex-col w-full sm:w-1/2 md:w-auto">
          <label className="text-sm text-gray-700 mb-1 font-bold">
            Filter by Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-black w-full md:w-[200px]"
          />
        </div>

        {/* Search Filter */}
        <div className="flex flex-col w-full sm:w-1/2 md:w-auto">
          <label className="text-sm text-gray-700 mb-1 font-bold">
            Search products
          </label>
          <input
            type="text"
            placeholder="Search by Name and Price..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-black w-full md:w-64 outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col w-full sm:flex-row gap-2 md:items-end md:justify-end md:w-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowStaffModal(true)}
            className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-blue-700 cursor-pointer px-4 py-2 rounded-lg text-white font-semibold w-full sm:w-auto"
          >
            <AiOutlinePlusCircle size={20} /> Add Staff
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCategoryModal(true)}
            className="flex items-center justify-center gap-2 bg-sky-700 hover:bg-blue-700 cursor-pointer px-4 py-2 rounded-lg text-white font-semibold w-full sm:w-auto  "
          >
            <AiOutlinePlusCircle size={20} /> Add Category
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowProductModal(true)}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 cursor-pointer px-4 py-2 justify-center rounded-lg text-white font-semibold w-full sm:w-auto"
          >
            <AiOutlinePlusCircle size={20} /> Create Product
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="bg-blue-50 hover:bg-blue-100 font-semibold px-4 py-2 rounded-lg border flex items-center gap-1 border-blue-300 cursor-pointer w-full sm:w-auto justify-center text-blue-700"
          >
            <FiPrinter /> Print Products
          </motion.button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto" ref={tableRef}>
        <table className="w-full border border-white">
          <thead className="bg-blue-800 text-white sticky top-0 z-10 text-sm font-semibold">
            <tr>
              <th className="py-3 px-4 text-left">PRODUCT NAME</th>
              <th className="py-3 px-4 text-left">DESCRIPTION</th>
              <th className="py-3 px-4 text-left">WHOLESALE PRICE</th>
              <th className="py-3 px-4 text-left">RETAIL PRICE</th>
              <th className="py-3 px-4 text-left">CATEGORY</th>
              <th className="py-3 px-4 text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              mockProducts.map((entry) => (
                <tr
                  key={entry._id}
                  className="border-t border-gray-300 bg-white text-sm text-gray-700 font-bold hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="py-4 px-3">{entry.productName}</td>
                  <td className="py-4 px-3">{entry.description}</td>
                  <td className="py-4 px-3">{entry.wholesalePrice}</td>
                  <td className="py-4 px-3">{entry.retailPrice}</td>
                  <td className="py-4 px-3">{entry.category}</td>
                  <td className="py-4 px-3 flex gap-3">
                    <FiEdit
                      size={18}
                      className="text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => setEditProduct(entry)}
                      title="Edit Product"
                    />
                    <FiTrash2
                      size={18}
                      className="text-red-600 cursor-pointer hover:text-red-800"
                      onClick={() => setDeleteProduct(entry)}
                      title="Delete Product"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Product Modal */}
      {editProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-bold text-blue-800 mb-4">
              Edit Product
            </h2>

            {/* Product Name */}
            <div className="flex flex-col mb-2">
              <label className="text-sm text-gray-700 mb-1 font-bold">
                Product Name
              </label>
              <input
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-black"
                value={editProduct.productName}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    productName: e.target.value,
                  })
                }
              />
            </div>

            {/* Description */}
            <div className="flex flex-col mb-2">
              <label className="text-sm text-gray-700 mb-1 font-bold">
                Description
              </label>
              <input
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-black"
                value={editProduct.description}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    description: e.target.value,
                  })
                }
              />
            </div>

            {/* Wholesale Price */}
            <div className="flex flex-col mb-2">
              <label className="text-sm text-gray-700 mb-1 font-bold">
                Wholesale Price
              </label>
              <input
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-black"
                value={editProduct.wholesalePrice}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    wholesalePrice: e.target.value,
                  })
                }
              />
            </div>

            {/* Retail Price */}
            <div className="flex flex-col mb-4">
              <label className="text-sm text-gray-700 mb-1 font-bold">
                Retail Price
              </label>
              <input
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-black"
                value={editProduct.retailPrice}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    retailPrice: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setEditProduct(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={handleEditSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-bold text-red-700 mb-4">
              Confirm Delete
            </h2>
            <p className="mb-4">
              Are you sure you want to delete{" "}
              <strong>{deleteProduct.productName}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setDeleteProduct(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {logoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-bold text-red-700 mb-4">
              Confirm Logout
            </h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => {
                  setLogoutModal(false);
                  console.log("Logged out");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Staff Modal */}
      {showStaffModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/35 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Add Staff</h2>

            <div className="flex flex-col gap-3">
              {["Username", "Password", "Email", "Role"].map((label) => (
                <div key={label} className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1 font-bold">
                    {label}
                  </label>
                  {label === "Role" ? (
                    <select className="px-4 py-2 rounded-lg bg-white border border-gray-300">
                      <option>Admin</option>
                      <option>Sales</option>
                    </select>
                  ) : (
                    <input
                      type={label === "Password" ? "password" : "text"}
                      placeholder={`Enter ${label}`}
                      className="px-4 py-2 rounded-lg bg-white border border-gray-300"
                    />
                  )}
                </div>
              ))}

              <div className="flex gap-3 mt-4">
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
                  Save Staff
                </button>
                <button
                  onClick={() => setShowStaffModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/35 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Add Category</h2>

            <div className="flex flex-col gap-3">
              <label className="text-sm text-gray-700 mb-1 font-bold">
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                className="px-4 py-2 rounded-lg bg-white border border-gray-300"
              />

              <div className="flex gap-3 mt-4">
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
                  Save Category
                </button>
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/35 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Create Product</h2>

            <div className="flex flex-col gap-3">
              {[
                "Product Name",
                "Description",
                "Wholesale Price",
                "Retail Price",
                "Category",
              ].map((label) => (
                <div key={label} className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1 font-bold">
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${label}`}
                    className="px-4 py-2 rounded-lg bg-white border border-gray-300"
                  />
                </div>
              ))}

              <div className="flex gap-3 mt-4">
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
                  Save Product
                </button>
                <button
                  onClick={() => setShowProductModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HrDashboard;
