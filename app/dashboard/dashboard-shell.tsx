// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import {
//   ImageIcon,
//   VideoIcon,
//   GitCompareArrows,
//   Share2,
//   Clock,
//   ShoppingBag,
//   LayoutGrid,
//   FileSearch,
//   ClipboardList,
//   LifeBuoy,
//   Mail,
//   CreditCard,
//   Code2,
//   MessageSquare,
//   Home,
//   Settings,
//   Sun,
//   PenSquare,
//   Menu,
//   X,
//   Sparkles,
// } from "lucide-react";

// const ENGAGEMENT_ITEMS: {
//   href: string;
//   label: string;
//   icon: React.ElementType;
//   pro?: boolean;
// }[] = [
//   { href: "/dashboard/image-studio", label: "Image Studio", icon: ImageIcon, pro: true },
//   { href: "/dashboard/video-studio", label: "Video Studio", icon: VideoIcon, pro: true },
//   { href: "/dashboard/compare", label: "Compare", icon: GitCompareArrows },
//   { href: "/dashboard/connectors", label: "Connectors", icon: Share2 },
//   { href: "/dashboard/history", label: "History", icon: Clock },
//   { href: "/dashboard/store", label: "Store", icon: ShoppingBag },
//   { href: "/dashboard/ai-tasks", label: "AI Tasks", icon: LayoutGrid },
//   { href: "/dashboard/ai-job-analysis", label: "AI Job Analysis", icon: FileSearch },
//   { href: "/dashboard/ai-sop-builder", label: "AI SOP Builder", icon: ClipboardList },
// ];

// const SUPPORT_ITEMS: { href: string; label: string; icon: React.ElementType }[] = [
//   { href: "/dashboard/support", label: "Support", icon: LifeBuoy },
//   { href: "/dashboard/newsletter", label: "Newsletter", icon: Mail },
//   { href: "/dashboard/subscriptions", label: "Subscriptions", icon: CreditCard },
//   { href: "/dashboard/api-platform", label: "API Platform", icon: Code2 },
//   { href: "/dashboard/discord", label: "Discord", icon: MessageSquare },
// ];

// const BOTTOM_ITEMS: { href: string; icon: React.ElementType; label: string }[] = [
//   { href: "/dashboard", icon: Home, label: "Home" },
//   { href: "/dashboard/history", icon: MessageSquare, label: "Chats" },
//   { href: "/dashboard/setting", icon: Settings, label: "Settings" },
// ];

// function isActive(pathname: string, href: string) {
//   if (href === "/dashboard") return pathname === "/dashboard";
//   return pathname === href || pathname.startsWith(href + "/");
// }

