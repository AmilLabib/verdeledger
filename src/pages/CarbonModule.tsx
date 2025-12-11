export default function CarbonModule() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold text-primary mb-6">Carbon Module</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-lg">Scope 1</p>
            <span className="text-2xl text-primary">⚡</span>
          </div>
          <h3 className="text-4xl font-extrabold text-primary mt-4">2500 tons</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-lg">Scope 2</p>
            <span className="text-2xl text-primary">🛍️</span>
          </div>
          <h3 className="text-4xl font-extrabold text-primary mt-4">1800 tons</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-lg">Scope 3</p>
            <span className="text-2xl text-primary">📈</span>
          </div>
          <h3 className="text-4xl font-extrabold text-primary mt-4">500 tons</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md lg:col-span-1">
          <h3 className="font-bold text-lg mb-4">Carbon Emissions Calculator</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm">Energy Usage</label>
              <input className="mt-2 w-full border border-green-200 rounded px-3 py-2" defaultValue="500" />
              <div className="text-sm text-gray-500 mt-1">tons</div>
            </div>

            <div>
              <label className="block text-sm">Transportation</label>
              <input className="mt-2 w-full border border-green-200 rounded px-3 py-2" placeholder="None" />
            </div>

            <div>
              <label className="block text-sm">Supply Chain</label>
              <input className="mt-2 w-full border border-green-200 rounded px-3 py-2" placeholder="None" />
            </div>

            <button className="w-full bg-primary text-white py-3 rounded mt-2 font-semibold">Calculate</button>
          </form>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md lg:col-span-2">
          <p className="font-medium mb-4">Carbon-to-Cash Analyzer Chart</p>
          <div className="bg-gray-50 rounded p-2 h-56 flex items-center justify-center">Chart placeholder</div>
        </div>
      </div>
    </div>
  )
}
