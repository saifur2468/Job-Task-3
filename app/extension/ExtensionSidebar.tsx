// "use client";

// import {
//   MessageSquare,
//   Folder,
//   FileText,
//   Share2,
//   FileStack,
//   History,
//   MessageCircle,
//   UserPlus,
//   Settings,
//   ChevronDown,
//   Sparkles,
// } from "lucide-react";

// const mainItems = [
//   {
//     label: "Chat With AI",
//     icon: MessageSquare,
//     active: true,
//   },
//   {
//     label: "Prompt input experience",
//     icon: Folder,
//     expandable: true,
//   },
//   {
//     label: "AI model selection",
//     icon: FileText,
//   },
//   {
//     label: "Conversation history",


//     icon: Share2,
//   },
//   {
//     label: "Quick actions",
//     icon: FileStack,
//     beta: true,
//   },
//   {
//     label: "Settings page",
//     icon: History,
//   },
//    {
//     label: "user experience ",
//     icon: History,
//   },
  
// ];

// export default function ExtensionSidebar() {
//   return (
//     <aside className="flex h-full min-h-[680px] w-full flex-col rounded-[24px] bg-white px-4 py-5 text-stone-800">

//       {/* Workspace Header */}
//       <button className="flex items-center justify-between rounded-xl px-2 py-2.5 transition hover:bg-stone-50">

//         <div className="flex items-center gap-3">

//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 text-sm font-medium text-stone-700">
//             E
//           </div>

//           <span className="text-[13px] font-semibold">
//             EchoGPT Workspace
//           </span>

//         </div>

//         <ChevronDown className="h-4 w-4 text-stone-500" />

//       </button>

//       {/* Main Navigation */}
//       <nav className="mt-7 space-y-1">

//         {mainItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <button
//               key={item.label}
//               className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
//                 item.active
//                   ? "bg-violet-50 text-violet-700"
//                   : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
//               }`}
//             >

//               <Icon
//                 className={`h-[17px] w-[17px] shrink-0 ${
//                   item.active
//                     ? "text-violet-600"
//                     : "text-stone-500"
//                 }`}
//                 strokeWidth={1.8}
//               />

//               <span className="flex-1 text-[12px] font-medium">
//                 {item.label}
//               </span>

//               {item.expandable && (
//                 <ChevronDown className="h-3.5 w-3.5 text-stone-400" />
//               )}

//               {item.beta && (
//                 <span className="rounded-md bg-stone-900 px-1.5 py-0.5 text-[8px] font-bold text-white">
//                   Beta
//                 </span>
//               )}

//             </button>
//           );
//         })}

//       </nav>

//       {/* Premium Card */}
//       <div className="mt-auto">

//         <div className="relative mt-8 overflow-hidden rounded-[20px] border border-violet-100 bg-gradient-to-b from-violet-100 via-indigo-50 to-white p-3">

//           {/* Decorative glow */}
//           <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-300/30 blur-2xl" />

//           {/* Fake browser/card */}
//           <div className="relative overflow-hidden rounded-xl border border-white/80 bg-white shadow-sm">

//             <div className="flex items-center justify-between px-3 py-3">

//               <span className="text-[10px] font-semibold text-stone-700">
//                 Premium Plan
//               </span>

//               <span className="flex items-center gap-1 text-[9px] font-bold text-violet-600">
//                 <Sparkles className="h-3 w-3" />
//                 10/10
//               </span>

//             </div>

//             <div className="space-y-2 px-3 pb-4">

//               <div className="h-1.5 w-16 rounded-full bg-stone-100" />
//               <div className="h-1.5 w-24 rounded-full bg-stone-100" />
//               <div className="h-1.5 w-20 rounded-full bg-stone-100" />

//             </div>

//           </div>

//         </div>

//         <div className="px-2 pt-3">

//           <button className="text-[13px] font-semibold text-stone-800 hover:text-violet-600">
//             Upgrade to Premium
//             <span className="ml-1 text-violet-600">→</span>
//           </button>

//           <p className="mt-1 text-[10px] leading-4 text-stone-400">
//             Want to reach more features and
//             <br />
//             grow much bigger?
//           </p>

//         </div>

//       </div>

//       {/* Bottom Navigation */}
//       <div className="mt-8 space-y-1">

