import React from "react";

const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="flex flex-wrap">
      {Array(18)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="card w-[230px] p-2 m-2 bg-orange-50 shadow-sm rounded animate-pulse"
          >
            <div className="h-[160px] bg-gray-300 rounded"></div>
            <div className="mt-2">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
