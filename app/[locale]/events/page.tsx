import React from 'react';
import Link from 'next/link';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Community Outreach Program",
      date: "10th September",
      time: "3:00 PM",
      location: "Parish Hall",
      description: "Join us in reaching out to our local community.",
      link: "/events/outreach-program"
    },
    {
      title: "Parish Picnic",
      date: "20th September",
      time: "11:00 AM",
      location: "Central Park",
      description: "A fun-filled day for all parishioners.",
      link: "/events/parish-picnic"
    },
  ];

  const pastEvents = [
    {
      title: "Youth Retreat",
      date: "5th August",
      location: "Retreat Center",
      description: "A spiritual retreat for the youth.",
      link: "/events/youth-retreat"
    },
    {
      title: "Charity Drive",
      date: "15th July",
      location: "Parish Grounds",
      description: "Helping those in need through our charity drive.",
      link: "/events/charity-drive"
    },
    {
        title: "Youth Retreat",
        date: "5th August",
        location: "Retreat Center",
        description: "A spiritual retreat for the youth.",
        link: "/events/youth-retreat"
      },
      {
        title: "Charity Drive",
        date: "15th July",
        location: "Parish Grounds",
        description: "Helping those in need through our charity drive.",
        link: "/events/charity-drive"
      },
      {
        title: "Youth Retreat",
        date: "5th August",
        location: "Retreat Center",
        description: "A spiritual retreat for the youth.",
        link: "/events/youth-retreat"
      },
      {
        title: "Charity Drive",
        date: "15th July",
        location: "Parish Grounds",
        description: "Helping those in need through our charity drive.",
        link: "/events/charity-drive"
      },
      {
        title: "Youth Retreat",
        date: "5th August",
        location: "Retreat Center",
        description: "A spiritual retreat for the youth.",
        link: "/events/youth-retreat"
      },
      {
        title: "Charity Drive",
        date: "15th July",
        location: "Parish Grounds",
        description: "Helping those in need through our charity drive.",
        link: "/events/charity-drive"
      },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blueCustom text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-serif">Events</h1>
          <p className="mt-2 text-lg">Stay updated with our upcoming and past events.</p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-blueCustom mb-8">Upcoming Events</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-goldCustom">{event.title}</h3>
                <p className="text-gray-600">{event.date} at {event.time}</p>
                <p className="text-gray-600">{event.location}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
                <Link href={event.link}>
                  <p className="mt-4 inline-block text-blueCustom hover:underline">Read More</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-blueCustom mb-8">Past Events</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-goldCustom">{event.title}</h3>
                <p className="text-gray-600">{event.date} at {event.location}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
                <Link href={event.link}>
                  <p className="mt-4 inline-block text-blueCustom hover:underline">Read More</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
