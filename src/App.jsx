import React from "react";
import { BrowserRouter as Router, ScrollRestoration } from "react-router-dom";
import RoutesLink from "./routes";
import ScrollToTop from "./components/common/ScrollToTop";
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
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <RoutesLink />
    </Router>
  );
}

export default App;
