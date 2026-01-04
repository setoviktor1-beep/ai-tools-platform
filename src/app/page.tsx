
      {/* Prompts Section */}
      <section id="prompts" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Prompt Library</h2>
            <p className="text-gray-600 text-lg">Professional-grade prompts for every use case</p>
          </div>

          {/* Code Generation Category */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">💻</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Code Generation</h3>
                <p className="text-gray-600">Production-ready code across multiple languages</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🔧 Full-Stack API Builder</h4>
                <p className="text-sm text-gray-600 mb-3">Generate complete REST API with authentication, validation, and database models</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Express</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">⚛️ React Component Generator</h4>
                <p className="text-sm text-gray-600 mb-3">Create reusable React components with TypeScript, props validation, and tests</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">React</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">TypeScript</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🐍 Python Data Pipeline</h4>
                <p className="text-sm text-gray-600 mb-3">Build ETL pipelines with pandas, error handling, and logging</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Python</span>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">Pandas</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🗄️ SQL Query Optimizer</h4>
                <p className="text-sm text-gray-600 mb-3">Generate optimized SQL queries with indexes and performance hints</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">SQL</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">PostgreSQL</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎨 CSS Animation Creator</h4>
                <p className="text-sm text-gray-600 mb-3">Generate smooth CSS animations and Tailwind transitions</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded">CSS</span>
                  <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded">Tailwind</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🧪 Unit Test Generator</h4>
                <p className="text-sm text-gray-600 mb-3">Create comprehensive test suites with edge cases and mocks</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">Jest</span>
                  <span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded">Testing</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🔐 Authentication System</h4>
                <p className="text-sm text-gray-600 mb-3">Build secure auth with JWT, refresh tokens, and password hashing</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded">Auth</span>
                  <span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded">JWT</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📱 Mobile App Scaffold</h4>
                <p className="text-sm text-gray-600 mb-3">Generate React Native app structure with navigation and state management</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">React Native</span>
                  <span className="text-xs px-2 py-1 bg-violet-100 text-violet-700 rounded">Mobile</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">⚙️ Webpack Config Builder</h4>
                <p className="text-sm text-gray-600 mb-3">Create optimized webpack configurations for production builds</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Webpack</span>
                  <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-700 rounded">Build</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🤖 AI Model Integration</h4>
                <p className="text-sm text-gray-600 mb-3">Integrate OpenAI, Anthropic, or Google AI APIs with error handling</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">AI</span>
                  <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded">API</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Strategy Category */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">📊</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Business Strategy</h3>
                <p className="text-gray-600">Market analysis and strategic planning frameworks</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Competitive Analysis</h4>
                <p className="text-sm text-gray-600 mb-3">Deep-dive competitor research with SWOT analysis and market positioning</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Research</span>
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">SWOT</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">💼 Go-to-Market Strategy</h4>
                <p className="text-sm text-gray-600 mb-3">Complete GTM plan with target audience, channels, and KPIs</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">GTM</span>
                  <span className="text-xs px-2 py-1 bg-violet-100 text-violet-700 rounded">Launch</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📈 Growth Hacking Framework</h4>
                <p className="text-sm text-gray-600 mb-3">Viral loops, referral systems, and acquisition strategies</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Growth</span>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded">Viral</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">💰 Pricing Strategy Builder</h4>
                <p className="text-sm text-gray-600 mb-3">Develop pricing tiers, bundles, and value-based pricing models</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded">Pricing</span>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Revenue</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🚀 Product Roadmap</h4>
                <p className="text-sm text-gray-600 mb-3">Build quarterly roadmaps with features prioritization and timelines</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Product</span>
                  <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded">Planning</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📊 Financial Projections</h4>
                <p className="text-sm text-gray-600 mb-3">Create 3-year financial models with revenue forecasts and burn rate</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Finance</span>
                  <span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded">Forecast</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎪 Event Marketing Plan</h4>
                <p className="text-sm text-gray-600 mb-3">Plan conferences, webinars, and virtual events for lead generation</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded">Events</span>
                  <span className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded">Marketing</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🤝 Partnership Strategy</h4>
                <p className="text-sm text-gray-600 mb-3">Identify and approach strategic partners with win-win proposals</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Partnerships</span>
                  <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded">B2B</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📱 Customer Journey Map</h4>
                <p className="text-sm text-gray-600 mb-3">Map user touchpoints from awareness to advocacy with conversion optimization</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded">UX</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Journey</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎯 OKR Framework</h4>
                <p className="text-sm text-gray-600 mb-3">Set ambitious objectives and measurable key results for teams</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">OKR</span>
                  <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded">Goals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Creation Category */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">✍️</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Content Creation</h3>
                <p className="text-gray-600">SEO articles, social media, and creative copywriting</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📝 SEO Blog Post Generator</h4>
                <p className="text-sm text-gray-600 mb-3">Create 2000+ word articles optimized for search engines with headings and meta</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">SEO</span>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded">Blog</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📱 Social Media Carousel</h4>
                <p className="text-sm text-gray-600 mb-3">Design 10-slide Instagram/LinkedIn carousels with hooks and CTAs</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded">Social</span>
                  <span className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded">Visual</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎬 YouTube Script Writer</h4>
                <p className="text-sm text-gray-600 mb-3">Create engaging video scripts with hooks, timestamps, and B-roll notes</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">YouTube</span>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">Video</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📧 Email Campaign Series</h4>
                <p className="text-sm text-gray-600 mb-3">Write 5-email nurture sequences with subject lines and personalization</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Email</span>
                  <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded">Campaign</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Landing Page Copy</h4>
                <p className="text-sm text-gray-600 mb-3">Convert-focused copywriting with hero, features, testimonials, and CTA</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Landing</span>
                  <span className="text-xs px-2 py-1 bg-violet-100 text-violet-700 rounded">Conversion</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🧵 Twitter Thread Builder</h4>
                <p className="text-sm text-gray-600 mb-3">Craft viral Twitter threads with storytelling and engagement hooks</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded">Twitter</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Thread</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📖 E-book Outline Creator</h4>
                <p className="text-sm text-gray-600 mb-3">Structure complete e-books with chapters, sections, and key takeaways</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded">E-book</span>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Long-form</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎤 Podcast Episode Planner</h4>
                <p className="text-sm text-gray-600 mb-3">Plan episodes with intro, segments, questions, and show notes</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">Podcast</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Audio</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">🎨 Brand Voice Guide</h4>
                <p className="text-sm text-gray-600 mb-3">Define brand personality, tone, vocabulary, and messaging guidelines</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded">Branding</span>
                  <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded">Voice</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">📣 Press Release Writer</h4>
                <p className="text-sm text-gray-600 mb-3">Professional PR announcements for product launches and company news</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">PR</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">News</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