//         <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-stone-600 transition hover:bg-stone-50 hover:text-stone-900">

//           <MessageCircle
//             className="h-[17px] w-[17px]"
//             strokeWidth={1.8}
//           />

//           <span className="text-[12px] font-medium">
//             Feedback
//           </span>

//         </button>

//         <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-stone-600 transition hover:bg-stone-50 hover:text-stone-900">

//           <UserPlus
//             className="h-[17px] w-[17px]"
//             strokeWidth={1.8}
//           />

//           <span className="text-[12px] font-medium">
//             Invite People
//           </span>

//         </button>

//         <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-stone-600 transition hover:bg-stone-50 hover:text-stone-900">

//           <Settings
//             className="h-[17px] w-[17px]"
//             strokeWidth={1.8}
//           />

//           <span className="text-[12px] font-medium">
//             Settings
//           </span>

//         </button>

//       </div>

//       {/* Divider */}
//       <div className="my-4 border-t border-stone-100" />

//       {/* Profile */}
//       <div className="flex items-center gap-3 px-2 pb-1">

//         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-rose-300 text-[10px] font-bold text-stone-700">
//           S
//         </div>

//         <div className="min-w-0 flex-1">
//           <p className="truncate text-[11px] font-semibold text-stone-800">
//             Saifur Rahman
//           </p>

//           <p className="truncate text-[9px] text-stone-400">
//             Free Workspace
//           </p>
//         </div>

//         <ChevronDown className="h-3.5 w-3.5 text-stone-400" />

//       </div>

//     </aside>
//   );
// }




















"use client";

