import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ChartComponent = () => {
  return (
    <Bar
      data={{
        labels: ["Tata Motors", "Zoho", "TCS"],
        datasets: [
          {
            label: "Skills Required by Org",
            data: [65, 59, 80],
            backgroundColor: ["rgba(215, 215, 217, 1)"],
            borderRadius: 5,
          },
          {
            label: "Skills Acquired by Students",
            data: [65, 59, 80],
            backgroundColor: ["rgba(43, 102, 246, 1)"],
            borderRadius: 5,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          title: {
            display: true,
            text: "Skill Analysis",
            font: {
              size: 20,
              weight: "bold",
            },
            position: "top",
            align: "start",
          },
        },
      }}
    />
  );
};

export default ChartComponent;
