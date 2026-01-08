import React from 'react';
import { 
  Target, 
  Rocket, 
  ShieldCheck, 
  Car, 
  Utensils, 
  Globe, 
  Users, 
  Zap, 
  ChevronRight,
  Cpu
} from 'lucide-react';

const page = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Nectarlite Technology
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-light mb-8 italic">
            "Leading Technology to Your Doorstep"
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-sm font-semibold uppercase tracking-widest">
            Whitepaper & Vision Document
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        
        {/* Section 1: Executive Summary */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-purple-600 w-8 h-8" />
            <h2 className="text-3xl font-bold">1. Executive Summary</h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Nectarlite Technology is a technology-driven company focused on building practical, reliable, and accessible digital solutions that bring essential services directly to people’s doorsteps. Through its growing ecosystem of mobile pagelications and platforms, Nectarlite aims to simplify everyday life by connecting users to transportation, food, and future on-demand services with speed, efficiency, and trust.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
            <p className="text-purple-900 font-medium italic">
              "Current flagship products include Sailfast, a ride-hailing platform, and Marice, a food delivery pagelication."
            </p>
          </div>
        </section>

        {/* Section 2, 3, 4: Overview, Vision, Mission */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="text-purple-600 w-5 h-5" /> Company Overview
            </h3>
            <p className="text-slate-600 text-sm">
              Nectarlite is a multi-product technology hub designed to deploy mobile-first platforms that solve real-world problems in transportation, logistics, and service delivery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="text-purple-600 w-5 h-5" /> Vision
            </h3>
            <p className="text-slate-600 text-sm">
              To become a leading technology ecosystem that seamlessly connects people to essential services, anytime and anywhere, removing friction from daily life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="text-purple-600 w-5 h-5" /> Mission
            </h3>
            <ul className="text-slate-600 text-xs space-y-2">
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-purple-600 mt-1 shrink-0" /> Deliver innovative, user-friendly products</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-purple-600 mt-1 shrink-0" /> Empower communities via technology</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-purple-600 mt-1 shrink-0" /> Support partners with fair platforms</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Core Values */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">5. Core Values</h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "Accessibility", desc: "Easy to use for everyone", icon: Users },
              { title: "Reliability", desc: "Trustworthy services", icon: ShieldCheck },
              { title: "Innovation", desc: "Forward-thinking", icon: Zap },
              { title: "Impact", desc: "Supporting local economies", icon: Globe },
              { title: "Integrity", desc: "Ethical operations", icon: Target },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 text-purple-600">
                  <value.icon size={24} />
                </div>
                <h4 className="font-bold text-sm mb-1">{value.title}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Product Ecosystem */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Cpu className="text-purple-600 w-8 h-8" />
            <h2 className="text-3xl font-bold">6. Product Ecosystem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Sailfast */}
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden group">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-purple-600 p-3 rounded-2xl">
                    <Car size={32} />
                  </div>
                  <span className="text-purple-400 font-mono text-xs tracking-widest uppercase">Product 6.1</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Sailfast</h3>
                <p className="text-slate-400 mb-6">Ride-hailing platform designed for safe, fast, and affordable transportation.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Verified Drivers
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Reduced Waiting Time
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Fair Driver Earnings
                  </div>
                </div>
              </div>
            </div>

            {/* Marice */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-purple-100 p-3 rounded-2xl text-purple-600">
                    <Utensils size={32} />
                  </div>
                  <span className="text-slate-400 font-mono text-xs tracking-widest uppercase">Product 6.2</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Marice</h3>
                <p className="text-slate-600 mb-6">Food delivery pagelication connecting users to local restaurants and vendors.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Local Vendor Support
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Timely Deliveries
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Smooth User Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 & 8: Tech Strategy & Expansion */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-purple-50 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-900">
               7. Technology Strategy
            </h2>
            <ul className="space-y-4 text-purple-800 text-sm">
              <li className="flex gap-3">
                <span className="font-bold">01</span>
                <span>Mobile-first and scalable architecture for independent growth.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">02</span>
                <span>Cloud-based infrastructure for high performance and security.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">03</span>
                <span>Data-driven decision making and iterative product development.</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              8. Future Expansion
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Logistics", "Digital Marketplaces", "Fintech", "Smart City Tools", "Parcel Delivery", "Payment Solutions"].map((tag, idx) => (
                <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-slate-600 border border-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-slate-600 text-sm italic">
              "Each new product will align with the core mission: bringing technology-powered services directly to people’s doorsteps."
            </p>
          </section>
        </div>

        {/* Section 9: Market Impact */}
        <section className="bg-gradient-to-br from-purple-600 to-violet-800 rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">9. Market Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2 tracking-tight">Jobs</div>
              <div className="text-purple-100 text-xs uppercase">Employment Creation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 tracking-tight">SMBs</div>
              <div className="text-purple-100 text-xs uppercase">Business Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 tracking-tight">Access</div>
              <div className="text-purple-100 text-xs uppercase">Essential Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 tracking-tight">Digital</div>
              <div className="text-purple-100 text-xs uppercase">Emerging Markets</div>
            </div>
          </div>
        </section>

        {/* Section 10: Conclusion */}
        <footer className="text-center pb-20 pt-10 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-4">10. Conclusion</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Nectarlite Technology is more than a company—it is a growing ecosystem built to simplify life through technology. Positioned to scale into a multi-service platform that delivers real value and leads innovation straight to users’ doorsteps.
          </p>
          <p className="text-purple-600 font-bold tracking-widest uppercase text-sm">
            Leading Technology to Your Doorstep
          </p>
        </footer>
      </main>
    </div>
  );
};

export default page;