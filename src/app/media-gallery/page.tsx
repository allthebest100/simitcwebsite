'use client';

const mediaSections = [
  {
    title: 'WE',
    folders: [
      {
        title: 'WE Gallery',
        path: 'Committee Life',
        images: [
          '2023-technical-github-workshop.png',
          '2023-technical-hiking.png',
          '2023-technical-lightning-talks.png',
          '2024-SID.jpg',
        ],
      },
    ],
  },
  {
    title: 'Committee Life',
    folders: [
      {
        title: '2025.04.29 Hackathon Committee Appreciation Dinner',
        path: '2025.04.29 Hackathon Committee Appreciation Dinner with Puspak',
        images: ['(1).jpg', '(2).jpg', '(3).jpg', '(4).jpg'],
      },
      {
        title: '2025.01.12 Bonding',
        path: '2025.01.12 Bonding',
        images: ['(1).jpg', '(2).jpg'],
      },
      {
        title: '2024.09.29 Bonding',
        path: '2024.09.29 Bonding',
        images: ['(1).jpg', '(2).jpg', '(3).jpg', '(4).jpg'],
      },
    ],
  },
  {
    title: 'Event Highlights',
    folders: [
      {
        title: '2025.04.11-12 HackXperience 2025',
        path: '2025.04.11-12 HackXperience 2025',
        images: ['(1).jpg', '(2).jpg', '(3).jpg', '(4).jpg'],
        moreLink: 'https://drive.google.com/drive/folders/1KfO02fAlZ5jyFFMkPwAm0GXwEk9oYkJN',
      },
      {
        title: '2025.02.13 AI Agent Workshop',
        path: '2025.02.13 AI Agent Workshop',
        images: ['(1).jpg', '(2).jpg'],
        moreLink: 'https://drive.google.com/drive/folders/17D6nU4vlf6WUhYLQygy6FR8RDmoPAG_J',
      },
      {
        title: '2025.02.12 UI-UX Dive',
        path: '2025.02.12 UI-UX Dive',
        images: ['(1).jpg', '(2).jpg'],
        moreLink: 'https://drive.google.com/drive/folders/1s60s9xjLRyUT8MCYNU58YE6erQnhEPNM',
      },
      {
        title: '2024.11.06 WebDev Workshop',
        path: '2024.11.06 WebDev Workshop',
        images: ['(1).jpg', '(2).jpg'],
        moreLink: 'https://drive.google.com/drive/folders/1naI1N4iAoMcbSwW5JCG8FwHsiBk3xkMx',
      },
      {
        title: '2024.10.07 GitHub Workshop',
        path: '2024.10.07 Github Workshop',
        images: ['(1).jpg', '(2).jpg'],
        moreLink: 'https://drive.google.com/drive/folders/1lH0MUOkFVy9Cfga154bE1qFdPwMkFEPZ',
      },
      {
        title: 'SIM IT Club x Omnitool.AI Hackathon',
        path: '2024.02.12-16 SIM IT Club x Omnitool.AI Hackathon',
        images: [
          'simitc2024-hackathon.mp4',
          '(1).jpg',
          '(2).jpg',
          '(3).jpg',
          '(4).jpg',
          '(5).jpg',
          '(6).jpg',
          '(7).jpg',
        ],
      },
    ],
  },
];

export default function MediaGalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-red-500 mb-10">Media Gallery</h1>

      {mediaSections.map((section, sIdx) => (
        <div key={sIdx} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
            {section.title}
          </h2>

          {section.folders.map((album, aIdx) => (
            <div key={aIdx} className="mb-12">
              <h3 className="text-2xl font-semibold mb-3">{album.title}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {album.images.map((img, i) => {
                  const src = `/images/media/${album.path}/${img}`;
                  const isVideo = img.toLowerCase().endsWith('.mp4');

                  return (
                    <div
                      key={i}
                      className="bg-neutral-800 rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                      {isVideo ? (
                        <video
                          src={src}
                          controls
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <img
                          src={src}
                          alt={`${album.title} ${i + 1}`}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* See more button */}
              {album.moreLink && (
                <div className="mt-4">
                  <a
                    href={album.moreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                  >
                    See more
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
