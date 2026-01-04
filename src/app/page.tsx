export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                V.S.
              </div>
              <span className="text-gray-600">Viktor Seto</span>
            </div>
            <div className="flex gap-6">
              <a href="#prompts" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">Prompts</a>
              <a href="#tools" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">Tools</a>
              <a href="#contact" className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-all font-medium">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-violet-100 rounded-full">
            <span className="text-violet-700 font-semibold text-sm">🚀 AI Tools & Premium Prompts</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-violet-800 to-indigo-900 bg-clip-text text-transparent">
              Build Faster with
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              AI-Powered Tools
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional prompt engineering and AI automation tools for developers, marketers, and entrepreneurs. 
            <strong className="text-gray-900"> Build your AI-powered future today.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#prompts" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all transform hover:scale-105">
              Explore Premium Prompts
            </a>
            <a href="#tools" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-violet-600 hover:text-violet-600 transition-all">
              View AI Tools
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-violet-600">100+</div>
              <div className="text-gray-600 text-sm">Premium Prompts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">5+</div>
              <div className="text-gray-600 text-sm">AI Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose V.S. Platform?</h2>
            <p className="text-gray-600 text-lg">Everything you need to supercharge your AI workflow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get instant results with optimized prompts and tools built for speed</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Engineered</h3>
              <p className="text-gray-600">Hand-crafted prompts tested across multiple AI models for maximum accuracy</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Always Evolving</h3>
              <p className="text-gray-600">Regular updates with new prompts and tools as AI technology advances</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prompts Section */}
      <section id="prompts" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Prompt Library</h2>
            <p className="text-gray-600 text-lg">Professional-grade prompts for every use case</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-violet-500 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💻</span>
                <h3 className="text-xl font-bold text-gray-900">Code Generation</h3>
              </div>
              <p className="text-gray-600 mb-4">Production-ready code across Python, JavaScript, TypeScript, and more</p>
              <div className="flex items-center justify-between">
                <span className="text-violet-600 font-semibold">50+ Prompts</span>
                <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Coming Soon</span>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-500 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <h3 className="text-xl font-bold text-gray-900">Business Strategy</h3>
              </div>
              <p className="text-gray-600 mb-4">Market analysis, competitor research, and strategic planning frameworks</p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-semibold">30+ Prompts</span>
                <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Coming Soon</span>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-purple-500 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✍️</span>
                <h3 className="text-xl font-bold text-gray-900">Content Creation</h3>
              </div>
              <p className="text-gray-600 mb-4">SEO articles, social media content, and creative copywriting</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-600 font-semibold">40+ Prompts</span>
                <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl mb-8 text-violet-100">Join the V.S. platform and get early access to premium AI tools</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-violet-600 rounded-full font-bold hover:bg-gray-100 transition-all">
              Get Early Access
            </button>
          </div>
          
          <p className="text-sm text-violet-200 mt-4">🎉 Limited spots available for founding members</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">V.S.</div>
              <span className="text-gray-500">Viktor Seto</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2026 Viktor Seto. Building the future, one prompt at a time.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}