"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Certificate = {
  src: string;
  title: string;
};

const CertificatesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    { src: "/certificates/cert1.jpg", title: "Python Developer Certificate" },
    { src: "/certificates/cert2.jpg", title: "Generative AI Certificate" },
    { src: "/certificates/cert3.jpg", title: "Oracle Cloud Certified Associate License" },
    { src: "/certificates/cert4.jpg", title: "Web Developer Certificate" },
    { src: "/certificates/cert5.jpg", title: "Project Management Certificate" },
    { src: "/certificates/cert6.jpg", title: "Git Version Control Certificate" },
    { src: "/certificates/cert7.jpg", title: "SQL Backend Certificate" },
    { src: "/certificates/cert8.jpg", title: "Frontend Certificate" },
  ];

  // Manual scroll via arrow buttons
  const scrollByAmount = (amount: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mt-10 w-full bg-white/50 py-1 select-none">
      <div className="relative max-w-6xl mx-auto px-4 bg-white rounded-xl shadow p-1 border border-gray-200">
        {/* Header with arrows */}
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-lg font-semibold text-gray-800 text-center flex-1">
            Certificates and Licenses
          </h2>

          <div className="flex gap-2 absolute right-4">
            <button
              onClick={() => scrollByAmount(-300)}
              className="p-1 rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100 transition"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={12} />
            </button>
            <button
              onClick={() => scrollByAmount(300)}
              className="p-1 rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100 transition"
              aria-label="Scroll Right"
            >
              <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Carousel (no drag) */}
        <div
          ref={scrollRef}
          className="relative w-full overflow-x-scroll whitespace-nowrap scrollbar-hide"
        >
          <div className="flex gap-6 pb-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="inline-block min-w-[280px] rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <Image
                  src={cert.src}
                  alt={cert.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-center text-sm font-medium text-gray-700">
                  {cert.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-3xl w-full mx-4"
          >
            {/* Image */}
            <div className="relative w-full h-80 bg-gray-200">
              <Image
                src={selectedCert.src}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {selectedCert.title}
              </h2>
              <button
                onClick={() => setSelectedCert(null)}
                className="mt-4 px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesCarousel;
