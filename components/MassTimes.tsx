import React from 'react';

export default function MassTimes() {
  const massTimes = [
    {
      day: 'Sunday',
      times: ['8:00 AM', '10:30 AM', '6:00 PM'],
      color: 'bg-indigo-500',
      borderColor: 'border-indigo-500',
    },
    {
      day: 'Weekdays',
      times: ['7:00 AM', '12:00 PM'],
      color: 'bg-green-500',
      borderColor: 'border-green-500',
    },
    {
      day: 'Saturday',
      times: ['9:00 AM', '5:00 PM (Vigil)'],
      color: 'bg-blue-400',
      borderColor: 'border-blue-400',
    },
  ];

  return (
    <div className="container max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Mass Times</h2>
      <p className="mb-12 text-lg text-gray-500">Join us for the celebration of the Holy Mass.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {massTimes.map((mass, index) => (
          <div key={index} className="relative h-full">
            <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${mass.color} rounded-lg`}></span>
            <div className={`relative h-full p-5 bg-white border-2 ${mass.borderColor} rounded-lg`}>
              <div className="flex items-center -mt-1">
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">{mass.day}</h3>
              </div>
              <p className={`mt-3 mb-1 text-xs font-medium ${mass.color} uppercase`}>------------</p>
              <p className="mb-2 text-gray-600">Mass Times: {mass.times.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
