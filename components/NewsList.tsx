// components/NewsList.js
import React from 'react';

export default function NewsList({ title, newsItems }) {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-playfair-display font-bold text-[#2e3192] mb-6">{title}</h2>
        <div className="space-y-8">
          {newsItems.map((news, index) => (
            <div key={index} className="border-2 border-[#231f20] rounded-lg overflow-hidden shadow-lg bg-white">
              <img src={news.image} alt={news.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-playfair-display font-bold text-[#231f20]">{news.title}</h3>
                <p className="text-gray-600 mt-2">{news.date}</p>
                <p className="text-gray-500 mt-4">{news.description}</p>
                <a href={news.link} className="text-[#2e3192] mt-4 inline-block font-work-sans font-semibold hover:text-[#b59316]">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