// export default function DashboardShell({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <div className="flex h-screen w-full bg-white text-[#1A1823]">
//       {/* Mobile top bar */}
//       <div className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between border-b border-[#ECEAF5] bg-white px-4 md:hidden">
//         <span className="text-[15px] font-semibold tracking-tight">Dashboard</span>
//         <button
//           onClick={() => setMobileOpen((v) => !v)}
//           className="flex h-8 w-8 items-center justify-center rounded-md border border-[#ECEAF5]"
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X size={16} /> : <Menu size={16} />}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-20 flex w-[270px] shrink-0 transform flex-col border-r border-[#ECEAF5] bg-[#F8F7FC] pt-14 transition-transform duration-200 md:static md:translate-x-0 md:pt-0 ${
//           mobileOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-1 flex-col overflow-y-auto px-4 pb-3 pt-6">
//           {/* Logo */}
//           {/* <div className="mb-5 flex items-center gap-2.5 px-1">
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#5B3DE0] text-[13px] font-bold text-white shadow-sm">
//               J
//             </div>
//             <span className="text-[16px] font-bold tracking-[0.04em] text-[#1A1823]">
//               JOB TASK
//             </span>
//           </div> */}
//           <div className="flex items-center gap-3 px-2 py-3">
//       {/* Icon Box with rounded corners and gradient */}
//       <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20">
//         <Sparkles className="w-5 h-5" />
//       </div>

//       {/* Brand Name */}
//       <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">
//         EchoGPT
//       </span>
//     </div>

//           {/* New chat button */}
//           <button
//             type="button"
//             className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#6142E8] py-2.5 text-[13.5px] font-medium text-white shadow-sm shadow-[#6142E8]/20 transition-opacity hover:opacity-90"
//           >
//             <PenSquare size={15} />
//             New Chat
//           </button>

//           <nav className="flex flex-1 flex-col gap-5">
//             <div>
//               <p className="mb-2 px-1 text-[10.5px] font-semibold tracking-[0.08em] text-[#A5A2B5]">
//                 ENGAGEMENT
//               </p>
//               <div className="flex flex-col gap-0.5">
//                 {ENGAGEMENT_ITEMS.map((item) => {
//                   const active = isActive(pathname, item.href);
//                   const Icon = item.icon;
//                   return (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       onClick={() => setMobileOpen(false)}
//                       className={`flex items-center justify-between rounded-lg px-2.5 py-[7px] text-[13.5px] transition-colors ${
//                         active
//                           ? "bg-white font-medium text-[#6142E8] shadow-sm"
//                           : "text-[#4B4859] hover:bg-white/70"
//                       }`}
//                     >
//                       <span className="flex items-center gap-2.5">
//                         <Icon
//                           size={16}
//                           strokeWidth={1.9}
//                           className={active ? "text-[#6142E8]" : "text-[#8B8898]"}
//                         />
//                         {item.label}
//                       </span>
//                       {item.pro && (
//                         <span className="rounded-full bg-[#F1ECFF] px-2 py-[1px] text-[10px] font-semibold text-[#6142E8]">
//                           PRO
//                         </span>
//                       )}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="border-t border-[#ECEAF5] pt-4">
//               <p className="mb-2 px-1 text-[10.5px] font-semibold tracking-[0.08em] text-[#A5A2B5]">
//                 HELP &amp; SUPPORT
//               </p>
//               <div className="flex flex-col gap-0.5">
//                 {SUPPORT_ITEMS.map((item) => {
//                   const active = isActive(pathname, item.href);
//                   const Icon = item.icon;
//                   return (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       onClick={() => setMobileOpen(false)}
//                       className={`flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[13.5px] transition-colors ${
//                         active
//                           ? "bg-white font-medium text-[#6142E8] shadow-sm"
//                           : "text-[#4B4859] hover:bg-white/70"
//                       }`}
//                     >
//                       <Icon
//                         size={16}
//                         strokeWidth={1.9}
//                         className={active ? "text-[#6142E8]" : "text-[#8B8898]"}
//                       />
//                       {item.label}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </nav>
//         </div>

//         {/* Bottom icon rail */}
//         <div className="flex items-center justify-around border-t border-[#ECEAF5] px-4 py-3">
//           {BOTTOM_ITEMS.map((item) => {
//             const active = isActive(pathname, item.href);
//             const Icon = item.icon;
//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
//                   active ? "bg-white text-[#6142E8] shadow-sm" : "text-[#8B8898] hover:bg-white/70"
//                 }`}
//                 aria-label={item.label}
//               >
//                 <Icon size={16} strokeWidth={1.9} />
//               </Link>
//             );
//           })}
//           <button
//             type="button"
//             className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8B8898] transition-colors hover:bg-white/70"
//             aria-label="Toggle theme"
//           >
//             <Sun size={16} strokeWidth={1.9} />
//           </button>
//         </div>
//       </aside>

//       {/* Overlay for mobile */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 z-10 bg-black/30 md:hidden"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       {/* Right side content */}
//       <main className="flex-1 overflow-y-auto pt-14 md:pt-0">{children}</main>
//     </div>
//   );
// }




























"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ImageIcon,
  VideoIcon,
  GitCompareArrows,
  Share2,
  Clock,
  ShoppingBag,
  LayoutGrid,
  FileSearch,
  ClipboardList,
  LifeBuoy,
  Mail,
  CreditCard,
  Code2,
  MessageSquare,
  Home,
  Settings,
  Sun,
  PenSquare,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const ENGAGEMENT_ITEMS: {
  href: string;
  label: string;
  icon: React.ElementType;
  pro?: boolean;
}[] = [
  {
    href: "/dashboard/image-studio",
    label: "Image Studio",
    icon: ImageIcon,
    pro: true,
  },
  {
    href: "/dashboard/video-studio",
    label: "Video Studio",
    icon: VideoIcon,
    pro: true,
  },
  {
    href: "/dashboard/compare",
    label: "Compare",
    icon: GitCompareArrows,
  },
  {
    href: "/dashboard/connectors",
    label: "Connectors",
    icon: Share2,
  },
  {
    href: "/dashboard/history",
    label: "History",
    icon: Clock,
  },
  {
    href: "/dashboard/store",
    label: "Store",
    icon: ShoppingBag,
  },
  {
    href: "/dashboard/ai-tasks",
    label: "AI Tasks",
    icon: LayoutGrid,
  },
  {
    href: "/dashboard/ai-job-analysis",
    label: "AI Job Analysis",
    icon: FileSearch,
  },
  {
    href: "/dashboard/ai-sop-builder",
    label: "AI SOP Builder",
    icon: ClipboardList,
  },
];

const SUPPORT_ITEMS: {
  href: string;
  label: string;
  icon: React.ElementType;
}[] = [
  {
    href: "/dashboard/support",
    label: "Support",
    icon: LifeBuoy,
  },
  {
    href: "/dashboard/newsletter",
    label: "Newsletter",
    icon: Mail,
  },
  {
    href: "/dashboard/subscriptions",
    label: "Subscriptions",
    icon: CreditCard,
  },
  {
    href: "/dashboard/api-platform",
    label: "API Platform",
    icon: Code2,
  },
  {
    href: "/dashboard/discord",
    label: "Discord",
    icon: MessageSquare,
  },
];

const BOTTOM_ITEMS: {
  href: string;
  icon: React.ElementType;
  label: string;
}[] = [
  {
    href: "/dashboard",
    icon: Home,
    label: "Home",
  },
  {
    href: "/dashboard/history",
    icon: MessageSquare,
    label: "Chats",
  },
  {
    href: "/dashboard/setting",
    icon: Settings,
    label: "Settings",
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === "/dashboard";
  }

  return pathname === href || pathname.startsWith(href + "/");
}

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <div className="flex min-h-screen w-full bg-white text-[#1A1823]">
      {/* =====================================================
          MOBILE DASHBOARD MENU BUTTON
          This stays below your main Navbar
      ====================================================== */}
      <div className="fixed left-0 right-0 top-14 z-30 flex h-12 items-center border-b border-[#ECEAF5] bg-white px-4 md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#ECEAF5] text-[#4B4859] transition-colors hover:bg-[#F8F7FC]"
          aria-label={mobileOpen ? "Close dashboard menu" : "Open dashboard menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="ml-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 text-white">
            <Sparkles size={14} />
          </div>

          <span className="text-sm font-semibold text-[#1A1823]">
            Dashboard
          </span>
        </div>
      </div>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close dashboard menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 top-[104px] z-30 bg-black/40 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <aside
        className={`
          fixed
          bottom-0
          left-0
          top-[104px]
          z-40
          flex
          w-[280px]
          flex-col
          border-r
          border-[#ECEAF5]
          bg-[#F8F7FC]
          shadow-xl
          transition-transform
          duration-300
          ease-in-out

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:sticky
          md:top-0
          md:h-screen
          md:w-[270px]
          md:translate-x-0
          md:shadow-none
        `}
      >
        {/* =====================================================
            SIDEBAR SCROLL AREA
        ====================================================== */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-3 px-2 py-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-500/20">
              <Sparkles className="h-5 w-5" />
            </div>

            <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              EchoGPT
            </span>
          </div>

          {/* New Chat */}
          <button
            type="button"
            className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#6142E8] py-2.5 text-[13.5px] font-medium text-white shadow-sm shadow-[#6142E8]/20 transition-opacity hover:opacity-95"
          >
            <PenSquare size={15} />
            New Chat
          </button>

          {/* =====================================================
              ENGAGEMENT
          ====================================================== */}
          <div>
            <p className="mb-2 px-1 text-[10.5px] font-semibold tracking-[0.08em] text-[#A5A2B5]">
              ENGAGEMENT
            </p>

            <div className="flex flex-col gap-0.5">
              {ENGAGEMENT_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-lg
                      px-2.5
                      py-[8px]
                      text-[13.5px]
                      transition-colors

                      ${
                        active
                          ? "bg-white font-medium text-[#6142E8] shadow-sm"
                          : "text-[#4B4859] hover:bg-white/70"
                      }
                    `}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <Icon
                        size={16}
                        strokeWidth={1.9}
                        className={
                          active
                            ? "shrink-0 text-[#6142E8]"
                            : "shrink-0 text-[#8B8898]"
                        }
                      />

                      <span className="truncate">
                        {item.label}
                      </span>
                    </span>

                    {item.pro && (
                      <span className="ml-2 shrink-0 rounded-full bg-[#F1ECFF] px-2 py-[1px] text-[10px] font-semibold text-[#6142E8]">
                        PRO
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              HELP & SUPPORT
          ====================================================== */}
          <div className="mt-5 border-t border-[#ECEAF5] pt-4">
            <p className="mb-2 px-1 text-[10.5px] font-semibold tracking-[0.08em] text-[#A5A2B5]">
              HELP &amp; SUPPORT
            </p>

            <div className="flex flex-col gap-0.5">
              {SUPPORT_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
                      flex
                      items-center
                      gap-2.5
                      rounded-lg
                      px-2.5
                      py-[8px]
                      text-[13.5px]
                      transition-colors

                      ${
                        active
                          ? "bg-white font-medium text-[#6142E8] shadow-sm"
                          : "text-[#4B4859] hover:bg-white/70"
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.9}
                      className={
                        active
                          ? "shrink-0 text-[#6142E8]"
                          : "shrink-0 text-[#8B8898]"
                      }
                    />

                    <span className="truncate">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM ICON NAV
        ====================================================== */}
        <div className="shrink-0 border-t border-[#ECEAF5] bg-[#F8F7FC] px-4 py-3">
          <div className="flex items-center justify-around">
            {BOTTOM_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    transition-colors

                    ${
                      active
                        ? "bg-white text-[#6142E8] shadow-sm"
                        : "text-[#8B8898] hover:bg-white/70"
                    }
                  `}
                  aria-label={item.label}
                >
                  <Icon size={16} strokeWidth={1.9} />
                </Link>
              );
            })}

            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8B8898] transition-colors hover:bg-white/70"
              aria-label="Toggle theme"
            >
              <Sun size={16} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="min-w-0 flex-1 bg-white pt-[104px] md:pt-0">
        {children}
      </main>
    </div>
  );
}
