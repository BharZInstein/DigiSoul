interface DashboardProfileProps {
    name: string
    walletId: string
    solidPoints: number
    multiplier: number
    avatarUrl: string
  }
  
  export function DashboardProfile({ 
    name, 
    walletId, 
    solidPoints, 
    multiplier,
    avatarUrl 
  }: DashboardProfileProps) {
    return (
      <div className="rounded-2xl bg-[#14151f] p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <img
              src={avatarUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <button className="px-4 py-2 text-sm bg-[#1c1d29] rounded-lg hover:bg-[#2a2b3d] transition-colors">
            Edit profile
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-400 flex items-center gap-2">
              {walletId}
              <button className="hover:text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span>SOLID Points</span>
              <span className="font-bold">{solidPoints}</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <span>Multiplier</span>
              <span className="font-bold">{multiplier}x</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  