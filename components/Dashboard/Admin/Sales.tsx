import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ITicket, ITransport } from "../../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = (title: string) => ({
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: title,
    },
  },
});

const TicketSales = ({ transports }: { transports: ITransport[] }) => {
  const labels = transports.map((t) => t.name);

  const dataAll = {
    labels,
    datasets: [
      {
        label: "Tickets Sold",
        data: transports.map((t) => t.tickets.length),
        backgroundColor: "rgba(115, 199, 132, 0.5)",
      },
    ],
  };

  const dataAgeClass = {
    labels,
    datasets: [
      {
        label: "Adult",
        data: transports.map(
          (t) => t.tickets.filter((a) => a.age_class == "Adult").length
        ),
        backgroundColor: "rgba(199, 115, 132, 0.5)",
      },

      {
        label: "Children",
        data: transports.map(
          (t) => t.tickets.filter((ti) => ti.age_class == "Children").length
        ),
        backgroundColor: "rgba(115, 199, 132, 0.5)",
      },
      {
        label: "Infant",
        data: transports.map(
          (t) => t.tickets.filter((ti) => ti.age_class == "Infant").length
        ),
        backgroundColor: "rgba(115, 199, 0, 0.5)",
      },
    ],
  };

  const dataSeatClass = {
    labels,
    datasets: [
      {
        label: "Economy",
        data: transports.map(
          (t) => t.tickets.filter((a) => a.seat_class == "Economy").length
        ),
        backgroundColor: "rgba(199, 115, 132, 0.5)",
      },

      {
        label: "Premium Economy",
        data: transports.map(
          (t) =>
            t.tickets.filter((ti) => ti.seat_class == "Premium Economy").length
        ),
        backgroundColor: "rgba(115, 199, 132, 0.5)",
      },
      {
        label: "Business",
        data: transports.map(
          (t) => t.tickets.filter((ti) => ti.seat_class == "Business").length
        ),
        backgroundColor: "rgba(115, 199, 0, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options("All Sales")} data={dataAll} />
      <Bar options={options("Sales by Age Class")} data={dataAgeClass} />
      <Bar options={options("Sales by Seat Class")} data={dataSeatClass} />
    </div>
  );
};

export default TicketSales;