import {
  MessageSquare,
  Folder,
  FileText,
  Share2,
  FileStack,
  History,
  MessageCircle,
  UserPlus,
  Settings,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const mainItems = [
  {
    label: "Chat With AI",
    icon: MessageSquare,
    active: true,
  },
  {
    label: "Prompt Input",
    icon: Folder,
    expandable: true,
  },
  {
    label: "AI Model Selection",
    icon: FileText,
  },
  {
    label: "Conversation History",
    icon: Share2,
  },
  {
    label: "Quick Actions",
    icon: FileStack,
    beta: true,
  },
  {
    label: "Settings Page",
    icon: History,
  },
  {
    label: "User Experience",
    icon: History,
  },
];

export default function ExtensionSidebar() {
  return (
    <aside
      className="
        flex w-full flex-col
        rounded-2xl sm:rounded-[24px]
        bg-white
        px-3 py-4
        sm:px-4 sm:py-5
        text-stone-800
        shadow-sm
      "
      aria-label="EchoGPT extension navigation"
    >
      {/* Workspace Header */}
      <button
        type="button"
        aria-label="Open workspace menu"
        className="
          flex w-full items-center justify-between
          rounded-xl
          px-2 py-2.5
          transition
          hover:bg-stone-50
          focus:outline-none
          focus:ring-2
          focus:ring-violet-500
          focus:ring-offset-2
        "
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-lg
              bg-stone-100
              text-sm font-medium
              text-stone-700
            "
          >
            E
          </div>

          <span className="truncate text-[13px] font-semibold">
            EchoGPT Workspace
          </span>
        </div>

        <ChevronDown
          className="h-4 w-4 shrink-0 text-stone-500"
          aria-hidden="true"
        />
      </button>

      {/* Main Navigation */}
      <nav
        className="mt-5 space-y-1 sm:mt-7"
        aria-label="Main navigation"
      >
        {mainItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              aria-current={item.active ? "page" : undefined}
              className={`
                group flex w-full items-center gap-3
                rounded-xl
                px-3 py-2.5
                text-left
                transition
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
                focus:ring-offset-1
                ${
                  item.active
                    ? "bg-violet-50 text-violet-700"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }
              `}
            >
              <Icon
                className={`
                  h-[17px] w-[17px] shrink-0
                  ${
                    item.active
                      ? "text-violet-600"
                      : "text-stone-500"
                  }
                `}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span className="min-w-0 flex-1 truncate text-[12px] font-medium">
                {item.label}
              </span>

              {item.expandable && (
                <ChevronDown
                  className="h-3.5 w-3.5 shrink-0 text-stone-400"
                  aria-hidden="true"
                />
              )}

              {item.beta && (
                <span
                  className="
                    shrink-0
                    rounded-md
                    bg-stone-900
                    px-1.5 py-0.5
                    text-[8px]
                    font-bold
                    text-white
                  "
                >
                  Beta
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Premium Card */}
      <div className="mt-6 sm:mt-auto">
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            border border-violet-100
            bg-gradient-to-b
            from-violet-100
            via-indigo-50
            to-white
            p-3
          "
        >
          {/* Decorative Glow */}
          <div
            className="
              absolute
              -right-8 -top-8
              h-24 w-24
              rounded-full
              bg-violet-300/30
              blur-2xl
            "
            aria-hidden="true"
          />

          {/* Premium Preview */}
          <div className="relative overflow-hidden rounded-xl border border-white/80 bg-white shadow-sm">
            <div className="flex items-center justify-between px-3 py-3">
              <span className="text-[10px] font-semibold text-stone-700">
                Premium Plan
              </span>

              <span className="flex items-center gap-1 text-[9px] font-bold text-violet-600">
                <Sparkles
                  className="h-3 w-3"
                  aria-hidden="true"
                />
                10/10
              </span>
            </div>

            <div className="space-y-2 px-3 pb-4">
              <div className="h-1.5 w-16 rounded-full bg-stone-100" />
              <div className="h-1.5 w-24 rounded-full bg-stone-100" />
              <div className="h-1.5 w-20 rounded-full bg-stone-100" />
            </div>
          </div>
        </div>

        <div className="px-2 pt-3">
          <button
            type="button"
            className="
              text-left
              text-[13px]
              font-semibold
              text-stone-800
              transition
              hover:text-violet-600
              focus:outline-none
              focus:ring-2
              focus:ring-violet-500
              focus:ring-offset-2
              rounded
            "
          >
            Upgrade to Premium
            <span className="ml-1 text-violet-600">
              →
            </span>
          </button>

          <p className="mt-1 text-[10px] leading-4 text-stone-400">
            Want to reach more features and
            <br />
            grow much bigger?
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-6 space-y-1 sm:mt-8">
        <button
          type="button"
          className="
            flex w-full items-center gap-3
            rounded-xl
            px-3 py-2.5
            text-stone-600
            transition
            hover:bg-stone-50
            hover:text-stone-900
            focus:outline-none
            focus:ring-2
            focus:ring-violet-500
          "
        >
          <MessageCircle
            className="h-[17px] w-[17px] shrink-0"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span className="text-[12px] font-medium">
            Feedback
          </span>
        </button>

        <button
          type="button"
          className="
            flex w-full items-center gap-3
            rounded-xl
            px-3 py-2.5
            text-stone-600
            transition
            hover:bg-stone-50
            hover:text-stone-900
            focus:outline-none
            focus:ring-2
            focus:ring-violet-500
          "
        >
          <UserPlus
            className="h-[17px] w-[17px] shrink-0"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span className="text-[12px] font-medium">
            Invite People
          </span>
        </button>

        <button
          type="button"
          className="
            flex w-full items-center gap-3
            rounded-xl
            px-3 py-2.5
            text-stone-600
            transition
            hover:bg-stone-50
            hover:text-stone-900
            focus:outline-none
            focus:ring-2
            focus:ring-violet-500
          "
        >
          <Settings
            className="h-[17px] w-[17px] shrink-0"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span className="text-[12px] font-medium">
            Settings
          </span>
        </button>
      </div>

      {/* Divider */}
      <div
        className="my-4 border-t border-stone-100"
        aria-hidden="true"
      />

      {/* Profile */}
      <div className="flex min-w-0 items-center gap-3 px-2 pb-1">
        <div
          className="
            flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-full
            bg-gradient-to-br
            from-orange-200
            to-rose-300
            text-[10px]
            font-bold
            text-stone-700
          "
          aria-hidden="true"
        >
          S
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-stone-800">
            Saifur Rahman
          </p>

          <p className="truncate text-[9px] text-stone-400">
            Free Workspace
          </p>
        </div>

        <ChevronDown
          className="h-3.5 w-3.5 shrink-0 text-stone-400"
          aria-hidden="true"
        />
      </div>
    </aside>
  );
}

