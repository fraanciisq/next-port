"use client";
import { useRef } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const SocialKeys = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const socials = [
    {
      icon: <FaLinkedinIn className="text-2xl" />,
      url: "https://www.linkedin.com/in/johnfrancistm/",
      bg: "bg-blue-600",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/YOUR_INSTAGRAM/",
      bg: "bg-gray-200 text-blue-600",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/YOUR_GITHUB/",
      bg: "bg-blue-600",
    },
  ];

  return (
    <div className="hidden md:flex gap-3">
      <audio ref={audioRef} src="/sounds/click.mp3" preload="auto" />

      {socials.map((s, i) => (
        <Link
          key={i}
          href={s.url}
          target="_blank"
          onClick={playSound}
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-[inset_0_1px_4px_rgba(255,255,255,0.4),0_6px_12px_rgba(0,0,0,0.4)]
            ${s.bg}
            hover:translate-y-[2px] transition-all active:translate-y-[4px]`}
        >
          {s.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialKeys;
