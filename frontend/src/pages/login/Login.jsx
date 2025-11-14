// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import codingLogo from "../../assets/images/ninjas.png";

// function LoginStyled() {
//   const navigate = useNavigate();

//   const [UserChoice, setUserChoice] = useState({
//     Goal: "",
//     Course: "",
//   });

//   const [User, setUser] = useState({
//     Name: "",
//     PhoneNumber: "",
//     Email: "",
//   });

//   const handleRadioChoice = (e) => {
//     const { name, value } = e.target;
//     setUserChoice((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSelectedChoice = (e) => {
//     const { name, value } = e.target;
//     setUserChoice((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (User.Email) {
//       navigate("/dashboard");
//     } else {
//       alert("Enter Email!");
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen text-white font-[Inter] tracking-wide">
//       {/* Top Banner */}
//       <div className="w-full h-[45px] flex items-center justify-center bg-gradient-to-r from-pink-200 via-gray-100 to-blue-200 shadow-sm">
//         <h2 className="text-black text-base">
//           <span className="font-normal">Become AI ready</span>{" "}
//           <span className="font-semibold underline decoration-orange-500">
//             check our AI courses
//           </span>
//         </h2>
//       </div>

//       {/* Navbar */}
//       <div className="w-full flex items-center justify-center gap-8 px-10 py-4 bg-white backdrop-blur-md shadow-md border-b border-gray-100 sticky top-0 z-50">
//         <img src={codingLogo} alt="" className="h-9 w-auto" />

//         {/* Dropdowns */}
//         {[
//           {
//             title: "For Working Professionals",
//             width: "w-[800px]",
//             domains: [
//               "Data Analytics",
//               "Generative AI",
//               "Data Science",
//               "Full Stack Development",
//             ],
//             certifications: [
//               "Professional Certification in Data Analytics with Gen AI",
//               "PG Certification in Data Analytics with Gen AI",
//             ],
//             bootcamps: ["Data Analytics Job Bootcamp with Gen AI"],
//           },
//           {
//             title: "For College Students",
//             width: "w-[600px]",
//             domains: [
//               "Data Analytics",
//               "Full Stack Development",
//               "Data Structure and Algorithm",
//             ],
//             certifications: [
//               "Training and Certification in Data Analytics with Gen AI",
//             ],
//           },
//         ].map((menu, index) => (
//           <div key={index} className="relative group">
//             <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-100 border border-gray-200 shadow-sm transition-all">
//               {menu.title}
//             </button>

//             {/* Full width dropdown container - Coding Ninjas Style */}
//             <div
//               className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-[1200px] h-[60vh] bg-white/95 shadow-2xl opacity-0 scale-y-0
//                group-hover:opacity-100 group-hover:scale-y-100 pointer-events-none
//                group-hover:pointer-events-auto transform origin-top transition-all duration-300 ease-out z-50 p-8 rounded-b-2xl overflow-hidden"
//             >
//               <div className="flex justify-between gap-10 h-full">
//                 {/* Domain Section */}
//                 <div className="flex-1">
//                   <h3 className="font-bold text-xl mb-6 text-[#003366] border-b-2 border-[#003366] pb-3">
//                     Domain
//                   </h3>
//                   <ul className="space-y-4">
//                     {menu.domains.map((item) => (
//                       <li
//                         key={item}
//                         className="flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all duration-200 border border-transparent hover:border-gray-200"
//                       >
//                         <span className="text-gray-800 font-medium">{item}</span>
//                         <span className="text-gray-500 text-lg font-bold">{">"}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Certification Section */}
//                 {menu.certifications && (
//                   <div className="flex-1">
//                     <h3 className="font-bold text-xl mb-6 text-[#003366] border-b-2 border-[#003366] pb-3">
//                       Certification
//                     </h3>
//                     <ul className="space-y-4">
//                       {menu.certifications.map((c) => (
//                         <li
//                           key={c}
//                           className="cursor-pointer hover:bg-gray-50 hover:shadow-md px-4 py-3 rounded-lg text-gray-800 font-medium transition-all duration-200 border border-transparent hover:border-gray-200"
//                         >
//                           {c}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Bootcamp Section */}
//                 {menu.bootcamps && (
//                   <div className="flex-1">
//                     <h3 className="font-bold text-xl mb-6 text-[#003366] border-b-2 border-[#003366] pb-3">
//                       Job Bootcamp
//                     </h3>
//                     <ul className="space-y-4">
//                       {menu.bootcamps.map((b) => (
//                         <li
//                           key={b}
//                           className="cursor-pointer hover:bg-gray-50 hover:shadow-md px-4 py-3 rounded-lg text-gray-800 font-medium transition-all duration-200 border border-transparent hover:border-gray-200"
//                         >
//                           {b}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
              
