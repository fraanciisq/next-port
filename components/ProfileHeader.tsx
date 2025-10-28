"use client";
import Image from "next/image";
import React from "react";
import { IconVerified, IconLocation, CalendarIcon, MailIcon, CommunityIcon } from "./icons";
import { Button } from "./Button";
import { FaLinkedinIn, FaGithub, FaDog } from "react-icons/fa"; // ✅ Added FaDog

export const ProfileHeader: React.FC<{
  name: string;
  location: string;
  title: string;
  avatarSrc: string;
}> = ({ name, location, title, avatarSrc }) => {
 const clickSound = () => {
  const audio = new Audio("https://raw.githubusercontent.com/Blankeos/gh-cdn/main/audio/mechkey-up.wav");
  audio.volume = 0.9;
  audio.play();
};

  const socialButtons = [
    { icon: <FaLinkedinIn size={20} />, link: "https://linkedin.com/in/francis-tamondong" },
    { icon: <FaGithub size={22} />, link: "https://github.com/fraanciisq" },
    { icon: <FaDog size={22} />, link: null }, // ✅ Cute dog button (no redirect)
  ];

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

        <div className="mt-4 hidden md:flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            startIcon={<CalendarIcon />}
            onClick={() =>
              window.open("https://calendly.com/johnfrancistm/30min", "_blank")
            }
          >
            Schedule a Call
          </Button>

          <Button href="mailto:johnfrancistm@gmail.com" startIcon={<MailIcon />}>
            Send Email
          </Button>

   

          {/* ✅ Social Buttons including Dog Button */}
          <div className="ml-auto flex items-center gap-3">
            {socialButtons.map((btn, index) => {
              const isDog = btn.link === null;

              return (
                <button
                  key={index}
                  onClick={() => {
                    clickSound();
                    if (btn.link) window.open(btn.link, "_blank");
                  }}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl transition duration-100
                    ${isDog
                      ? "bg-white text-black shadow-[0_5px_0_#ccc] active:translate-y-[3px] active:shadow-[0_2px_0_#ccc] hover:brightness-110"
                      : "bg-black text-white shadow-[0_5px_0_#111] active:translate-y-[3px] active:shadow-[0_2px_0_#111] hover:brightness-125"
                    }`}
                >
                  {btn.icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
