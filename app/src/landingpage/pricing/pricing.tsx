"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for individuals getting started.",
    price: 19,
    features: [
      "5 Projects",
      "10 GB Storage",
      "Basic Analytics",
      "Email Support",
      "1 Team Member",
    ],
    button: "Get Started",
  },
  {
    name: "Professional",
    description: "Everything you need to grow your business.",
    price: 49,
    popular: true,
    features: [
      "Unlimited Projects",
      "100 GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "10 Team Members",
      "Custom Integrations",
    ],
    button: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "Advanced solutions for large teams.",
    price: 99,
    features: [
      "Unlimited Projects",
      "1 TB Storage",
      "Advanced Analytics",
      "24/7 Premium Support",
      "Unlimited Team Members",
      "Custom Integrations",
    ],
    button: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 text-4xl font-bold text-black">
            Plans that grow with you
          </span>

          {/* <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Simple pricing for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              everyone
            </span>
          </h2> */}

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Choose the plan that works best for you. Upgrade or downgrade
            anytime without any hassle.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-purple-500 bg-white shadow-xl shadow-purple-100"
                  : "border-gray-200 bg-white shadow-sm hover:border-purple-300 hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-600">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tight text-black">
                    ${plan.price}
                  </span>

                  <span className="mb-1 text-sm text-gray-500">
                    / month
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Billed monthly
                </p>
              </div>

              {/* Button */}
              <button
                className={`mb-8 w-full rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border border-gray-300 bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {plan.button}
              </button>

              {/* Features */}
              <div>
                <p className="mb-4 text-sm font-semibold text-black">
                  What's included:
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100">
                        <Check
                          size={13}
                          className="text-purple-600"
                          strokeWidth={3}
                        />
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}

