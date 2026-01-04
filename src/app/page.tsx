export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Logo/Brand */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              V.S.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Viktor Seto
            </p>
          </div>

          {/* Tagline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            AI Tools & Premium Prompts
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Building the future of AI-powered productivity. 
            Professional prompt engineering, SaaS solutions, and logistics optimization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="#prompts" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Explore Prompts
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-all transform hover:scale-105"
            >
              View Portfolio
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Prompts</h3>
              <p className="text-gray-400">Hand-crafted prompts for maximum AI performance</p>
            </div>

            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">AI SaaS Tools</h3>
              <p className="text-gray-400">TaskRoute AI and custom solutions</p>
            </div>

            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-pink-500 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Portfolio</h3>
              <p className="text-gray-400">AI engineering projects and case studies</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Building in Public</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="text-center text-gray-500">
          <p>© 2026 Viktor Seto. Building the future, one prompt at a time.</p>
        </div>
      </footer>
    </div>
  );
}