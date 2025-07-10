'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative py-30 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Container with Image Only */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mobil-display.png')" }}
        >
          {/* Main Content Container */}
          <div className="relative z-10">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="px-8 xl:px-16 py-16">
                <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-8">
                  <h1 className="text-4xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                    Nikmati Mudahnya Sewa Mobil Profesional
                  </h1>
                  <p className="text-lg xl:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Solusi rental mobil terbaik di Sorong dan Papua Barat. Armada lengkap, harga transparan, dan pelayanan ramah untuk setiap perjalanan Anda.
                  </p>
                  <a
                    href="/vehicles"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Lihat Semua Mobil
                  </a>
                </div>
              </div>
            </div>
            {/* Tablet Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="px-6 py-12">
                <div className="flex flex-col items-center justify-center text-center space-y-8">
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg">
                    Nikmati Mudahnya Sewa Mobil Profesional
                  </h1>
                  <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto">
                    Solusi rental mobil terbaik di Sorong dan Papua Barat. Armada lengkap, harga transparan, dan pelayanan ramah untuk setiap perjalanan Anda.
                  </p>
                  <a
                    href="/vehicles"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Lihat Semua Mobil
                  </a>
                </div>
              </div>
            </div>
            {/* Mobile Layout */}
            <div className="block md:hidden">
              <div className="px-4 py-8">
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                  <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-white drop-shadow-lg">
                    Nikmati Mudahnya Sewa Mobil Profesional
                  </h1>
                  <p className="text-sm sm:text-base text-white/90 px-2">
                    Solusi rental mobil terbaik di Sorong dan Papua Barat. Armada lengkap, harga transparan, dan pelayanan ramah untuk setiap perjalanan Anda.
                  </p>
                  <a
                    href="/vehicles"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Lihat Semua Mobil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;