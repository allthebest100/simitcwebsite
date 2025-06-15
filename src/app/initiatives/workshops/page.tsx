'use client';

import Image from 'next/image';
import Link from 'next/link';

const workshops = [
  {
    title: 'Google Gemini AI Agents Workshop',
    imageUrl: '/images/poster/(18).jpg',
    link: '/initiatives/workshop-5',
  },
  {
    title: 'UI/ UX Dive',
    imageUrl: '/images/poster/(17).jpg',
    link: '/initiatives/workshop-4',
  },  {
    title: 'Web Development Workshop ',
    imageUrl: '/images/poster/(16).jpg',
    link: '/initiatives/workshop-3',
  },
  {
    title: 'GitHub Workshop',
    imageUrl: '/images/poster/(14).jpg',
    link: '/initiatives/workshop-2',
  },
  {
    title: 'GitHub Workshop',
    imageUrl: '/images/poster/(5).jpg',
    link: '/initiatives/workshop-1',
  },];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen px-4 py-10 bg-black text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-10">Workshops</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {workshops.map((item, index) => (
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
