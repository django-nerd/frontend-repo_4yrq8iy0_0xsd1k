import { useEffect, useState } from 'react'
import { UserPlus, Wallet, Megaphone } from 'lucide-react'

export default function QuickStart() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [buyer, setBuyer] = useState(null)
  const [seller, setSeller] = useState(null)
  const [balance, setBalance] = useState(null)
  const [message, setMessage] = useState('')

  const createUser = async (role) => {
    setMessage('')
    const payload = {
      name: role === 'buyer' ? 'Buyer Demo' : 'Seller Demo',
      email: `${role}${Math.floor(Math.random()*100000)}@demo.test`,
      role,
      company: 'Demo Co'
    }
    const res = await fetch(`${baseUrl}/users`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (!res.ok) return setMessage(data.detail || 'Failed')
    if (role === 'buyer') setBuyer(data.id)
    if (role === 'seller') setSeller(data.id)
  }

  const topup = async () => {
    setMessage('')
    if (!buyer) return setMessage('Create a buyer first')
    const res = await fetch(`${baseUrl}/wallet/topup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user_id: buyer, amount: 100 }) })
    const data = await res.json()
    if (!res.ok) return setMessage(data.detail || 'Topup failed')
    setBalance(data.balance)
  }

  useEffect(() => {
    if (buyer) {
      fetch(`${baseUrl}/wallet/balance/${buyer}`).then(r=>r.json()).then(d=>setBalance(d.balance))
    }
  }, [buyer])

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-xl font-semibold text-white mb-4">Quick demo setup</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-slate-200">
          <div className="flex items-center gap-2 text-white font-medium mb-2"><UserPlus className="h-5 w-5 text-emerald-400"/> Create users</div>
          <div className="space-x-2">
            <button onClick={()=>createUser('buyer')} className="px-3 py-2 bg-slate-900 rounded border border-slate-700 hover:bg-slate-800">Create Buyer</button>
            <button onClick={()=>createUser('seller')} className="px-3 py-2 bg-slate-900 rounded border border-slate-700 hover:bg-slate-800">Create Seller</button>
          </div>
          {buyer && <p className="mt-2 text-xs">Buyer ID: <span className="text-emerald-300">{buyer}</span></p>}
          {seller && <p className="mt-1 text-xs">Seller ID: <span className="text-emerald-300">{seller}</span></p>}
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-slate-200">
          <div className="flex items-center gap-2 text-white font-medium mb-2"><Wallet className="h-5 w-5 text-emerald-400"/> Fund buyer wallet</div>
          <button onClick={topup} className="px-3 py-2 bg-slate-900 rounded border border-slate-700 hover:bg-slate-800">Add $100</button>
          {balance !== null && <p className="mt-2 text-xs">Balance: <span className="text-emerald-300">${balance}</span></p>}
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-slate-200">
          <div className="flex items-center gap-2 text-white font-medium mb-2"><Megaphone className="h-5 w-5 text-emerald-400"/> Next steps</div>
          <ul className="list-disc list-inside text-sm text-slate-300">
            <li>Use Buyer ID in the form to create a campaign</li>
            <li>Seller can accept the campaign</li>
            <li>Admin assigns routing once transfer number is set</li>
          </ul>
        </div>
      </div>
      {message && <p className="text-rose-300 text-sm mt-3">{message}</p>}
    </section>
  )
}
