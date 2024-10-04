"use client";
import React, { useState } from "react";
import axios from "axios";

export default function DonationPage() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!phone || !amount || !paymentMethod) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setError(null);
      const response = await axios.post("http://localhost:8080/api/dons", {
        phone,
        amount,
        payment_method: paymentMethod,
      });

      if (response.status === 200) {
        setSuccessMessage("Donation successful! Thank you for your support.");
        setPhone("");
        setAmount("");
        setPaymentMethod("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send donation. Please try again later.");
    }
  };

  return (
    <section className="bg-[#f0f0f0]">
      {/* Hero Section */}
      <section className="bg-blueCustom text-white py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-[#ffffff]">
          <h1 className="text-3xl md:text-6xl font-serif mb-4  ">
            Make a donation
          </h1>
          <p className="text-lg md:text-xl container mx-auto">
            Support our parish by making a donation. Your contribution helps us
            continue our mission and outreach efforts.
          </p>
        </div>
      </section>

      {/* Donation Request Section */}
      <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Donation"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl text-center font-bold mb-6 font-playfair text-[#2e3192]">
            Your Support Matters
          </h2>
          <p className="mb-6 text-[#231f20] font-work-sans text-center">
            Please choose your payment method and enter the amount you'd like to
            donate. Every contribution makes a difference.
          </p>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-[#231f20] font-work-sans"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white border border-gray-300 rounded text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="amount"
                className="leading-7 text-sm text-[#231f20] font-work-sans"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full bg-white border border-gray-300 rounded text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="payment-method"
                className="leading-7 text-sm text-[#231f20] font-work-sans"
              >
                Payment Method
              </label>
              <select
                id="payment-method"
                name="payment-method"
                className="w-full bg-white border rounded text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="orange-money">Orange Money</option>
                <option value="mtn-money">MTN Money</option>
              </select>
            </div>
            <button
              type="submit"
              className="text-[#ffffff] bg-[#2e3192] border-0 py-2 px-6 focus:outline-none tranasition-all ease-in-out duration-200 hover:bg-[#b59316] rounded text-lg font-work-sans"
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
