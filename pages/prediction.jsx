import React, { useState } from "react";

const Prediction = () => {
  const [device, setDevice] = useState("");
  const [recyclingData, setRecyclingData] = useState({
    category: "Recycling Category",
    materials: [
      { material: "Material 1", value: "Value 1" },
      { material: "Material 2", value: "Value 2" },
    ],
    credit: "Credit Points",
  });

  const handleDeviceChange = (e) => {
    setDevice(e.target.value);
  };

  const handleRecycle = () => {
    setRecyclingData({
      category: "Electronics",
      materials: [
        { material: "Plastic", value: "200 gm" },
        { material: "Metal", value: "150 gm" },
      ],
      credit: "50",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-2">Recycle Your Device</h1>
        <input
          type="text"
          placeholder="Enter Device Name"
          value={device}
          onChange={handleDeviceChange}
          className="border rounded w-full p-2 mb-4"
        />
        <button
          onClick={handleRecycle}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
          Recycle
        </button>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Recycling Result</h2>
          <div className="bg-gray-100 p-3 rounded mt-2">
            <p>Category: {recyclingData.category}</p>
            <div className="mt-2">
              <p>Materials:</p>
              <ul>
                {recyclingData.materials.map((material, index) => (
                  <li key={index}>
                    {material.material}: {material.value}
                  </li>
                ))}
              </ul>
            </div>
            <p>Credit Points: {recyclingData.credit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
