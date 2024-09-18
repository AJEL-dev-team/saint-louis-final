// components/ContactUs.js
import React from 'react';

export default function ContactUs() {
  return (
    <section className="text-[#231f20] body-font relative bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 md:w-1/2 bg-[#f0f0f0] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7327960709886!2d9.67048917412181!3d4.074758146767635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113ca2a7fb813%3A0x5a0eb56f2ca5578!2sParoisse%20Saint%20Louis%20de%20Bonaberi!5e0!3m2!1sen!2szm!4v1725117037037!5m2!1sen!2szm"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="text-2xl font-semibold text-[#2e3192] tracking-widest uppercase font-playfair">ADDRESS</h2>
                <p className="mt-1 text-[#231f20]">Banaberi, Douala, Cameroon</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="text-2xl font-semibold text-[#2e3192] tracking-widest uppercase font-playfair">EMAIL</h2>
                <a className="text-[#2e3192] leading-relaxed hover:text-[#b59316]" href="mailto:info@parish.org">info@parish.org</a>
                <h2 className="text-2xl font-semibold text-[#2e3192] tracking-widest uppercase font-playfair mt-4">PHONE</h2>
                <p className="text-[#231f20]">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-[#2e3192] mb-4 font-playfair">Contact Us</h2>
            <p className="leading-relaxed mb-5 text-[#231f20]">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
            <form action="https://fabform.io/f/{form-id}" method="post">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-[#231f20] font-work-sans">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white border border-gray-300 rounded focus:border-[#2e3192] focus:ring-2 focus:ring-[#b59316] text-base outline-none text-[#231f20] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-[#231f20] font-work-sans">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white border border-gray-300 rounded focus:border-[#2e3192] focus:ring-2 focus:ring-[#b59316] text-base outline-none text-[#231f20] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-[#231f20] font-work-sans">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white border border-gray-300 rounded focus:border-[#2e3192] focus:ring-2 focus:ring-[#b59316] h-32 text-base outline-none text-[#231f20] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-[#2e3192] border-0 py-2 px-6 focus:outline-none hover:bg-[#b59316] rounded text-lg font-work-sans"
              >
                Send Message
              </button>
              <a
                href="https://veilmail.io/e/FkKh7o"
                className="mt-2 font-medium text-[#2e3192] hover:underline font-work-sans"
              >
                Or click here to reveal our protected email address
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
