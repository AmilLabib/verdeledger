export default function CarbonMarketplace() {
  return (
    <div className="min-h-screen">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-primary">Carbon Credit Marketplace Integration</h1>
          <p className="text-sm text-gray-500">View your credits, registry status and marketplace actions</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border rounded bg-white text-sm">Export</button>
          <button className="px-4 py-2 bg-primary text-white rounded text-sm">List Credits</button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-8 bg-white rounded-xl p-6 shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-sm text-gray-500">Registry</div>
              <div className="text-lg font-semibold">VERRA Registry</div>
              <div className="text-sm text-gray-400">ID: VERRA-2023-001</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">My Credits</div>
              <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg font-semibold">Rp 720.000/ t</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-2 bg-green-50 rounded-lg p-4">
              <div className="text-sm text-gray-700">Verified & Certified</div>
              <div className="mt-2 text-lg font-semibold">150t</div>
              <div className="text-xs text-gray-500 mt-1">Credits available for marketplace</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-500">Market Price</div>
              <div className="text-xl font-bold mt-2">Rp 720.000/t</div>
              <div className="text-xs text-gray-400 mt-1">(Estimated)</div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 rounded p-4">
            <h4 className="font-semibold mb-2">Transaction History</h4>
            <div className="text-sm text-gray-600">No recent transactions. List credits to start trading.</div>
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="text-sm text-gray-500">My Credits</div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <div className="text-2xl font-bold">Rp 720.000/t</div>
                <div className="text-xs text-gray-500">Estimated market price</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Total</div>
                <div className="text-lg font-semibold">150 t</div>
              </div>
            </div>
            <div className="mt-3">
              <button className="w-full bg-primary text-white py-2 rounded">List Credits</button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <h4 className="font-semibold">Registry Info</h4>
            <div className="text-sm text-gray-600 mt-2">Verified: Yes</div>
            <div className="text-sm text-gray-600">Last audit: 2024</div>
            <div className="mt-3">
              <button className="px-3 py-1 border rounded text-sm">View Details</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
