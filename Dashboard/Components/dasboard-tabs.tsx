'use client'

import { useState } from 'react'

const TABS = [
  { id: 'credit', label: 'Credit' },
  { id: 'social', label: 'Social' },
  { id: 'professional', label: 'Professional' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'on-chain', label: 'On-chain Activities' },
  { id: 'legal', label: 'Legal Identity' },
]

const SOCIAL_CONNECTIONS = [
  {
    id: 'discord',
    name: 'Discord',
    icon: '🎮',
    description: 'Connect your Discord account to identify your reputation.',
    connected: true,
  },
  {
    id: 'google',
    name: 'Google',
    icon: 'G',
    description: 'Connect to Google to verify your email address.',
    connected: false,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📸',
    description: 'Connect to Instagram to verify your social media presence.',
    connected: false,
  },
  {
    id: 'x',
    name: 'X',
    icon: '𝕏',
    description: 'Connect to Twitter to verify your social media presence.',
    connected: false,
  },
]

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState('social')

  return (
    <div className="rounded-2xl bg-[#14151f] p-6">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-white/10 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {SOCIAL_CONNECTIONS.map((connection) => (
          <div
            key={connection.id}
            className="p-4 rounded-xl bg-[#1c1d29] flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#14151f] flex items-center justify-center text-xl">
                {connection.icon}
              </div>
              <div>
                <h4 className="font-medium">{connection.name}</h4>
                <p className="text-sm text-gray-400">{connection.description}</p>
              </div>
            </div>
            <button
              className={`px-4 py-2 rounded-lg text-sm ${
                connection.connected
                  ? 'bg-green-500/20 text-green-500'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {connection.connected ? 'Connected' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

