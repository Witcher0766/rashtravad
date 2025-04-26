import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Left Side: Logo and Buttons */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/path-to-your-logo.png" // <-- Replace with your actual logo path
              alt="Rashtravad Logo"
              className="w-40 mb-4"
            />
            <div className="flex gap-4">
              <a
                href="/join" // <-- Update to your actual Join Now page
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                JOIN Now
              </a>

              <a
                href="https://wa.me/7017088359" // <-- WhatsApp direct link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Middle: Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-500 text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <p className="mb-2">
              <strong>Phone:</strong>
            </p>
            <p className="mb-1">7017088359</p>
            <p className="mb-4">7060879003</p>
            <p className="mb-2">
              <strong>Email:</strong>
            </p>
            <p className="mb-4">info@rashtravad.com</p>
            <p className="mb-2">
              <strong>Social:</strong>
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right Side: Official Address */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-500 text-xl font-semibold mb-4">
              Official Address
            </h3>
            <p>
              686/7 Jagriti Vihar, Meerut,
              <br />
              Near Mansa Devi Temple,
              <br />
              PIN 250004, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
