import React from 'react';

export default function Announcements() {
  // Replace with actual announcements and actualities data
  const items = [
    {
      title: "Youth Group Meeting",
      description: "The next youth group meeting will be held on Sunday, 10th September at 3:00 PM.",
      date: "2 days ago",
      image: "https://images.pexels.com/photos/634754/pexels-photo-634754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/announcements/youth-group-meeting"
    },
    {
      title: "New Choir Members Wanted",
      description: "We are looking for new members to join our parish choir. Practices are every Wednesday.",
      date: "5 days ago",
      image: "https://images.pexels.com/photos/3992174/pexels-photo-3992174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/announcements/choir-recruitment"
    },
    {
      title: "Food Drive Success",
      description: "Thanks to everyone who contributed to our recent food drive. We collected over 1,000 items.",
      date: "1 week ago",
      image: "https://images.pexels.com/photos/7110/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/announcements/food-drive-success"
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h2 className="text-3xl font-extrabold leading-tight text-gray-900 mb-6">Announcements & Actualities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href={item.link}>
              <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 hover:text-green-600 transition duration-300 ease-in-out">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                <p className="text-gray-400 text-xs mt-4">{item.date}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
