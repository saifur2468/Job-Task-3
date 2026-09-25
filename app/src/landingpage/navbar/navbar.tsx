"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "EchoGPT",
    href: "/dashboard",
  },
    {
    label: "Extension",
    href: "/extension",
  },
  
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-xl font-bold tracking-[0.12em] text-violet-600">
            EchoGPT
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-violet-100 text-violet-700"
                    : "text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Sign In Button */}
        <div className="hidden border-2 rounded-2xl bg-blue-500 text-white p-2 items-center gap-3 md:flex">
          <Link
            href="/Register"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-violet-50 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-violet-100 bg-white px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-violet-100 text-violet-700"
                      : "text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-gray-600 hover:bg-gray-100"
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}