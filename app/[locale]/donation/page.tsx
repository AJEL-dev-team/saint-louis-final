// components/DonationPage.js
import React from 'react';

export default function DonationPage() {
  return (
    <section className="bg-[#f0f0f0] text-[#231f20]">
      {/* Hero Section */}
      <div className="bg-[#2e3192] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-playfair">Make a Donation</h1>
          <p className="mt-4 text-lg font-work-sans">
            Support our parish by making a donation. Your contribution helps us continue our mission and outreach efforts.
          </p>
        </div>
      </div>

      {/* Donation Request Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Donation"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 font-playfair text-[#2e3192]">Your Support Matters</h2>
          <p className="mb-6 text-[#231f20] font-work-sans">
            Please choose your payment method and enter the amount you'd like to donate. Every contribution makes a difference.
          </p>
          <form
            action="https://example.com/donate"
            method="post"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-[#231f20] font-work-sans">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white border border-gray-300 rounded focus:border-[#2e3192] focus:ring-2 focus:ring-[#b59316] text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="amount" className="leading-7 text-sm text-[#231f20] font-work-sans">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full bg-white border border-gray-300 rounded focus:border-[#2e3192] focus:ring-2 focus:ring-[#b59316] text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="payment-method" className="leading-7 text-sm text-[#231f20] font-work-sans">Payment Method</label>
              <select
                id="payment-method"
                name="payment-method"
                className="w-full bg-white border border-gray-300 rounded focus:border-[#2e3192] focus:ring-2 focus:ring-[#b59316] text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="orange-money">Orange Money</option>
                <option value="mtn-money">MTN Money</option>
              </select>
            </div>
            <button
              type="submit"
              className="text-white bg-[#2e3192] border-0 py-2 px-6 focus:outline-none hover:bg-[#b59316] rounded text-lg font-work-sans"
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
