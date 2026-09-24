"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Zap,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const models = [
  {
    name: "EchoGPT",
    description:
      "Your all-in-one AI assistant for everyday conversations, ideas, and productivity.",
    icon: Sparkles,
    tag: "Recommended",
  },
  {
    name: "GPT",
    description:
      "Powerful AI for writing, coding, reasoning, and solving everyday problems.",
    icon: Brain,
    tag: "Popular",
  },
  {
    name: "Claude",
    description:
      "A thoughtful AI assistant for writing, analysis, and complex conversations.",
    icon: MessageSquare,
    tag: "Creative",
  },
  {
    name: "Gemini",
    description:
      "A versatile AI assistant for exploring ideas, understanding information, and creating.",
    icon: Zap,
    tag: "Versatile",
  },
  {
    name: "Grok",
    description:
      "An AI assistant designed for conversations, research, reasoning, and creative tasks.",
    icon: Brain,
    tag: "Fast",
  },
  {
    name: "DeepSeek",
    description:
      "A capable AI model for coding, reasoning, technical questions, and problem solving.",
    icon: Zap,
    tag: "Coding",
  },
  {
    name: "Mistral",
    description:
      "A flexible AI experience for writing, analysis, coding, and everyday productivity.",
    icon: Sparkles,
    tag: "Flexible",
  },
  {
    name: "Llama",
    description:
      "An open AI model family suitable for conversations, coding, experimentation, and creative work.",
    icon: MessageSquare,
    tag: "Open",
  },
];

export default function AIModels() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-10">
      {/* Background decoration */}
      <div className="absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />
 <h2 className="mt-5 text-3xl text-center  font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Choose the right AI for
            <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              every task.
            </span>
          </h2>
      <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mt-5 text-center text-base leading-7 text-gray-500 sm:text-lg">
            Explore different AI experiences from one modern workspace and
            choose the model that fits your workflow.
          </p>

        {/* Models */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(109,40,217,0.12)]"
              >
                {/* Tag */}
                <div className="absolute right-5 top-5">
                  <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-500">
                    {model.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition duration-300 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {model.name}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-6 text-gray-500">
                  {model.description}
                </p>

               
               
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}