// src/components/SummaryCards.jsx
import React from "react";
import { FaRupeeSign, FaChartLine, FaPercentage, FaStar } from "react-icons/fa";

const SummaryCards = ({ summary }) => {
  const cards = [
    {
      title: "Total Sales",
      value: `₹${summary.total_sales.toLocaleString()}`,
      icon: <FaRupeeSign className="text-green-500" />,
    },
    {
      title: "Total Profit",
      value: `₹${summary.total_profit.toLocaleString()}`,
      icon: <FaChartLine className="text-blue-500" />,
    },
    {
      title: "Profit Margin",
      value: `${summary.profit_margin}%`,
      icon: <FaPercentage className="text-yellow-500" />,
    },
    {
      title: "YoY Growth",
      value: `${summary.yoy_growth}%`,
      icon: <FaChartLine className="text-purple-500" />,
    },
    {
      title: "Best Seller",
      value: summary.best_seller,
      icon: <FaStar className="text-orange-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white/20 backdrop-blur-md shadow-lg p-4 rounded-2xl text-center transition-transform hover:scale-105 glass-card"
        >
          <div className="text-3xl mb-2">{card.icon}</div>
          <div className="text-sm text-gray-400">{card.title}</div>
          <div className="text-xl font-bold">{card.value}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;

