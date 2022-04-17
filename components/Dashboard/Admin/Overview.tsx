import React from "react";

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
import { ICity, ITransport } from "../../../types";

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

const AdminOverview = ({
  transports,
  cities,
}: {
  transports: ITransport[];
  cities: ICity[];
}) => {
  const labels = transports.map((t) => t.Name);

  const dataStoppages = {
    labels: cities.map((c) => c.Name),
    datasets: [
      {
        label: "Number of stoppages in Cities",
        data: cities.map((c) => c.Stoppages.length),
        backgroundColor: "rgba(115, 199, 132, 0.5)",
      },
    ],
  };

  const dataAll = {
    labels,
    datasets: [
      {
        label: "Tickets Sold",
        data: transports.map((t) => t.SeatInfos.length),
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
          (t) =>
            t.SeatInfos.filter((a) => a.AgeClassEnum.Value == "Adult").length
        ),
        backgroundColor: "rgba(199, 115, 132, 0.5)",
      },

      {
        label: "Children",
        data: transports.map(
          (t) =>
            t.SeatInfos.filter((ti) => ti.AgeClassEnum.Value == "Children")
              .length
        ),
        backgroundColor: "rgba(115, 199, 132, 0.5)",
      },
      {
        label: "Infant",
        data: transports.map(
          (t) =>
            t.SeatInfos.filter((ti) => ti.AgeClassEnum.Value == "Infant").length
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
          (t) =>
            t.SeatInfos.filter((a) => a.SeatClassEnum.Value == "Economy").length
        ),
        backgroundColor: "rgba(199, 115, 132, 0.5)",
      },

      {
        label: "Premium Economy",
        data: transports.map(
          (t) =>
            t.SeatInfos.filter(
              (ti) => ti.SeatClassEnum.Value == "Premium Economy"
            ).length
        ),
        backgroundColor: "rgba(115, 199, 132, 0.5)",
      },
      {
        label: "Business",
        data: transports.map(
          (t) =>
            t.SeatInfos.filter((ti) => ti.SeatClassEnum.Value == "Business")
              .length
        ),
        backgroundColor: "rgba(115, 199, 0, 0.5)",
      },
    ],
  };

  return (
    <div className="flex flex-wrap gap-20 justify-center">
      <div className="min-w-[500px]">
        <Bar options={options("All Sales")} data={dataAll} />
      </div>
      <div className="min-w-[500px]">
        <Bar options={options("Sales by Age Class")} data={dataAgeClass} />
      </div>
      <div className="min-w-[500px]">
        <Bar options={options("Sales by Seat Class")} data={dataSeatClass} />
      </div>
      <div className="min-w-[500px]">
        <Bar options={options("Stoppages in cities")} data={dataStoppages} />
      </div>
    </div>
  );
};

export default AdminOverview;
