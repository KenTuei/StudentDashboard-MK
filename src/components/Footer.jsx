import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white px-4 sm:px-6 lg:px-8 py-10 md:py-16"> {/* Increased vertical padding on md screens */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Logo + Contact Info */}
        <div className="md:col-span-1 lg:col-span-2">
          {/* Enhanced logo styling */}
          <h2 className="text-3xl font-extrabold mb-4 tracking-wide text-gray-50">MORINGA</h2> {/* Slightly brighter white for logo */}
          <p className="text-sm mb-1 text-gray-300">Ngong Lane Plaza, 1st Floor</p>
          <p className="text-sm mb-1 text-gray-300">Nairobi, Kenya</p>
          
          <div className="mt-6 space-y-2">
            <p className="text-sm flex items-center text-gray-300 hover:text-white transition-colors duration-200"> {/* Added hover to contact lines */}
              <span className="mr-2 text-yellow-400">📞</span> +254711 222 999
            </p>
            <p className="text-sm flex items-center text-gray-300 hover:text-white transition-colors duration-200">
              <span className="mr-2 text-yellow-400">📞</span> +254711 222 999 (WhatsApp)
            </p>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm flex items-center text-gray-300 hover:text-white transition-colors duration-200">
              <span className="mr-2 text-yellow-400">📧</span> g1@moringaschool.com
            </p>
            <p className="text-sm flex items-center text-gray-300 hover:text-white transition-colors duration-200">
              <span className="mr-2 text-yellow-400">📧</span> g1@moringaschool.com
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-5 text-yellow-400 border-b border-yellow-500 pb-2 inline-block">Quick Links</h3> {/* Added underline effect */}
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Projects</a></li> {/* Added subtle translate on hover */}
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">FAQs</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Contacts Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Google Map */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-5 text-yellow-400 border-b border-yellow-500 pb-2 inline-block">Find Us</h3> {/* Added underline effect */}
          <iframe
            title="Moringa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790933742468!2d36.78771457497177!3d-1.297495535623098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b75a109a93%3A0xc3f8b0e87b7a7c81!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" // IMPORTANT: Use a real Google Maps Embed URL
            width="100%"
            height="220"
            className="rounded-lg shadow-xl border-2 border-gray-700" // Stronger shadow, subtle border
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm text-gray-500"> {/* Increased top margin and padding */}
        © {new Date().getFullYear()} Moringa School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;