'use client';

import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    title: 'E-Commerce Evolution - Panel Discussion',
    imageUrl: '/images/poster/(12).jpg',
    link: '/initiatives/events/panel-discussion',
  },  {
    title: 'Lightning Talks',
    imageUrl: '/images/poster/(6).jpg',
    link: '/initiatives/events/lightning-talk',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen px-4 py-10 bg-black text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-10">Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-lg shadow overflow-hidden flex flex-col"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={1200}
              height={600}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow justify-between">
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <Link href={item.link}>
                <button className="mt-auto px-4 py-2 border border-gray-500 text-white rounded hover:bg-neutral-700 transition">
                  View More →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
