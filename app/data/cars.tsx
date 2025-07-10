// data/cars.ts

export const cars = [
  {
    id: 1,
    name: "Avanza",
    type: "Minivan",
    price: "Rp.350.000",
    period: "per day",
    mainImage: "/images/car-list/avanza-gray.png",
    images: [
      "/images/car-list/avanza-gray.png",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Gasoline",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "13 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Cruise Control"],
      secondary: ["Air Bags", "Air Conditioner"]
    },
    description: "Toyota Avanza adalah kendaraan keluarga yang sempurna dengan kapasitas 7 penumpang. Dilengkapi dengan fitur keselamatan terdepan dan kenyamanan berkendara yang optimal untuk perjalanan jauh maupun dalam kota."
  },
  {
    id: 2,
    name: "Vios",
    type: "Sedan",
    price: "Rp.400.000",
    period: "per day",
    mainImage: "/images/car-list/vios-silver.png",
    images: [
      "/images/car-list/vios-silver.png",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Gasoline",
      pintu: "4",
      airConditioner: "Yes",
      seats: "5",
      konsumsBBM: "15 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Cruise Control"],
      secondary: ["Air Bags", "Air Conditioner"]
    },
    description: "Toyota Vios menawarkan kenyamanan berkendara dengan desain sedan yang elegan. Cocok untuk perjalanan bisnis maupun keluarga dengan efisiensi bahan bakar yang baik."
  },
  {
    id: 3,
    name: "Civic",
    type: "Sedan",
    price: "Rp.550.000",
    period: "per day",
    mainImage: "/images/car-list/civic-white.png",
    images: [
      "/images/car-list/civic-white.png",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Gasoline",
      pintu: "4",
      airConditioner: "Yes",
      seats: "5",
      konsumsBBM: "14 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Cruise Control"],
      secondary: ["Air Bags", "Air Conditioner"]
    },
    description: "Honda Civic menghadirkan performa dan gaya yang memukau. Dengan teknologi terdepan dan desain sporty, cocok untuk Anda yang menginginkan pengalaman berkendara yang dinamis."
  },
  {
    id: 4,
    name: "Innova",
    type: "MPV",
    price: "Rp.600.000",
    period: "per day",
    mainImage: "/images/car-list/innova-white.jpeg",
    images: [
      "/images/car-list/innova-white.jpeg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Diesel",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "12 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Cruise Control"],
      secondary: ["Air Bags", "Air Conditioner"]
    },
    description: "Toyota Innova cocok untuk perjalanan keluarga besar dengan kabin luas dan kenyamanan maksimal."
  },
  {
    id: 5,
    name: "Fortuner",
    type: "SUV",
    price: "Rp.900.000",
    period: "per day",
    mainImage: "/images/car-list/fortuner-white.jpg",
    images: [
      "/images/car-list/fortuner-white.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Diesel",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "10 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Cruise Control"],
      secondary: ["Air Bags", "Air Conditioner"]
    },
    description: "Toyota Fortuner menawarkan performa tangguh dan tampilan gagah untuk segala medan."
  },
  {
    id: 6,
    name: "Brio",
    type: "Hatchback",
    price: "Rp.250.000",
    period: "per day",
    mainImage: "/images/car-list/brio-white.jpg",
    images: [
      "/images/car-list/brio-white.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Manual",
      bahanBakar: "Gasoline",
      pintu: "5",
      airConditioner: "Yes",
      seats: "5",
      konsumsBBM: "17 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags"],
      secondary: ["Air Conditioner"]
    },
    description: "Honda Brio, city car irit dan lincah, cocok untuk kebutuhan harian di kota."
  },
  {
    id: 7,
    name: "Hiace",
    type: "Minibus",
    price: "Rp.1.200.000",
    period: "per day",
    mainImage: "/images/car-list/hiace-white.jpg",
    images: [
      "/images/car-list/hiace-white.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      pintu: "4",
      airConditioner: "Yes",
      seats: "15",
      konsumsBBM: "8 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Conditioner"],
      secondary: ["Air Bags"]
    },
    description: "Toyota Hiace, pilihan tepat untuk rombongan besar, perjalanan wisata atau antar jemput."
  },
  {
    id: 8,
    name: "Pajero Sport",
    type: "SUV",
    price: "Rp.900.000",
    period: "per day",
    mainImage: "/images/car-list/pajero-black.jpg",
    images: [
      "/images/car-list/pajero-black.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Diesel",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "11 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Hill Start Assist"],
      secondary: ["Air Conditioner", "Rear Camera"]
    },
    description: "Mitsubishi Pajero Sport, SUV tangguh untuk segala medan dan perjalanan jauh."
  },
  {
    id: 9,
    name: "Pajero Gray",
    type: "SUV",
    price: "Rp.900.000",
    period: "per day",
    mainImage: "/images/car-list/pajero-gray.jpg",
    images: [
      "/images/car-list/pajero-gray.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Diesel",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "11 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Hill Start Assist"],
      secondary: ["Air Conditioner", "Rear Camera"]
    },
    description: "Mitsubishi Pajero Sport Gray, SUV tangguh untuk segala medan dan perjalanan jauh."
  },
  {
    id: 10,
    name: "Camry",
    type: "Sedan",
    price: "Rp.800.000",
    period: "per day",
    mainImage: "/images/car-list/camey-gray.jpg",
    images: [
      "/images/car-list/camey-gray.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Gasoline",
      pintu: "4",
      airConditioner: "Yes",
      seats: "5",
      konsumsBBM: "13 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Cruise Control"],
      secondary: ["Air Conditioner", "Rear Camera"]
    },
    description: "Toyota Camry, sedan premium untuk kenyamanan dan prestise."
  },
  {
    id: 11,
    name: "Hilux",
    type: "Pickup",
    price: "Rp.650.000",
    period: "per day",
    mainImage: "/images/car-list/hilux-gray.jpg",
    images: [
      "/images/car-list/hilux-gray.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      pintu: "4",
      airConditioner: "Yes",
      seats: "5",
      konsumsBBM: "12 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags"],
      secondary: ["Air Conditioner"]
    },
    description: "Toyota Hilux, pickup tangguh untuk kebutuhan niaga dan petualangan."
  },
  {
    id: 12,
    name: "Alphard",
    type: "Luxury MPV",
    price: "Rp.2.500.000",
    period: "per day",
    mainImage: "/images/car-list/alprad-cream.jpg",
    images: [
      "/images/car-list/alprad-cream.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Gasoline",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "10 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags", "Sunroof", "Cruise Control"],
      secondary: ["Air Conditioner", "Rear Camera", "Premium Audio"]
    },
    description: "Toyota Alphard, MPV mewah untuk kenyamanan dan kemewahan perjalanan keluarga atau bisnis."
  },
  {
    id: 13,
    name: "Ertiga",
    type: "MPV",
    price: "Rp.320.000",
    period: "per day",
    mainImage: "/images/car-list/ertiga-white.jpg",
    images: [
      "/images/car-list/ertiga-white.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Manual",
      bahanBakar: "Gasoline",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "16 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags"],
      secondary: ["Air Conditioner"]
    },
    description: "Suzuki Ertiga, MPV ekonomis dan nyaman untuk keluarga."
  },
  {
    id: 14,
    name: "Jazz",
    type: "Hatchback",
    price: "Rp.300.000",
    period: "per day",
    mainImage: "/images/car-list/jazz-red.jpg",
    images: [
      "/images/car-list/jazz-red.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Gasoline",
      pintu: "5",
      airConditioner: "Yes",
      seats: "5",
      konsumsBBM: "17 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags"],
      secondary: ["Air Conditioner"]
    },
    description: "Honda Jazz, hatchback stylish dan irit untuk anak muda."
  },
  {
    id: 15,
    name: "Rush",
    type: "SUV",
    price: "Rp.400.000",
    period: "per day",
    mainImage: "/images/car-list/rush-white.jpg",
    images: [
      "/images/car-list/rush-white.jpg",
      "/images/detail-car/detail-dashboard.png",
      "/images/detail-car/detail-kursi.png",
      "/images/detail-car/detail-setir.png"
    ],
    specifications: {
      transmisi: "Matic",
      bahanBakar: "Gasoline",
      pintu: "5",
      airConditioner: "Yes",
      seats: "7",
      konsumsBBM: "14 Km/Liter"
    },
    features: {
      primary: ["ABS", "Air Bags"],
      secondary: ["Air Conditioner"]
    },
    description: "Toyota Rush, SUV kompak untuk keluarga aktif dan petualangan."
  }
];
