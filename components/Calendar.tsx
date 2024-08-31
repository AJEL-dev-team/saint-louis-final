import React from 'react';

export default function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = 'September';
  const currentYear = 2023;

  // Sample data: You can replace this with dynamic data as needed
  const massSchedule = {
    'Sun': ['8:00 AM', '10:30 AM', '6:00 PM'],
    'Mon': ['7:00 AM', '12:00 PM'],
    'Tue': ['7:00 AM', '12:00 PM'],
    'Wed': ['7:00 AM', '12:00 PM'],
    'Thu': ['7:00 AM', '12:00 PM'],
    'Fri': ['7:00 AM', '12:00 PM'],
    'Sat': ['9:00 AM', '5:00 PM (Vigil)'],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-serif text-blue-900">Mass Calendar</h2>
          <p className="text-gray-600">Check our mass schedule for {currentMonth} {currentYear}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900">{day}</h3>
              <ul className="mt-4">
                {massSchedule[day]?.map((time, idx) => (
                  <li key={idx} className="text-gray-700 text-sm py-1 border-b border-gray-200">
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
