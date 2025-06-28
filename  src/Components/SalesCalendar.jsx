import React from "react";
import { Tooltip } from "react-tooltip";

const SalesCalendar = ({ events }) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 mt-6 shadow-md glass-card">
      <h2 className="text-xl font-semibold mb-4 text-center">📅 Sales Calendar</h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {months.map((month, index) => {
          const event = events.find((e) => e.month === month);

          return (
            <div
              key={month}
              className={`p-4 rounded-lg text-center text-white font-semibold shadow-md
                ${event ? "bg-gradient-to-br from-green-400 to-blue-500" : "bg-gray-300 text-gray-700"}`}
              data-tooltip-id={`tooltip-${index}`}
              data-tooltip-content={event ? `${event.title} - ${event.note}` : "No events"}
            >
              {month}
              {event && <Tooltip id={`tooltip-${index}`} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesCalendar;
