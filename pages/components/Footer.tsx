"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 mt-10 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Left Side - Contact */}
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          <p className="text-gray-600 text-sm">
             Contact Number: <span className="font-medium">0967 230 3005</span>
          </p>
        </div>

        {/* Right Side - Copyright */}
        <div className="text-center sm:text-right text-xs text-gray-500">
          <p>© 2025 John Francis Tamondong. All rights reserved.</p>
          <p className="text-[11px] text-gray-400 mt-1">
            Inspired by <span className="font-medium text-gray-500">Bryl Lim Portfolio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
