import React from "react";
import ReactECharts from "echarts-for-react";
import CountUp from "react-countup";

const BusinessDashboard = () => {
  const totalCustomers = 60000;
  const admittedCustomers = 30234;
  const operationalCost = 14000000;

  const barChartOption = {
    tooltip: {},
    legend: { data: ["Admitted", "Outpatients", "Cost"] },
    xAxis: { data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    yAxis: {},
    series: [
      {
        name: "Admitted",
        type: "bar",
        data: [1200, 1300, 1100, 1400, 1250, 1500],
        itemStyle: { color: "#5470C6" }
      },
      {
        name: "Outpatients",
        type: "bar",
        data: [800, 900, 1000, 950, 880, 1100],
        itemStyle: { color: "#91CC75" }
      },
      {
        name: "Cost",
        type: "line",
        data: [800000, 900000, 850000, 950000, 870000, 910000],
        yAxisIndex: 0,
        itemStyle: { color: "#FAC858" }
      }
    ]
  };

  const pieOption = {
    tooltip: { trigger: "item" },
    legend: { orient: "vertical", left: "left" },
    series: [
      {
        name: "Satisfaction",
        type: "pie",
        radius: "60%",
        data: [
          { value: 65, name: "Excellent" },
          { value: 20, name: "Okay" },
          { value: 15, name: "Poor" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  const radarOption = {
    tooltip: {},
    legend: { data: ["# of Staff", "Clients per Staff"] },
    radar: {
      indicator: [
        { name: "Retail", max: 100 },
        { name: "Services", max: 100 },
        { name: "B2B", max: 100 },
        { name: "SaaS", max: 100 },
        { name: "Logistics", max: 100 },
        { name: "Finance", max: 100 }
      ]
    },
    series: [
      {
        name: "Staff Distribution",
        type: "radar",
        data: [
          {
            value: [80, 90, 60, 50, 70, 85],
            name: "# of Staff"
          },
          {
            value: [60, 75, 70, 65, 55, 60],
            name: "Clients per Staff"
          }
        ]
      }
    ]
  };

  const horizontalBarOption = {
    tooltip: {},
    xAxis: { type: "value" },
    yAxis: {
      type: "category",
      data: ["Retail", "SaaS", "Finance", "Logistics", "Services"]
    },
    series: [
      {
        type: "bar",
        data: [4.1, 4.3, 4.0, 3.9, 4.2],
        itemStyle: {
          color: "#73C0DE"
        },
        label: {
          show: true,
          position: "right"
        }
      }
    ]
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Overview Cards */}
      <div className="bg-white p-6 rounded-xl shadow col-span-1">
        <h2 className="text-lg font-semibold mb-4 text-green-700">Overview</h2>
        <p className="text-sm text-gray-500 mb-1">Total Customers</p>
        <p className="text-3xl font-bold text-gray-800">
          <CountUp end={totalCustomers} separator="," />
        </p>
        <p className="mt-4 text-sm text-gray-500 mb-1">Customers Onboarded</p>
        <p className="text-2xl font-semibold text-blue-600">
          <CountUp end={admittedCustomers} separator="," />
        </p>
        <hr className="my-4" />
        <p className="text-sm text-gray-500 mb-1">Operational Cost</p>
        <p className="text-2xl font-semibold text-emerald-600">
          ₹<CountUp end={operationalCost / 1000000} decimals={2} />M
        </p>
      </div>

      {/* Line + Bar Combo Chart */}
      <div className="bg-white p-6 rounded-xl shadow col-span-2">
        <h2 className="text-lg font-semibold mb-4 text-indigo-700">Customer Onboarding & Cost</h2>
        <ReactECharts option={barChartOption} style={{ height: 300 }} />
      </div>

      {/* Radar Chart */}
      <div className="bg-white p-6 rounded-xl shadow col-span-1">
        <h2 className="text-lg font-semibold mb-4 text-yellow-600">Available Staff Per Sector</h2>
        <ReactECharts option={radarOption} style={{ height: 300 }} />
      </div>

      {/* Horizontal Bar - Average Wait Times */}
      <div className="bg-white p-6 rounded-xl shadow col-span-1">
        <h2 className="text-lg font-semibold mb-4 text-cyan-700">Avg. Response Time (Days)</h2>
        <ReactECharts option={horizontalBarOption} style={{ height: 300 }} />
      </div>

      {/* Pie Chart - Satisfaction */}
      <div className="bg-white p-6 rounded-xl shadow col-span-1">
        <h2 className="text-lg font-semibold mb-4 text-red-600">Customer Satisfaction</h2>
        <ReactECharts option={pieOption} style={{ height: 300 }} />
      </div>
    </div>
  );
};

export default BusinessDashboard;
