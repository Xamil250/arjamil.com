"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Mail, 
  PhoneCall,
  Rocket,
  TrendingUp,
  BrainCircuit,
  GraduationCap,
  Sparkles,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Pin,
  Ghost,
  ChefHat,
  Send,
  Loader2,
  CheckCircle2,
  BookOpen,
  FileText,
  Download,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [activeAudience, setActiveAudience] = useState<"smes" | "students">("smes");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate API call for the contact form
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-mesh-dark relative text-white selection:bg-[#E5FF00]/30 selection:text-[#E5FF00] overflow-x-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* Moving Star Layers (Fixed so they move endlessly regardless of scroll) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-20">
        <div className="absolute inset-0 w-full h-full bg-stars-1 animate-stars-slow opacity-60"></div>
        <div className="absolute inset-0 w-full h-full bg-stars-2 animate-stars-medium opacity-80"></div>
        <div className="absolute inset-0 w-full h-full bg-stars-3 animate-stars-fast opacity-100"></div>
      </div>

      {/* 3D Animated Background Placed Under All Content (Absolute to Move with Scroll) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        {/* Glow Blob 1: Top Hero Area */}
        <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E5FF00]/10 blur-[130px] animate-blob mix-blend-screen"></div>
        {/* Glow Blob 2: Ecosystem Strategy Area */}
        <div className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-white/5 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        {/* Glow Blob 3: Blogs / Knowledge Base Area */}
        <div className="absolute top-[50%] left-[5%] w-[55vw] h-[55vw] rounded-full bg-[#E5FF00]/10 blur-[150px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        {/* Glow Blob 4: Portfolio Area */}
        <div className="absolute top-[75%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[130px] animate-blob animation-delay-6000 mix-blend-screen"></div>
        {/* Glow Blob 5: Footer Area */}
        <div className="absolute bottom-[2%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#E5FF00]/15 blur-[160px] animate-blob mix-blend-screen"></div>
      </div>

      {/* Navigation - Added from design theme */}
      <nav className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
        <div className="text-2xl font-black tracking-tighter italic">
          A.R.<span className="accent-text tracking-normal">JAMIL</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          <a href="#ecosystem" className="hover:text-[#E5FF00] transition-colors">Ecosystem</a>
          <a href="#authority" className="hover:text-[#E5FF00] transition-colors">Authority</a>
          <a href="#value" className="hover:text-[#E5FF00] transition-colors">Strategy</a>
          <a href="#content" className="hover:text-[#E5FF00] transition-colors">Insights</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        </div>
        <div className="text-[10px] text-gray-500 font-mono tracking-widest text-center md:text-right hidden md:block">
          BASED IN LEICESTER, UK
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* === HERO SECTION === */}
        <section className="py-12 md:py-24 flex flex-col items-start justify-center">
          <div className="inline-block px-3 py-1 bg-[#1A1A1A] border border-white/10 rounded-full text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-6">
            Founder • Strategist • AI-Augmented
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-[100px] font-black tracking-tight leading-[0.9] mb-6 uppercase">
            <span className="bg-gradient-to-br from-white to-gray-500 text-transparent bg-clip-text">Building</span> <span className="accent-text drop-shadow-[0_0_10px_rgba(229,255,0,0.15)]">AI-Augmented</span> <br className="hidden md:block"/>
            <span className="bg-gradient-to-br from-white to-gray-500 text-transparent bg-clip-text">Growth Engines.</span>
          </h1>

          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center space-x-3 text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
              <MapPin className="text-[#E5FF00] w-5 h-5 flex-shrink-0" />
              <p>
                Architecting creative strategy and marketing. <span className="text-white border-b border-white/20 italic font-medium">Leicester based.</span>
              </p>
            </div>
            <div className="flex items-start space-x-3 text-sm text-gray-500 font-light max-w-2xl leading-relaxed">
               <div className="w-5 h-5 flex-shrink-0" /> {/* Spacer to align with text above */}
               <p>
                 <span className="text-gray-300 font-medium">Mom&apos;z Kitchen & Growvella Innovation (UK Pilots Launching Soon).</span><br/>
                 9 years experience in the Hospitality industry, last 4 years in the UK.
               </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/447342398858" 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 accent-bg text-black font-bold rounded-sm transition-opacity hover:opacity-90 uppercase text-xs tracking-widest text-center"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Book 1:1 Consultation
            </a>
            <a 
              href="mailto:hello@arjamil.com" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-sm transition-all hover:bg-white hover:text-black uppercase text-xs tracking-widest text-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Strategy
            </a>
          </div>
        </section>

          {/* === BRAND LOGOS MARQUEE === */}
        <section className="w-full py-10 border-y border-white/5 bg-black/40 backdrop-blur-xl relative my-8 shadow-[0_0_50px_rgba(229,255,0,0.03)] z-10">
          <div className="absolute inset-0 bg-[#E5FF00]/[0.01] pointer-events-none" />
          <div className="w-full marquee-mask overflow-hidden flex">
            <div className="animate-marquee items-center gap-16 md:gap-24 pr-16 md:pr-24">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center gap-16 md:gap-24">
                  <div className="flex items-center group cursor-default">
                    <div className="text-2xl font-black tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white">Bombay Bites</span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default">
                    <div className="text-2xl font-bold font-serif italic tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white">Co.lab Creation</span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default">
                    <div className="text-xl font-bold tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white">WearBloom</span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default">
                    <div className="text-3xl font-black tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[#E5FF00] border-b-4 border-[#E5FF00] leading-none">CJ</span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default">
                    <div className="text-2xl font-light tracking-wide uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white border-l-2 border-white/20 pl-4 py-1">Deshi Fashion<br/><span className="text-[10px] font-bold tracking-widest text-[#E5FF00]">LTD</span></span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default">
                    <div className="text-xl font-bold tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[#E5FF00] font-mono">Student Cribs</span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default">
                    <div className="text-2xl font-black tracking-tighter uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[#E5FF00]">SULTAN&apos;S</span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default">
                    <div className="text-2xl font-black italic tracking-tighter uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white border-2 border-white/20 p-1 px-2 leading-none uppercase">Mom&apos;z Kitchen</span>
                    </div>
                  </div>
                  <div className="flex items-center group cursor-default relative">
                    <div className="text-xl font-medium tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
                      <Rocket className="w-5 h-5 mr-3 text-[#E5FF00] hidden group-hover:block transition-all" />
                      <span className="text-white group-hover:text-[#E5FF00]">Growvella</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
          
          {/* === THE "NOW" (ECOSYSTEM) SECTION === */}
          <div id="ecosystem" className="md:col-span-12 py-12 border-t border-white/10 relative">
            <div className="mb-10">
              <h2 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Ecosystem</h2>
              <h3 className="text-3xl font-black tracking-tight uppercase">The &quot;Now&quot;</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="glass p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 accent-text text-[10px] opacity-20 font-bold font-mono">01</div>
                <div className="mb-6">
                  <ChefHat className="text-[#E5FF00] w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-wider italic">Mom&apos;z Kitchen 2.0</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-wide">
                  Innovation Model &bull; UK Pilot Launching Soon
                </p>
                <div className="mt-4"><span className="text-[9px] px-2 py-1 border border-white/10 rounded-sm uppercase tracking-widest">Founder</span></div>
              </div>

              {/* Card 2 */}
              <div className="glass p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 accent-text text-[10px] opacity-20 font-bold font-mono">02</div>
                <div className="mb-6">
                  <Rocket className="text-[#E5FF00] w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-wider">Growvella</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-wide">
                  AI Marketing &bull; UK Pilot Launching Soon
                </p>
                <div className="mt-4"><span className="text-[9px] px-2 py-1 border border-white/10 rounded-sm uppercase tracking-widest">Founder</span></div>
              </div>

              {/* Card 3 */}
              <div className="glass p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 accent-text text-[10px] opacity-20 font-bold font-mono">03</div>
                <div className="mb-6">
                  <Sparkles className="text-[#E5FF00] w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-wider">Sultan&apos;s</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-wide">
                  Marketing & Creative Strategist
                </p>
                <div className="mt-4"><span className="text-[9px] px-2 py-1 border border-white/10 rounded-sm uppercase tracking-widest">Strategist</span></div>
              </div>

              {/* Card 4 */}
              <div className="glass p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 accent-text text-[10px] opacity-20 font-bold font-mono">04</div>
                <div className="mb-6">
                  <Building2 className="text-[#E5FF00] w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-wider">Student Cribs</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-wide">
                  High-Conversion Housing Campaigns
                </p>
                <div className="mt-4"><span className="text-[9px] px-2 py-1 border border-white/10 rounded-sm uppercase tracking-widest">Brand Manager</span></div>
              </div>
            </div>
          </div>

          <div id="authority" className="md:col-span-7 py-8">
            {/* === AUTHORITY & WINS === */}
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Authority</h2>
            <section className="glass p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between">
              <div className="w-full">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-6">Legacy & Influence</p>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-between">
                  <div>
                    <div className="text-3xl font-black mb-1">575K+</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Google Views</div>
                    <div className="text-xs text-gray-400 mt-1 italic">Level 6 Local Guide</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black mb-1 italic">DMU &apos;26</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Class Portfolio</div>
                    <div className="text-xs text-gray-400 mt-1 italic">De Montfort Univ.</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black mb-1 accent-text uppercase">Mom&apos;z</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Kitchen</div>
                    <div className="text-xs text-gray-400 mt-1 italic">Innovation Lead</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div id="value" className="md:col-span-5 py-8">
            {/* === DUAL-VALUE PROPOSITION === */}
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Value Proposition</h2>
            
            <div className="flex rounded-sm max-w-sm mb-6 border border-white/10 overflow-hidden text-xs uppercase font-bold tracking-widest">
              <button 
                onClick={() => setActiveAudience("smes")}
                className={`flex-1 flex items-center justify-center py-3 px-2 transition-colors ${activeAudience === "smes" ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"}`}
              >
                <TrendingUp className="w-4 h-4 mr-2 hidden sm:block" /> SMEs
              </button>
              <button 
                onClick={() => setActiveAudience("students")}
                className={`flex-1 flex items-center justify-center py-3 px-2 transition-colors ${activeAudience === "students" ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"}`}
              >
                <GraduationCap className="w-4 h-4 mr-2 hidden sm:block" /> Students
              </button>
            </div>

            <div className="relative">
              {/* SME Section */}
              <div className={`transition-all duration-500 ${activeAudience === "smes" ? "block" : "hidden"}`}>
                <div className="p-6 border-l-2 border-[#E5FF00] bg-[#E5FF00]/5 min-h-[160px] flex flex-col justify-center">
                  <h4 className="text-[11px] font-bold accent-text uppercase tracking-widest mb-3 flex items-center">
                    <BrainCircuit className="w-4 h-4 mr-2" /> For Local SMEs
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    Scaling operations with bespoke AI-augmented creative strategies and localized marketing engines. Unlocking exponential growth parameters while eliminating operational bloat.
                  </p>
                </div>
              </div>

              {/* Students Section */}
              <div className={`transition-all duration-500 ${activeAudience === "students" ? "block" : "hidden"}`}>
                 <div className="p-6 border-l-2 border-white/20 bg-white/5 min-h-[160px] flex flex-col justify-center">
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-3 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" /> For Students
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    Navigating the journey to £0 deposit housing and definitive career clarity (DMU/UoL). Structuring actionable mentorship pipelines for immediate post-grad impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="content" className="md:col-span-12 py-12 border-t border-white/10 relative">
            <div className="mb-10">
              <h2 className="text-[10px] font-bold tracking-widest text-[#E5FF00] uppercase mb-2">Knowledge Base</h2>
              <h3 className="text-3xl font-black tracking-tight uppercase">Blogs &amp; E-Books</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* E-Book Highlight */}
              <div className="relative group lg:col-span-1 overflow-hidden border border-[#E5FF00]/20 bg-[#E5FF00]/5 rounded-lg p-6 flex flex-col justify-between hover:bg-[#E5FF00]/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BookOpen className="w-24 h-24 text-[#E5FF00]" />
                </div>
                <div className="relative z-10">
                  <div className="inline-block px-2 py-1 bg-[#E5FF00]/20 text-[#E5FF00] border border-[#E5FF00]/30 rounded text-[10px] uppercase tracking-widest font-bold mb-4">
                    Featured E-Book
                  </div>
                  <h4 className="text-xl font-black text-white leading-tight mb-2">The Stealth Founder&apos;s Blueprint</h4>
                  <p className="text-sm text-gray-400 font-light mb-6">Learn how to scale local SMEs and student-focused startups without operational bloat. A complete guide to AI-augmented growth.</p>
                </div>
                <a href="/ebook/stealth-founder-blueprint" className="relative z-10 flex items-center justify-center w-full py-3 bg-[#E5FF00] text-black font-bold uppercase tracking-widest text-[10px] rounded hover:opacity-90 transition-opacity">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </a>
              </div>

              {/* Blogs Column */}
              <div className="flex flex-col gap-6 lg:col-span-2">
                <a href="/blog/student-housing-guide" className="group flex flex-col sm:flex-row gap-6 p-6 border border-white/10 bg-white/5 rounded-lg hover:border-white/30 transition-colors">
                  <div className="w-full sm:w-1/3 h-32 relative rounded-md overflow-hidden bg-black/50 border border-white/5 shrink-0 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-gray-500 group-hover:text-[#E5FF00] transition-colors" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Student Guidance</span>
                      <span className="text-[10px] text-gray-600 font-mono">• 5 min read</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#E5FF00] transition-colors mb-2">The Ultimate Guide to £0 Deposit Housing for Students</h4>
                    <p className="text-xs text-gray-400 font-light line-clamp-2 mb-4">Navigating the complexities of university housing in the UK, saving money, and protecting your renting rights.</p>
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-[#E5FF00]">
                      Read Article <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>

                <a href="/blog/ai-sme-scaling" className="group flex flex-col sm:flex-row gap-6 p-6 border border-white/10 bg-white/5 rounded-lg hover:border-white/30 transition-colors">
                  <div className="w-full sm:w-1/3 h-32 relative rounded-md overflow-hidden bg-black/50 border border-white/5 shrink-0 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-gray-500 group-hover:text-[#E5FF00] transition-colors" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Marketing Strategy</span>
                      <span className="text-[10px] text-gray-600 font-mono">• 7 min read</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#E5FF00] transition-colors mb-2">AI-Augmented Content Strategy for Local SMEs</h4>
                    <p className="text-xs text-gray-400 font-light line-clamp-2 mb-4">How to leverage AI to drastically enhance your local reach, personalize marketing, and drive authentic community engagement.</p>
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-[#E5FF00]">
                      Read Article <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>

          <div id="portfolio" className="md:col-span-12 py-12 border-t border-white/10 relative">
            {/* === CREATIVE WORKS & PHOTOGRAPHY === */}
            <div className="mb-10">
              <h2 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Portfolio</h2>
              <h3 className="text-3xl font-black tracking-tight uppercase">Photography &amp; Creative Works</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Image 1: Sultan's Logo */}
              <div className="relative group h-64 md:h-[400px] md:col-span-1 overflow-hidden border border-white/10 rounded-lg hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(229,255,0,0.1)] bg-white/5">
                <div className="absolute inset-0 bg-[#E5FF00]/20 opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <Image unoptimized src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600" fill alt="Brand Identity" referrerPolicy="no-referrer" className="object-cover object-center transition-all duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none z-30">
                  <h4 className="text-lg font-black uppercase tracking-wider text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Brand Identity</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#E5FF00] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sultan&apos;s Events</p>
                </div>
              </div>

              {/* Image 2: Sultan's Event */}
              <div className="relative group h-64 md:h-[400px] md:col-span-1 lg:col-span-2 overflow-hidden border border-white/10 rounded-lg hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(229,255,0,0.1)] bg-white/5">
                <div className="absolute inset-0 bg-[#E5FF00]/20 opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <Image unoptimized src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1600" fill alt="Event Photography" referrerPolicy="no-referrer" className="object-cover object-center transition-all duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none z-30">
                  <h4 className="text-lg font-black uppercase tracking-wider text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Event Photography</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#E5FF00] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sultan&apos;s Events</p>
                </div>
              </div>

              {/* Image 3: Mom'z Kitchen Wok */}
              <div className="relative group h-64 md:h-[400px] md:col-span-1 overflow-hidden border border-white/10 rounded-lg hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(229,255,0,0.1)] bg-white/5">
                <div className="absolute inset-0 bg-[#E5FF00]/20 opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <Image unoptimized src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1600" fill alt="Product Direction" referrerPolicy="no-referrer" className="object-cover object-center transition-all duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none z-30">
                  <h4 className="text-lg font-black uppercase tracking-wider text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Direction</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#E5FF00] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Mom&apos;z Kitchen</p>
                </div>
              </div>

              {/* Image 4: Mom'z Kitchen Drink */}
              <div className="relative group h-64 md:h-[400px] md:col-span-1 overflow-hidden border border-white/10 rounded-lg hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(229,255,0,0.1)] bg-white/5">
                <div className="absolute inset-0 bg-[#E5FF00]/20 opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <Image unoptimized src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1600" fill alt="Campaign Design" referrerPolicy="no-referrer" className="object-cover object-center transition-all duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none z-30">
                  <h4 className="text-lg font-black uppercase tracking-wider text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Campaign Design</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#E5FF00] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Mom&apos;z Kitchen</p>
                </div>
              </div>

              {/* Image 5: DMU Stall 1 */}
              <div className="relative group h-64 md:h-[400px] md:col-span-1 overflow-hidden border border-white/10 rounded-lg hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(229,255,0,0.1)] bg-white/5">
                <div className="absolute inset-0 bg-[#E5FF00]/20 opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <Image unoptimized src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600" fill alt="Student Ecosystem" referrerPolicy="no-referrer" className="object-cover object-center transition-all duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none z-30">
                  <h4 className="text-lg font-black uppercase tracking-wider text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Student Ecosystem</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#E5FF00] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">DMU Innovations</p>
                </div>
              </div>

              {/* Image 6: DMU Stall 2 */}
              <div className="relative group h-64 md:h-[400px] md:col-span-1 lg:col-span-3 overflow-hidden border border-white/10 rounded-lg hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(229,255,0,0.1)] bg-white/5">
                <div className="absolute inset-0 bg-[#E5FF00]/20 opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <Image unoptimized src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600" fill alt="Community Events" referrerPolicy="no-referrer" className="object-cover object-center transition-all duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none z-30">
                  <h4 className="text-lg font-black uppercase tracking-wider text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Community Events</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#E5FF00] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">DMU Innovations</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* === FOOTER & CTA === */}
        <footer id="contact" className="mt-16 sm:mt-24">
          <div className="glass p-8 md:p-12 rounded-xl relative overflow-hidden">
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
              
              {/* Left Column: Text & Socials */}
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">Fancy a coffee <br/>in Leicester?</h4>
                  <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold mb-6">Let&apos;s talk strategy and creative growth.</p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                    <a href="mailto:hello@arjamil.com" className="flex items-center text-sm font-light text-gray-300 hover:text-[#E5FF00] transition-colors w-fit">
                      <Mail className="w-4 h-4 mr-3 text-[#E5FF00]/70" />
                      hello@arjamil.com
                    </a>
                    <a href="https://wa.me/447342398858" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-light text-gray-300 hover:text-[#E5FF00] transition-colors w-fit">
                      <PhoneCall className="w-4 h-4 mr-3 text-[#E5FF00]/70" />
                      +44 734 239 8858 <span className="text-[10px] ml-3 border border-white/10 px-2 py-0.5 rounded-full text-gray-400 uppercase tracking-widest font-bold bg-white/5">WhatsApp / Call</span>
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-10 md:mb-0">
                    {[ 
                      { icon: PhoneCall, href: "tel:+447342398858", name: "Phone", hoverClass: "hover:bg-[#E5FF00]/20 hover:text-[#E5FF00] hover:border-[#E5FF00]/50" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/arjamil", name: "LinkedIn", hoverClass: "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/50" },
                      { icon: Instagram, href: "https://www.instagram.com/ar.xamil", name: "Instagram", hoverClass: "hover:bg-[#E1306C]/20 hover:text-[#E1306C] hover:border-[#E1306C]/50" },
                      { icon: Twitter, href: "https://www.x.com/arxamil", name: "X", hoverClass: "hover:bg-white/20 hover:text-white hover:border-white/50" },
                      { icon: Facebook, href: "https://www.facebook.com/ar.Jamilofficial", name: "Facebook", hoverClass: "hover:bg-[#1877F2]/20 hover:text-[#1877F2] hover:border-[#1877F2]/50" },
                      { icon: Youtube, href: "https://www.youtube.com/@arjamil", name: "YouTube", hoverClass: "hover:bg-[#FF0000]/20 hover:text-[#FF0000] hover:border-[#FF0000]/50" },
                      { icon: Ghost, href: "https://www.snapchat.com/arxamil", name: "Snapchat", hoverClass: "hover:bg-[#FFFC00]/20 hover:text-[#FFFC00] hover:border-[#FFFC00]/50" },
                      { icon: Pin, href: "https://www.pinterest.com/arxamill", name: "Pinterest", hoverClass: "hover:bg-[#E60023]/20 hover:text-[#E60023] hover:border-[#E60023]/50" },
                      { icon: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.08-1.5 1.58-3.66 2.5-5.88 2.57-2.22.08-4.48-.44-6.26-1.74-1.77-1.3-3-3.32-3.31-5.5-.32-2.18.15-4.46 1.34-6.27 1.18-1.8 3.07-3.08 5.18-3.46 2.1-.38 4.31-.15 6.27.81v4.32c-1.39-.74-3.13-.96-4.66-.46-1.52.5-2.73 1.73-3.18 3.25-.45 1.53-.13 3.23.86 4.47.98 1.25 2.65 1.84 4.23 1.57 1.58-.26 2.94-1.34 3.56-2.79.62-1.46.66-3.13.6-4.7V0h3.51z"/></svg>, href: "https://www.tiktok.com/@ar_xamil", name: "TikTok", hoverClass: "hover:bg-[#00f2fe]/20 hover:text-[#00f2fe] hover:border-[#00f2fe]/50" },
                    ].map((social, i) => (
                      <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={`flex items-center justify-center w-10 h-10 glass rounded-md transition-all duration-300 ${social.hoverClass}`}>
                        <social.icon className="w-5 h-5 flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="text-[10px] font-mono accent-text tracking-widest uppercase mt-8 lg:mt-0">
                  {new Date().getFullYear()} PORTFOLIO — v2.1
                  <div className="text-[#888] font-sans tracking-normal capitalize text-[10px] mt-1.5 font-light">
                    &copy; {new Date().getFullYear()} All rights reserved by A.R. Jamil.
                  </div>
                </div>
              </div>
              
              {/* Right Column: Contact Form */}
              <div className="bg-[#0A0A0A]/50 p-6 md:p-8 rounded-lg border border-white/5 relative z-20 backdrop-blur-sm">
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#141414] border border-white/10 rounded-md p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E5FF00]/50 focus:ring-1 focus:ring-[#E5FF00]/20 transition-all font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#141414] border border-white/10 rounded-md p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E5FF00]/50 focus:ring-1 focus:ring-[#E5FF00]/20 transition-all font-light"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#141414] border border-white/10 rounded-md p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E5FF00]/50 focus:ring-1 focus:ring-[#E5FF00]/20 transition-all font-light resize-none"
                      placeholder="Let's talk about..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    className={`w-full flex items-center justify-center p-4 font-bold rounded-sm uppercase text-xs tracking-widest transition-all mt-2
                      ${formStatus === "success" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                        : "accent-bg text-black hover:opacity-90"
                      }`}
                  >
                    {formStatus === "submitting" ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                    ) : formStatus === "success" ? (
                      <><CheckCircle2 className="w-4 h-4 mr-2" /> Message Sent</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" /> Send Message</>
                    )}
                  </button>
                </form>
              </div>

            </div>
            
            {/* Background design element inside footer */}
            <div className="absolute right-[-10%] bottom-[-20%] text-[250px] font-black accent-text opacity-5 leading-none pointer-events-none select-none overflow-hidden">
              A.R.J
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
