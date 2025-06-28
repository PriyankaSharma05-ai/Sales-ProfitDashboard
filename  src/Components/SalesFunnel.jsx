import React from "react";
import { FaArrowDown } from "react-icons/fa";

const stageColors = [
  "bg-blue-400",
  "bg-yellow-400",
  "bg-orange-400",
  "bg-green-400",
];

const SalesFunnel = ({ funnelData }) => {
  const stages = Object.keys(funnelData);
  const values = Object.values(funnelData);

  const getConversion = (from, to) => {
    if (from === 0) return "0%";
    const percentage = ((to / from) * 100).toFixed(1);
    return `${percentage}%`;
  };

  return (
    <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-md mt-6 glass-card">
      <h2 className="text-xl font-semibold mb-6 text-center">⏳ Sales Funnel</h2>

      <div className="flex flex-col items-center space-y-4">
        {stages.map((stage, index) => (
          <div key={stage} className="flex flex-col items-center">
            <div
              className={`w-64 py-2 text-center text-white font-bold rounded-lg ${stageColors[index]}`}
            >
              {stage}: {values[index]}
            </div>
            {index < stages.length - 1 && (
              <div className="flex flex-col items-center mt-2 mb-2">
                <FaArrowDown className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700 mt-1">
                  {getConversion(values[index], values[index + 1])} Conversion
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesFunnel;