//               {/* Bottom CTA Section */}
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h4 className="text-[#003366] font-bold text-lg">Need help choosing the right program?</h4>
//                     <p className="text-gray-600 mt-1">Speak to our counsellors for free</p>
//                   </div>
//                   <button className="bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#002244] transition-all">
//                     Get a Call Back
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">
//           My Classroom
//         </button>
//       </div>

//       {/* Hero Section */}
//       <div className="flex items-center justify-between px-20 py-16 gap-16">
//         {/* Left Info */}
//         <div className="flex-1 max-w-2xl flex flex-col items-start space-y-6">
//           <h3 className="text-lg text-green-400 mb-2">Restricted by opportunities?</h3>
//           <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
//             Get the tech career <br /> you deserve. Faster.
//           </h1>

//           <div className="space-y-4 w-full max-w-lg mt-4">
//             {[
//               "128% average hike via our placement cell",
//               "1.5L+ learners cracked top tech companies",
//               "1,400+ alumni in MAANG & 103 unicorn startups",
//             ].map((text, i) => (
//               <div
//                 key={i}
//                 className="flex items-center p-4 border border-gray-700 rounded-xl bg-gray-900/50 hover:bg-gray-800/60 transition-all"
//               >
//                 <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
//                 <h2 className="text-lg font-medium text-gray-100 text-left">{text}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Form */}
//         <div className="flex-1 max-w-md transform">
//           <div className="bg-white text-black p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
//             {/* Phone Notch */}
//             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>

//             {/* Speaker Dots */}
//             <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
//               {[...Array(3)].map((_, i) => (
//                 <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
//               ))}
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6 mt-6">
//               <h2 className="text-xl font-bold text-gray-800 text-center">
//                 Let's find the right course for you
//               </h2>

//               {/* Radio Buttons */}
//               <div>
//                 <p className="font-medium text-gray-700 text-sm mb-2">Experience</p>
//                 <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
//                   {[
//                     "Working Professional - Technical Roles",
//                     "Working Professional - Non Technical Roles",
//                     "College Student - Final Year",
//                     "College Student - 1st to pre-final Year",
//                     "Others",
//                   ].map((label, idx) => (
//                     <label
//                       key={idx}
//                       className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer border border-gray-100 hover:border-orange-300 transition-all duration-200"
//                     >
//                       <input
//                         type="radio"
//                         name="Goal"
//                         value={label}
//                         onChange={handleRadioChoice}
//                         className="form-radio h-4 w-4 text-orange-500 focus:ring-orange-400"
//                       />
//                       <span className="text-gray-700 text-sm">{label}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Course Select */}
//               <select
//                 name="Course"
//                 onChange={handleSelectedChoice}
//                 className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm bg-white shadow-sm"
//                 defaultValue=""
//               >
//                 <option value="">Select your choice/option</option>
//                 <option value="FullStack">Full Stack Development</option>
//                 <option value="GenAI">Gen AI</option>
//                 <option value="DataScience">Data Science</option>
//               </select>

//               {/* Inputs */}
//               <input
//                 type="text"
//                 name="Name"
//                 value={User.Name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm shadow-sm"
//               />
//               <input
//                 type="text"
//                 name="PhoneNumber"
//                 value={User.PhoneNumber}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm shadow-sm"
//               />
//               <input
//                 type="email"
//                 name="Email"
//                 value={User.Email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm shadow-sm"
//                 required
//               />

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-all font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//               >
//                 Find Your Course
//               </button>
//             </form>

//             {/* Home Indicator */}
//             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginStyled;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import codingLogo from "../../assets/images/ninjas.png";
import Footer from "../../components/footer/Footer";

