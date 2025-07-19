// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define custom animations
      animation: {
        blob: "blob 7s infinite", // Name: 'blob', Duration: 7s, Loop: infinite
        "fade-in-up": "fadeInUp 1s ease-out forwards", // Name: 'fade-in-up', Duration: 1s, Timing: ease-out, Fill: forwards
      },
      // Define custom keyframes for animations
      keyframes: {
        blob: {
          // Keyframes for the 'blob' animation (subtle floating/morphing)
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeInUp: {
          // Keyframes for the 'fade-in-up' animation
          "0%": {
            opacity: "0",
            transform: "translateY(20px)", // Start 20px below final position
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)", // End at original position
          },
        },
      },
      // Define custom animation delay utilities
      animationDelay: {
        '0': '0s',
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '1000': '1s',
        '2000': '2s',
        '4000': '4s',
      },
    },
  },
  // If you are using an older version of Tailwind (< 3.0), you might need to
  // explicitly enable the animationDelay variant like this. For newer versions,
  // it's often automatically generated.
  // variants: {
  //   extend: {
  //     animationDelay: ['responsive'],
  //   },
  // },
  plugins: [],
};