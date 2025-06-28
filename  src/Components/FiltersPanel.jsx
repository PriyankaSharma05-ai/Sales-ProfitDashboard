// src/components/FiltersPanel.jsx

import React from "react";

const FiltersPanel = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-4 glass-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Year Filter */}
      <div>
        <label className="block text-sm text-gray-700 mb-1">Year</label>
        <select
          name="year"
          value={filters.year}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-white/30 border border-gray-300 focus:outline-none"
        >
          <option value="">All</option>
          {filters.options.years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Region Filter */}
      <div>
        <label className="block text-sm text-gray-700 mb-1">Region</label>
        <select
          name="region"
          value={filters.region}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-white/30 border border-gray-300 focus:outline-none"
        >
          <option value="">All</option>
          {filters.options.regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm text-gray-700 mb-1">Product Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-white/30 border border-gray-300 focus:outline-none"
        >
          <option value="">All</option>
          {filters.options.categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Customer Segment Filter */}
      <div>
        <label className="block text-sm text-gray-700 mb-1">Customer Segment</label>
        <select
          name="segment"
          value={filters.segment}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-white/30 border border-gray-300 focus:outline-none"
        >
          <option value="">All</option>
          {filters.options.segments.map((seg) => (
            <option key={seg} value={seg}>
              {seg}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FiltersPanel;

