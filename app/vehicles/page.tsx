'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cars from '@/components/car-list/carsList';
import { FaSearch } from 'react-icons/fa';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const pickupLocations = [
  'Sorong City',
  'Airport',
  'Terminal',
  'Hotel',
  'Other',
];

const carTypes = ['All', ...Array.from(new Set(carsWithStatus.map(car => car.type)))];

const VehiclesPage = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [carType, setCarType] = useState('All');
  const [filteredCars, setFilteredCars] = useState(carsWithStatus);
  const [pickupDateObj, setPickupDateObj] = useState<Date | null>(null);
  const [returnDateObj, setReturnDateObj] = useState<Date | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = carsWithStatus.filter(car => {
      return carType === 'All' || car.type === carType;
    });
    setFilteredCars(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center mt-24 mb-10 px-2">
        <form
          onSubmit={handleSearch}
          className="w-full max-w-5xl bg-white border border-gray-200 rounded-full shadow-lg p-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 relative z-10"
        >
          {/* Tipe Mobil */}
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-500 mb-1 md:mb-0 md:sr-only">Tipe Mobil</label>
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full font-semibold text-base text-black bg-gray-100 rounded-full px-4 py-3 focus:outline-none border border-gray-200"
            >
              {carTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Tanggal Mulai Rental */}
          <div className="flex-1 min-w-[170px]">
            <label className="block text-xs font-semibold text-gray-500 mb-1 md:mb-0 md:sr-only">Tanggal Mulai Rental</label>
            <ReactDatePicker
              selected={pickupDateObj}
              onChange={(date: Date | null) => {
                setPickupDateObj(date);
                setPickupDate(date ? date.toISOString().slice(0, 10) : '');
              }}
              dateFormat="yyyy-MM-dd"
              placeholderText="Tanggal Mulai"
              className="w-full font-semibold text-base text-black bg-gray-100 rounded-full px-4 py-3 focus:outline-none border border-gray-200"
              minDate={new Date()}
              required
            />
          </div>
          {/* Waktu Mulai */}
          <div className="flex-1 min-w-[120px]">
            <label className="block text-xs font-semibold text-gray-500 mb-1 md:mb-0 md:sr-only">Waktu Mulai</label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full font-semibold text-base text-black bg-gray-100 rounded-full px-4 py-3 focus:outline-none border border-gray-200"
              required
            />
          </div>
          {/* Tanggal Selesai */}
          <div className="flex-1 min-w-[170px]">
            <label className="block text-xs font-semibold text-gray-500 mb-1 md:mb-0 md:sr-only">Tanggal Selesai</label>
            <ReactDatePicker
              selected={returnDateObj}
              onChange={(date: Date | null) => {
                setReturnDateObj(date);
                setReturnDate(date ? date.toISOString().slice(0, 10) : '');
              }}
              dateFormat="yyyy-MM-dd"
              placeholderText="Tanggal Selesai"
              className="w-full font-semibold text-base text-black bg-gray-100 rounded-full px-4 py-3 focus:outline-none border border-gray-200"
              minDate={pickupDateObj || new Date()}
              required
            />
          </div>
          {/* Waktu Selesai */}
          <div className="flex-1 min-w-[120px]">
            <label className="block text-xs font-semibold text-gray-500 mb-1 md:mb-0 md:sr-only">Waktu Selesai</label>
            <input
              type="time"
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
              className="w-full font-semibold text-base text-black bg-gray-100 rounded-full px-4 py-3 focus:outline-none border border-gray-200"
              required
            />
          </div>
          {/* Button Cari Mobil */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-base shadow-md transition-all duration-200 min-w-[140px]"
          >
            <FaSearch className="w-5 h-5" /> Cari Mobil
          </button>
        </form>
      </div>
      {/* Hasil Filter */}
      <div className="mt-8">
        <Cars hideFilter limit={null} title="Daftar Mobil Tersedia" cars={filteredCars} showStatus={true} />
      </div>
      <Footer />
    </>
  );
};

export default VehiclesPage;
