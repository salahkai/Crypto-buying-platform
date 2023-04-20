import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
export function UnixDate(unixTimeStamp) {
  let date = new Date(unixTimeStamp);
  return date.toLocaleString();
}
export default function CryptoChart({ marketData, fillColor, borderColor }) {
  const options = {
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  };

  const prices = marketData.map((c) => c[1]);
  const times = marketData.map((c) => {
    return UnixDate(c[0]);
  });
  const data = {
    labels: times,
    datasets: [
      {
        data: prices,
        // fill: true,
        borderWidth: 2.5,
        borderColor: borderColor, //'rgb(255, 99, 132)'
        backgroundColor: fillColor, //'rgba(255, 0, 0, 0.2)'
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
