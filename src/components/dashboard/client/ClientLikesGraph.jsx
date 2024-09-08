import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Likes Growth",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Likes Growth Over Time",
    },
  },
};

const ClientLikesGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Ensure the chart instance is destroyed on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="bg-white rounded shadow">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default ClientLikesGraph;
