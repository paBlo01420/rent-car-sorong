'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
  availability: boolean;
  description: string;
}

// Komponen Form Mobil (dipisah)
function CarForm({ open, onClose, onSubmit, initialData }: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Car>, editId?: number | null) => void;
  initialData?: Partial<Car>;
}) {
  const [form, setForm] = useState<Partial<Car>>(initialData || {
    name: '',
    type: '',
    price: '',
    period: 'per day',
    mainImage: '',
    description: '',
    specifications: {
      transmisi: '',
      bahanBakar: '',
      pintu: '',
      airConditioner: '',
      seats: '',
      konsumsBBM: '',
    },
    features: {
      primary: [],
      secondary: [],
    },
    images: [],
    availability: true,
  });

  useEffect(() => {
    setForm(initialData || {
      name: '',
      type: '',
      price: '',
      period: 'per day',
      mainImage: '',
      description: '',
      specifications: {
        transmisi: '',
        bahanBakar: '',
        pintu: '',
        airConditioner: '',
        seats: '',
        konsumsBBM: '',
      },
      features: {
        primary: [],
        secondary: [],
      },
      images: [],
      availability: true,
    });
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('specifications.')) {
      const key = name.split('.')[1];
      setForm(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [key]: value,
        },
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl relative overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-red-500 transition">&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-blue-800">{initialData ? 'Edit Mobil' : 'Tambah Mobil'}</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit(form, initialData && (initialData as any).id ? (initialData as any).id : null);
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Mobil" className="p-3 border rounded-lg focus:outline-blue-400" required />
            <input name="type" value={form.type} onChange={handleChange} placeholder="Tipe" className="p-3 border rounded-lg focus:outline-blue-400" required />
            <input name="price" value={form.price} onChange={handleChange} placeholder="Harga" className="p-3 border rounded-lg focus:outline-blue-400" required />
            <input name="period" value={form.period} onChange={handleChange} placeholder="Periode" className="p-3 border rounded-lg focus:outline-blue-400" />
            <input name="mainImage" value={form.mainImage} onChange={handleChange} placeholder="URL Gambar Utama" className="p-3 border rounded-lg focus:outline-blue-400" />
          </div>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi" className="w-full p-3 border rounded-lg focus:outline-blue-400" />
          <textarea name="images" value={form.images?.join('\n')} onChange={(e) => setForm((prev) => ({ ...prev, images: e.target.value.split('\n').filter(Boolean) }))} placeholder="Gambar Tambahan (1 per baris)" className="w-full p-3 border rounded-lg focus:outline-blue-400" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <input name="specifications.transmisi" value={form.specifications?.transmisi} onChange={handleChange} placeholder="Transmisi" className="p-3 border rounded-lg focus:outline-blue-400" />
            <input name="specifications.bahanBakar" value={form.specifications?.bahanBakar} onChange={handleChange} placeholder="Bahan Bakar" className="p-3 border rounded-lg focus:outline-blue-400" />
            <input name="specifications.pintu" value={form.specifications?.pintu} onChange={handleChange} placeholder="Jumlah Pintu" className="p-3 border rounded-lg focus:outline-blue-400" />
            <input name="specifications.seats" value={form.specifications?.seats} onChange={handleChange} placeholder="Jumlah Kursi" className="p-3 border rounded-lg focus:outline-blue-400" />
            <input name="specifications.konsumsBBM" value={form.specifications?.konsumsBBM} onChange={handleChange} placeholder="Konsumsi BBM" className="p-3 border rounded-lg focus:outline-blue-400" />
            <input name="specifications.airConditioner" value={form.specifications?.airConditioner} onChange={handleChange} placeholder="AC (Yes/No)" className="p-3 border rounded-lg focus:outline-blue-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea name="features.primary" value={form.features?.primary.join('\n')} onChange={(e) => setForm((prev) => ({ ...prev, features: { ...prev.features, primary: e.target.value.split('\n').filter(Boolean) } }))} placeholder="Fitur Utama (1 per baris)" className="w-full p-3 border rounded-lg focus:outline-blue-400" />
            <textarea name="features.secondary" value={form.features?.secondary.join('\n')} onChange={(e) => setForm((prev) => ({ ...prev, features: { ...prev.features, secondary: e.target.value.split('\n').filter(Boolean) } }))} placeholder="Fitur Tambahan (1 per baris)" className="w-full p-3 border rounded-lg focus:outline-blue-400" />
          </div>
          <label className="flex items-center gap-2 mt-2">
            <input type="checkbox" checked={form.availability} onChange={(e) => setForm((prev) => ({ ...prev, availability: e.target.checked }))} />
            <span>Tersedia</span>
          </label>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">{initialData ? 'Update' : 'Tambah'} Mobil</button>
            <button type="button" onClick={onClose} className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition">Batal</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

export default function Admin() {
  const [cars, setCars] = useState<Car[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formInitial, setFormInitial] = useState<Partial<Car> | undefined>(undefined);
  const [editId, setEditId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isLoggedIn) router.replace('/login');
  }, [mounted, router]);

  useEffect(() => {
    if (!mounted) return;
    fetchCars();
  }, [mounted]);

  const fetchCars = async () => {
    const res = await axios.get('/api/cars');
    setCars(res.data);
  };

  const handleAdd = () => {
    setFormInitial(undefined);
    setShowForm(true);
    setEditId(null);
  };

  const handleEdit = (car: Car) => {
    setEditId(car.id);
    setFormInitial(car);
    setShowForm(true);
  };

  const handleFormSubmit = async (data: Partial<Car>, editId?: number | null) => {
    if (editId) {
      await axios.put(`/api/cars/${editId}`, data);
    } else {
      await axios.post('/api/cars', data);
    }
    setShowForm(false);
    setEditId(null);
    fetchCars();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/cars/${id}`);
    fetchCars();
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    router.replace('/login');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex text-gray-800">
      <aside className="w-64 bg-blue-900 text-white flex flex-col justify-between py-8 px-6 shadow-lg">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-wide mb-2">Admin Panel</h2>
            <p className="text-blue-200 text-sm">Rental Mobil Sorong</p>
          </div>
        </div>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition">Logout</button>
      </aside>

      <main className="flex-1 p-4 md:p-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900">Kelola Data Mobil</h1>

          <div className="flex justify-end mb-4">
            <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition">
              Tambah Mobil
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4 text-blue-800">Daftar Mobil</h2>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">Tipe</th>
                    <th className="p-3 text-left">Harga</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car) => (
                    <tr key={car.id} className="border-b hover:bg-blue-50">
                      <td className="p-3 font-semibold">{car.name}</td>
                      <td className="p-3">{car.type}</td>
                      <td className="p-3">{car.price}</td>
                      <td className="p-3 space-x-2">
                        <button onClick={() => handleEdit(car)} className="text-blue-600 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(car.id)} className="text-red-600 hover:underline">Hapus</button>
                      </td>
                    </tr>
                  ))}
                  {cars.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center text-gray-400 py-6">Belum ada data mobil.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <CarForm
          open={showForm}
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
          initialData={formInitial}
        />
      </main>
    </div>
  );
}
