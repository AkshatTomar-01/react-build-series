export default function JobCard({ logo, company, posted, title, tags, salary, location, saved }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center">
        <img src={logo} alt={company} className="w-10 h-10 rounded-full object-contain border border-gray-100" />
        <button className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg font-medium ${saved ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'}`}>
          🔖 {saved ? 'Saved' : 'Save'}
        </button>
      </div>

      {/* Company + Title */}
      <div>
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-gray-900">{company}</span>&nbsp;&nbsp;{posted}
        </p>
        <h2 className="text-xl font-bold text-gray-900 mt-1">{title}</h2>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-lg">{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto pt-2">
        <div>
          <p className="font-bold text-gray-900">{salary}</p>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
        <button className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors">
          Apply now
        </button>
      </div>
    </div>
  )
}
