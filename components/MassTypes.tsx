// components/MassTypes.js
import React from 'react';

export default function MassTypes() {
  const massTypes = [
    {
      type: "Sunday Mass",
      description: "Regular Sunday Mass held every week.",
      time: "8:00 AM, 10:30 AM, 6:00 PM",
      color: 'bg-blueCustom',
    },
    {
      type: "Weekday Mass",
      description: "Daily Mass for weekdays.",
      time: "7:00 AM, 12:00 PM",
      color: 'bg-goldCustom',
    },
    {
      type: "Vigil Mass",
      description: "Special Vigil Mass on Saturdays.",
      time: "9:00 AM, 5:00 PM",
      color: 'bg-blackCustom',
    },
    {
      type: "Vigil Mass",
      description: "Special Vigil Mass on Saturdays.",
      time: "9:00 AM, 5:00 PM",
      color: 'bg-blackCustom',
    },
    {
      type: "Mass",
      description: "Special Vigil Mass on Saturdays.",
      time: "9:00 AM, 5:00 PM",
      color: 'bg-blackCustom',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-blueCustom mb-8 text-center">Types of Mass</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {massTypes.map((mass, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className={`w-12 h-12 mb-4 rounded-full ${mass.color} flex items-center justify-center`}>
                {/* You can add icons here based on mass type */}
                <span className="text-white font-bold">{mass.type.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-blackCustom mb-2">{mass.type}</h3>
              <p className="text-gray-600 mb-4">{mass.description}</p>
              <p className="text-gray-700"><strong>Times:</strong> {mass.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
