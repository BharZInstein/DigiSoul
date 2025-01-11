import { DashboardProfile } from '@/components/dashboard-profile'
import { DashboardTabs } from '@/components/dasboard-tabs'
import { SolidScore } from '@/components/solid-score'
import { ScoreCategories } from '@/components/score-categories'
import { WalletValue } from '@/components/wallet-value'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0b14] to-[#12131f] text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <DashboardProfile 
            name="Bharghav"
            walletId="0xCa...6C25"
          />
          <div className="space-y-6">
            <SolidScore score={360} maxScore={800} increase={32} />
            <ScoreCategories />
            <WalletValue />
          </div>
        </div>
        <DashboardTabs />
      </div>
    </main>
  )
}

