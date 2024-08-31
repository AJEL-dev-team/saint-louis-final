import React from 'react';

export default function RecentEvent() {
  // Replace with actual event data
  const event = {
    title: "Parish Annual Fundraiser",
    description: "Join us for our annual fundraiser to support the parish's various initiatives.",
    date: "15th September",
    time: "5:00 PM",
    image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "/events/annual-fundraiser"
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="flex flex-col md:flex-row rounded overflow-hidden shadow-lg bg-white">
        <div className="md:w-1/3">
          <a href={event.link}>
            <img className="w-full h-full object-cover" src={event.image} alt={event.title} />
          </a>
        </div>
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <div className="text-sm text-white bg-[#2e3192] inline-block px-3 py-1 mb-4 rounded-md">
              Upcoming Event
            </div>
            <a href={event.link} className="font-semibold text-2xl text-[#2e3192] hover:text-[#b59316] transition duration-300">
              {event.title}
            </a>
            <p className="text-gray-600 text-base mt-3">{event.description}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-[#231f20] font-semibold">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
            </div>
            <div className="text-center bg-[#b59316] text-white rounded-full h-16 w-16 flex items-center justify-center">
              <div>
                <span className="block text-lg font-bold">{event.date.split(' ')[0]}</span>
                <small className="block text-sm">{event.date.split(' ')[1]}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
