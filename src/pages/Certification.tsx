import { useState } from 'react'
import { initialCerts } from '../data/certifications'
import type { Cert } from '../data/certifications'
import CertModal from '../components/CertModal'

export default function Certification() {
  const [certs] = useState<Cert[]>(initialCerts)
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null)

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-extrabold text-primary mb-1">Certification Module</h1>
      <p className="text-sm text-gray-600 mb-6">Sustainability Certifications for Your Enterprise</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {certs.map((c) => (
              <div key={c.id} className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center">
                <div className="h-14 w-14 bg-gray-100 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                  <img src={c.logo} alt={c.name} className="max-h-12" onError={(e) => { ;(e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div className="text-sm font-medium">{c.name}</div>
                <button
                  onClick={() => setSelectedCert(c)}
                  className="mt-3 bg-white border border-green-200 text-green-700 text-sm px-3 py-1 rounded-full hover:text-white hover:bg-green-700 transform transition duration-200 ease-in-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                >
                  Explore Certification
                </button>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-3">Gamified Badges</h3>
          <div className="flex gap-4 items-center flex-wrap mb-6">
            <div className="bg-white rounded-lg p-3 shadow flex items-center gap-3">
              <div className="h-12 w-12 bg-green-100 rounded-full" />
              <div>
                <div className="text-sm font-semibold">Eco-Champion</div>
                <div className="text-xs text-gray-500">Earned</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow flex items-center gap-3">
              <div className="h-12 w-12 bg-green-100 rounded-full" />
              <div>
                <div className="text-sm font-semibold">Carbon Reducer</div>
                <div className="text-xs text-gray-500">Earned</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow flex items-center gap-3">
              <div className="h-12 w-12 bg-green-100 rounded-full" />
              <div>
                <div className="text-sm font-semibold">Green Company</div>
                <div className="text-xs text-gray-500">Earned</div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <h4 className="font-semibold mb-2">Financial Reporting Progress Checklist</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>Upload Financial Statements</span><span>✔️</span></li>
              <li className="flex justify-between"><span>Define Carbon & Financial Metrics</span><span>✔️</span></li>
              <li className="flex justify-between"><span>Run Green & Profit Forecast</span><span>✔️</span></li>
              <li className="flex justify-between"><span>Review Impact Dashboard</span><span>✔️</span></li>
              <li className="flex justify-between"><span>Generate Final Report</span><span>◻</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <h4 className="font-semibold mb-2">AI Compliance Assistant</h4>
            <button className="w-full bg-primary text-white py-2 rounded mb-2">Ask me about compliance</button>
            <input className="w-full border border-green-100 rounded px-3 py-2" placeholder="Type a message..." />
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <h4 className="font-semibold mb-2">Benchmarking Chart</h4>
            <div className="h-36 bg-gray-50 rounded flex items-center justify-center">Chart</div>
          </div>
        </aside>
      </div>
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  )
}

