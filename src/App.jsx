import Header from './components/Header'
import Hero from './components/Hero'
import CampaignForm from './components/CampaignForm'
import QuickStart from './components/QuickStart'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(16,185,129,0.1),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(20,184,166,0.08),transparent_30%)]" />
      <Header />
      <Hero />
      <QuickStart />
      <CampaignForm />
      <footer className="py-10 text-center text-slate-500">© {new Date().getFullYear()} Live Transfers Exchange</footer>
    </div>
  )
}

export default App
