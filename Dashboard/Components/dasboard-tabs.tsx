'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface SubCategory {
  id: string
  name: string
  icon: string
  description: string
  connected?: boolean
}

interface TabCategory {
  id: string
  label: string
  subCategories?: SubCategory[]
}

const TABS: TabCategory[] = [
  { 
    id: 'credit', 
    label: 'Credit',
    subCategories: [
      {
        id: 'cibil',
        name: 'CIBIL Score',
        icon: '📊',
        description: 'View your credit score and history',
      },
    ],
  },
  { 
    id: 'social', 
    label: 'Social',
    subCategories: [
      {
        id: 'discord',
        name: 'Discord',
        icon: '🎮',
        description: 'Connect your Discord account to identify your reputation.',
        connected: true,
      },
      {
        id: 'instagram',
        name: 'Instagram',
        icon: '📸',
        description: 'Connect to Instagram to verify your social media presence.',
        connected: false,
      },
      {
        id: 'twitter',
        name: 'Twitter',
        icon: '𝕏',
        description: 'Connect to Twitter to verify your social media presence.',
        connected: false,
      },
    ],
  },
  { 
    id: 'intellectual', 
    label: 'Intellectual',
    subCategories: [
      {
        id: 'github',
        name: 'GitHub',
        icon: '🖥️',
        description: 'Connect your GitHub profile',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        icon: '🖇️',
        description: 'Connect your LinkedIn profile',
      },
    ],
  },
  { 
    id: 'gaming', 
    label: 'Gaming',
    subCategories: [
      {
        id: 'sorare',
        name: 'Sorare',
        icon: '🎮',
        description: 'Connect your Sorare gaming profile',
      },
      {
        id: 'atlas',
        name: 'The Atlas',
        icon: '🗺️',
        description: 'Connect your Atlas gaming profile',
      },
      {
        id: 'decentraland',
        name: 'Decentraland',
        icon: '🌍',
        description: 'Connect your Decentraland profile',
      },
    ],
  },
  { 
    id: 'on-chain', 
    label: 'On-chain Activities',
    subCategories: [
      {
        id: 'dune',
        name: 'Dune',
        icon: '📈',
        description: 'View your Dune Analytics',
      },
      {
        id: 'nansen',
        name: 'Nansen',
        icon: '📊',
        description: 'Connect your Nansen profile',
      },
    ],
  },
]

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState<string>('social')
  const [expandedTab, setExpandedTab] = useState<string>('social')

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setExpandedTab(tabId)
  }

  const activeTabData = TABS.find((tab) => tab.id === activeTab)

  return (
    <div className="rounded-2xl bg-[#060709] p-6">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`group flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white/10 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
            {tab.subCategories && (
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  expandedTab === tab.id ? 'rotate-180' : ''
                }`}
              />
            )}
          </button>
        ))}
      </div>

      {/* Single Subcategories Section */}
      {activeTabData?.subCategories && (
        <div className="mt-4 grid gap-4 md:grid-cols-2 animate-fadeIn">
          {activeTabData.subCategories.map((subCat) => (
            <div
              key={subCat.id}
              className="p-4 rounded-xl bg-[#1c1d29] flex items-center justify-between hover:bg-[#2a2b3d] transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#14151f] flex items-center justify-center text-xl">
                  {subCat.icon}
                </div>
                <div>
                  <h4 className="font-medium">{subCat.name}</h4>
                  <p className="text-sm text-gray-400">{subCat.description}</p>
                </div>
              </div>
              <button
                className={`px-4 py-2 rounded-lg text-sm ${
                  subCat.connected
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {subCat.connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

