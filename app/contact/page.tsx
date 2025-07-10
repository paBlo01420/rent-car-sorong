'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <section className="max-w-7xl mx-auto">
        {/* Header */}
        {/* Header: Contact Us */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-3xl font-bold text-black">Contact Us</h1>
        </div>
        {/* Tambahan text di page */}
        <div className="text-center mb-8 text-black text-2xl font-bold">
          Kontak Kami
        </div>

        {/* Gambar Tengah */}
        <div className="flex justify-center items-center mb-16">
          <Image
            src="/images/contact-us/display-contactUs.png"
            alt="Contact Us Display"
            width={900}
            height={600}
            className="w-full h-auto object-cover max-w-3xl"
          />
        </div>

        {/* Info Kontak */}
        <div className="flex flex-wrap justify-center items-center text-sm gap-8 mb-20 text-black font-[500] font-sans">
          <div className="flex items-start gap-3 max-w-xs">
            <MapPin className="text-yellow-500 mt-1" />
            <p>
              <span className="font-serif text-base text-yellow-700">Alamat</span><br />
              <span className="font-light font-sans">
          Jl. Malageda 1, Matalamagi, Kec. Sorong Utara, Kota Sorong, Papua Barat. 98412
              </span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-yellow-500 mt-1" />
            <p>
              <span className="font-serif text-base text-yellow-700">Email</span><br />
              <span className="font-light font-sans">
          threerino@gmail.com
              </span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-yellow-500 mt-1" />
            <p>
              <span className="font-serif text-base text-yellow-700">Telepon</span><br />
              <span className="font-light font-sans">
          085244129181
              </span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="text-yellow-500 mt-1" />
            <p>
              <span className="font-serif text-base text-yellow-700">Opening Hours</span><br />
              <span className="font-light font-sans">
          Sen–Ming: 06.00 – 22.00
              </span>
            </p>
          </div>
        </div>

        {/* Destinasi Populer Kota Sorong */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-black font-serif tracking-wide drop-shadow-lg">
            Destinasi Populer Kota Sorong
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
          img: '/images/destinasi/pantai-tanjung-kasuari.jpg',
          title: 'Pantai Tanjung Kasuari',
              },
              {
          img: '/images/destinasi/hutan-mangrove-sorong.jpg',
          title: 'Hutan Mangrove Sorong',
              },
              {
          img: '/images/destinasi/pulau-doom.jpg',
          title: 'Pulau Doom',
              },
              {
          img: '/images/destinasi/air-terjun-wafsarak.jpg',
          title: 'Air Terjun Wafsarak',
              },
              {
          img: '/images/destinasi/tampa-garam-beach.jpg',
          title: 'Tampa Garam Beach',
              },
              {
          img: '/images/destinasi/mooi-park.jpg',
          title: 'Mooi Park',
              },
            ].map((dest, i) => (
              <div
          key={i}
          className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
              >
          <Image
            src={dest.img}
            alt={dest.title}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 flex flex-col flex-1 justify-between">
            <h3 className="font-extrabold text-lg mb-2 text-black text-center font-serif italic tracking-wide drop-shadow-md">
              {dest.title}
            </h3>
          </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Mobil Section */}
        <section className="bg-white py-22 px-4 rounded-xl mb-8 mt-8">
          <div className="flex justify-center flex-wrap gap-20 items-center">
            {[
              'toyota.png', 'honda.png', 'mitsubishi.png',
              'daihatsu.png', 'wuling.png', 'hyundai.png', 'suzuki.png'
            ].map((logo, i) => (
              <Image
                key={i}
                src={`/images/logo-mobil/${logo}`}
                alt={`Brand ${i}`}
                width={60}
                height={60}
                className="object-contain"
              />
            ))}
          </div>
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
