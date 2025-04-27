import React from "react";
import footer from '../assets/footer.jpg';
import bgImage from "../assets/background2.jpg";

const Footer = () => {
  return (
    <footer id="contact"
      className="relative text-black py-8 px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 "></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 justify-around">
          {/* Left Side: Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-500  text-7xl font-semibold mb-4 font-bold">
              Contact Us
            </h3>
            
            <p className="mb-2 text-sm text-black font-bold">Phone</p>
            <p className="mb-1">7017088359</p>
            <p className="mb-4">7060879003</p>
            
            <p className="mb-2 text-sm text-black font-bold">Email</p>
            <p className="mb-4">info@rashtravad.com</p>
            
            <p className="mb-2 text-sm text-black font-bold">Social</p>
            <div className="flex gap-4 justify-center md:justify-start mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-orange-500 transition text-2xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-orange-500 transition text-2xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-orange-500 transition text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            
            <h3 className="text-orange-500 text-xl font-semibold mb-4 mt-8">
              Official Address
            </h3>
            <p className="text-sm">
              686/7 Jagriti Vihar, Meerut,
              <br />
              Near Mansa Devi Temple,
              <br />
              PIN 250004, Uttar Pradesh, India
            </p>
          </div>

          {/* Right Side: Image and Buttons */}
          <div className="flex flex-col items-center">
            <img
              src={footer}
              alt="Footer Visual"
              className="w-full max-w-md mb-6 rounded-lg border-2 border-orange-500"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/join"
                className="bg-orange-500 text-black px-6 py-3 rounded-lg hover:bg-orange-600 transition text-center font-medium"
              >
                JOIN Now
              </a>
              <a
                href="https://wa.me/7017088359"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2 font-medium"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;