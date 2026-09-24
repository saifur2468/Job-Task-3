// import type { ReactNode } from "react";

// export default function AppLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return (
//     <div className="min-h-screen bg-[#faf9ff] text-gray-900">
//       {/* App Sidebar */}
//       <aside className="fixed left-0 top-0 hidden h-screen w-[260px] border-r border-violet-100 bg-white lg:flex lg:flex-col">
//         {/* Logo */}
//         <div className="flex h-[88px] items-center border-b border-violet-100 px-6">
//           <div className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-xl text-white">
//               ✦
//             </div>

//             <span className="text-xl font-bold tracking-wide text-violet-600">
//               EchoGPT
//             </span>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto p-4">
//           <div className="space-y-1">
//             <SidebarItem href="/app" icon="⌂" label="Chat" />
//             <SidebarItem href="/app/history" icon="◷" label="History" />
//             <SidebarItem href="/app/connectors" icon="⌘" label="Connectors" />
//             <SidebarItem href="/app/store" icon="▦" label="Store" />
//             <SidebarItem href="/app/ai-tasks" icon="✦" label="AI Tasks" />
//             <SidebarItem
//               href="/app/ai-job-analysis"
//               icon="◫"
//               label="AI Job Analysis"
//             />
//             <SidebarItem
//               href="/app/aisop-builder"
//               icon="▤"
//               label="AISOP Builder"
//             />
//           </div>

//           <div className="my-6 border-t border-gray-100" />

//           <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
//             Help & Support
//           </p>

//           <div className="space-y-1">
//             <SidebarItem href="/app/support" icon="?" label="Support" />
//             <SidebarItem
//               href="/app/subscription"
//               icon="◇"
//               label="Subscription"
//             />
//             <SidebarItem
//               href="/app/api-platform"
//               icon="⌘"
//               label="API Platform"
//             />
//           </div>
//         </nav>

//         {/* Bottom */}
//         <div className="border-t border-violet-100 p-4">
//           <SidebarItem href="/app/settings" icon="⚙" label="Settings" />
//         </div>
//       </aside>

//       {/* Main Area */}
//       <div className="min-h-screen lg:pl-[260px]">
//         {/* Header */}
//         <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-violet-100 bg-white/90 px-5 backdrop-blur-md sm:px-8">
//           {/* Mobile logo */}
//           <div className="flex items-center gap-3 lg:hidden">
//             <button
//               type="button"
//               className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200"
//               aria-label="Open menu"
//             >
//               ☰
//             </button>

//             <span className="font-bold text-violet-600">EchoGPT</span>
//           </div>

//           {/* Desktop title */}
//           <div className="hidden lg:block">
//             <p className="text-sm text-gray-500">AI Workspace</p>
//           </div>

//           {/* Right side */}
//           <div className="ml-auto flex items-center gap-3">
//             <button
//               type="button"
//               className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-violet-50 hover:text-violet-600 sm:block"
//             >
//               Help
//             </button>

//             <button
//               type="button"
//               className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
//             >
//               Sign In
//             </button>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }

// function SidebarItem({
//   href,
//   icon,
//   label,
// }: {
//   href: string;
//   icon: string;
//   label: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-violet-50 hover:text-violet-600"
//     >
//       <span className="flex h-6 w-6 items-center justify-center text-lg text-gray-400 transition group-hover:text-violet-600">
//         {icon}
//       </span>

//       <span>{label}</span>
//     </a>
//   );
// }