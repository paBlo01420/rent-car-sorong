'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cars as carsData } from 'app/data/cars';

const DetailCar = () => {
  const params = useParams();
  const id = params.id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (id) {
      const foundCar = carsData.find(car => car.id === parseInt(id as string));
      setCar(foundCar || null);
    }
  }, [id]);

  // Data mobil lain (6 unit, exclude current)
  const otherCars = carsData.filter(item => item.id !== car?.id).slice(0, 6);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Spacer dari navbar ke section utama */}
      <div className="h-8 md:h-22" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Gambar & Spesifikasi */}
            <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Gambar utama / galeri */}
            <>
              <div className="relative h-80 md:h-96 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  key={car.images[selectedImage]}
                  src={car.images[selectedImage]}
                  alt={car.name}
                  fill
                  className="object-contain transition-opacity duration-500 ease-in-out opacity-100"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {car.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-blue-600 ring-offset-2' : 'hover:opacity-80'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image src={image} alt={`${car.name} ${index}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </>
            {/* Spesifikasi & Kelengkapan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Spesifikasi */}
              <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Spesifikasi Unit</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-800">
                <span className="font-medium text-gray-700">Transmisi:</span>
                <span className="text-gray-900">{car.specifications.transmisi}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-800">
                <span className="font-medium text-gray-700">Bahan Bakar:</span>
                <span className="text-gray-900">{car.specifications.bahanBakar}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-800">
                <span className="font-medium text-gray-700">Pintu:</span>
                <span className="text-gray-900">{car.specifications.pintu}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-800">
                <span className="font-medium text-gray-700">Seats:</span>
                <span className="text-gray-900">{car.specifications.seats}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-800">
                <span className="font-medium text-gray-700">Air Conditioner:</span>
                <span className="text-gray-900">{car.specifications.airConditioner}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-800">
                <span className="font-medium text-gray-700">Konsumsi BBM:</span>
                <span className="text-gray-900">{car.specifications.konsumsBBM}</span>
                </div>
              </div>
              </div>
              {/* Kelengkapan */}
              <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kelengkapan Unit</h3>
              <div className="flex flex-wrap gap-3">
                {car.features.primary.concat(car.features.secondary).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-1 rounded-full"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span
                  className={
                    feature.toLowerCase() === 'abs'
                    ? 'font-bold text-blue-700'
                    : feature.toLowerCase() === 'air bags'
                    ? 'font-semibold text-green-700'
                    : feature.toLowerCase() === 'cruise control'
                    ? 'font-semibold text-purple-700'
                    : feature.toLowerCase() === 'air conditioner'
                    ? 'font-semibold text-cyan-700'
                    : 'text-gray-800'
                  }
                  >
                  {feature}
                  </span>
                </div>
                ))}
              </div>
              </div>
            </div>
            </div>

          {/* Right: Jenis Layanan & Tombol Pesan */}
          <div className="flex flex-col gap-8">
            {/* Card Jenis Layanan */}
            <div className="bg-[#6C5CE7] rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-lg font-bold text-center mb-4">Jenis Layanan</h3>
              <div className="space-y-6">
                <div>
                  <div className="font-semibold">Lepas Kunci :</div>
                  <ul className="ml-4 list-disc text-sm">
                    <li>Rp.300.000 / 12 Jam</li>
                    <li>Rp.600.000 / Full Day</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">Mobil + Supir</div>
                  <ul className="ml-4 list-disc text-sm">
                    <li>Rp.400.000 / 6 Jam</li>
                    <li>Rp.500.000 / 12 Jam</li>
                    <li>Rp.800.000 / Full Day</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">Mobil + Supir + Bensin</div>
                  <ul className="ml-4 list-disc text-sm">
                    <li>Rp.450.000 / 6 Jam</li>
                    <li>Rp.550.000 / 12 Jam</li>
                    <li>Rp.900.000 / Full Day</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tombol Pesan Sekarang (WA) */}
            <a
              href={`https://wa.me/6281234567890?text=Halo%20Admin%2C%20saya%20ingin%20sewa%20${encodeURIComponent(car.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-xl text-center shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.51 5.8L0 24l6.36-1.67A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.18-3.48-8.52zM12 22c-1.85 0-3.62-.5-5.15-1.37l-.37-.21-3.77.99 1.01-3.67-.24-.38A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.2c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.29 1.23.46 1.65.59.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
              </svg>
              Pesan Sekarang
            </a>
            {/* Info harga utama */}
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h1>
              <span className="text-xl font-bold text-blue-600">{car.price}</span>
              <span className="text-gray-500"> / {car.period}</span>
            </div>
            {/* Deskripsi */}
            <div className="text-gray-600 text-sm leading-relaxed bg-gray-50 rounded-xl p-4">{car.description}</div>
          </div>
        </div>
      </div>

      {/* Section Unit Lain */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Unit Lain</h2>
          <Link href="/vehicles" className="text-blue-600 font-semibold hover:underline text-base md:text-lg">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCars.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-40 mb-4 bg-white rounded-lg overflow-hidden">
                <Image src={item.mainImage} alt={item.name} fill className="object-contain p-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">{item.price}</p>
                    <p className="text-xs text-gray-500">{item.period}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{item.specifications.transmisi}</span>
                  <span>{item.specifications.bahanBakar}</span>
                  <span>{item.specifications.seats} Seats</span>
                </div>
                <Link 
                  href={`/detail/${item.id}`} 
                  className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-center transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DetailCar;