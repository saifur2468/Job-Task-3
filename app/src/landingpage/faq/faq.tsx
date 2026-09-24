'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: "What is included in the pricing plans?",
        answer: "Each pricing plan includes different features, storage limits, projects, team members, and support options. You can choose the plan that best fits your needs.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes. You can upgrade or downgrade your plan at any time based on your requirements.",
    },
    {
        question: "Do I need a credit card to get started?",
        answer: "No. You can get started without providing your credit card information.",
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes. You can cancel your subscription whenever you want. Your current plan will remain active until the end of your billing period.",
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes. Customer support is available for all plans, with priority and 24/7 support available on selected plans.",
    }, 
    { question: "Is there a free trial available?", 
    answer: "Yes. Selected plans include a free trial so you can explore the features before making a commitment.", },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(1);  

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Side: Images & Experience Box Grid */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">

                    {/* Tall Image Card (Left) */}
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 sm:translate-y-6">
                        <img
                            src="https://img.magnific.com/free-photo/ai-robot-analyzing-data-with-futuristic-interface_23-2151977874.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Ai Image"
                            className="w-full h-full object-cover min-h-[380px]"
                        />
                    </div>

                    {/* Right Column (Top Image & Bottom Experience Badge) */}
                    <div className="flex flex-col gap-6">
                        {/* Top Image */}
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 h-[220px]">
                            <img
                                src="https://mhblogadmin.mhcockpit.com/media/blog_banners/ai-in-robotics-how-it-works-engineers-career-scope.webp"
                                alt="Medical Team Working"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* 25 Years Experience Card */}
                        <div className="bg-[#0c1b18] text-white rounded-3xl p-6 flex items-center gap-5 shadow-xl">
                            <div className="bg-[#e53935] text-white font-black text-2xl px-4 py-3 rounded-2xl flex flex-col items-center justify-center tracking-tight">
                                <span>5+</span>
                                <span className="text-[10px] font-medium tracking-normal uppercase">Years</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-base leading-snug">of Experience in the It  Service</h4>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Side: FAQs Content */}
                <div className="lg:col-span-6">

                    {/* Badge */}
                    <div className="inline-block border border-red-200 text-red-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-red-50/50">
                        General FAQs
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-10 leading-[1.15]">
                        Taking all your questions to reality.
                    </h2>

                    {/* Accordion List */}
                    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="py-5 transition-all duration-200">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between text-left font-bold text-gray-900 text-lg hover:text-red-600 transition-colors"
                                    >
                                        <span>{item.question}</span>
                                        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 ml-4 text-gray-700">
                                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="mt-3 pr-12 text-gray-600 text-sm md:text-base leading-relaxed animate-fadeIn">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}