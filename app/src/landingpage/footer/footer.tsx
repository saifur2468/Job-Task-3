
"use client";

import Link from "next/link";
import {


  
  Mail,
  ArrowUpRight,
  GitBranchPlus,
  LucideMapPinCheckInside,
  LucideTextWrap,
} from "lucide-react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
                E
              </span>
              EchoGPT
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              Your intelligent AI companion for smarter conversations,
              faster answers, and a better way to get things done.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-black hover:bg-black hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-black hover:bg-black hover:text-white"
              >
                <FaTwitter  size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-black hover:bg-black hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-black">
              Product
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-gray-600 transition hover:text-black"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="#preview"
                  className="text-sm text-gray-600 transition hover:text-black"
                >
                  Product Preview
                </Link>
              </li>

              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-gray-600 transition hover:text-black"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="#faq"
                  className="text-sm text-gray-600 transition hover:text-black"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-black">
              Resources
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm text-gray-600 transition hover:text-black"
                >
                  Documentation
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm text-gray-600 transition hover:text-black"
                >
                  Help Center
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm text-gray-600 transition hover:text-black"
                >
                  Privacy Policy
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm text-gray-600 transition hover:text-black"
                >
                  Terms of Service
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-black">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              Subscribe to get the latest updates, news, and AI insights from
              EchoGPT.
            </p>

            <div className="mt-5">
              <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white focus-within:border-black">
                <div className="flex items-center pl-3 text-gray-400">
                  <Mail size={18} />
                </div>

                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-black outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  className="m-1 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EchoGPT. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with{" "}
            <span className="font-semibold text-black">Next.js</span> 
            
          </p>
        </div>
      </div>
    </footer>
  );
}

