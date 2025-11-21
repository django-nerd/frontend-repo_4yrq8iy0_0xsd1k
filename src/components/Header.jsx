import { PhoneCall, DollarSign, Radio } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-slate-800/60 bg-slate-900/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
            <PhoneCall className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-white font-semibold leading-tight">Live Transfers Exchange</h1>
            <p className="text-xs text-slate-400">Buy and sell high-intent live transfer calls</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> Min bid $35</div>
          <div className="flex items-center gap-2"><Radio className="h-4 w-4" /> Real-time tracking</div>
        </div>
      </div>
    </header>
  )
}
