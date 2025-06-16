"use client";

import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main className="bg-black text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="flex justify-center items-center">
          <form
            action="https://formsubmit.co/it@mymail.sim.edu.sg"
            method="POST"
            className="space-y-4 w-full max-w-md"
          >
            {/* Optional: FormSubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
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
          </form>
        </div>
      </div>
    </main>
  );
}
