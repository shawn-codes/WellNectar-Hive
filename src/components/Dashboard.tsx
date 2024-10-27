import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components needed for Chart.js 3+ compatibility with react-chartjs-2
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  userData: { bloodSugar: number; activityLevel: number };
}

const Dashboard: React.FC<Props> = ({ userData }) => {
  // Sample data to display in the chart
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Blood Sugar Levels",
        data: [110, 130, 120, 140, 135, 125, userData.bloodSugar], // Include user data in the chart
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Health Data Overview
      </h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
