const CardSkeleton = () => (
  <div className="relative group transform transition-all duration-300 hover:scale-[1.02]">
    <div className="bg-gradient-to-b from-[#1e1e2e]/90 to-[#1e1e2e]/80 rounded-xl border border-[#313244]/30 overflow-hidden h-[320px] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-8 space-y-6">
        {/* Header shimmer */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />
            <div className="space-y-2.5">
              <div className="w-28 h-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse" />
              <div className="w-24 h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse" />
            </div>
          </div>
          <div className="w-20 h-9 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl animate-pulse" />
        </div>

        {/* Title shimmer */}
        <div className="space-y-3">
          <div className="w-3/4 h-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl animate-pulse" />
          <div className="w-1/2 h-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl animate-pulse" />
        </div>

        {/* Code block shimmer */}
        <div className="space-y-3 bg-black/40 rounded-xl p-6 backdrop-blur-md border border-gray-800/30">
          <div className="w-full h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse" />
          <div className="w-4/5 h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse" />
          <div className="w-2/3 h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

export default function SnippetsPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Enhanced ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[20%] -right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-8">
          <div className="w-56 h-9 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full mx-auto animate-pulse" />
          <div className="w-[440px] h-14 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl mx-auto animate-pulse" />
          <div className="w-80 h-7 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl mx-auto animate-pulse" />
        </div>

        {/* Search and Filters Skeleton */}
        <div className="max-w-5xl mx-auto mb-16 space-y-8">
          {/* Search bar */}
          <div className="relative">
            <div className="w-full h-16 bg-gradient-to-r from-[#1e1e2e]/90 to-[#1e1e2e]/80 rounded-2xl border border-[#313244]/40 animate-pulse shadow-lg backdrop-blur-sm" />
          </div>

          {/* Language filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-28 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl animate-pulse"
                style={{
                  animationDelay: `${i * 150}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              style={{
                animationDelay: `${i * 150}ms`,
              }}
            >
              <CardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}