function LoginStyled() {
  const navigate = useNavigate();

  const [UserChoice, setUserChoice] = useState({
    Goal: "",
    Course: "",
  });

  const [User, setUser] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
  });

  const handleRadioChoice = (e) => {
    const { name, value } = e.target;
    setUserChoice((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectedChoice = (e) => {
    const { name, value } = e.target;
    setUserChoice((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User.Email) {
      navigate("/coursedetail");
    } else {
      alert("Enter Email!");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-[Inter] tracking-wide">
      {/* Top Banner */}
      <div className="w-full h-[45px] flex items-center justify-center bg-gradient-to-r from-pink-200 via-gray-100 to-blue-200 shadow-sm">
        <h2 className="text-black text-base">
          <span className="font-normal">Become AI ready</span>{" "}
          <span className="font-semibold underline decoration-orange-500">
            check our AI courses
          </span>
        </h2>
      </div>

      {/* Navbar */}
      <nav className="w-full flex items-center justify-center gap-8 px-10 py-4 bg-white backdrop-blur-md shadow-md border-b border-gray-100 sticky top-0 z-50">
        <img src={codingLogo} alt="" className="h-9 w-auto" />

        {/* Dropdowns - PURE TAILWIND */}
        {[
  {
    title: "For Working Professionals",
    domains: [
      "Data Analytics",
      "Generative AI", 
      "Data Science",
      "Full Stack Development",
    ],
    certifications: [
      "Professional Certification in Data Analytics with Gen AI",
      "PG Certification in Data Analytics with Gen AI",
    ],
    bootcamps: ["Data Analytics Job Bootcamp with Gen AI"],
  },
  {
    title: "For College Students", 
    domains: [
      "Data Analytics",
      "Full Stack Development", 
      "Data Structure and Algorithm",
    ],
    certifications: [
      "Training and Certification in Data Analytics with Gen AI",
    ],
  },
].map((menu, index) => (
  <div key={index} className="relative group">
    <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-100 border border-gray-200 shadow-sm transition-all">
      {menu.title}
    </button>

    {/* DROPDOWN - SAME CENTER ALIGNMENT FOR BOTH */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[99vw] max-w-[1600px] bg-white shadow-2xl border border-gray-200 rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="flex min-h-[400px]">
        {/* Domain Section - Left with Gray Background */}
        <div className="w-1/3 bg-gray-50 p-8 border-r border-gray-200">
          <h3 className="font-bold text-xl mb-6 text-[#003366]">Domain</h3>
          <ul className="space-y-3">
            {menu.domains.map((item) => (
              <li
                key={item}
                className="flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <span className="text-gray-800 font-medium">{item}</span>
                <span className="text-gray-400 text-lg">{">"}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Sections - White Background */}
        <div className="w-2/3 flex">
          {/* Certification Section */}
          {menu.certifications && (
            <div className="flex-1 p-8 border-r border-gray-200">
              <h3 className="font-bold text-xl mb-6 text-[#003366]">Certification</h3>
              <ul className="space-y-3">
                {menu.certifications.map((c) => (
                  <li
                    key={c}
                    className="cursor-pointer hover:bg-gray-50 px-4 py-3 rounded-lg text-gray-800 font-medium transition-all duration-200"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bootcamp Section */}
          {menu.bootcamps && (
            <div className="flex-1 p-8">
              <h3 className="font-bold text-xl mb-6 text-[#003366]">Job Bootcamp</h3>
              <ul className="space-y-3">
                {menu.bootcamps.map((b) => (
                  <li
                    key={b}
                    className="cursor-pointer hover:bg-gray-50 px-4 py-3 rounded-lg text-gray-800 font-medium transition-all duration-200"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom CTA - Full Width */}
      <div className="border-t border-gray-200 bg-white">
        <div className="px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-[#003366] font-bold text-lg">Need help choosing the right program?</h4>
              <p className="text-gray-600 mt-1">Speak to our counsellors for free</p>
            </div>
            <button className="bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#002244] transition-all">
              Get a Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
))}

        <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">
          My Classroom
        </button>
      </nav>

      {/* Rest of your existing hero section code remains same */}
      <div className="flex items-center justify-between px-20 py-16 gap-16">
        {/* Left Info */}
        <div className="flex-1 max-w-2xl flex flex-col items-start space-y-6">
          <h3 className="text-lg text-green-400 mb-2">Restricted by opportunities?</h3>
          <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Get the tech career <br /> you deserve. Faster.
          </h1>

          <div className="space-y-4 w-full max-w-lg mt-4">
            {[
              "128% average hike via our placement cell",
              "1.5L+ learners cracked top tech companies", 
              "1,400+ alumni in MAANG & 103 unicorn startups",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center p-4 border border-gray-700 rounded-xl bg-gray-900/50 hover:bg-gray-800/60 transition-all"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <h2 className="text-lg font-medium text-gray-100 text-left">{text}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 max-w-md transform">
          <div className="bg-white text-black p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>

            {/* Speaker Dots */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <h2 className="text-xl font-bold text-gray-800 text-center">
                Let's find the right course for you
              </h2>

              {/* Radio Buttons */}
              <div>
                <p className="font-medium text-gray-700 text-sm mb-2">Experience</p>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {[
                    "Working Professional - Technical Roles",
                    "Working Professional - Non Technical Roles", 
                    "College Student - Final Year",
                    "College Student - 1st to pre-final Year",
                    "Others",
                  ].map((label, idx) => (
                    <label
                      key={idx}
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer border border-gray-100 hover:border-orange-300 transition-all duration-200"
                    >
                      <input
                        type="radio"
                        name="Goal"
                        value={label}
                        onChange={handleRadioChoice}
                        className="form-radio h-4 w-4 text-orange-500 focus:ring-orange-400"
                      />
                      <span className="text-gray-700 text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Course Select */}
              <select
                name="Course"
                onChange={handleSelectedChoice}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm bg-white shadow-sm"
                defaultValue=""
              >
                <option value="">Select your choice/option</option>
                <option value="FullStack">Full Stack Development</option>
                <option value="GenAI">Gen AI</option>
                <option value="DataScience">Data Science</option>
              </select>

              {/* Inputs */}
              <input
                type="text"
                name="Name"
                value={User.Name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm shadow-sm"
              />
              <input
                type="text"
                name="PhoneNumber"
                value={User.PhoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm shadow-sm"
              />
              <input
                type="email"
                name="Email"
                value={User.Email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm shadow-sm"
                required
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-all font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Find Your Course
              </button>
            </form>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
      
    <div className="w-full bg-white py-10">
  {/* Main Heading */}
  <div className="text-center">
    <h1 className="text-8xl font-sans font-bold text-gray-300">OUR COURSES</h1>
  </div>

  {/* Working Professionals Section */}
  <div className="px-6 mt-4">
    <h2 className="text-xl text-black font-semibold mb-20 px-64 translate-y-12 font-sans">
      for working professionals
    </h2>

    {/* Buttons */}
    <div className="flex flex-wrap justify-start gap-7 px-64">
      <button className="px-4 py-2 border border-black font-semibold font-sans text-black rounded-3xl w-20">
        All
      </button>
      <button className="px-4 py-2 font-sans border text-gray-600 rounded-lg">
        Data Analytics
      </button>
      <button className="px-4 py-2 font-sans border text-gray-600 rounded-lg">
        Generative AI
      </button>
      <button className="px-4 py-2 font-sans border text-gray-600 rounded-lg">
        Data Science
      </button>
      <button className="px-4 py-2 font-sans border text-gray-600 rounded-lg">
        Full Stack Development
      </button>
    </div>
  </div>

  {/* Working Professionals Cards */}
  <div className="flex flex-wrap justify-center gap-8 mt-10">
    {[
      {
        image: "", // yahan image URL lagao
        title: "Professional Certification in Data Analytics with GenAI",
        subtitle: "Vishlesan i-Hub, IIT Patna",
        type: "Certification",
        duration: "6 months",
      },
      {
        image: "",
        title: "PG Certification in Data Analytics With GenAI",
        subtitle: "E&ICT Acadmey, IIT Guwahati",
        type: "Certification",
        duration: "6 months",
      },
      {
        image: "",
        title: "Data Analytics Job Bootcamp With GenAI",
        subtitle: "Coding ninjas",
        type: "Job bootcamp",
        duration: "6 months",
      },
    ].map((course, index) => (
      <div
        key={index}
        className="border border-gray-300 bg-gray-50 rounded-2xl shadow-md p-4 hover:shadow-lg transition w-[280px] h-[360px] flex flex-col justify-between"
      >
        {/* Image Div */}
        <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
          {course.image && <img src={course.image} alt={`course-${index}`} className="w-full h-full object-cover" />}
          {!course.image && <span className="text-gray-400">Image Here</span>}
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between flex-1">
          <h1 className="text-lg font-semibold text-black font-sans leading-snug">{course.title}</h1>
          <p className="text-gray-600 mt-2 text-sm">{course.subtitle}</p>
          <h4 className="mt-3 font-semibold text-sm text-gray-700">{course.type}</h4>

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              <img src="" alt="logo1" className="w-6 h-6 bg-gray-300 rounded-full" />
              <img src="" alt="logo2" className="w-6 h-6 bg-gray-300 rounded-full" />
              <img src="" alt="logo3" className="w-6 h-6 bg-gray-300 rounded-full" />
            </div>
            <h3 className="text-gray-700 text-sm">{course.duration}</h3>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* College Students Section */}
  <div className="px-6 mt-24">
    <h2 className="text-xl text-black font-semibold mb-20 px-64 translate-y-12 font-sans">
      for college students
    </h2>

    {/* Buttons */}
    <div className="flex flex-wrap justify-start gap-7 px-64">
      <button className="px-4 py-2 border border-black font-semibold font-sans text-black rounded-3xl w-20">
        All
      </button>
      <button className="px-4 py-2 font-sans border text-gray-600 rounded-lg">
        Data Analytics
      </button>
      <button className="px-4 py-2 font-sans border text-gray-600 rounded-lg">
        Full Stack Development
      </button>
      <button className="px-4 py-2 font-sans border text-gray-600 rounded-lg">
        Data Structure & Algorithm
      </button>
    </div>
  </div>

  {/* College Students Cards */}
  <div className="flex flex-wrap justify-center gap-8 mt-10">
    {[
      {
        image: "",
        title: "Training and Internship Certification in Data...",
        subtitle: "Vishlesan i-hub IIT Patna",
        type: "Certification",
        duration: "6 months",
      },
      {
        image: "",
        title: "Training and Internship Certification in Full Stack...",
        subtitle: "IITM Pravartak, TIH IIT Madras",
        type: "Certificate",
        duration: "9 months",
      },
      {
        image: "",
        title: "Training and Internship Certification in Advanced...",
        subtitle: "IITM Pravartak, TIH IIT Madras",
        type: "Course",
        duration: "4 months",
      },
    ].map((course, index) => (
      <div
        key={index}
        className="border border-gray-300 bg-gray-50 rounded-2xl shadow-md p-4 hover:shadow-lg transition w-[280px] h-[360px] flex flex-col justify-between"
      >
        {/* Image Div */}
        <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
          {course.image && <img src={course.image} alt={`course-${index}`} className="w-full h-full object-cover" />}
          {!course.image && <span className="text-gray-400">Image Here</span>}
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between flex-1">
          <h1 className="text-lg font-semibold text-black font-sans leading-snug">{course.title}</h1>
          <p className="text-gray-500 mt-2 text-sm">{course.subtitle}</p>
          <h4 className="mt-3 font-semibold text-sm text-gray-700">{course.type}</h4>

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              <img src="" alt="logo1" className="w-6 h-6 bg-gray-300 rounded-full" />
              <img src="" alt="logo2" className="w-6 h-6 bg-gray-300 rounded-full" />
              <img src="" alt="logo3" className="w-6 h-6 bg-gray-300 rounded-full" />
            </div>
            <h3 className="text-gray-700 text-sm">{course.duration}</h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

          <div className="bg-black text white min-h-screen"> 
            <h1 className="text-center mt-28 text-6xl font-bold font-sans">9 years of <br /> transforming <br /> tech careers</h1>
            <div className="h-24 w-24 bg-violet-600 m-auto translate-y-32 rounded-2xl"></div>
            <h1 className="text-center mt-[10rem] text-7xl font-sans font-bold">1.5 Lac+ learners</h1>
            <h2 className="text-center mt-[2rem] font-sans font-semibold text-2xl text-gray-500">cracked dream roles at top tech companies</h2>
            <div className="h-[32vh] w-[1px] bg-white m-auto translate-y-7"></div>
            <div className="h-24 w-24 bg-green-600 m-auto rounded-2xl mt-12"></div>
            <h1 className="text-center font-sans font-bold text-8xl mt-9">1,400 Alumni in MAANG</h1>
            <h2 className="text-center font-sans font-semibold text-4xl mt-7 text-gray-500">& more in 103/111 Unicorns</h2>
            <div className="h-[32vh] w-[1px] bg-white m-auto translate-y-7"></div>
            <div className="h-24 w-24 bg-pink-400 m-auto rounded-2xl mt-12"></div>
            <h1 className="font-sans font-bold text-7xl text-center mt-7">1 cr+ highest CTC</h1>
            <h2 className="text-center font-sans font-semibold text-3xl mt-7 text-gray-600">after completing the course</h2>
              <div className="h-[32vh] w-[1px] bg-white m-auto translate-y-7"></div>
                <div className="h-24 w-24 bg-blue-500 m-auto rounded-2xl mt-12"></div>
                <h1 className="font-sans font-bold text-7xl text-center mt-7">128% averages hike</h1>
                <h2 className="font-sans font-semibold text-3xl text-center mt-7 text-gray-600">via our placement cell</h2>
                <button className="w-[15vw] bg-orange-500 text-white text-xl font-sans h-[7vh] rounded-xl m-auto translate-x-[42vw] mt-[18vh]">Explore offerings</button>
                <h1 className="text-9xl text-center font-sans font-extrabold   text-black mt-7">WHY US</h1>
          </div>

      <Footer/>
    </div>

    
  );
}

export default LoginStyled;