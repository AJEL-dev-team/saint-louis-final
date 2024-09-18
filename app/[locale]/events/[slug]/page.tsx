import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  locale: any;
  params: {
    slug: string;
  };
};

export default function EventDetails({ locale, params }: Props) {
  const [event, setEvent] = useState<any>(null); // State to hold the event data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the event details based on the slug
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/events/${params.slug}`);
        setEvent(response.data); // Set the event data
      } catch (err) {
        setError('Failed to load event details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [params.slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Event Details */}
        <div className="border-2 border-goldCustom rounded-lg overflow-hidden shadow-lg mt-8 bg-white">
          <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold font-serif text-blackCustom">{event.title}</h1>
            <p className="text-gray-600 mt-2">{event.date} - {event.time}</p>
            <p className="text-gray-500 mt-4">{event.description}</p>
            <p className="text-gray-500 mt-4">{event.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
