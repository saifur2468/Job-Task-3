"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const PRICING_PLANS = [
  {
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Try us out for a quick project or two",
    popular: false,
    features: [
      "1 active project",
      "3 MB upload limit",
      "5,000 visitors /mo",
    ],
  },
  {
    name: "Tiny",
    priceMonthly: 5,
    priceYearly: 4,
    description: "Perfect for a professional link",
    popular: false,
    features: [
      "1 active project",
      "25 MB upload limit",
      "10,000 visitors /mo",
      "QR Codes",
      "Built-in analytics",
    ],
  },
  {
    name: "Solo",
    priceMonthly: 13,
    priceYearly: 10,
    description: "Great for individuals & small projects",
    popular: true,
    features: [
      "5 active projects",
      "75 MB upload limit",
      "100,000 visitors /mo",
      "Custom domains",
      "Password protection",
    ],
  },
  {
    name: "Pro",
    priceMonthly: 31,
    priceYearly: 25,
    description: "For freelancers & agencies",
    popular: false,
    features: [
      "Unlimited projects",
      "10 GB upload",
      "500,000 visitors /mo",
      "Capture emails",
      "Team members",
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="bg-white text-stone-950 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Upgrade for More
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Upgrade to link your custom domain, track visits, edit content & unlock premium features.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-stone-100 rounded-full border border-stone-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                billingCycle === "yearly"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                  plan.popular
                    ? "border-stone-900 bg-stone-50/50 shadow-xl shadow-stone-200/50 ring-1 ring-stone-900"
                    : "border-stone-200 bg-white hover:border-stone-300 shadow-sm"
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-stone-900">{plan.name}</h3>
                  </div>
                  
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-stone-900">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-stone-500">
                      /mo
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-stone-600 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Action Button */}
                  <button
                    type="button"
                    className={`mt-6 w-full py-3 px-4 rounded-full text-xs font-bold transition-all duration-200 ${
                      plan.popular
                        ? "bg-stone-900 text-white hover:bg-stone-800 shadow-sm"
                        : "bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200"
                    }`}
                  >
                    Get Started
                  </button>

                  {/* Divider */}
                  <div className="my-6 border-t border-stone-100" />

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <div className="w-4 h-4 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-stone-900 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}