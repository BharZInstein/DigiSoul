interface SolidScoreProps {
  score: number
  maxScore: number
  increase: number
}

export function SolidScore({ score, maxScore, increase }: SolidScoreProps) {
  const percentage = (score / maxScore) * 100

  return (
    <div className="rounded-2xl bg-[#14151f] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">SOLID Score</h3>
        <button className="text-gray-400 hover:text-gray-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      
      <div className="flex items-end gap-4 mb-4">
        <div className="text-5xl font-bold text-[#22c55e]">{score}</div>
        <div className="text-green-500 mb-2">+{increase}↑</div>
      </div>
      
      <div className="relative h-2 bg-[#1c1d29] rounded-full overflow-hidden">
        <div 
          className="absolute left-0 top-0 h-full bg-[#22c55e] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="mt-2 text-right text-sm text-gray-400">
        {maxScore}
      </div>
    </div>
  )
}

