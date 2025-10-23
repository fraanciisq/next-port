import React from "react";
import type { NextPage } from "next";

const IconVerified = () => (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="17"
    height="17"
    className="text-blue-500"
  >
    <path
      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
      fill="currentColor"
    />
  </svg>
);





const IconLocation = () => (
  <svg className="w-4 h-4 inline-block mr-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3M16 7V3M3 11h18M21 19H3V7a2 2 0 012-2h14a2 2 0 012 2v12z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M21 19H3V8" />
  </svg>
);

const CommunityIcon = () => (
  <svg className="w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

const BadgeIcon = () => (
  <svg className="w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15 8l6 .5-4.5 3.5L18 20l-6-3.5L6 20l1.5-8L3 8.5 9 8 12 2z" />
  </svg>
);

const IndexPage: NextPage = () => {
  const experiences = [
    { title: "Principal AI Engineer", org: "Standard Chartered", year: "2025" },
    { title: "AI Ops Engineer", org: "Centre of Excellence for GenAI, Cambridge", year: "2025" },
    { title: "Senior Full-Stack Developer", org: "Core Technology, Cambridge", year: "2024" },
    { title: "Software Engineering Lead", org: "PocketDevs", year: "2022" },
    { title: "Lead Application Developer", org: "Bluewind Asia", year: "2021" },
    { title: "Software Engineer", org: "GCM", year: "2020" },
    { title: "BS Information Technology", org: "University of San Carlos", year: "2019" },
    { title: "Hello World!", org: "Wrote my first line of code", year: "2015" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6">
          {/* Avatar made larger */}
          <img src="/avatar.jpg" alt="avatar" className="w-36 h-36 rounded-lg object-cover shadow-sm" />

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-2xl font-semibold py-2">John Francis Tamondong</h1>
              <span className="inline-flex items-center px-2 py-1 bg-white rounded-full shadow text-sm">
                <IconVerified />
              </span>
            </div>

            <div className="mt-1 text-sm text-gray-500 flex items-center">
              <IconLocation /> Legazpi City, Philippines
            </div>

            <div className="mt-3 text-gray-700">AI Engineer | Automation Specialist </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg bg-black text-white
                     hover:bg-white-100 hover:shadow-lg hover:-translate-y-1 
                     transition-all duration-200 active:scale-95 hover:cursor-pointer ">
                <CalendarIcon /> Schedule a Call
              </button>
         <a href="mailto:johnfrancistm@gmail.com">
              <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg bg-white 
                     hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 
                     transition-all duration-200 active:scale-95 hover:cursor-pointer">
                <MailIcon /> Send Email
              </button>
            </a>

<a href="https://www.linkedin.com/in/francis-tamondong/" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg bg-white 
                     hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 
                     transition-all duration-200 active:scale-95 hover:cursor-pointer">
                <CommunityIcon /> Visit my LinkedIn Profile
              </button>
</a>
              <div className="ml-auto flex items-center gap-2">
                <button className="px-3 py-2 rounded-full bg-white border border-gray-200 shadow">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                </button>

              
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column (main): About -> Experience -> Tech Stack */}
        

      
        
           

            {/* Keep space for other right-column widgets if needed */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              {/* placeholder or additional content */}
              <div className="text-sm text-gray-500">Additional widgets or links</div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default IndexPage;