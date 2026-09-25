"use client";

import { useState } from "react";
import { Search, Sparkles, Store, ShoppingBag, LayoutTemplate, Palette, ArrowRight } from "lucide-react";

const SHOP_BUILDER_FEATURES = [
  {
    title: "Instant Store Generation",
    description: "Generate a fully functional e-commerce layout from a single prompt.",
    icon: Store,
  },
  {
    title: "AI Product Descriptions",
    description: "Create engaging, high-converting copy for all your items instantly.",
    icon: ShoppingBag,
  },
  {
    title: "Modern UI & Layouts",
    description: "Utilize clean glassmorphic grids, bento sections, and sleek navigation.",
    icon: LayoutTemplate,
  },
  {
    title: "Brand Styling & Themes",
    description: "Customize color palettes, typography, and visual tones effortlessly.",
    icon: Palette,
  },
];

export default function AiShopBuilderPage() {
  const [storePrompt, setStorePrompt] = useState("");
  const [storeCategory, setStoreCategory] = useState("Fashion & Apparel");

  const handleBuildStore = () => {
    if (!storePrompt.trim()) return;
    console.log("Building store with:", { storePrompt, storeCategory });
  };

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-12 font-sans overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header Title & Subtitle */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 flex flex-wrap items-center justify-center gap-2">
            <span>EchoGPT – AI Shop</span>
            <span className="bg-violet-600 text-white px-4 py-1 rounded-2xl shadow-md shadow-violet-600/20">
              Builder
            </span>
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Design, structure, and launch your dream online storefront in seconds using intelligent AI prompting.
          </p>
        </div>

        {/* 4 Feature Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {SHOP_BUILDER_FEATURES.map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Builder Input Container */}
        <div className="bg-white border border-stone-200 rounded-3xl shadow-sm p-4 sm:p-6">
          
          {/* Text Area for Store Description */}
          <div className="mb-6">
            <textarea
              rows={4}
              value={storePrompt}
              onChange={(e) => setStorePrompt(e.target.value)}
              placeholder="Describe what kind of store you want to build (e.g., A modern minimal sneaker store with clean product cards)..."
              className="w-full bg-transparent text-stone-900 placeholder-stone-400 text-sm sm:text-base border-none outline-none focus:ring-0 resize-none px-0 py-1"
            />
          </div>

          {/* Bottom Action Bar inside Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-100">
            
            <div className="flex items-center gap-3">
              {/* Category Selector Pill */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 text-violet-700 border border-violet-100 rounded-full text-xs font-semibold">
                <Store className="w-3.5 h-3.5" />
                <select
                  value={storeCategory}
                  onChange={(e) => setStoreCategory(e.target.value)}
                  className="bg-transparent border-none outline-none cursor-pointer text-xs font-semibold text-violet-700"
                >
                  <option value="Fashion & Apparel">Fashion & Apparel</option>
                  <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                  <option value="Books & Education">Books & Education</option>
                  <option value="Home & Living">Home & Living</option>
                </select>
              </div>
            </div>

            {/* Build Store Button */}
            <button
              type="button"
              onClick={handleBuildStore}
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-full shadow-md shadow-violet-600/20 transition-all flex items-center gap-2 ml-auto"
            >
              <span>Build Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}