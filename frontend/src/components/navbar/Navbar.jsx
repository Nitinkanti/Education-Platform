import React from 'react';

function Navbar({ img, title, subtitle, buttonText }) {
  return (
    <nav className="w-full bg-white flex items-center justify-between px-24 py-5 shadow-md">
      {/* Left: Logo + Text */}
      <div className="flex items-center">
        <img src={img} alt="Logo" className="h-[90px] w-auto" />
        <div >
          <h2 className="text-black text-sm font-semibold">
            {title}
          </h2>
          <span className="text-gray-600 font-semibold text-xs">{subtitle}</span>
        </div>
      </div>

      {/* Right: Button */}
      <button className="bg-orange-500 text-white w-44 h-11 px-3 py-2 rounded-lg font-medium hover:bg-orange-800 transition">
        {buttonText}
      </button>
    </nav>
  );
}

export default Navbar;
