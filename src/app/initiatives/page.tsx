'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/fullcalendar.css';

const eventData = [
  {
    title: "SIM IT Club x Omnitool.AI Hackathon",
    start: "2024-02-12",
    end: "2024-02-17",
  },
  {
    title: "Github Workshop",
    start: "2024-10-07",
  },
  {
    title: "WebDev Workshop",
    start: "2024-11-06",
  },
  {
    title: "UI-UX Dive",
    start: "2025-02-12",
  },
  {
    title: "AI Agent Workshop",
    start: "2025-02-13",
  },
  {
    title: "HackXperience 2025",
    start: "2025-04-11",
    end: "2025-04-13",
  },
];

export default function InitiativesOverview() {
  return (
    <main className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-2">Our Initiatives</h1>
          <p className="text-gray-300 text-lg">
            Explore our Workshops, Hackathons, Events and Projects!
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="/initiatives/hackathons"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Hackathons
            </a>
            <a
              href="/initiatives/workshops"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Workshops
            </a>
            <a
              href="/initiatives/events"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Events
            </a>
            <a
              href="/initiatives/projects"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Projects
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Activities & Membership</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Our schedule is event-based</li>
            <li>All students of any major are welcome</li>
            <li>No tech background required to join</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Calendar</h2>
          <div className="bg-neutral-800 rounded-xl p-4 text-white">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={eventData}
              eventColor="#ef4444"
              height="auto"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {eventData.map((event, index) => {
              const start = new Date(event.start);
              const end = event.end ? new Date(event.end) : null;

              const day = start.getDate().toString().padStart(2, '0');
              const month = start.toLocaleString('en-US', { month: 'short' }).toUpperCase();
              const startDate = start.toISOString().split('T')[0];
              const endDate = end ? end.toISOString().split('T')[0] : null;
              const displayDate = endDate ? `${startDate} ~ ${endDate}` : startDate;

              return (
                <div
                  key={index}
                  className="bg-neutral-800 p-4 rounded-lg flex items-center justify-between text-white"
                >
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white text-xl font-bold rounded-md px-3 py-2 text-center w-16">
                      <div>{day}</div>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm text-gray-300">{month}</div>
                    </div>
                  </div>
                  <div className="flex-1 ml-6">
                    <div className="font-semibold text-lg">{event.title}</div>
                    <div className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                      <span>📅</span>
                      <span>{displayDate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Past Highlights</h2>
          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl text-white font-semibold mb-1">Google Gemini AI Agents Workshop</h3>
              <p>Hands-on workshop introducing Gemini 2.0 AI agents, where participants built their own AI agents using Gemini's tools.</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-1">UI/UX Workshop</h3>
              <p>Explored foundations of UI/UX, design strategies and best practices, unlocking industry tips for user-centered design.</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-1">Web Development Workshop</h3>
              <p>Participants learned the basics of HTML, CSS, and JavaScript, and created their own personal portfolio websites.</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-1">GitHub Workshop</h3>
              <p>Hands-on training in version control using GitHub: collaboration, pull requests, branching and more.</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-1">E-Commerce Evolution – Panel Discussion</h3>
              <p>Industry talk with professionals from Shopee, Amazon, and a local startup co-founder from Invade on trends and insights in e-commerce.</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-1">SIM IT Club x Omnitool.AI Hackathon</h3>
              <p>2-day take-home hackathon using modular AI APIs to solve real-world problems creatively.</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-1">SIM IT Club x UiPath Hackathon</h3>
              <p>Used UiPath Studio to design RPA solutions. Participants submitted proposals addressing industry challenges.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
