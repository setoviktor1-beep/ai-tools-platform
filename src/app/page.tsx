export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - WORKING LINKS */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">V.S.</div>
              <span className="text-gray-800 font-semibold">Viktor Seto</span>
            </a>
            <div className="flex gap-6 items-center">
              <a href="#about" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">About</a>
              <a href="#prompts" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Prompts</a>
              <a href="#pricing" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Pricing</a>
              <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all font-semibold">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-5 py-2 bg-violet-100 rounded-full mb-6">
            <span className="text-violet-700 font-bold text-sm">🚀 Premium AI Tools Platform</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-violet-900 bg-clip-text text-transparent">Build Faster With</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">AI-Powered Prompts</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Professional prompt engineering for developers, marketers, and entrepreneurs. <strong className="text-gray-900">30+ premium prompts</strong> ready to use.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#prompts" className="px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all">Explore Prompts →</a>
            <a href="#about" className="px-10 py-4 border-2 border-gray-300 rounded-full font-bold text-lg hover:border-violet-600 hover:text-violet-600 transition-all">Learn More</a>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div><div className="text-4xl font-bold text-violet-600">30+</div><div className="text-gray-600 text-sm">Prompts</div></div>
            <div><div className="text-4xl font-bold text-indigo-600">3</div><div className="text-gray-600 text-sm">Categories</div></div>
            <div><div className="text-4xl font-bold text-purple-600">100%</div><div className="text-gray-600 text-sm">Quality</div></div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - FILLED */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">About Viktor Seto</h2>
            <p className="text-xl text-gray-600">AI Engineer • Prompt Specialist • SaaS Builder</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-violet-600 mb-4">From Logistics to AI</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed"><strong>8-12 years</strong> managing logistics teams at Domino's Pizza and CIBUS Restaurants. Achieved <strong>10% reduction</strong> in production time through process optimization.</p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">Now transitioning into <strong>AI engineering and SaaS development</strong>, building AI-powered tools that solve real business problems.</p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed"><strong>Multilingual:</strong> Polish, Lithuanian, Russian, English, French</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border-2 border-violet-200">
                  <div className="text-3xl mb-2">💻</div>
                  <div className="font-bold text-gray-900">Python & AI</div>
                  <div className="text-sm text-gray-600">Building AI tools</div>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-indigo-200">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-gray-900">SaaS Dev</div>
                  <div className="text-sm text-gray-600">Next.js apps</div>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-purple-200">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-bold text-gray-900">Logistics</div>
                  <div className="text-sm text-gray-600">10% faster ops</div>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-pink-200">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-bold text-gray-900">Prompts</div>
                  <div className="text-sm text-gray-600">30+ created</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-violet-100 to-indigo-100 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2"><span>🎯</span> Mission</h4>
                <p className="text-gray-800 text-lg">Build AI tools and prompts that make professionals 10x more productive every single day.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2"><span>💡</span> Vision</h4>
                <p className="text-gray-800 text-lg">Create the #1 platform for premium AI prompts and tools for developers and marketers worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMPTS SECTION - 30 PROMPTS */}
      <section id="prompts" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Premium Prompt Library</h2>
            <p className="text-xl text-gray-600 mb-2">30+ Professional prompts across 3 categories</p>
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full"><span className="text-green-700 font-bold text-sm">✨ Ready to use!</span></div>
          </div>

          {/* Code Generation - 10 prompts */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">💻</span>
              <div><h3 className="text-3xl font-bold text-gray-900">Code Generation</h3><p className="text-gray-600">Production-ready code for multiple languages</p></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🔧 Full-Stack API Builder</h4>
                <p className="text-sm text-gray-600 mb-3">Complete REST API with auth, validation, database models</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Node.js</span><span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">Express</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">⚛️ React Component Generator</h4>
                <p className="text-sm text-gray-600 mb-3">Reusable components with TypeScript and tests</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">React</span><span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-medium">TypeScript</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🐍 Python Data Pipeline</h4>
                <p className="text-sm text-gray-600 mb-3">ETL pipelines with pandas and error handling</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded font-medium">Python</span><span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded font-medium">Pandas</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🗄️ SQL Query Optimizer</h4>
                <p className="text-sm text-gray-600 mb-3">Optimized queries with indexes and performance</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded font-medium">SQL</span><span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded font-medium">PostgreSQL</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎨 CSS Animation Creator</h4>
                <p className="text-sm text-gray-600 mb-3">Smooth CSS animations and Tailwind transitions</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded font-medium">CSS</span><span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded font-medium">Tailwind</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🧪 Unit Test Generator</h4>
                <p className="text-sm text-gray-600 mb-3">Test suites with edge cases and mocks</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded font-medium">Jest</span><span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded font-medium">Testing</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🔐 Authentication System</h4>
                <p className="text-sm text-gray-600 mb-3">Secure auth with JWT and password hashing</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-medium">Auth</span><span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded font-medium">JWT</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📱 Mobile App Scaffold</h4>
                <p className="text-sm text-gray-600 mb-3">React Native with navigation and state</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">React Native</span><span className="text-xs px-2 py-1 bg-violet-100 text-violet-700 rounded font-medium">Mobile</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">⚙️ Webpack Config</h4>
                <p className="text-sm text-gray-600 mb-3">Optimized webpack for production builds</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded font-medium">Webpack</span><span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-700 rounded font-medium">Build</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🤖 AI Model Integration</h4>
                <p className="text-sm text-gray-600 mb-3">OpenAI/Anthropic/Google AI API integration</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-medium">AI</span><span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded font-medium">API</span></div>
              </div>
            </div>
          </div>

          {/* Business Strategy - 10 prompts */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">📊</span>
              <div><h3 className="text-3xl font-bold text-gray-900">Business Strategy</h3><p className="text-gray-600">Market analysis and strategic frameworks</p></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Competitive Analysis</h4>
                <p className="text-sm text-gray-600 mb-3">SWOT analysis and market positioning</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Research</span><span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded font-medium">SWOT</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">💼 Go-to-Market Strategy</h4>
                <p className="text-sm text-gray-600 mb-3">Complete GTM with target audience and KPIs</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-medium">GTM</span><span className="text-xs px-2 py-1 bg-violet-100 text-violet-700 rounded font-medium">Launch</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📈 Growth Hacking</h4>
                <p className="text-sm text-gray-600 mb-3">Viral loops and acquisition strategies</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">Growth</span><span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-medium">Viral</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">💰 Pricing Strategy</h4>
                <p className="text-sm text-gray-600 mb-3">Pricing tiers and value-based models</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">Pricing</span><span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded font-medium">Revenue</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🚀 Product Roadmap</h4>
                <p className="text-sm text-gray-600 mb-3">Quarterly roadmaps with prioritization</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Product</span><span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded font-medium">Planning</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📊 Financial Projections</h4>
                <p className="text-sm text-gray-600 mb-3">3-year models with revenue forecasts</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">Finance</span><span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded font-medium">Forecast</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎪 Event Marketing</h4>
                <p className="text-sm text-gray-600 mb-3">Conferences and webinar planning</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded font-medium">Events</span><span className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded font-medium">Marketing</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🤝 Partnership Strategy</h4>
                <p className="text-sm text-gray-600 mb-3">Strategic partners with win-win proposals</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-medium">Partnerships</span><span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded font-medium">B2B</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📱 Customer Journey</h4>
                <p className="text-sm text-gray-600 mb-3">User touchpoints and conversion optimization</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded font-medium">UX</span><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Journey</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎯 OKR Framework</h4>
                <p className="text-sm text-gray-600 mb-3">Objectives and key results for teams</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded font-medium">OKR</span><span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">Goals</span></div>
              </div>
            </div>
          </div>

          {/* Content Creation - 10 prompts */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">✍️</span>
              <div><h3 className="text-3xl font-bold text-gray-900">Content Creation</h3><p className="text-gray-600">SEO articles, social media, copywriting</p></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📝 SEO Blog Post</h4>
                <p className="text-sm text-gray-600 mb-3">2000+ word articles optimized for search</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">SEO</span><span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-medium">Blog</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📱 Social Media Carousel</h4>
                <p className="text-sm text-gray-600 mb-3">10-slide Instagram/LinkedIn carousels</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded font-medium">Social</span><span className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded font-medium">Visual</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎬 YouTube Script</h4>
                <p className="text-sm text-gray-600 mb-3">Engaging video scripts with timestamps</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded font-medium">YouTube</span><span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded font-medium">Video</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📧 Email Campaign</h4>
                <p className="text-sm text-gray-600 mb-3">5-email nurture sequences</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Email</span><span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded font-medium">Campaign</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Landing Page Copy</h4>
                <p className="text-sm text-gray-600 mb-3">Conversion-focused copywriting</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-medium">Landing</span><span className="text-xs px-2 py-1 bg-violet-100 text-violet-700 rounded font-medium">Conversion</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🧵 Twitter Thread</h4>
                <p className="text-sm text-gray-600 mb-3">Viral threads with storytelling</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded font-medium">Twitter</span><span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Thread</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📖 E-book Outline</h4>
                <p className="text-sm text-gray-600 mb-3">Complete e-books with chapters</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">E-book</span><span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded font-medium">Long-form</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎤 Podcast Planner</h4>
                <p className="text-sm text-gray-600 mb-3">Episodes with show notes</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded font-medium">Podcast</span><span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-medium">Audio</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎨 Brand Voice Guide</h4>
                <p className="text-sm text-gray-600 mb-3">Brand personality and messaging</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded font-medium">Branding</span><span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded font-medium">Voice</span></div>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📣 Press Release</h4>
                <p className="text-sm text-gray-600 mb-3">PR for product launches</p>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded font-medium">PR</span><span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded font-medium">News</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6"><span className="text-5xl font-extrabold">$0</span><span className="text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>5 free prompts</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>Basic docs</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>Community support</span></li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center border-2 border-gray-300 rounded-full font-bold hover:border-violet-600 transition-all">Get Started</a>
            </div>
            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-8 rounded-3xl shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 rounded-full"><span className="text-yellow-900 font-bold text-sm">⭐ POPULAR</span></div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="mb-6"><span className="text-5xl font-extrabold text-white">$29</span><span className="text-violet-200">/mo</span></div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex gap-2"><span className="font-bold">✓</span><span>All 30+ prompts</span></li>
                <li className="flex gap-2"><span className="font-bold">✓</span><span>Unlimited usage</span></li>
                <li className="flex gap-2"><span className="font-bold">✓</span><span>Priority support</span></li>
                <li className="flex gap-2"><span className="font-bold">✓</span><span>Weekly updates</span></li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center bg-white text-violet-600 rounded-full font-bold hover:bg-yellow-300 transition-all">Start Trial</a>
            </div>
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-6"><span className="text-5xl font-extrabold">Custom</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>All in Pro</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>Custom prompts</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>Dedicated support</span></li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span><span>Team training</span></li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold hover:shadow-lg transition-all">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Build Faster?</h2>
          <p className="text-2xl mb-10 text-violet-100">Join V.S. Platform and get access to 30+ premium AI prompts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <input type="email" placeholder="Enter your email" className="px-6 py-4 rounded-full text-gray-900 w-full sm:w-96 focus:outline-none focus:ring-4 focus:ring-white/50" />
            <button className="px-10 py-4 bg-white text-violet-600 rounded-full font-bold hover:bg-yellow-300 transition-all">Get Started →</button>
          </div>
          <p className="text-sm text-violet-200">🎉 Limited spots for founding members • No credit card required</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">V.S.</div>
              <span className="text-gray-400">Viktor Seto</span>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#prompts" className="text-gray-400 hover:text-white transition-colors">Prompts</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            © 2026 Viktor Seto. Building the future, one prompt at a time.
          </div>
        </div>
      </footer>
    </div>
  );
}