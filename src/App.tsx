import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import DataInput from "./components/DataInput";
import Recommendations from "./components/Recommendations";

const App: React.FC = () => {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleDataSubmit = (data: any) => {
    setRecommendations(data); // Update recommendations to display in Recommendations component
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mt-8 mb-4">
        WellnessBridge
      </h1>
      <div className="max-w-4xl w-full px-4">
        <Dashboard userData={{ bloodSugar: 120, activityLevel: 30 }} />
        <DataInput onSubmit={handleDataSubmit} />{" "}
        {/* Pass handleDataSubmit as prop */}
        <Recommendations recommendations={recommendations} />
      </div>
    </div>
  );
};

export default App;
