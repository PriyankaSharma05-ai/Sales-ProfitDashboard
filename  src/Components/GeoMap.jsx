// src/components/GeoMap.jsx

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Tooltip,
} from "react-simple-maps";

const geoUrl = "/data/geo_regions.json";

const colorScale = (value) => {
  if (value > 1000000) return "#16a34a"; // dark green
  if (value > 500000) return "#4ade80"; // light green
  if (value > 100000) return "#facc15"; // yellow
  return "#f87171"; // red
};

const GeoMap = ({ regionData }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg glass-card">
      <h2 className="text-xl font-semibold mb-4 text-center">Geographical Sales Distribution</h2>
      <ComposableMap projection="geoMercator" width={800} height={400}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const regionName = geo.properties.name;
              const region = regionData.find((r) => r.region === regionName);
              const value = region ? region.sales : 0;

              return (
                <Tooltip key={geo.rsmKey} title={`${regionName}: ₹${value.toLocaleString()}`}>
                  <Geography
                    geography={geo}
                    fill={colorScale(value)}
                    stroke="#ccc"
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#3b82f6", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                </Tooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default GeoMap;
