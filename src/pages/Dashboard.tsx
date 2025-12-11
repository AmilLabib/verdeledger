import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'

const kpi = [
  { id: 'total-eco-score', label: 'Total ESG Score', value: '85 /100', delta: '+3' },
  { id: 'financial-roi', label: 'Financial ROI (Green)', value: '+12.5%', delta: '+0.8' },
  { id: 'carbon-footprint', label: 'Carbon Footprint', value: '1,200 tons', delta: '-6%' },
  { id: 'social-impact', label: 'Social Impact Score', value: '90 /100', delta: '+1' },
]

const chartData = [
  { month: 'Jan', eco: 60, finance: 40 },
  { month: 'Feb', eco: 65, finance: 48 },
  { month: 'Mar', eco: 70, finance: 55 },
  { month: 'Apr', eco: 78, finance: 68 },
  { month: 'May', eco: 82, finance: 74 },
  { month: 'Jun', eco: 85, finance: 82 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary">Dasbhboard</h1>
          <p className="text-sm text-gray-500">Analytics Dashboard</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border rounded bg-white text-sm">Export Report</button>
          <button className="px-4 py-2 bg-primary text-white rounded text-sm">Share Dashboard</button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* KPI strip */}
        <section className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {kpi.map((k) => (
            <div key={k.id} className="bg-white rounded-xl p-4 shadow flex flex-col">
              <div className="text-xs text-gray-500">{k.label}</div>
              <div className="flex items-baseline justify-between mt-2">
                <div className="text-2xl font-extrabold text-primary">{k.value}</div>
                <div className="text-sm text-green-600">{k.delta}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Right column small cards */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Green ROI Calculator</div>
                <div className="text-xs text-gray-400">Projected Savings (ann.)</div>
              </div>
              <div className="text-xl font-bold text-primary">Rp120 M</div>
            </div>
            <div className="mt-3">
              <button className="px-3 py-1 bg-green-50 text-green-700 rounded text-sm">Run Calculator</button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="org" className="w-12" />
              <div>
                <div className="text-sm font-semibold">Department Scoreboard</div>
                <div className="text-xs text-gray-500">Operations • Finance • Procurement</div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm text-gray-600"><span>Operations</span><span>78</span></div>
              <div className="w-full bg-gray-100 h-2 rounded"><div className="h-2 bg-green-600 w-3/4 rounded" /></div>

              <div className="flex justify-between text-sm text-gray-600"><span>Finance</span><span>85</span></div>
              <div className="w-full bg-gray-100 h-2 rounded"><div className="h-2 bg-green-600 w-4/5 rounded" /></div>

              <div className="flex justify-between text-sm text-gray-600"><span>Procurement</span><span>72</span></div>
              <div className="w-full bg-gray-100 h-2 rounded"><div className="h-2 bg-green-600 w-3/5 rounded" /></div>
            </div>
          </div>
        </aside>

        {/* Full width chart */}
        <section className="lg:col-span-12 bg-white rounded-xl p-4 shadow">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold">Green vs Financial Performance</h3>
              <div className="text-sm text-gray-500">Last 6 months</div>
            </div>
            <div className="text-sm text-gray-600">Updated 2 days ago</div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="eco" stroke="#2f7a4f" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="finance" stroke="#9ea39f" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  )
}
