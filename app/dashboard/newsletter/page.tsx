"use client";

import { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { FcDataConfiguration } from "react-icons/fc";

const FEATURES_LIST = [
  {
    title: "Industry Trends",
    description: "Stay updated with the latest breakthroughs in LLMs and generative AI.",
  },
  {
    title: "Power Usage",
    description: "Advanced techniques to get the most out of EchoGPT's toolset.",
  },
  {
    title: "Early Access",
    description: "Be the first to test new models and experimental features.",
  },
];

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    // TODO: Connect with your API or newsletter backend
  };

  return (
    <section className="bg-white text-stone-950 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Elevate Your <span className="text-violet-600">AI Strategy</span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Join 50,000+ professionals receiving curated insights on AI productivity, industry trends, and exclusive EchoGPT features.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="w-full max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-stone-400">
                  <Mail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-2xl text-stone-900 placeholder-stone-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Join the Newsletter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-4 bg-violet-50 border border-violet-200 rounded-2xl text-center text-violet-800 text-sm font-medium">
              <FcDataConfiguration></FcDataConfiguration> Thanks for joining! Check your inbox for confirmation.
            </div>
          )}

          {/* Trust Badges */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs font-semibold text-stone-500 uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-violet-600" />
              <span>No Spam Policy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span>Premium Insights</span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {FEATURES_LIST.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}