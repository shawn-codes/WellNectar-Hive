import React from "react";

interface Props {
  recommendations: string[];
}

const Recommendations: React.FC<Props> = ({ recommendations }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recommendations
      </h2>
      <ul className="list-disc ml-6">
        {recommendations.map((rec, idx) => (
          <li key={idx} className="text-gray-700 mb-2">
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
