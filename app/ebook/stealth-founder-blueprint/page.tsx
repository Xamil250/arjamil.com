"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Download } from "lucide-react";

export default function StealthFounderBlueprint() {
  return (
    <main className="min-h-screen gradient-bg text-white selection:bg-[#E5FF00]/30 selection:text-[#E5FF00] overflow-x-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/#content" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#E5FF00] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-6">
            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1.5" /> Apr 2026</span>
            <span className="text-black border border-[#E5FF00]/20 bg-[#E5FF00] px-2 py-0.5 rounded">Featured E-Book</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            The Stealth Founder&apos;s Blueprint
          </h1>
          
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
            Learn how to scale local SMEs and student-focused startups without operational bloat. A complete framework to AI-augmented growth.
          </p>

          <button onClick={() => alert("Downloading The Stealth Founder's Blueprint PDF...")} className="inline-flex items-center justify-center px-8 py-4 bg-[#E5FF00] text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4 mr-2" />
            Download Complete PDF (4.2 MB)
          </button>
        </header>

        <div className="h-px w-full bg-white/10 my-10" />
        
        <article className="prose prose-invert prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed prose-headings:font-bold prose-headings:tracking-tight max-w-none">
          <h3>E-Book Excerpt: The Myth of Scaling and Bloat</h3>
          <p>
            The prevailing narrative in modern startup culture—and even ambitious local SMEs—is that scaling inherently requires hiring a massive workforce, acquiring expensive office space, and burning capital on vanity metrics. This is operational bloat. And for 90% of businesses, it is entirely unnecessary.
          </p>
          
          <p>
            The &quot;Stealth Founder&quot; operates differently. They rely on tightly integrated systems, ruthless workflow automation, and the strategic implementation of artificial intelligence to produce the output of a 20-person agency with a core team of two to three individuals.
          </p>
          
          <h3>Section 1: Identifying the Friction Points</h3>
          <p>
            Examine your business operations over the last thirty days. How much time was spent on repetitive data entry? How many hours were wasted attempting to come up with &quot;content&quot; for social feeds? How much friction existed between a customer initially discovering your brand, and the point where they successfully checked out or booked a call?
          </p>

          <p>
            Friction is the enemy of the Stealth Founder. Every manual touchpoint is an opportunity for failure, drop-off, or human error.
          </p>

          <div className="p-6 my-8 border-l-2 border-[#E5FF00] bg-white/5 rounded-r">
            <h4 className="text-[#E5FF00] m-0 mb-2">The Blueprint Architecture</h4>
            <p className="m-0 text-gray-300 text-sm">Download the complete framework above to access the exact tech stack diagrams, AI prompting templates, and automated CRM workflows utilized by Leicester&apos;s leading local startups to 10X their operational output.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
