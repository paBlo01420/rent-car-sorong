'use client';

import React from 'react';
import AdminLayout from './layout';
import { 
  FaCar, 
  FaUsers, 
  FaMoneyBillWave, 
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock
} from 'react-icons/fa';

const AdminDashboard = () => {
  // Mock data - nanti bisa diambil dari API/database
  const stats = [
    {
      title: 'Total Mobil',
      value: '15',
      change: '+2',
      icon: <FaCar className="text-blue-500" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Mobil Tersedia',
      value: '12',
      change: '+1',
      icon: <FaCheckCircle className="text-green-500" />,
      color: 'bg-green-50'
    },
    {
      title: 'Sedang Disewa',
      value: '3',
      change: '+1',
      icon: <FaClock className="text-orange-500" />,
      color: 'bg-orange-50'
    },
    {
      title: 'Pendapatan Bulan Ini',
      value: 'Rp 15.000.000',
      change: '+12%',
      icon: <FaMoneyBillWave className="text-green-500" />,
      color: 'bg-green-50'
    }
  ];

  const recentRentals = [
    {
      id: 1,
      carName: 'Toyota Avanza',
      customer: 'John Doe',
      startDate: '2024-01-15',
      endDate: '2024-01-17',
      status: 'active',
      amount: 'Rp 1.050.000'
    },
    {
      id: 2,
      carName: 'Honda Civic',
      customer: 'Jane Smith',
      startDate: '2024-01-14',
      endDate: '2024-01-16',
      status: 'completed',
      amount: 'Rp 1.650.000'
    },
    {
      id: 3,
      carName: 'Toyota Fortuner',
      customer: 'Mike Johnson',
      startDate: '2024-01-13',
      endDate: '2024-01-15',
      status: 'completed',
      amount: 'Rp 2.700.000'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Overview bisnis rental mobil Anda</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-lg p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="text-3xl">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  {stat.change}
                </span>
                <span className="text-sm text-gray-600 ml-1">dari bulan lalu</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Rentals */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Rental Terbaru</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mobil
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pelanggan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Periode
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentRentals.map((rental) => (
                  <tr key={rental.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{rental.carName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{rental.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {rental.startDate} - {rental.endDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        rental.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {rental.status === 'active' ? 'Aktif' : 'Selesai'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rental.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Tambah Mobil Baru
              </button>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Lihat Laporan
              </button>
              <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                Kelola Stok
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Mobil</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tersedia</span>
                <span className="text-sm font-semibold text-green-600">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Sedang Disewa</span>
                <span className="text-sm font-semibold text-orange-600">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Maintenance</span>
                <span className="text-sm font-semibold text-red-600">0</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifikasi</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <div className="font-medium text-gray-900">Mobil Akan Kembali</div>
                <div className="text-xs text-gray-500">Toyota Avanza - 2 jam lagi</div>
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-medium text-gray-900">Maintenance Due</div>
                <div className="text-xs text-gray-500">Honda Civic - 3 hari lagi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard; 