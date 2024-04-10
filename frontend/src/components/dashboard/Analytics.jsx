import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import { Bar } from "react-chartjs-2";

const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);

Chart.register(...controllers);

const Analytics = () => {
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { shortUrl } = useParams();
  const [analyticsData, setAnalyticsData] = React.useState({});
  const [labels, setlabels] = React.useState([]);
  // [ {date: "2021-09-01", clicks: 10}
  const path = "http://localhost:5000";

  const getAnalytics = async () => {
    // get analytics data
    const res = await axios.get(
      `http://localhost:5000/url/analytics/${shortUrl}`
    );
    console.log(res.data);
    setAnalyticsData(res.data);
    SetAnalyticsLables(res.data.analytics);
  };

  const SetAnalyticsLables = (data) => {
    const monthCounts = data?.reduce((acc, { localdate }) => {
      const [day, month, year] = localdate.split("/").map(Number); // Convert to numbers if needed
      const monthYearKey = monthsArray[month + 1]; // Key format "month/year"
      if (!acc[monthYearKey]) {
        acc[monthYearKey] = 0;
      }
      acc[monthYearKey]++;
      return acc;
    }, {});

    const sortedMonths = Object?.keys(monthCounts)?.sort((a, b) => {
      const [monthA] = a.split("/").map(Number);
      const [monthB] = b.split("/").map(Number);
      return monthA - monthB; // Sort by year, then by month
    });

    // Step 3: Create the Result Array
    const result = sortedMonths.map((monthYear) => {
      const [month] = monthYear.split("/");
      return { month: `${month}`, TotalClick: monthCounts[monthYear] };
    });

    setlabels(result);
  };

  React.useEffect(() => {
    getAnalytics();
  }, []);

  return (
    <div className="p-4">
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input text-sm font-semibold pt-1">
            {path + shortUrl}
          </div>
        </div>
        <div className="p-5 flex flex-col">
          <h1 className="text-2xl text-white font-semibold">
            Analytics of {shortUrl}
          </h1>
          <div className="text-white font-semibold text-sm mt-5">
            Total Click : {analyticsData.totalClicks}
          </div>

          <div className="flex flex-col gap-y-5 my-5">
            {analyticsData?.analytics?.map((visit) => (
              <div className="border-2 border-white p-3 rounded-md">
                <div className="font-semibold">Browser: {visit.browser}</div>
                <div className="font-semibold">Date: {visit.localdate}</div>
                <div className="font-semibold">Time: {visit.localtime}</div>
                <div className="font-semibold">
                  Timestamp: {visit.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bar chart using chart js */}
      <div className="flex flex-col mt-5 gap-y-5">
        <h1 className="text-white text-2xl font-semibold">Analytics Chart</h1>
        <div className="bg-white p-5 rounded-md text-white">
          <Bar
            datasetIdKey="id"
            className="text-white"
            data={{
              labels: labels.map((label) => label.month),
              datasets: [
                {
                  id: 1,
                  label: "Total Clicks per Month",
                  data: labels.map((label) => label.TotalClick),
                  parsing: {
                    xAxisKey: "month",
                    yAxisKey: "TotalClick",
                  },
                  barThickness: 120,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 1,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
