import React from "react";

const TopBottomTable = ({ topProducts, bottomRegions, topReps }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* Top 10 Products by Sales */}
      <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-md glass-card">
        <h2 className="text-lg font-semibold mb-3 text-center">Top 10 Products</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300 text-left">
              <th className="py-1">Product</th>
              <th className="py-1">Sales (₹)</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((prod, idx) => (
              <tr key={idx} className="hover:bg-white/10 transition-all">
                <td className="py-1">{prod.name}</td>
                <td className="py-1 text-green-600 font-medium">₹{prod.sales.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom 10 Regions by Profit */}
      <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-md glass-card">
        <h2 className="text-lg font-semibold mb-3 text-center">Bottom 10 Regions</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300 text-left">
              <th className="py-1">Region</th>
              <th className="py-1">Profit (₹)</th>
            </tr>
          </thead>
          <tbody>
            {bottomRegions.map((reg, idx) => (
              <tr key={idx} className="hover:bg-white/10 transition-all">
                <td className="py-1">{reg.name}</td>
                <td className={`py-1 ${reg.profit < 0 ? "text-red-500" : "text-yellow-600"} font-medium`}>
                  ₹{reg.profit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Sales Reps by Conversions */}
      <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-md glass-card">
        <h2 className="text-lg font-semibold mb-3 text-center">Top Sales Reps</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300 text-left">
              <th className="py-1">Rep Name</th>
              <th className="py-1">Conversions</th>
            </tr>
          </thead>
          <tbody>
            {topReps.map((rep, idx) => (
              <tr key={idx} className="hover:bg-white/10 transition-all">
                <td className="py-1">{rep.name}</td>
                <td className="py-1 text-blue-600 font-medium">{rep.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopBottomTable;
