// pages/mass-times.js
import Calendar from '@/components/Calendar';
import Hero from '@/components/Hero';
import MassTypes from '@/components/MassTypes';
import SpecificInfo from '@/components/SpecificInfo';

import React from 'react';


export default function MassTimesPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Calendar Section */}
      <Calendar />

      {/* Mass Types Details Section */}
      <MassTypes />

      {/* Specific Information Section */}
      <SpecificInfo />
    </div>
  );
}
