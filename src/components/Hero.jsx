import { Check, Bell } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.15),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.15),transparent_25%)]" />
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The marketplace for pay-per-call live transfers
            </h2>
            <p className="mt-4 text-slate-300">
              Buyers set targeting and bids. Sellers deliver high-intent calls. We handle routing, tracking, and billing automatically.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-emerald-400"/> Qualified after 90–120s</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-emerald-400"/> Realtime balance & spend</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-emerald-400"/> Campaign acceptances & notifications</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#create" className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium">Create Campaign</a>
              <a href="#market" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium flex items-center gap-2"><Bell className="h-4 w-4"/> See Open Campaigns</a>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-slate-200">
            <p className="text-sm text-slate-400">Demo-only UI</p>
            <div className="mt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-lg">Min balance to receive calls: <span className="text-emerald-400 font-semibold">$50</span></div>
              <div className="bg-slate-900/60 p-3 rounded-lg">Min bid per call: <span className="text-emerald-400 font-semibold">$35</span></div>
              <div className="bg-slate-900/60 p-3 rounded-lg">Billable: <span className="text-emerald-400 font-semibold">90–120s</span></div>
              <div className="bg-slate-900/60 p-3 rounded-lg">Routing: <span className="text-emerald-400 font-semibold">Twilio DID</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
