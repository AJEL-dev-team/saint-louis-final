import React from 'react';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Explore Nature',
      description: 'Discover the beauty of the natural world',
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080',
      cols: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 2,
      title: 'Culinary Delights',
      imageUrl:
        'https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Tech Innovations',
      imageUrl:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Travel Adventures',
      imageUrl:
        'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Artistic Expressions',
      imageUrl:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Swimming',
      imageUrl:
        'https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Chess',
      imageUrl:
        'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080',
    },
   
  ];

  return (
    <section className=" py-16">
      <div className="container max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Gallery</h2>
      <p className="mb-12 text-lg text-gray-500">Join us for the celebration of the Holy Mass.</p>   <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${item.cols}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2e3192] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-[#b59316]">{item.title}</h4>
                  {item.description && (
                    <p className="text-[#ffffff]">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
