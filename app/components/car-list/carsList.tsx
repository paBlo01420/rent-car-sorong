'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cars as allCars } from 'app/data/cars';
import { FaCarSide, FaTruckPickup, FaShuttleVan, FaCaravan, FaCar } from 'react-icons/fa';
import Link from 'next/link';

interface CarsListProps {
  limit?: number;
  hideFilter?: boolean;
  title?: string;
  cars?: typeof allCars;
}

const typeIcons: Record<string, React.ReactNode> = {
  Semua: <FaCar className="inline-block mr-2" />,
  Sedan: <FaCarSide className="inline-block mr-2" />,
  Minivan: <FaShuttleVan className="inline-block mr-2" />,
  SUV: <FaCaravan className="inline-block mr-2" />,
  Pickup: <FaTruckPickup className="inline-block mr-2" />,
  Cabriolet: <FaCarSide className="inline-block mr-2" />,
};

const Cars: React.FC<CarsListProps> = ({ limit, hideFilter = false, title = "Pilih Unit", cars }) => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const carList = cars || allCars;
  const filteredCars =
    activeFilter === 'Semua'
      ? carList
      : carList.filter((car) => car.type === activeFilter);

  const displayedCars = limit ? filteredCars.slice(0, limit) : filteredCars;

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Tersedia';
      case 'rented':
        return 'Sedang Disewa';
      case 'maintenance':
        return 'Maintenance';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'rented':
        return 'bg-orange-100 text-orange-800';
      case 'maintenance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h2>

          {!hideFilter && (
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {['Semua', 'Sedan', 'Minivan', 'SUV', 'Pickup', 'Cabriolet'].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`flex items-center px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                    activeFilter === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 border-gray-300'
                  }`}
                >
                  {typeIcons[type]}{type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid Mobil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCars.map((car) => (
            <div
              key={car.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-40 mb-4 bg-white rounded-lg overflow-hidden">
                <Image src={car.mainImage} alt={car.name} fill className="object-contain p-2" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">{car.price}</p>
                    <p className="text-xs text-gray-500">{car.period}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{car.specifications.transmisi}</span>
                  <span>{car.specifications.bahanBakar}</span>
                  <span>{car.specifications.seats} Seats</span>
                </div>

                {/* Tombol View Details - disabled jika tidak tersedia */}
                <Link 
                  href={car.status === 'available' ? `/detail/${car.id}` : '#'} 
                  className={`w-full block font-semibold py-3 rounded-lg text-center transition-colors duration-200 ${
                    car.status === 'available'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if (car.status !== 'available') {
                      e.preventDefault();
                    }
                  }}
                >
                  {car.status === 'available' ? 'View Details' : 'Tidak Tersedia'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Mobil */}
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
      </div>
    </section>
  );
};

export default Cars;