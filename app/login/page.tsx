
'use client';

import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md shadow-blue-200 transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-3 text-xs text-gray-400 uppercase">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          {/* Google Button */}
          <button className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          {/* GitHub Button */}
          <button className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
            <FaGithub className="text-xl text-gray-900" />
            <span>Sign in with GitHub</span>
          </button>

          {/* Twitter Button */}
          <button className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
            <FaTwitter className="text-xl text-sky-500" />
            <span>Sign in with Twitter</span>
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Don't have an account?{' '}
          <Link href="/Register" className="text-blue-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}