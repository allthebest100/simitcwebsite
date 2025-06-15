'use client'

import { useState } from 'react'
import Image from 'next/image'

const currentBatchKey = '2025-26'

const currentExcos = [
  'President - Jayadipa Fukutaro Sie',
  'Vice President - Michelle Chan',
  'Secretary - Reynaldi',
  'Marketing Director - Vanness',
  'Technical Director - Desmond',
  'Deputy Technical Director - Yan Mei',
  'Partnership and Innovation Director - Winston',
  'Deputy Partnership and Innovation Director - Somya',
]

const currentSubcommittee = {
  marketing: [
    { name: 'Recruitment Upcoming', position: 'Marketing Subcommittee' },
  ],
  technical: [
    { name: 'Recruitment Upcoming', position: 'Technical Subcommittee' },
  ],
  partnership: [
    { name: 'Recruitment Upcoming', position: 'Partnership & Innovation Subcommittee' },
  ],
}

const alumniBatches = {
  '2024-25': {
    excos: [
      'President - Elizabeth Leonny Efendi',
      'Vice President - Albert Adiputra',
      'Secretary - Shivank Mathur',
      'Marketing Director - Jason Thajeb',
      'Technical Director - Aung Pyae Soe (Bill)',
      'Deputy Technical Director - Jayadipa Fukutaro Sie',
      'Deputy Technical Director - Simer Bhadola',
    ],
    marketing: [
      { name: 'Amy', position: 'Marketing Subcommittee' },
      { name: 'Tara', position: 'Marketing Subcommittee' },
      { name: 'Catherine', position: 'Marketing Subcommittee' },
      { name: 'Elly', position: 'Marketing Subcommittee' },
      { name: 'Jasmine', position: 'Marketing Subcommittee' },
      { name: 'Vedika', position: 'Marketing Subcommittee' },
    ],
    technical: [
      { name: 'Aye Chan Myae', position: 'Technical Subcommittee' },
      { name: 'Azzamudin', position: 'Technical Subcommittee' },
      { name: 'Ching Xi', position: 'Technical Subcommittee' },
      { name: 'Dong Xuan Ngoc Hoa', position: 'Technical Subcommittee' },
      { name: 'Ethan Ng', position: 'Technical Subcommittee' },
      { name: 'Gabriel', position: 'Technical Subcommittee' },
      { name: 'Kevin', position: 'Technical Subcommittee' },
      { name: 'Max', position: 'Technical Subcommittee' },
      { name: 'Michelle Chan', position: 'Technical Subcommittee' },
      { name: 'Nicholas', position: 'Technical Subcommittee' },
      { name: 'Reina', position: 'Technical Subcommittee' },
      { name: 'Reynaldi', position: 'Technical Subcommittee' },
      { name: 'Shawn', position: 'Technical Subcommittee' },
      { name: 'Vanness', position: 'Technical Subcommittee' },
      { name: 'Zhang Shurui', position: 'Technical Subcommittee' },
    ],
  },
}

const splitMember = (entry: string) => {
  const [position, name] = entry.split(' - ')
  return { name, position }
}

const buildImagePath = (team: string, folder: string, name: string) =>
  `/images/our-team/Team ${encodeURIComponent(team)}/${encodeURIComponent(folder)}/${encodeURIComponent(name)}.jpg`

const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    fill
    className="object-cover rounded-lg"
    onError={(e) => {
      const target = e.target as HTMLImageElement
      target.src = '/images/default-avatar.jpg'
    }}
  />
)

const TeamCard = ({ name, position, src }: { name: string; position: string; src: string }) => (
  <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
    <div className="relative w-56 h-56 mx-auto overflow-hidden rounded-xl border border-neutral-700 shadow-inner">
      <ImageWithFallback src={src} alt={name} />
    </div>
    <p className="mt-4 text-lg font-semibold text-white">{name}</p>
    <p className="text-sm text-gray-400">{position}</p>
  </div>
)

