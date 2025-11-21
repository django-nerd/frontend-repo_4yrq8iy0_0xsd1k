import { useState } from 'react'

const VERTICALS = [
  'Mortgage',
  'Medicare',
  'ACA Health Insurance',
  'Final Expense Insurance',
  'Debt',
  'Solar',
  'Business Loans',
  'Home Services'
]

export default function CampaignForm() {
  const [form, setForm] = useState({
    vertical: VERTICALS[0],
    price_per_call: 35,
    daily_cap: 10,
    states: '',
    time_start: '09:00',
    time_end: '17:00',
    buyer_id: '',
  })
  const [message, setMessage] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: name === 'price_per_call' || name === 'daily_cap' ? Number(value) : value }))
  }

  const create = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const statesArr = form.states.split(',').map(s => s.trim().toUpperCase()).filter(Boolean)
      const payload = { ...form, states: statesArr }
      const res = await fetch(`${baseUrl}/campaigns`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to create campaign')
      setMessage(`Campaign created. ID: ${data.id}`)
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <section id="create" className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-xl font-semibold text-white mb-4">Create a Campaign</h3>
      <form onSubmit={create} className="grid md:grid-cols-2 gap-4 bg-slate-800/60 border border-slate-700 rounded-xl p-6">
        <div>
          <label className="block text-slate-300 text-sm mb-1">Buyer ID</label>
          <input name="buyer_id" value={form.buyer_id} onChange={handleChange} className="w-full bg-slate-900 text-white rounded px-3 py-2 border border-slate-700" placeholder="Paste created Buyer ID" required />
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Vertical</label>
          <select name="vertical" value={form.vertical} onChange={handleChange} className="w-full bg-slate-900 text-white rounded px-3 py-2 border border-slate-700">
            {VERTICALS.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Price per Call ($, min 35)</label>
          <input type="number" min={35} step="1" name="price_per_call" value={form.price_per_call} onChange={handleChange} className="w-full bg-slate-900 text-white rounded px-3 py-2 border border-slate-700" />
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">Calls per Day</label>
          <input type="number" min={1} step="1" name="daily_cap" value={form.daily_cap} onChange={handleChange} className="w-full bg-slate-900 text-white rounded px-3 py-2 border border-slate-700" />
        </div>
        <div>
          <label className="block text-slate-300 text-sm mb-1">States (comma-separated)</label>
          <input name="states" value={form.states} onChange={handleChange} className="w-full bg-slate-900 text-white rounded px-3 py-2 border border-slate-700" placeholder="CA, TX, FL" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-300 text-sm mb-1">Start</label>
            <input type="time" name="time_start" value={form.time_start} onChange={handleChange} className="w-full bg-slate-900 text-white rounded px-3 py-2 border border-slate-700" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-1">End</label>
            <input type="time" name="time_end" value={form.time_end} onChange={handleChange} className="w-full bg-slate-900 text-white rounded px-3 py-2 border border-slate-700" />
          </div>
        </div>
        <div className="md:col-span-2 flex justify-end gap-3">
          <button type="submit" className="px-4 py-2 rounded bg-emerald-500 text-white hover:bg-emerald-600">Create</button>
        </div>
        {message && <p className="md:col-span-2 text-sm text-emerald-300">{message}</p>}
      </form>
    </section>
  )
}
