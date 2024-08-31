import React from 'react';

export default function EventDetails() {
  // Dummy data for the event
  const event = {
    title: "Parish Annual Fundraiser",
    date: "15th September 2023",
    time: "5:00 PM",
    description: "Join us for our annual fundraiser to support the parish's various initiatives. There will be food, fun, and fellowship!",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dicta dolorem nesciunt officia? Magni natus dignissimos ut eos aliquid! In commodi quibusdam voluptatum tenetur magni! Animi fugiat possimus aperiam optio ipsum quo officiis temporibus porro adipisci repellat excepturi, ut minus asperiores in numquam impedit quae. Adipisci, enim quod error ex veniam culpa voluptatibus sequi quia tempore animi dicta perferendis delectus eius necessitatibus distinctio ullam totam accusamus laudantium repellendus doloremque mollitia debitis, molestias ipsum. Cum asperiores enim minima voluptatem, exercitationem assumenda velit quam voluptate harum deserunt vel natus officiis deleniti numquam animi reprehenderit aliquam sed optio! Nobis maiores error delectus, accusantium reprehenderit nostrum suscipit non. Cumque officiis rerum provident animi voluptates facere adipisci dignissimos itaque corrupti iure quis amet, aperiam consectetur quos dolor obcaecati nihil! Expedita impedit vel, ratione ducimus soluta beatae veritatis ad deleniti nisi at debitis. Et exercitationem est accusantium sit. Architecto porro sit aliquam ullam dolore aut velit.",
    image: "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  };


  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Hero Image
        <div className="relative">
          <img src="https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Event Hero" className="w-full h-72 object-cover rounded-lg shadow-lg" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-5xl font-bold font-serif text-white">{event.title}</h1>
          </div>
        </div> */}
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
