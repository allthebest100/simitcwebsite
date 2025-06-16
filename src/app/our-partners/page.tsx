'use client';

import Image from 'next/image';

export default function OurPartnersPage() {
  const logos = [
    { src: '/images/partner/dynamicweb-logo.svg', alt: 'Dynamic Web' },
    { src: '/images/partner/kitchen-copilot-logo.svg', alt: 'Kitchen Copilot' },
  ];

  return (
    <main className="bg-black text-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-12">Past Partners</h1>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-2xl p-6 flex items-center justify-center shadow-md h-32 w-64"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={100}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        {/* Past Collaborations Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">Past Collaborations</h2>
          <div className="flex justify-center">
            <div className="bg-neutral-800 p-4 rounded-xl shadow-lg max-w-md">
              <Image
                src="/images/partner/hackxperience2025.jpg"
                alt="Hackxperience 2025"
                width={250}
                height={500}
                className="rounded-lg object-contain mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Become a Partner Form */}
        <section className="bg-neutral-900 text-white rounded-xl max-w-3xl mx-auto p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center">Become a Partner</h2>
          <form
            action="https://formsubmit.co/it@mymail.sim.edu.sg"
            method="POST"
            className="space-y-4"
          >
            {/* Hidden settings for FormSubmit */}
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
              type="text"
              name="organization"
              placeholder="Organization"
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
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full border border-gray-600 px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
