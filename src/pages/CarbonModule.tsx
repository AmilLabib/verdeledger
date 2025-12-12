import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Zap, ShoppingCart, TrendingUp } from "lucide-react";

export default function CarbonModule() {
  const chartData = [
    { month: "Jan", cost: 50, emissions: 120 },
    { month: "Feb", cost: 60, emissions: 110 },
    { month: "Mar", cost: 75, emissions: 95 },
    { month: "Apr", cost: 90, emissions: 80 },
    { month: "May", cost: 110, emissions: 70 },
    { month: "Jun", cost: 130, emissions: 55 },
  ];

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-extrabold text-primary mb-1">
        Carbon Module
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        This module helps companies measure Scope 1-3 emissions, calculate
        carbon footprints, and analyze opportunities to reduce emissions and
        convert environmental impact into business value.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-lg">Scope 1</p>
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-4xl font-extrabold text-primary mt-4">
            2500 tons
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-lg">Scope 2</p>
            <ShoppingCart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-4xl font-extrabold text-primary mt-4">
            1800 tons
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-lg">Scope 3</p>
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-4xl font-extrabold text-primary mt-4">
            500 tons
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md lg:col-span-1">
          <h3 className="font-bold text-lg mb-4">
            Carbon Emissions Calculator
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm">Energy Usage</label>
              <input
                className="mt-2 w-full border border-green-200 rounded px-3 py-2"
                defaultValue="500"
              />
              <div className="text-sm text-gray-500 mt-1">tons</div>
            </div>

            <div>
              <label className="block text-sm">Transportation</label>
              <input
                className="mt-2 w-full border border-green-200 rounded px-3 py-2"
                placeholder="None"
              />
            </div>

            <div>
              <label className="block text-sm">Supply Chain</label>
              <input
                className="mt-2 w-full border border-green-200 rounded px-3 py-2"
                placeholder="None"
              />
            </div>

            <button className="w-full bg-primary text-white py-3 rounded mt-2 font-semibold">
              Calculate
            </button>
          </form>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md lg:col-span-2">
          <p className="font-medium mb-4">Carbon-to-Cash Analyzer Chart</p>
          <div className="bg-gray-50 rounded p-2 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 8, right: 20, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff7b5c" stopOpacity={0.35} />
                    <stop
                      offset="100%"
                      stopColor="#ff7b5c"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                  <linearGradient
                    id="emissionsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#2a9d8f" stopOpacity={0.35} />
                    <stop
                      offset="100%"
                      stopColor="#2a9d8f"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="4 4" stroke="#f3f7f6" />
                <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tick={{ fill: "#6b7280" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: "#6b7280" }}
                />
                <Tooltip
                  formatter={(value: any, name: string) => {
                    if (name && name.toLowerCase().includes("cost"))
                      return [`Rp ${value}k`, "Cost"];
                    return [`${value} tons`, "Emissions"];
                  }}
                />
                <Legend />

                {/* area + line for cost */}
                {/* line for cost */}
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="cost"
                  stroke="#ff7b5c"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                  name="Cost (k)"
                  animationDuration={800}
                />

                {/* area + line for emissions */}
                {/* line for emissions */}
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="emissions"
                  stroke="#2a9d8f"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                  name="Emissions (tons)"
                  animationDuration={800}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
