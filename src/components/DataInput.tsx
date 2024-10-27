import React, { useState } from "react";

interface Props {
  onSubmit: (data: any) => void;
}

const DataInput: React.FC<Props> = ({ onSubmit }) => {
  const [bloodSugar, setBloodSugar] = useState<number>(120);
  const [activityLevel, setActivityLevel] = useState<number>(0);

  // handleDataSubmit function to call the backend API
  const handleDataSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page refresh on form submit

    const data = { bloodSugar, activityLevel }; // collect form data
    const response = await fetch("http://localhost:5000/api/recommendations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Process the response from the backend
    const result = await response.json();
    onSubmit(result.recommendations); // send recommendations back to App component
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Enter Health Data
      </h2>
      <form onSubmit={handleDataSubmit}>
        {" "}
        {/* Use handleDataSubmit on form submit */}
        <div className="mb-4">
          <label className="block text-gray-700">Blood Sugar</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={bloodSugar}
            onChange={(e) => setBloodSugar(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Activity Level</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={activityLevel}
            onChange={(e) => setActivityLevel(Number(e.target.value))}
          />
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataInput;
