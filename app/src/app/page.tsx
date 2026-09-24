// "use client";

// import { useState } from "react";

// const quickActions = [
//   {
//     title: "Write",
//     description: "Create content, emails or ideas",
//     icon: "✍️",
//   },
//   {
//     title: "Explain",
//     description: "Understand complex topics easily",
//     icon: "💡",
//   },
//   {
//     title: "Code",
//     description: "Build and debug your code",
//     icon: "💻",
//   },
//   {
//     title: "Analyze",
//     description: "Analyze text, data and documents",
//     icon: "📊",
//   },
// ];

// export default function EchoGPTPage() {
//   const [prompt, setPrompt] = useState("");
//   const [model, setModel] = useState("EchoGPT");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!prompt.trim()) return;

//     console.log("Prompt:", prompt);
//     console.log("Model:", model);

//     setPrompt("");
//   };

//   return (
//     <div className="min-h-[calc(100vh-72px)] px-4 py-8 sm:px-6 lg:px-10">
//       <div className="mx-auto flex min-h-[calc(100vh-136px)] max-w-6xl flex-col">
//         {/* Welcome */}
//         <section className="flex flex-1 flex-col items-center justify-center py-10 text-center">
//           {/* Icon */}
//           <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
//             ✦
//           </div>

//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
//             Your AI Workspace
//           </p>

//           <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
//             How can I help you{" "}
//             <span className="text-violet-600">today?</span>
//           </h1>

//           <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
//             Ask questions, create content, analyze information, or build
//             something amazing with EchoGPT.
//           </p>

//           {/* Prompt */}
//           <form
//             onSubmit={handleSubmit}
//             className="mt-10 w-full max-w-3xl"
//           >
//             <div className="rounded-2xl border border-violet-200 bg-white p-3 shadow-[0_10px_40px_rgba(109,40,217,0.08)] transition focus-within:border-violet-400 focus-within:shadow-[0_10px_50px_rgba(109,40,217,0.12)]">
//               <textarea
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 placeholder="Ask EchoGPT anything..."
//                 rows={3}
//                 className="w-full resize-none bg-transparent px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
//               />

//               <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3">
//                 <div className="flex items-center gap-2">
//                   {/* Model Selector */}
//                   <select
//                     value={model}
//                     onChange={(e) => setModel(e.target.value)}
//                     className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition focus:border-violet-400"
//                   >
//                     <option>EchoGPT</option>
//                     <option>GPT</option>
//                     <option>Claude</option>
//                     <option>Gemini</option>
//                   </select>

//                   <button
//                     type="button"
//                     className="hidden rounded-lg px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-100 sm:block"
//                   >
//                     📎 Attach
//                   </button>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={!prompt.trim()}
//                   className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
//                 >
//                   Send
//                   <span>➜</span>
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Quick Actions */}
//           <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//             {quickActions.map((action) => (
//               <button
//                 key={action.title}
//                 type="button"
//                 onClick={() => setPrompt(`Help me ${action.title.toLowerCase()}...`)}
//                 className="group rounded-2xl border border-gray-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:shadow-md"
//               >
//                 <div className="mb-3 text-xl">{action.icon}</div>

//                 <h3 className="text-sm font-semibold text-gray-800 group-hover:text-violet-700">
//                   {action.title}
//                 </h3>

//                 <p className="mt-1 text-xs leading-5 text-gray-500">
//                   {action.description}
//                 </p>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Recent conversations */}
//         <section className="pb-8">
//           <div className="mb-4 flex items-center justify-between">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900">
//                 Recent conversations
//               </h2>

//               <p className="mt-1 text-sm text-gray-500">
//                 Continue where you left off.
//               </p>
//             </div>

//             <a
//               href="/app/history"
//               className="text-sm font-semibold text-violet-600 hover:text-violet-700"
//             >
//               View all
//             </a>
//           </div>

//           <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               "Building a React dashboard",
//               "Next.js authentication",
//               "Understanding TypeScript",
//             ].map((conversation) => (
//               <button
//                 key={conversation}
//                 type="button"
//                 className="rounded-xl border border-gray-200 bg-white p-4 text-left transition hover:border-violet-200 hover:shadow-sm"
//               >
//                 <p className="truncate text-sm font-semibold text-gray-800">
//                   {conversation}
//                 </p>

//                 <p className="mt-2 text-xs text-gray-400">
//                   Continue conversation →
//                 </p>
//               </button>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }