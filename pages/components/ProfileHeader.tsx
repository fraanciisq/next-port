// components/ProfileHeader.tsx
import Image from "next/image";
import React from "react";
import { IconVerified, IconLocation, CalendarIcon, MailIcon, CommunityIcon } from "./icons";
import { Button } from "./Button";

export const ProfileHeader: React.FC<{
  name: string;
  location: string;
  title: string;
  avatarSrc: string;
}> = ({ name, location, title, avatarSrc }) => {
  return (
    <div className="flex items-center gap-6">
      <div className="w-36 h-36 rounded-lg overflow-hidden shadow-sm">
        <Image src={avatarSrc} alt="avatar" width={144} height={144} className="object-cover" />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-2xl font-semibold py-2">{name}</h1>
          <span className="inline-flex items-center px-2 py-1 bg-white rounded-full shadow text-sm">
            <IconVerified />
          </span>
        </div>

        <div className="mt-1 text-sm text-gray-500 flex items-center">
          <IconLocation /> {location}
        </div>

        <div className="mt-3 text-gray-700">{title}</div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button 
          variant="primary" 
          startIcon={<CalendarIcon />}
 
    onClick={() => {
      window.open("https://calendly.com/johnfrancistm/30min", "_blank");
    }}
  >
    
            Schedule a Call
            
          </Button>

          

          <Button href="mailto:johnfrancistm@gmail.com" startIcon={<MailIcon />}>
            Send Email
          </Button>

          <Button href="https://www.linkedin.com/in/francis-tamondong/" startIcon={<CommunityIcon />} target="_blank" rel="noopener noreferrer">
            Visit my LinkedIn Profile
          </Button>

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
  );
};