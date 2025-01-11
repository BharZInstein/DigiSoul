interface ScoreCategoryProps {
    label: string
    score: number
    maxScore: number
    color: string
  }
  
  export function ScoreCategories() {
    const categories = [
      { label: 'Soul Score', score: 360, maxScore: 800, color: 'from-emerald-500 to-teal-500' },
      { label: 'Credit Score', score: 725, maxScore: 900, color: 'from-blue-500 to-cyan-500' },
      { label: 'Intellectual', score: 82, maxScore: 100, color: 'from-violet-500 to-purple-500' },
      { label: 'Social Score', score: 648, maxScore: 1000, color: 'from-pink-500 to-rose-500' },
    ]
  
    return (
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div 
            key={category.label} 
            className="rounded-xl bg-[#1c1d29] p-4 hover:bg-[#2a2b3d] transition-all duration-300"
          >
            <div className="text-sm text-gray-400 mb-1">{category.label}</div>
            <div className="flex items-end gap-2">
              <div className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.score}
              </div>
              <div className="text-xs text-gray-500 mb-1">/ {category.maxScore}</div>
            </div>
            <div className="relative h-1 bg-[#14151f] rounded-full overflow-hidden mt-2">
              <div 
                className={`absolute left-0 top-0 h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                style={{ width: `${(category.score / category.maxScore) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  