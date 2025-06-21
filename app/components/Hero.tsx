'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  const handleRegister = () => {
    console.log('Register clicked');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleAppleLogin = () => {
    console.log('Login with Apple');
  };

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
                <div className="grid grid-cols-2 gap-12 items-center min-h-[500px]">
                  {/* Left Content */}
                  <div className="text-white space-y-6">
                    <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
                      Nikmati mudahnya
                      <br />
                      sewa kendaraan
                    </h1>
                    <p className="text-lg xl:text-xl text-white/90 max-w-lg leading-relaxed">
                      Dapatkan pengalaman sewa kendaraan yang aman, 
                      menentramkan ketenangan transparan Anda. Dan 
                      rasakan pilihan untuk investasi terbaik
                    </p>
                    <a
                      href="/vehicles"
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Lihat Semua
                    </a>
                  </div>

                  {/* Login Form - Desktop */}
                  <div className="flex justify-end">
                    <div className="bg-white rounded-2xl p-6 xl:p-8 w-full max-w-sm shadow-2xl">
                      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Login
                      </h2>

                      <form onSubmit={handleLogin} className="space-y-4">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm"
                          required
                        />

                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm"
                          required
                        />

                        <button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
                        >
                          Login
                        </button>
                      </form>

                      <button
                        onClick={handleRegister}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mt-3 transition-colors duration-200 text-sm"
                      >
                        Register
                      </button>

                      {/* Social Login */}
                      <div className="flex justify-center gap-3 mt-6">
                        <button
                          onClick={handleGoogleLogin}
                          className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition flex-1 justify-center"
                        >
                          <FcGoogle className="w-4 h-4" />
                          <span className="text-xs font-medium text-gray-700">Google</span>
                        </button>

                        <button
                          onClick={handleAppleLogin}
                          className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg hover:bg-gray-900 transition flex-1 justify-center"
                        >
                          <FaApple className="w-4 h-4 text-white" />
                          <span className="text-xs font-medium text-white">Apple</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="px-6 py-12">
                <div className="flex flex-col space-y-8">
                  {/* Content */}
                  <div className="text-white text-center space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                      Nikmati mudahnya
                      <br />
                      sewa kendaraan
                    </h1>
                    <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
                      Dapatkan pengalaman sewa kendaraan yang aman, 
                      menentramkan ketenangan transparan Anda. Dan 
                      rasakan pilihan untuk investasi terbaik
                    </p>
                  </div>

                  {/* Login Form - Tablet */}
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
                      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
                        Login
                      </h2>

                      <form onSubmit={handleLogin} className="space-y-4">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          required
                        />

                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          required
                        />

                        <button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                        >
                          Login
                        </button>
                      </form>

                      <button
                        onClick={handleRegister}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mt-3 transition-colors duration-200"
                      >
                        Register
                      </button>

                      {/* Social Login */}
                      <div className="flex justify-center gap-4 mt-6">
                        <button
                          onClick={handleGoogleLogin}
                          className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                          <FcGoogle className="w-5 h-5" />
                          <span className="text-sm font-medium text-gray-700">Google</span>
                        </button>

                        <button
                          onClick={handleAppleLogin}
                          className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                        >
                          <FaApple className="w-5 h-5 text-white" />
                          <span className="text-sm font-medium text-white">Apple</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="text-center">
                    <a
                      href="/vehicles"
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Lihat Semua
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden">
              <div className="px-4 py-8">
                <div className="flex flex-col space-y-6">
                  {/* Content */}
                  <div className="text-white text-center space-y-4">
                    <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                      Nikmati mudahnya
                      <br />
                      sewa kendaraan
                    </h1>
                    <p className="text-sm sm:text-base text-white/90 px-2">
                      Dapatkan pengalaman sewa kendaraan yang aman, 
                      menentramkan ketenangan transparan Anda. Dan 
                      rasakan pilihan untuk investasi terbaik
                    </p>
                  </div>

                  {/* Login Form - Mobile */}
                  <div className="mx-auto w-full max-w-sm">
                    <div className="bg-white rounded-2xl p-6 shadow-2xl">
                      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
                        Login
                      </h2>

                      <form onSubmit={handleLogin} className="space-y-4">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          required
                        />

                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          required
                        />

                        <button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                        >
                          Login
                        </button>
                      </form>

                      <button
                        onClick={handleRegister}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mt-3 transition-colors duration-200"
                      >
                        Register
                      </button>

                      {/* Social Login - Mobile Stack */}
                      <div className="space-y-3 mt-6">
                        <button
                          onClick={handleGoogleLogin}
                          className="w-full flex items-center justify-center gap-2 bg-white border px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                          <FcGoogle className="w-5 h-5" />
                          <span className="text-sm font-medium text-gray-700">Login with Google</span>
                        </button>

                        <button
                          onClick={handleAppleLogin}
                          className="w-full flex items-center justify-center gap-2 bg-black px-4 py-3 rounded-lg hover:bg-gray-900 transition"
                        >
                          <FaApple className="w-5 h-5 text-white" />
                          <span className="text-sm font-medium text-white">Login with Apple</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="text-center pt-2">
                    <a
                      href="/vehicles"
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Lihat Semua
                    </a>
                  </div>
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