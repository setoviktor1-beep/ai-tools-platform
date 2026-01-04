export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div id="home" className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              V.S.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Viktor Seto
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            AI Tools & Premium Prompts
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Building the future of AI-powered productivity. Professional prompt engineering, SaaS solutions, and logistics optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#prompts" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Explore Prompts
            </a>
            <a href="#portfolio" className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-all transform hover:scale-105">
              View Portfolio
            </a>
          </div>

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

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Building in Public</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prompts Section */}
      <div id="prompts" className="min-h-screen px-4 py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Premium Prompt Library</h2>
          <p className="text-gray-400 text-center mb-16 text-lg">Professional-grade prompts for developers, marketers, and creators</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">🧠 Code Generation</h3>
              <p className="text-gray-400 mb-4">Advanced prompts for generating production-ready code across multiple languages</p>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Coming Soon</span>
            </div>
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">📊 Business Strategy</h3>
              <p className="text-gray-400 mb-4">Strategic analysis, market research, and business planning frameworks</p>
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Coming Soon</span>
            </div>
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-pink-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">✍️ Content Creation</h3>
              <p className="text-gray-400 mb-4">SEO-optimized articles, social media, and creative writing prompts</p>
              <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="min-h-screen px-4 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Portfolio</h2>
          <p className="text-gray-400 text-center mb-16 text-lg">AI-powered projects and case studies</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🚚</div>
                <h3 className="text-2xl font-bold text-white">TaskRoute AI</h3>
              </div>
              <p className="text-gray-400 mb-4">Logistics optimization SaaS with Gemini AI integration. Reduces delivery time by 10% through intelligent route planning.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Gemini AI</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">SaaS</span>
              </div>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🧠</div>
                <h3 className="text-2xl font-bold text-white">Anatomijos LLM</h3>
              </div>
              <p className="text-gray-400 mb-4">Custom LLM trained on anatomy terminology using Transformer architecture. 75% loss reduction over 3 training epochs.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Transformers</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">ML</span>
              </div>
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