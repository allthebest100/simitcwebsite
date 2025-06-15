"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="flex justify-center items-center">
          {/* Contact Form */}
          <form
            className="space-y-4 w-full max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
            >
              SEND EMAIL →
            </button>
            {submitted && (
              <div className="text-green-400 font-medium mt-2">
                ✅ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
