interface WalletValueProps {
    value: number
    connectedWallets: number
  }
  
  export function WalletValue({ value, connectedWallets }: WalletValueProps) {
    return (
      <div className="rounded-2xl bg-[#14151f] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Wallet Value</h3>
          <button className="text-gray-400 hover:text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="text-3xl font-bold mb-2">
          ${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-blue-400">
          <span>{connectedWallets} WALLETS CONNECTED</span>
          <div className="flex -space-x-2">
            {Array.from({ length: connectedWallets }).map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gray-700 border-2 border-[#14151f]"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  