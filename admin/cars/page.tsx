'use client';

import React, { useState } from 'react';
import AdminLayout from '../layout';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaSearch,
  FaCar,
  FaCheckCircle,
  FaTimesCircle,
  FaClock
} from 'react-icons/fa';
import { carsWithStatus } from '../../data/carsWithStatus';

interface Car {
  id: number;
  name: string;
  type: string;
  price: string;
  period: string;
  mainImage: string;
  images: string[];
  specifications: {
    transmisi: string;
    bahanBakar: string;
    pintu: string;
    airConditioner: string;
    seats: string;
    konsumsBBM: string;
  };
  features: {
    primary: string[];
    secondary: string[];
  };
  description: string;
  status: 'available' | 'rented' | 'maintenance';
}

const CarsManagement = () => {
  const [cars, setCars] = useState<Car[]>(carsWithStatus);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'rented' | 'maintenance'>('all');
  const [showModal, setShowModal] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  // Filter cars based on search and status
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || car.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <FaCheckCircle className="text-green-500" />;
      case 'rented':
        return <FaClock className="text-orange-500" />;
      case 'maintenance':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaCar className="text-gray-500" />;
    }
  };

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

  const handleStatusChange = (carId: number, newStatus: 'available' | 'rented' | 'maintenance') => {
    setCars(cars.map(car => 
      car.id === carId ? { ...car, status: newStatus } : car
    ));
  };

  const handleEdit = (car: Car) => {
    setEditingCar(car);
    setShowModal(true);
  };

  const handleDelete = (carId: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus mobil ini?')) {
      setCars(cars.filter(car => car.id !== carId));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Kelola Mobil</h1>
            <p className="text-gray-600">Atur stok dan status mobil Anda</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FaPlus />
            Tambah Mobil
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari mobil..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Semua Status</option>
              <option value="available">Tersedia</option>
              <option value="rented">Sedang Disewa</option>
              <option value="maintenance">Maintenance</option>
            </select>

            {/* Stats */}
            <div className="flex items-center justify-center text-sm text-gray-600">
              Total: {filteredCars.length} mobil
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              {/* Car Image */}
              <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src={car.mainImage}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                {/* Status Overlay */}
                {car.status !== 'available' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-lg font-bold">{getStatusText(car.status)}</div>
                    </div>
                  </div>
                )}
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(car.status)}`}>
                    {getStatusIcon(car.status)}
                    <span className="ml-1">{getStatusText(car.status)}</span>
                  </span>
                </div>
              </div>

              {/* Car Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">{car.price}</p>
                    <p className="text-xs text-gray-500">{car.period}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
                  <div>Transmisi: {car.specifications.transmisi}</div>
                  <div>Bahan Bakar: {car.specifications.bahanBakar}</div>
                  <div>Seats: {car.specifications.seats}</div>
                  <div>AC: {car.specifications.airConditioner}</div>
                </div>

                {/* Status Change */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Ubah Status:
                  </label>
                  <select
                    value={car.status}
                    onChange={(e) => handleStatusChange(car.id, e.target.value as any)}
                    className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="available">Tersedia</option>
                    <option value="rented">Sedang Disewa</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(car)}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                  >
                    <FaEdit />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)}
                    className="flex-1 bg-red-600 text-white py-2 px-3 rounded text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-1"
                  >
                    <FaTrash />
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <FaCar className="mx-auto text-gray-400 text-4xl mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada mobil ditemukan</h3>
            <p className="text-gray-600">Coba ubah filter atau tambah mobil baru</p>
          </div>
        )}
      </div>

      {/* Modal for Add/Edit Car */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingCar ? 'Edit Mobil' : 'Tambah Mobil Baru'}
            </h2>
            
            {/* Form content would go here */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Mobil
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Contoh: Toyota Avanza"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipe
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>MPV</option>
                    <option>Minivan</option>
                    <option>Hatchback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Harga per Hari
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Rp 350.000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Foto
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Batal
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                {editingCar ? 'Update' : 'Simpan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default CarsManagement; 