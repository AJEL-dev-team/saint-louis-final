"use client"

import HeroNewsSection from '@/components/HeroNewsSection';
import NewsList from '@/components/NewsList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewsPage() {
  // State to hold upcoming and past news
  const [upcomingNews, setUpcomingNews] = useState([]);
  const [pastNews, setPastNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news data from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/actualites/');
        const news = response.data;

        // Separate upcoming and past news based on the current date
        const currentDate = new Date();
        const upcoming = news.filter((item: { date: string | number | Date; }) => new Date(item.date) >= currentDate);
        const past = news.filter((item: { date: string | number | Date; }) => new Date(item.date) < currentDate);

        setUpcomingNews(upcoming);
        setPastNews(past);
      } catch (err) {
        setError('Failed to load news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <HeroNewsSection />
      <NewsList title="Upcoming News" newsItems={upcomingNews} />
      <NewsList title="Past News" newsItems={pastNews} />
    </>
  );
}
