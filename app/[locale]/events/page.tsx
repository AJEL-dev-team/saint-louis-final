"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function EventsPage() {
  // State to hold upcoming and past events
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch events data from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/evenements/');
        const events = response.data;

        // Separate upcoming and past events based on the current date
        const currentDate = new Date();
        const upcoming = events.filter((event: { date: string | number | Date; }) => new Date(event.date) >= currentDate);
        const past = events.filter((event: { date: string | number | Date; }) => new Date(event.date) < currentDate);

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (err) {
        setError('Failed to load events');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
                <Link href={`/events/${event.id}`}>
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
                <Link href={`/events/${event.id}`}>
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
