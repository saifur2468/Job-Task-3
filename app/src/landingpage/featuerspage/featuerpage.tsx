
"use client";

import {
  Bot,
  Zap,
  Brain,
  Sparkles,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Conversations",
    description:
      "Have natural and intelligent conversations with an AI assistant that understands your questions and provides helpful responses.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description:
      "Get quick and efficient answers without unnecessary waiting, helping you stay productive and focused.",
  },
  {
    icon: Brain,
    title: "Smart & Accurate",
    description:
      "Get relevant and meaningful responses designed to understand your context and help you solve problems.",
  },
  {
    icon: Sparkles,
    title: "Simple & Easy to Use",
    description:
      "A clean and intuitive interface makes it easy for anyone to start chatting with EchoGPT instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Your conversations are handled with privacy and security in mind, giving you a safer AI experience.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description:
      "Enjoy a smooth and responsive experience across desktops, tablets, and mobile devices.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* <span className="mb-4 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-semibold text-gray-700">
            <Sparkles size={15} className="mr-2" />
            Powerful Features
          </span> */}

          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              chat smarter
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            EchoGPT brings powerful AI capabilities into a simple, fast, and
            user-friendly experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/60"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white transition-all duration-300 group-hover:bg-purple-600">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* Number */}
                <span className="mb-3 block text-xs font-bold tracking-widest text-gray-400">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-black">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {feature.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

