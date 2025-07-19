import React from 'react';

const Home = () => {
  return (
    // Outer container for the full-screen section
    // min-h-screen ensures it takes at least the full viewport height
    // flex, items-center, justify-center for centering content
    // relative for positioning pseudo-elements or absolute children
    // bg-gradient-to-br from-[#1A2D4C] to-[#0D1B2A] - Example dark blue gradient
    // Or you could use a background image like: bg-cover bg-center bg-[url('/path/to/your/image.jpg')]
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-16 overflow-hidden">
      {/* Decorative background shapes (adjust colors and positions as needed) */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#FF6600] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#ADD8E6] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#FFE600] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>


      {/* Content Container - z-10 ensures it's above background shapes */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Large Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Empowering <span className="text-[#FF6600]">Africa's Talent</span> for the Digital Future
        </h1>

        {/* Subtitle/Description */}
        <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
          Unlock your potential with cutting-edge tech education. Join a vibrant community and build the skills for tomorrow's world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-1000">
          <button className="bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            Enroll Today
          </button>
          <button className="bg-transparent border-2 border-white hover:border-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;