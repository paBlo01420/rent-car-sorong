"use client";

import React, { useState } from "react";

const phoneNumber = "6285860090932";
const waNumber = "+6285860090932";

const FloatingContact: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showWA, setShowWA] = useState(false);
  const [waMessage, setWAMessage] = useState("");
  const [showPhone, setShowPhone] = useState(false);

  // Animasi utama
  return (
    <div className="fixed z-[99] bottom-6 right-6 flex flex-col items-end gap-2">
      {/* Floating Button */}
      {!open && (
        <div className="flex flex-col items-end gap-1">
          <div className="mb-1 px-3 py-1 bg-gradient-to-tr from-fuchsia-500 to-blue-400 text-white text-xs font-semibold rounded-lg shadow-lg animate-fadeInUp">
            Hubungi Kami
          </div>
          <button
            aria-label="Contact"
            onClick={() => setOpen(true)}
            className="bg-gradient-to-tr from-fuchsia-500 via-blue-400 to-cyan-400 shadow-xl rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-all duration-300 border-4 border-white relative"
          >
            {/* Message Icon Modern */}
            <svg width="34" height="34" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.7">
              <rect x="3" y="5" width="18" height="14" rx="4" fill="url(#msgGradient)"/>
              <path d="M7 9l5 3 5-3" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="msgGradient" x1="3" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a21caf" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      )}
      {/* Popup Main */}
      {open && (
        <div className="relative animate-fadeInUp">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl px-6 py-5 flex flex-col items-center gap-4 min-w-[260px] max-w-xs border border-blue-100">
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-lg font-bold text-blue-600 tracking-wide">Bantuan Cepat</span>
              <button onClick={() => { setOpen(false); setShowWA(false); setShowPhone(false); }} className="text-gray-400 hover:text-red-500 transition-all">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <span className="text-gray-700 text-sm mb-2">Ada pertanyaan? Hubungi kami langsung!</span>
            <div className="flex gap-4">
              {/* Phone */}
              <button
                onClick={() => { setShowPhone(!showPhone); setShowWA(false); }}
                className={`rounded-full p-4 bg-gradient-to-tr from-pink-400 to-red-400 shadow-lg hover:scale-110 transition-all duration-200 ${showPhone ? 'ring-2 ring-pink-400' : ''}`}
                aria-label="Telepon"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5A2.5 2.5 0 014.5 3h2A2.5 2.5 0 019 5.5v1A2.5 2.5 0 016.5 9h-2A2.5 2.5 0 012 6.5v-1zm0 13A2.5 2.5 0 014.5 21h2A2.5 2.5 0 009 18.5v-1A2.5 2.5 0 016.5 15h-2A2.5 2.5 0 012 17.5v1zm13-13A2.5 2.5 0 0117.5 3h2A2.5 2.5 0 0022 5.5v1A2.5 2.5 0 0119.5 9h-2A2.5 2.5 0 0115 6.5v-1zm0 13A2.5 2.5 0 0117.5 21h2A2.5 2.5 0 0022 18.5v-1A2.5 2.5 0 0119.5 15h-2A2.5 2.5 0 0015 17.5v1z"/></svg>
              </button>
              {/* WhatsApp */}
              <button
                onClick={() => { setShowWA(!showWA); setShowPhone(false); }}
                className={`rounded-full p-4 bg-gradient-to-tr from-green-400 to-green-600 shadow-lg hover:scale-110 transition-all duration-200 ${showWA ? 'ring-2 ring-green-400' : ''}`}
                aria-label="WhatsApp"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.72 13.06a6.5 6.5 0 10-2.72 2.72l2.3.62a1 1 0 001.22-1.22l-.62-2.3z"/></svg>
              </button>
            </div>
            {/* Phone Popup */}
            {showPhone && (
              <div className="w-full flex flex-col items-center animate-fadeInUp">
                <span className="text-gray-700 text-sm mb-1">Hubungi kami:</span>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-lg font-bold text-pink-600 underline underline-offset-2 tracking-wide hover:text-pink-800 transition-all"
                >
                  +62 858-6009-0932
                </a>
              </div>
            )}
            {/* WhatsApp Popup */}
            {showWA && (
              <form
                className="w-full flex flex-col items-center gap-2 animate-fadeInUp"
                onSubmit={e => {
                  e.preventDefault();
                  if (waMessage.trim()) {
                    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');
                    setWAMessage("");
                    setShowWA(false);
                    setOpen(false);
                  }
                }}
              >
                <textarea
                  className="w-full rounded-lg border border-green-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none min-h-[60px]"
                  placeholder="Tulis pesan untuk admin..."
                  value={waMessage}
                  onChange={e => setWAMessage(e.target.value)}
                  maxLength={200}
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-200 mt-1"
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  Kirim ke WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingContact;
