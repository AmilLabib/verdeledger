import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import {
  balanceSheet2024,
  incomeStatement2024,
  cashFlow2024,
  changesInEquity2024,
  formatRupiah,
  checkConsistency,
} from '../data/financials'
import { useEffect } from 'react'

const data = [
  { month: 'Jan', seriesA: 10, seriesB: 5 },
  { month: 'Feb', seriesA: 35, seriesB: 25 },
  { month: 'Mar', seriesA: 60, seriesB: 50 },
  { month: 'Apr', seriesA: 90, seriesB: 70 },
  { month: 'May', seriesA: 75, seriesB: 60 },
  { month: 'Jun', seriesA: 110, seriesB: 95 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const c = checkConsistency()
    // eslint-disable-next-line no-console
    console.log('Financials consistency:', c)
  }, [])

  return (
    <div className="min-h-screen bg-bg p-6">
      <header className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-extrabold text-primary">Financial Reporting</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <p className="text-lg">Total Revenue</p>
          <h3 className="text-4xl font-extrabold text-primary mt-4">Rp250 M</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <p className="text-lg">Net Profit</p>
          <h3 className="text-4xl font-extrabold text-primary mt-4">Rp75 M</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <p className="text-lg">Cash Flow</p>
          <h3 className="text-4xl font-extrabold text-primary mt-4">Rp30 M</h3>
        </div>

        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-md mt-4">
          <p className="font-medium mb-4">Forecasting Chart (Next 6 Months)</p>
          <div className="bg-gray-50 rounded p-2 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="seriesA" stroke="#2f7a4f" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="seriesB" stroke="#9ea39f" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-primary text-white rounded-2xl p-6 shadow-md mt-4">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo-white.png" alt="icon" className="w-16" />
          </div>
          <h4 className="text-xl text-center">Green Impact & Financial Correlation</h4>
          <div className="mt-6 text-sm">
            <div className="flex justify-between"><span>Carbon Saved:</span><span>2.5 Tons</span></div>
            <div className="flex justify-between"><span>Green Profit Contribution:</span><span>15%</span></div>
          </div>
          <div className="mt-4 bg-white h-3 rounded-full overflow-hidden">
            <div className="h-3 bg-green-600 w-1/4"></div>
          </div>
        </div>
      </main>

      {/* Tabbed financial statements */}
      <section className="mt-8 bg-white rounded-xl p-4 shadow">
        <div className="flex flex-col">
          <div className="border-b">
            <TabNav active={activeTab} setActive={setActiveTab} />
          </div>
          <div className="mt-4">
            <TabPanels active={activeTab} />
          </div>
        </div>
      </section>
    </div>
  )
}
function TabNav({ active, setActive }: { active: number; setActive: (n: number) => void }) {
  const tabs = ['Balance Sheet', 'Income Statement', 'Cash Flow Statement', 'Changes in Equity']

  return (
    <div className="flex gap-6 items-center px-2">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => setActive(i)}
          className={`py-3 text-sm font-medium ${i === active ? 'text-green-700 border-b-2 border-green-500' : 'text-gray-600 hover:text-gray-800'}`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

function TabPanels({ active }: { active: number }) {
  const panels = [
    <div key="bs" className="text-sm text-gray-700">
      <table className="w-full text-left">
        <tbody>
          <tr>
            <td>Cash and Cash Equivalents</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.cash)}</td>
          </tr>
          <tr>
            <td>Trade Receivables</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.tradeReceivables)}</td>
          </tr>
          <tr>
            <td>Inventories</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.inventories)}</td>
          </tr>
          <tr>
            <td>Property, Plant & Equipment (net)</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.ppeNet)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Total Assets</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.totalAssets)}</td>
          </tr>
          <tr>
            <td>Trade Payables</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.tradePayables)}</td>
          </tr>
          <tr>
            <td>Long-term Borrowings</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.longTermBorrowings)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Total Liabilities</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.totalLiabilities)}</td>
          </tr>
          <tr>
            <td>Share Capital</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.shareCapital)}</td>
          </tr>
          <tr>
            <td>Retained Earnings</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.retainedEarnings)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Total Equity</td>
            <td className="text-right">{formatRupiah(balanceSheet2024.totalEquity)}</td>
          </tr>
        </tbody>
      </table>
    </div>,

    <div key="is" className="text-sm text-gray-700">
      <table className="w-full text-left">
        <tbody>
          <tr>
            <td>Revenue</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.revenue)}</td>
          </tr>
          <tr>
            <td>Cost of Goods Sold</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.cogs)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Gross Profit</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.grossProfit)}</td>
          </tr>
          <tr>
            <td>Operating Expenses</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.operatingExpenses)}</td>
          </tr>
          <tr className="font-semibold">
            <td>EBIT</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.ebit)}</td>
          </tr>
          <tr>
            <td>Interest Expense</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.interestExpense)}</td>
          </tr>
          <tr>
            <td>Profit Before Tax</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.profitBeforeTax)}</td>
          </tr>
          <tr>
            <td>Tax Expense</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.taxExpense)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Net Income</td>
            <td className="text-right">{formatRupiah(incomeStatement2024.netIncome)}</td>
          </tr>
        </tbody>
      </table>
    </div>,

    <div key="cf" className="text-sm text-gray-700">
      <table className="w-full text-left">
        <tbody>
          <tr>
            <td>Opening Cash</td>
            <td className="text-right">{formatRupiah(cashFlow2024.openingCash)}</td>
          </tr>
          <tr>
            <td>Cash from Operations</td>
            <td className="text-right">{formatRupiah(cashFlow2024.cashFromOperations)}</td>
          </tr>
          <tr>
            <td>Cash from Investing</td>
            <td className="text-right">{formatRupiah(cashFlow2024.cashFromInvesting)}</td>
          </tr>
          <tr>
            <td>Cash from Financing</td>
            <td className="text-right">{formatRupiah(cashFlow2024.cashFromFinancing)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Net Change in Cash</td>
            <td className="text-right">{formatRupiah(cashFlow2024.netChangeInCash)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Closing Cash</td>
            <td className="text-right">{formatRupiah(cashFlow2024.closingCash)}</td>
          </tr>
        </tbody>
      </table>
    </div>,

    <div key="ce" className="text-sm text-gray-700">
      <table className="w-full text-left">
        <tbody>
          <tr>
            <td>Opening Retained Earnings</td>
            <td className="text-right">{formatRupiah(changesInEquity2024.openingRetainedEarnings)}</td>
          </tr>
          <tr>
            <td>Net Income</td>
            <td className="text-right">{formatRupiah(changesInEquity2024.netIncome)}</td>
          </tr>
          <tr>
            <td>Dividends</td>
            <td className="text-right">{formatRupiah(changesInEquity2024.dividends)}</td>
          </tr>
          <tr className="font-semibold">
            <td>Closing Retained Earnings</td>
            <td className="text-right">{formatRupiah(changesInEquity2024.closingRetainedEarnings)}</td>
          </tr>
        </tbody>
      </table>
    </div>,
  ]

  return <div className="p-2 text-sm text-gray-700">{panels[active]}</div>
}
