import React from "react";
import {
  PieChart, Pie, Cell, Tooltip as ReTooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";

const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#f87171", "#a78bfa"];

const InventoryCharts = ({ categorySales, productUnits }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Pie Chart - Category-wise Sales */}
      <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-md glass-card">
        <h2 className="text-lg font-semibold mb-4 text-center">Sales by Product Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categorySales}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {categorySales.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ReTooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - Units Sold per Product */}
      <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-md glass-card">
        <h2 className="text-lg font-semibold mb-4 text-center">Units Sold per Product</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productUnits} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" angle={-15} textAnchor="end" />
            <YAxis />
            <ReTooltip />
            <Bar dataKey="units" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InventoryCharts;
