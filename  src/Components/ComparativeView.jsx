import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ComparativeView = ({ data, options }) => {
  const [selectedA, setSelectedA] = useState(options[0]);
  const [selectedB, setSelectedB] = useState(options[1]);

  const filteredData = data.map((item) => ({
    category: item.category,
    [selectedA]: item[selectedA],
    [selectedB]: item[selectedB],
  }));

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 mt-6 shadow-md glass-card">
      <h2 className="text-xl font-semibold mb-4 text-center">📊 Comparative View</h2>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        <select
          className="p-2 rounded-md bg-white/70 shadow"
          value={selectedA}
          onChange={(e) => setSelectedA(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <select
          className="p-2 rounded-md bg-white/70 shadow"
          value={selectedB}
          onChange={(e) => setSelectedB(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={filteredData}
          margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <ReTooltip />
          <Legend />
          <Bar dataKey={selectedA} fill="#34d399" />
          <Bar dataKey={selectedB} fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparativeView;

