// pages/news.js
import HeroNewsSection from '@/components/HeroNewsSection';
import NewsList from '@/components/NewsList';
import React from 'react';

export default function NewsPage() {
  // Sample data for upcoming and past news
  const upcomingNews = [
    {
      title: "Upcoming Parish Picnic",
      date: "10th October 2023",
      description: "Join us for a fun-filled parish picnic with games, food, and fellowship.",
      image: "https://images.pexels.com/photos/1224217/pexels-photo-1224217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/news/upcoming-parish-picnic"
    },
    {
      title: "New Church Renovation Plans",
      date: "5th November 2023",
      description: "Exciting new renovation plans for our church will be unveiled.",
      image: "https://images.pexels.com/photos/2168967/pexels-photo-2168967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/news/church-renovation"
    }
  ];

  const pastNews = [
    {
      title: "Christmas Eve Service Highlights",
      date: "24th December 2022",
      description: "A recap of our beautiful Christmas Eve service.",
      image: "https://images.pexels.com/photos/1506684/pexels-photo-1506684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/news/christmas-eve-service"
    },
    {
      title: "Annual Fundraiser Success",
      date: "20th November 2022",
      description: "A look back at the success of our annual fundraiser event.",
      image: "https://images.pexels.com/photos/5723565/pexels-photo-5723565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/news/annual-fundraiser-success"
    }
  ];

  return (
    <>
      <HeroNewsSection />
      <NewsList title="Upcoming News" newsItems={upcomingNews} />
      <NewsList title="Past News" newsItems={pastNews} />
    </>
  );
}
