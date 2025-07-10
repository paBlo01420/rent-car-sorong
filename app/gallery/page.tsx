import Navbar from '../components/Navbar';import Footer from '../components/Footer';
import React from 'react';



const galleryImages = [
  '/images/galeri-rent/foto-1.png', '/images/galeri-rent/foto-2.png', '/images/galeri-rent/foto-3.png', '/images/galeri-rent/foto-4.png', '/images/galeri-rent/foto-5.png',
  '/images/galeri-rent/foto-6.png', '/images/galeri-rent/foto-7.png', '/images/galeri-rent/foto-8.png', '/images/galeri-rent/foto-9.png', '/images/galeri-rent/foto-10.png',
  '/images/galeri-rent/foto-11.png', '/images/galeri-rent/foto-12.png', '/images/galeri-rent/foto-13.png', '/images/galeri-rent/foto-14.png', '/images/galeri-rent/foto-15.png',
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto px-2 md:px-0 mt-24 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black">Galeri kami</h1>
      </div>
      <main className="flex-1 w-full max-w-5xl mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center">
              <img src={src} alt={`Galeri ${i+1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
        {/* Section Pengunjung khusus Gallery */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 mb-10 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 uppercase tracking-wide">Pengunjung</h2>
          <p className="text-center mb-6 text-purple-100">Terima kasih telah mengunjungi galeri kami! Lihat statistik pengunjung di bawah ini.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-white text-blue-600 rounded-full p-3 mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z" fill="currentColor"/></svg>
              </div>
              <div className="font-bold text-lg">Pengunjung Hari Ini</div>
              <div className="text-2xl font-bold mt-1">23</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-white text-green-600 rounded-full p-3 mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-8 0v2" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <div className="font-bold text-lg">Total Pengunjung</div>
              <div className="text-2xl font-bold mt-1">5.421</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-white text-yellow-500 rounded-full p-3 mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"/></svg>
              </div>
              <div className="font-bold text-lg">Rating Pengunjung</div>
              <div className="text-2xl font-bold mt-1">4.9/5</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