const MemberCard = ({ name, position, src }: { name: string; position: string; src: string }) => (
  <div className="text-center">
    <div className="relative w-28 h-28 mx-auto overflow-hidden rounded-lg">
      <ImageWithFallback src={src} alt={name} />
    </div>
    <p className="mt-2 text-sm font-semibold text-white">{name}</p>
    <p className="text-xs text-gray-400">{position}</p>
  </div>
)

export default function AboutUsPage() {
  const batchKeys = Object.keys(alumniBatches) as (keyof typeof alumniBatches)[]
  const [showAlumni, setShowAlumni] = useState(false)
  const [selectedBatch, setSelectedBatch] = useState<keyof typeof alumniBatches>(batchKeys[0])

  return (
    <main className="bg-black text-white min-h-screen px-6 pb-20">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight">SIM IT Club</h1>
        <p className="mt-2 text-gray-400">Empowering Future Tech Leaders</p>
      </section>

      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p className="mt-2 text-gray-300">Innovate and Inspire</p>
      </section>

      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-10">History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Founded</h3>
            <p className="text-gray-300">Founded in 2013</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            <p className="text-gray-300">SLAAN 2024 Silver Award – Omnitool AI Hackathon</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 rounded-2xl shadow-inner">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Team</h2>

          <h3 className="text-2xl font-semibold mb-6">Executive Committee ({currentBatchKey})</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 mb-16">
            {currentExcos.map((entry) => {
              const { name, position } = splitMember(entry)
              const path = buildImagePath(currentBatchKey, 'EXCO', entry)
              return <TeamCard key={entry} name={name} position={position} src={path} />
            })}
          </div>

          <h3 className="text-xl font-semibold mb-4">Marketing Subcommittee</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4 mb-16">
            {currentSubcommittee.marketing.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                src={buildImagePath(currentBatchKey, 'Subcommittee - Marketing', member.name)}
              />
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Technical Subcommittee</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4 mb-16">
            {currentSubcommittee.technical.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                src={buildImagePath(currentBatchKey, 'Subcommittee - Technical', member.name)}
              />
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Partnership & Innovation Subcommittee</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4 mb-16">
            {currentSubcommittee.partnership.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                src={buildImagePath(currentBatchKey, 'Subcommittee - Partnership and Innovation', member.name)}
              />
            ))}
          </div>

          <button
            onClick={() => setShowAlumni(!showAlumni)}
            className="text-white border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition mb-10"
          >
            {showAlumni ? 'Hide Alumni' : 'Show Alumni'}
          </button>

          {showAlumni && (
            <>
              <div className="mb-8">
                <label className="mr-3 font-medium">Select Alumni Batch:</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value as keyof typeof alumniBatches)}
                  className="bg-black border px-4 py-2 rounded"
                >
                  {batchKeys.map((batch) => (
                    <option key={batch} value={batch}>
                      Team {batch}
                    </option>
                  ))}
                </select>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Alumni – Executive Committee</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 mb-16">
                {alumniBatches[selectedBatch].excos.map((entry) => {
                  const { name, position } = splitMember(entry)
                  const path = buildImagePath(selectedBatch, 'EXCO', entry)
                  return <TeamCard key={entry} name={name} position={position} src={path} />
                })}
              </div>

              <h3 className="text-xl font-semibold mb-4">Alumni – Marketing Subcommittee</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4 mb-16">
                {alumniBatches[selectedBatch].marketing.map((member) => (
                  <MemberCard
                    key={member.name}
                    name={member.name}
                    position={member.position}
                    src={buildImagePath(selectedBatch, 'Subcommittee - Marketing', member.name)}
                  />
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Alumni – Technical Subcommittee</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4">
                {alumniBatches[selectedBatch].technical.map((member) => (
                  <MemberCard
                    key={member.name}
                    name={member.name}
                    position={member.position}
                    src={buildImagePath(selectedBatch, 'Subcommittee - Technical', member.name)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
