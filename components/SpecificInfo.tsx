// components/SpecificInfo.js
import React from 'react';

export default function SpecificInfo() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-blueCustom mb-8 text-center">Additional Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blackCustom mb-4">Preparation for Mass</h3>
            <p className="text-gray-600">Please arrive 10 minutes before the start of the Mass to prepare and find your seats.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blackCustom mb-4">COVID-19 Guidelines</h3>
            <p className="text-gray-600">We follow all local health guidelines to ensure the safety of our community members.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
