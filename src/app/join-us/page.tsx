'use client';

export default function JoinUsPage() {
  return (
    <main className="bg-black text-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Join Us</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Subcommittee members will be able to contribute to events for SIM students.
            This contribution includes (but is not limited to):
          </p>
          <ul className="mt-4 text-left text-gray-400 list-disc list-inside space-y-2">
            <li>Becoming a speaker for one of our workshops.</li>
            <li>Promoting our club events on various social media alongside the marketing team.</li>
            <li>Making sure the event runs smoothly as part of our events crew.</li>
          </ul>
          <p className="text-gray-300 mt-4">
            The recruitment drive initiative also looks for executive committee members who can lead the club.
          </p>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Apply Now</h2>
          <a
            href="https://forms.office.com/r/VmqFjAHn9a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            Membership Registration Form
          </a>
          <br />
          <a
            href="https://forms.office.com/r/S1abxcYWuX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            AISG Registration Form
          </a>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <img
              src="/images/poster/(1).jpg"
              alt="Poster 1"
              className="w-full sm:w-1/2 rounded-lg shadow-md"
            />
            <img
              src="/images/poster/(2).jpg"
              alt="Poster 2"
              className="w-full sm:w-1/2 rounded-lg shadow-md"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-6">FAQ</h2>
          <ul className="space-y-6 text-gray-300">
            <li>
              <strong>Do I need experience?</strong><br />
              No experience needed! We welcome beginners who are willing to learn.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
