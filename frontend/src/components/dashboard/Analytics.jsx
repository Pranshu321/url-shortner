import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Analytics = () => {
  const { shortUrl } = useParams();
  const [analyticsData, setAnalyticsData] = React.useState({}); // [ {date: "2021-09-01", clicks: 10}
  const path = "https://url-shortner-6gy3.onrender.com";

  const getAnalytics = async () => {
    // get analytics data
    const res = await axios.get(
      `https://url-shortner-6gy3.onrender.com/url/analytics/${shortUrl}`
    );
    console.log(res.data);
    setAnalyticsData(res.data);
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
    </div>
  );
};

export default Analytics;
