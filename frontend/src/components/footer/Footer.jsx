// Footer.jsx
import React from 'react';
import ninjaLogo from "/src/assets/images/ninjas.png"; // logo path sahi ho

function Footer() {
  return (
    <footer className="w-full  text-gray-300">
      {/* Upper Footer - unchanged */}
      <div className="h-[80vh] flex flex-col py-8 bg-[#312820] text-gray-300">
        {/* Content */}
        <div className="flex flex-wrap justify-center items-start gap-8 max-w-[1200px] mx-auto px-4 py-20">
          {/* Column 1 - Prominent */}
          <div className="flex-1 min-w-[200px] px-16 space-y-6">
            <img src={ninjaLogo} alt="Logo" className="w-36" />
            <h3 className="font-bold text-lg">Contact us</h3>
            <ul className="text-lg space-y-1">
              <li><a href="">1800-123-3598</a></li>
              <li><a href="">contact@codingninjas.com</a></li>
            </ul>
            <h3 className="font-bold text-lg">Our Offerings</h3>
            <ul className="flex gap-2">
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[150px] px-6">
            <h3 className="font-semibold text-lg">Coding Ninjas</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#">Career</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Pricing & Refund Policy</a></li>
              <li><a href="#">Bug Bounty</a></li>
              <li><a href="#">Review</a></li>
              <li><a href="#">Press Release</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[150px] px-6">
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#">Job Bootcamp</a></li>
              <li><a href="#">Code 360</a></li>
              <li><a href="#">Professional Certification</a></li>
              <li><a href="#">Student Certification</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex-1 min-w-[150px] px-6">
            <h3 className="font-semibold text-lg">Community</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#">10X Club</a></li>
              <li><a href="#">Students Chapter</a></li>
              <li><a href="#">Hire From Us</a></li>
            </ul>
          </div>
        </div>

        {/* Separator line slightly above bottom */}
        <div className="border-t-2 border-gray-600 w-full max-w-[1000px] mx-auto mt-auto mb-24"></div>
        <div>
          <h2></h2>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>

      {/* Lower Footer - FIXED */}
      <div className="w-full min-h-screen bg-[#0d0904] text-white flex flex-col justify-start relative overflow-hidden py-16">
        {/* Heading */}
        <div className="px-[14vw] mb-8 text-lg font-semibold">
          <h1>Important Links</h1>
        </div>

        {/* Content Grid */}
        <div className="w-full px-[14vw] flex gap-0">
          {/* Left Column */}
          <ul className="list-none text-base leading-relaxed w-[45%]">
            <li className="mb-8">Job Bootcamp for <br />professionals</li>
            <li className="mb-8">IIT Certifications for <br />professionals</li>
            <li className="mb-8">IIT Certifications for <br />Students</li>
            <li className="mb-8">Our New Launches</li>
            <li>We accept payments <br />using</li>
          </ul>

          {/* Right Column */}
          <ul className="list-none text-sm leading-snug underline w-[55%]">
            <li className="mb-8">
              <a href="#" className="hover:text-gray-600 transition">
                Web Development Bootcamp (MERN & Springboot) <span className="mx-1">|</span> Data Analytics Bootcamp
              </a>
            </li>
            <li className="mb-8">
              <a href="#" className="hover:text-gray-600 transition">
                PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati <span className="mx-1">|</span> PG Certification in Data Science by E&ICT Academy, IIT Guwahati <br />
                Generative AI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras
              </a>
            </li>
            <li className="mb-8">
              <a href="#" className="hover:text-gray-600 transition">
                Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati <br />
                Training and Internship Certification in Advanced DSA by IITM Pravartak, TIH IIT Madras <br />
                Training and Internship Certification in Full Stack Web Development with Generative AI + DSA by IITM Pravartak, TIH IIT Madras
              </a>
            </li>
            <li className="mb-8">
              <a href="#" className="hover:text-gray-600 transition">
                Advanced Certification in GenAI & Multi Agent Systems
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Visa <span className="mx-1">|</span> Paypal <span className="mx-1">|</span> UPI <span className="mx-1">|</span> Razorpay <br /> No Cost EMI <span className="mx-1">|</span> Secure Payments
              </a>
            </li>
          </ul>
        </div>

        {/* Footer with Animation */}
        <div className="mt-auto px-[12vw] mb-20 pt-20 text-center relative">
          <h1 className="text-9xl font-bold relative inline-block">
            <span className="glow-text">Coding Ninjas</span>
          </h1>
        </div>

        <style>

          {`
            .glow-text {
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 1),
                rgba(255, 255, 255, 0.8),
                transparent
              );
              background-size: 200% 100%;
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              animation: glow-sweep 12s ease-in-out infinite;
            }

            @keyframes glow-sweep {
              0% {
                background-position: -100% 0;
              }
              50% {
                background-position: 100% 0;
              }
              100% {
                background-position: -100% 0;
              }
            }
          `}
        </style>
      </div>
    </footer>
  );
}

export default Footer;