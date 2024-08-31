// components/Footer.js
import React from 'react';
import Image from 'next/image'; // Assuming you're using the Next.js Image component
import Logo from '../public/logo 2.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] text-[#231f20]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 flex flex-wrap justify-between">
        {/* Logo Section */}
        <div className="p-5">
          <Image
            src={Logo} // Replace with your logo path
            alt="Parish Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Home Section */}
        <div className="p-5">
          <div className="text-xs uppercase text-[#231f20] font-medium mb-2">Home</div>
          <Link href="/mass" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Calender</Link>
          <Link href="/events" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Events</Link>
          <Link href="/news" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">News</Link>
          <Link href="/donation" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Donations</Link>
          <Link href="/contact" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Contact</Link>
        </div>

        {/* Resources Section */}
        <div className="p-5">
          <div className="text-xs uppercase text-[#231f20] font-medium mb-2">Resources</div>
          <Link href="/documentation" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Documentation</Link>
          <Link href="/tutorials" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Tutorials</Link>
          <Link href="/support" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Support</Link>
        </div>

        {/* Support Section */}
        <div className="p-5">
          <div className="text-xs uppercase text-[#231f20] font-medium mb-2">Support</div>
          <Link href="/help-center" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Help Center</Link>
          <Link href="/privacy-policy" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Privacy Policy</Link>
          <Link href="/conditions" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">Conditions</Link>
        </div>

        {/* Contact Us Section */}
        <div className="p-5">
          <div className="text-xs uppercase text-[#231f20] font-medium mb-2">Contact Us</div>
          <Link href="mailto:contact@parish.com" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">contact@parish.com</Link>
          <Link href="https://goo.gl/maps/xyz" className="block my-2 text-[#2e3192] hover:text-[#b59316] font-work-sans">XXX XXXX, Floor 4 San Francisco, CA</Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#231f20] text-[#b59316] py-4 text-center">
        <p className="text-sm font-work-sans">© {new Date().getFullYear()} Parish Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
