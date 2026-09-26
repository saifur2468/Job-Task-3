
"use client";

import { useState } from "react";
import {
  Sparkles,
  Zap,
  HelpCircle,
  Gift,
  Wrench,
  FileText,
  Image as ImageIcon,
  Search,
  BarChart3,
  Code,
  Send,
  Paperclip,
  X,
  Info,
  Edit3,
  Globe,
} from "lucide-react";

export default function OdysseyChatLayout() {
  const [message, setMessage] = useState("");

  const featureCards = [
    {
      icon: FileText,
      iconColor: "text-blue-500 bg-blue-50",
      title: "Write Copy",
      description: "Create compelling text for ads, emails, and more.",
    },
    {
      icon: ImageIcon,
      iconColor: "text-purple-500 bg-purple-50",
      title: "Image Generation",
      description: "Design custom visuals with AI.",
    },
    {
      icon: Search,
      iconColor: "text-violet-500 bg-violet-50",
      title: "Research",
      description: "Quickly gather and summarize info.",
    },
    {
      icon: FileText,
      iconColor: "text-orange-500 bg-orange-50",
      title: "Generate Article",
      description: "Write articles on any topic instantly.",
    },
    {
      icon: BarChart3,
      iconColor: "text-amber-500 bg-amber-50",
      title: "Data Analytics",
      description: "Analyze data with AI-driven insights.",
    },
    {
      icon: Code,
      iconColor: "text-rose-500 bg-rose-50",
      title: "Generate Code",
      description: "Produce accurate code fast.",
    },
  ];

  return (
    <div
      className="
        flex min-h-[680px] w-full flex-col
        rounded-2xl
        bg-stone-50
        p-3
        text-stone-900
        font-sans
        sm:p-5
        md:p-6
        lg:min-h-[680px]
      "
    >
      {/* =========================
          TOP HEADER
      ========================== */}
      <div
        className="
          mx-auto mb-6 flex w-full max-w-5xl
          flex-col gap-4
          sm:mb-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Header Text */}
        <div className="min-w-0">
          <h1
            className="
              text-lg font-bold tracking-tight
              text-stone-900
              sm:text-xl
              md:text-2xl
            "
          >
            Chat With AI
          </h1>

          <p
            className="
              mt-1 max-w-lg
              text-xs leading-5
              text-stone-500
              sm:text-sm
            "
          >
            Break down lengthy texts into concise summaries to grasp.
          </p>
        </div>

        {/* Header Actions */}
        <div
          className="
            flex w-full
            items-center
            justify-between
            gap-2
            sm:w-auto
            sm:justify-end
            sm:gap-2.5
          "
        >
          {/* Upgrade */}
          <button
            type="button"
            aria-label="Upgrade to premium"
            className="
              flex shrink-0 items-center gap-1.5
              rounded-full
              bg-stone-900
              px-3 py-2
              text-[11px] font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-stone-800
              focus:outline-none
              focus:ring-2
              focus:ring-stone-900
              focus:ring-offset-2
              sm:px-4
              sm:text-xs
            "
          >
            <Sparkles
              className="h-3.5 w-3.5 text-yellow-400"
              aria-hidden="true"
            />

            <span>Upgrade</span>
          </button>

          {/* Help */}
          <button
            type="button"
            aria-label="Help"
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              border border-stone-200
              bg-white
              text-stone-600
              shadow-sm
              transition
              hover:bg-stone-100
              focus:outline-none
              focus:ring-2
              focus:ring-violet-500
              focus:ring-offset-2
              sm:h-9 sm:w-9
            "
          >
            <HelpCircle
              className="h-4 w-4"
              aria-hidden="true"
            />
          </button>

          {/* Gift */}
          <button
            type="button"
            aria-label="Rewards and gifts"
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              border border-stone-200
              bg-white
              text-stone-600
              shadow-sm
              transition
              hover:bg-stone-100
              focus:outline-none
              focus:ring-2
              focus:ring-violet-500
              focus:ring-offset-2
              sm:h-9 sm:w-9
            "
          >
            <Gift
              className="h-4 w-4"
              aria-hidden="true"
            />
          </button>

          {/* Tools */}
          <button
            type="button"
            aria-label="Tools"
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              border border-stone-200
              bg-white
              text-stone-600
              shadow-sm
              transition
              hover:bg-stone-100
              focus:outline-none
              focus:ring-2
              focus:ring-violet-500
              focus:ring-offset-2
              sm:h-9 sm:w-9
            "
          >
            <Wrench
              className="h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div
        className="
          mx-auto flex w-full max-w-4xl
          flex-1 flex-col
          items-center
          py-4
          text-center
          sm:py-6
          md:py-8
        "
      >
        {/* Logo */}
        <div
          className="
            mb-4 flex
            h-14 w-14
            items-center justify-center
            rounded-full
            bg-gradient-to-tr
            from-blue-500
            via-indigo-500
            to-purple-500
            p-1
            shadow-lg
            sm:mb-6
            sm:h-16 sm:w-16
          "
        >
          <div
            className="
              flex h-full w-full
              items-center justify-center
              overflow-hidden
              rounded-full
              bg-white
            "
          >
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-gradient-to-tr
                from-blue-400
                to-indigo-600
                text-white
                shadow-inner
                sm:h-10 sm:w-10
              "
            >
              <Sparkles
                className="h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2
          className="
            text-2xl font-extrabold
            tracking-tight
            text-stone-900
            sm:text-3xl
            md:text-4xl
          "
        >
          EchoGPT AI
        </h2>

        <p
          className="
            mx-auto mb-7 mt-2
            max-w-md
            px-2
            text-xs
            leading-5
            text-stone-500
            sm:mb-10
            sm:text-sm
            md:text-base
          "
        >
          Get started by scripting a task and EchoGPT can do the rest.
          Not sure where to start?
        </p>

        {/* =========================
            FEATURE CARDS
        ========================== */}
        <div
          className="
            mb-8 grid w-full
            grid-cols-1
            gap-3
            text-left
            sm:grid-cols-2
            sm:gap-4
            md:grid-cols-3
            md:mb-12
          "
        >
          {featureCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <button
                type="button"
                key={index}
                className="
                  group
                  flex min-h-[145px]
                  w-full
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-stone-200/80
                  bg-white
                  p-4
                  text-left
                  shadow-sm
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-stone-300
                  hover:shadow-md
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-500
                  focus:ring-offset-2
                  sm:p-5
                "
              >
                <div>
                  <div
                    className={`
                      mb-3 flex
                      h-9 w-9
                      items-center justify-center
                      rounded-xl
                      ${card.iconColor}
                      transition-transform
                      group-hover:scale-105
                      sm:mb-4
                      sm:h-10 sm:w-10
                    `}
                  >
                    <Icon
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className="
                      mb-1
                      text-sm
                      font-bold
                      text-stone-900
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      text-[11px]
                      leading-4
                      text-stone-500
                      sm:text-xs
                      sm:leading-normal
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================
          BOTTOM INPUT
      ========================== */}
      <div
        className="
          mx-auto w-full max-w-4xl
          rounded-2xl
          border border-stone-200
          bg-white
          p-3
          shadow-lg
          sm:p-4
        "
      >
        {/* Info Banner */}
        <div
          className="
            mb-3 flex
            items-start
            justify-between
            gap-2
            rounded-xl
            border border-blue-100
            bg-blue-50/70
            px-3
            py-2.5
            text-[10px]
            font-medium
            text-blue-700
            sm:items-center
            sm:text-xs
          "
        >
          <div className="flex min-w-0 items-start gap-2 sm:items-center">
            <Info
              className="
                mt-0.5 h-4 w-4
                shrink-0
                text-blue-600
                sm:mt-0
              "
              aria-hidden="true"
            />

            <span className="leading-4">
              By selecting a feature, it will make your goal
              easier to achieve.
            </span>
          </div>

          <button
            type="button"
            aria-label="Close information"
            className="
              shrink-0
              rounded
              text-blue-400
              transition
              hover:text-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            <X
              className="h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Textarea */}
        <label htmlFor="echo-gpt-message" className="sr-only">
          Write your message
        </label>

        <textarea
          id="echo-gpt-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          className="
            mb-3 w-full
            resize-none
            bg-transparent
            text-sm
            leading-6
            text-stone-800
            outline-none
            placeholder:text-stone-400
            focus:ring-0
          "
        />

        {/* Toolbar */}
        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-stone-100
            pt-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Left Controls */}
          <div
            className="
              flex
              min-w-0
              flex-wrap
              items-center
              gap-1.5
              sm:gap-2
            "
          >
            {/* Speed */}
            <button
              type="button"
              className="
                flex shrink-0
                items-center gap-1.5
                rounded-full
                bg-stone-100
                px-2.5 py-1.5
                text-[11px]
                font-semibold
                text-stone-700
                transition
                hover:bg-stone-200
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
                focus:ring-offset-1
                sm:px-3
                sm:text-xs
              "
            >
              <Zap
                className="
                  h-3.5 w-3.5
                  fill-amber-500
                  text-amber-500
                "
                aria-hidden="true"
              />

              <span>Speed</span>
            </button>

            {/* Edit */}
            <button
              type="button"
              aria-label="Edit prompt"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-stone-500
                transition
                hover:bg-stone-100
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
              "
            >
              <Edit3
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            {/* Attachment */}
            <button
              type="button"
              aria-label="Attach file"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-stone-500
                transition
                hover:bg-stone-100
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
              "
            >
              <Paperclip
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-stone-500
                transition
                hover:bg-stone-100
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
              "
            >
              <Search
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Right Controls */}
          <div
            className="
              flex
              items-center
              justify-end
              gap-1.5
              sm:gap-2
            "
          >
            {/* Image */}
            <button
              type="button"
              aria-label="Generate image"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-stone-500
                transition
                hover:bg-stone-100
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
              "
            >
              <ImageIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            {/* Web */}
            <button
              type="button"
              aria-label="Browse web"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-stone-500
                transition
                hover:bg-stone-100
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
              "
            >
              <Globe
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            {/* Send */}
            <button
              type="button"
              aria-label="Send message"
              disabled={!message.trim()}
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-xl
                bg-blue-600
                text-white
                shadow-sm
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-40
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
              "
            >
              <Send
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

