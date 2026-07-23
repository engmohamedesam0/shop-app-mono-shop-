export const categories = ['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty'];
export const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'Dyson', 'Bose', 'LG', 'Maybelline', 'Under Armour'];

export const products = [
  {
    id: 'p1',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling with two processors and eight microphones. Magnificent sound, engineered to perfection with the new Integrated Processor V1.',
    price: 398.00,
    originalPrice: 449.00,
    discount: 11,
    rating: 4.8,
    reviews: 1245,
    category: 'Electronics',
    brand: 'Sony',
    inStock: true,
    stockCount: 45,
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-10-01',
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Color', options: ['Black', 'Silver', 'Midnight Blue'] }
    ],
    specifications: {
      'Weight': '250g',
      'Battery Life': 'Up to 30 hours',
      'Connectivity': 'Bluetooth 5.2'
    }
  },
  {
    id: 'p2',
    name: 'Apple Watch Series 9',
    description: 'The most powerful chip in Apple Watch ever. A magical new way to use your Apple Watch without touching the screen. A display that’s twice as bright.',
    price: 399.00,
    originalPrice: 399.00,
    discount: 0,
    rating: 4.9,
    reviews: 3821,
    category: 'Electronics',
    brand: 'Apple',
    inStock: true,
    stockCount: 120,
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-09-15',
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['41mm', '45mm'] },
      { name: 'Color', options: ['Midnight', 'Starlight', 'Silver', 'Pink', 'Red'] }
    ],
    specifications: {
      'Display': 'Always-On Retina display',
      'Water Resistance': '50 meters'
    }
  },
  {
    id: 'p3',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Galaxy AI is here. The ultimate smartphone experience with a built-in S Pen, 200MP camera, and titanium frame.',
    price: 1199.99,
    originalPrice: 1299.99,
    discount: 8,
    rating: 4.7,
    reviews: 2100,
    category: 'Electronics',
    brand: 'Samsung',
    inStock: true,
    stockCount: 60,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: true,
    dateAdded: '2024-01-20',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Color', options: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'] }
    ],
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '200MP + 50MP + 12MP + 10MP'
    }
  },
  {
    id: 'p4',
    name: 'LG OLED C3 65" TV',
    description: 'Experience perfect blacks and stunning colors with self-lit OLED pixels. AI-powered 4K processor for optimal picture and sound.',
    price: 1496.00,
    originalPrice: 1799.00,
    discount: 17,
    rating: 4.9,
    reviews: 890,
    category: 'Electronics',
    brand: 'LG',
    inStock: true,
    stockCount: 20,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-06-10',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4d92a0101d7?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['55"', '65"', '77"'] }
    ],
    specifications: {
      'Resolution': '4K Ultra HD',
      'Refresh Rate': '120Hz',
      'Smart TV': 'webOS 23'
    }
  },
  {
    id: 'p5',
    name: 'Bose QuietComfort Ultra Earbuds',
    description: 'World-class noise cancellation meets immersive Audio. Experience music like never before with these premium earbuds.',
    price: 299.00,
    originalPrice: 299.00,
    discount: 0,
    rating: 4.6,
    reviews: 1560,
    category: 'Electronics',
    brand: 'Bose',
    inStock: true,
    stockCount: 80,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-11-05',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Color', options: ['Black', 'White', 'Blue'] }
    ],
    specifications: {
      'Battery Life': 'Up to 6 hours',
      'Noise Cancellation': 'Active',
      'Water Resistance': 'IPX4'
    }
  },
  {
    id: 'p6',
    name: 'Sony PlayStation 5',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, and a new generation of incredible PlayStation games.',
    price: 499.99,
    originalPrice: 499.99,
    discount: 0,
    rating: 4.8,
    reviews: 5400,
    category: 'Electronics',
    brand: 'Sony',
    inStock: false,
    stockCount: 0,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2022-11-18',
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Edition', options: ['Standard', 'Digital'] }
    ],
    specifications: {
      'Storage': '825GB SSD',
      'Resolution': 'Up to 4K 120fps',
      'CPU': 'AMD Ryzen Zen 2'
    }
  },
  {
    id: 'p7',
    name: 'Nike Air Max 270',
    description: 'Nike\'s first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons.',
    price: 160.00,
    originalPrice: 160.00,
    discount: 0,
    rating: 4.5,
    reviews: 890,
    category: 'Fashion',
    brand: 'Nike',
    inStock: true,
    stockCount: 15,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    dateAdded: '2023-01-20',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['7', '8', '9', '10', '11', '12'] },
      { name: 'Color', options: ['Black/White', 'Triple Black', 'White/Black'] }
    ]
  },
  {
    id: 'p8',
    name: 'Adidas Ultraboost Light',
    description: 'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever.',
    price: 190.00,
    originalPrice: 200.00,
    discount: 5,
    rating: 4.6,
    reviews: 654,
    category: 'Fashion',
    brand: 'Adidas',
    inStock: true,
    stockCount: 8,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-08-10',
    images: [
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['8', '9', '10', '11'] }
    ]
  },
  {
    id: 'p9',
    name: 'Levi\'s 501 Original Jeans',
    description: 'The original blue jean since 1873. A straight leg classic with a signature button fly and timeless styling.',
    price: 89.50,
    originalPrice: 118.00,
    discount: 24,
    rating: 4.4,
    reviews: 3200,
    category: 'Fashion',
    brand: 'Levi\'s',
    inStock: true,
    stockCount: 200,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-03-15',
    images: [
      'https://images.unsplash.com/photo-1542272617-08f08625854e?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['28', '30', '32', '34', '36'] },
      { name: 'Wash', options: ['Classic', 'Light', 'Dark'] }
    ],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Straight Leg',
      'Rise': 'Mid Rise'
    }
  },
  {
    id: 'p10',
    name: 'Zara Oversized Blazer',
    description: 'Elevate your office look with this tailored oversized blazer. Features a double-breasted design with gold-tone buttons.',
    price: 129.00,
    originalPrice: 129.00,
    discount: 0,
    rating: 4.2,
    reviews: 180,
    category: 'Fashion',
    brand: 'Zara',
    inStock: true,
    stockCount: 45,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2024-02-01',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['S', 'M', 'L', 'XL'] },
      { name: 'Color', options: ['Black', 'Beige', 'Navy'] }
    ]
  },
  {
    id: 'p11',
    name: 'H&M Cotton Hoodie',
    description: 'Soft, comfortable cotton hoodie perfect for casual wear. Features a kangaroo pocket and adjustable drawstring hood.',
    price: 49.99,
    originalPrice: 49.99,
    discount: 0,
    rating: 4.0,
    reviews: 560,
    category: 'Fashion',
    brand: 'H&M',
    inStock: true,
    stockCount: 150,
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-09-01',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['S', 'M', 'L', 'XL', 'XXL'] },
      { name: 'Color', options: ['Gray', 'Black', 'White', 'Navy'] }
    ]
  },
  {
    id: 'p12',
    name: 'Dyson V15 Detect Absolute',
    description: 'Dyson\'s most powerful, intelligent cordless vacuum. Reveals invisible dust. Counts and measures the size of dust particles.',
    price: 749.99,
    originalPrice: 799.99,
    discount: 6,
    rating: 4.7,
    reviews: 432,
    category: 'Home',
    brand: 'Dyson',
    inStock: true,
    stockCount: 12,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2022-11-05',
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [],
    specifications: {
      'Suction': '230 AW',
      'Battery': 'Up to 60 minutes',
      'Weight': '3.1 kg'
    }
  },
  {
    id: 'p13',
    name: 'Instant Pot Duo Plus 9-in-1',
    description: 'The #1 selling multi-cooker. Pressure cook, slow cook, sauté, steam, and more. Perfect for busy families.',
    price: 89.95,
    originalPrice: 119.95,
    discount: 25,
    rating: 4.8,
    reviews: 8900,
    category: 'Home',
    brand: 'Instant Pot',
    inStock: true,
    stockCount: 300,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-04-20',
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['6 Quart', '8 Quart'] }
    ],
    specifications: {
      'Capacity': '6 Quarts',
      'Programs': '9 Smart Programs',
      'Material': 'Stainless Steel'
    }
  },
  {
    id: 'p14',
    name: 'Le Creuset Dutch Oven',
    description: 'The iconic round Dutch oven is a timeless classic. Enameled cast iron for exceptional heat retention and even cooking.',
    price: 379.99,
    originalPrice: 379.99,
    discount: 0,
    rating: 4.9,
    reviews: 1200,
    category: 'Home',
    brand: 'Le Creuset',
    inStock: true,
    stockCount: 25,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-05-15',
    images: [
      'https://images.unsplash.com/photo-1578918874550-e13b8c7c60a4?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['3.5 Qt', '5.5 Qt', '7.25 Qt'] },
      { name: 'Color', options: ['Cherry', 'Navy', 'White', 'Orange'] }
    ],
    specifications: {
      'Material': 'Enameled Cast Iron',
      'Heat Retention': 'Exceptional',
      'Oven Safe': 'Up to 500°F'
    }
  },
  {
    id: 'p15',
    name: 'Philips Hue Smart Bulb Starter Kit',
    description: 'Transform your home with smart lighting. Control up to 16 million colors via app or voice with Alexa or Google Home.',
    price: 129.99,
    originalPrice: 149.99,
    discount: 13,
    rating: 4.6,
    reviews: 3400,
    category: 'Home',
    brand: 'Philips',
    inStock: true,
    stockCount: 90,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-12-01',
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df29e?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Kit Size', options: ['3 Bulbs', '4 Bulbs', ' Starter Kit'] }
    ],
    specifications: {
      'Connectivity': 'Bluetooth & Zigbee',
      'Lumens': '800 lumens',
      'Lifespan': '25,000 hours'
    }
  },
  {
    id: 'p16',
    name: 'IKEA KALLAX Shelf Unit',
    description: 'A versatile shelving unit that works in any room. Perfect for displaying books, decor, and storage boxes.',
    price: 69.99,
    originalPrice: 69.99,
    discount: 0,
    rating: 4.3,
    reviews: 2100,
    category: 'Home',
    brand: 'IKEA',
    inStock: true,
    stockCount: 150,
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-02-10',
    images: [
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['2x2', '2x4', '4x4'] },
      { name: 'Color', options: ['White', 'Black', 'Oak Effect'] }
    ],
    specifications: {
      'Material': 'Particleboard',
      'Weight Capacity': '13 kg per shelf',
      'Assembly': 'Required'
    }
  },
  {
    id: 'p17',
    name: 'Nike Air Force 1 \'07',
    description: 'The classic basketball shoe that redefined the game. Now a streetwear staple with crisp leather and iconic style.',
    price: 110.00,
    originalPrice: 110.00,
    discount: 0,
    rating: 4.7,
    reviews: 4500,
    category: 'Sports',
    brand: 'Nike',
    inStock: true,
    stockCount: 200,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-07-01',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['7', '8', '9', '10', '11', '12', '13'] },
      { name: 'Color', options: ['White/White', 'Triple Black', 'White/Black'] }
    ]
  },
  {
    id: 'p18',
    name: 'Under Armour HOVR Phantom 3',
    description: 'Our most responsive running shoe with UA HOVR cushioning. Zero gravity feel with a lightweight, breathable upper.',
    price: 160.00,
    originalPrice: 180.00,
    discount: 11,
    rating: 4.5,
    reviews: 980,
    category: 'Sports',
    brand: 'Under Armour',
    inStock: true,
    stockCount: 60,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2024-01-15',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['8', '9', '10', '11', '12'] },
      { name: 'Width', options: ['Regular', 'Wide'] }
    ]
  },
  {
    id: 'p19',
    name: 'Manduka PRO Yoga Mat',
    description: 'The ultimate yoga mat with superior cushioning and support. 6mm thick, eco-friendly, and designed for lifetime use.',
    price: 120.00,
    originalPrice: 120.00,
    discount: 0,
    rating: 4.8,
    reviews: 670,
    category: 'Sports',
    brand: 'Manduka',
    inStock: true,
    stockCount: 40,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    dateAdded: '2023-03-20',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Color', options: ['Black', 'Purple', 'Blue', 'Green'] }
    ],
    specifications: {
      'Thickness': '6mm',
      'Material': 'Eco-friendly PVC',
      'Dimensions': '71" x 26"'
    }
  },
  {
    id: 'p20',
    name: 'Hydro Flask 32oz Wide Mouth',
    description: 'Keep your water ice-cold for 24 hours or piping hot for 12. Made with stainless steel and TempShield insulation.',
    price: 44.95,
    originalPrice: 44.95,
    discount: 0,
    rating: 4.7,
    reviews: 2300,
    category: 'Sports',
    brand: 'Hydro Flask',
    inStock: true,
    stockCount: 180,
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-08-05',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['21oz', '32oz', '40oz'] },
      { name: 'Color', options: ['White', 'Black', 'Pacific Blue', 'Lemon'] }
    ],
    specifications: {
      'Capacity': '32 fl oz',
      'Insulation': 'TempShield',
      'Material': '18/8 Stainless Steel'
    }
  },
  {
    id: 'p21',
    name: 'Wilson NBA Official Basketball',
    description: 'The official game ball of the NBA. Premium leather construction with exceptional grip and feel for serious players.',
    price: 169.99,
    originalPrice: 169.99,
    discount: 0,
    rating: 4.6,
    reviews: 890,
    category: 'Sports',
    brand: 'Wilson',
    inStock: true,
    stockCount: 30,
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: true,
    dateAdded: '2023-10-20',
    images: [
      'https://images.unsplash.com/photo-1519861531473-9200263931cc?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['Official', 'Intermediate', 'Youth'] }
    ],
    specifications: {
      'Material': 'Premium Leather',
      'Size': 'Official (29.5")',
      'Weight': '22 oz'
    }
  },
  {
    id: 'p22',
    name: 'Maybelline Fit Me Matte Foundation',
    description: 'A natural-looking matte foundation that matches your skin tone perfectly. Lightweight, breathable, and oil-free formula.',
    price: 7.49,
    originalPrice: 9.99,
    discount: 25,
    rating: 4.4,
    reviews: 12000,
    category: 'Beauty',
    brand: 'Maybelline',
    inStock: true,
    stockCount: 500,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-01-10',
    images: [
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Shade', options: ['110 Porcelain', '120 Classic Ivory', '130 Buff Beige', '140 Natural Beige'] }
    ],
    specifications: {
      'Coverage': 'Medium',
      'Finish': 'Matte',
      'SPF': 'No SPF'
    }
  },
  {
    id: 'p23',
    name: 'Dyson Airwrap Complete Long',
    description: 'Coanda airflow curls, waves, smooths and dries without extreme heat. The complete long styling set for all hair types.',
    price: 599.99,
    originalPrice: 599.99,
    discount: 0,
    rating: 4.5,
    reviews: 3400,
    category: 'Beauty',
    brand: 'Dyson',
    inStock: true,
    stockCount: 15,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: true,
    dateAdded: '2023-11-01',
    images: [
      'https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Color', options: ['Copper/Nickel', 'Prussian Blue', 'Fuchsia/Nickel'] }
    ],
    specifications: {
      'Attachments': '6',
      'Hair Type': 'All Types',
      'Heat': 'No Extreme Heat'
    }
  },
  {
    id: 'p24',
    name: 'CeraVe Hydrating Cleanser',
    description: 'A gentle, non-foaming cleanser that removes dirt, oil, and makeup without disrupting the skin\'s natural protective barrier.',
    price: 14.99,
    originalPrice: 14.99,
    discount: 0,
    rating: 4.6,
    reviews: 8900,
    category: 'Beauty',
    brand: 'CeraVe',
    inStock: true,
    stockCount: 400,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    dateAdded: '2023-06-15',
    images: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['3 oz', '12 oz', '16 oz'] }
    ],
    specifications: {
      'Skin Type': 'Normal to Dry',
      'Fragrance': 'Fragrance Free',
      'Dermatologist Tested': 'Yes'
    }
  },
  {
    id: 'p25',
    name: 'Charlotte Tilbury Pillow Talk Set',
    description: 'The iconic Pillow Talk makeup collection. Includes the Matte Revolution lipstick, flattering blush, and luminous highlighter.',
    price: 115.00,
    originalPrice: 130.00,
    discount: 12,
    rating: 4.8,
    reviews: 2100,
    category: 'Beauty',
    brand: 'Charlotte Tilbury',
    inStock: true,
    stockCount: 35,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-12-10',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [],
    specifications: {
      'Set Includes': 'Lipstick, Blush, Highlighter',
      'Shade': 'Pillow Talk',
      'Finish': 'Satin, Matte, Shimmer'
    }
  },
  {
    id: 'p26',
    name: 'Olaplex No. 3 Hair Perfector',
    description: 'A best-selling at-home hair repair treatment. Rebuilds broken bonds in the hair to restore strength and health.',
    price: 30.00,
    originalPrice: 30.00,
    discount: 0,
    rating: 4.7,
    reviews: 5600,
    category: 'Beauty',
    brand: 'Olaplex',
    inStock: true,
    stockCount: 220,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-04-05',
    images: [
      'https://images.unsplash.com/photo-1535581652167-3d6b98c7a9e1?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['100ml', '250ml'] }
    ],
    specifications: {
      'Hair Type': 'All Hair Types',
      'Treatment': 'Weekly',
      'Bond Building': 'Yes'
    }
  },
  {
    id: 'p31',
    name: 'La Mer Moisturizing Cream',
    description: 'The legendary moisturizing cream that hydrates, nourishes, and transforms skin. Infused with Miracle Broth for a radiant, healthy-looking glow.',
    price: 190.00,
    originalPrice: 190.00,
    discount: 0,
    rating: 4.9,
    reviews: 890,
    category: 'Beauty',
    brand: 'La Mer',
    inStock: true,
    stockCount: 25,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    dateAdded: '2023-07-20',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['30ml', '60ml', '100ml'] }
    ],
    specifications: {
      'Skin Type': 'All Skin Types',
      'Texture': 'Rich Cream',
      'Key Ingredient': 'Miracle Broth'
    }
  },
  {
    id: 'p27',
    name: 'Nike Dri-FIT Running Shorts',
    description: 'Lightweight, sweat-wicking running shorts with a built-in brief liner and zip pocket for secure storage.',
    price: 45.00,
    originalPrice: 45.00,
    discount: 0,
    rating: 4.4,
    reviews: 1200,
    category: 'Sports',
    brand: 'Nike',
    inStock: true,
    stockCount: 100,
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    dateAdded: '2023-05-01',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['S', 'M', 'L', 'XL'] },
      { name: 'Color', options: ['Black', 'Navy', 'Red'] }
    ]
  },
  {
    id: 'p28',
    name: 'Samsung 65" Neo QLED 4K TV',
    description: 'Quantum Matrix Technology Pro delivers our brightest and most detailed picture. Neural Quantum Processor with 4K upscaling.',
    price: 1297.00,
    originalPrice: 1599.00,
    discount: 19,
    rating: 4.7,
    reviews: 670,
    category: 'Electronics',
    brand: 'Samsung',
    inStock: true,
    stockCount: 18,
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: true,
    dateAdded: '2024-01-01',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a32406961f6b?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Size', options: ['55"', '65"', '75"', '85"'] }
    ],
    specifications: {
      'Resolution': '4K UHD',
      'Panel': 'Neo QLED',
      'Refresh Rate': '120Hz'
    }
  },
  {
    id: 'p29',
    name: 'Ray-Ban Aviator Classic Sunglasses',
    description: 'The iconic Aviator shape that started it all. Lightweight metal frame with crystal lenses for timeless style.',
    price: 163.00,
    originalPrice: 163.00,
    discount: 0,
    rating: 4.5,
    reviews: 8900,
    category: 'Fashion',
    brand: 'Ray-Ban',
    inStock: true,
    stockCount: 120,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    dateAdded: '2023-02-20',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Lens', options: ['Green Classic G-15', 'Brown Gradient', 'Silver Mirror'] },
      { name: 'Size', options: ['58mm', '62mm'] }
    ],
    specifications: {
      'Frame': 'Metal',
      'Lens': 'Glass',
      'UV Protection': '100%'
    }
  },
  {
    id: 'p30',
    name: 'KitchenAid Artisan Stand Mixer',
    description: 'The iconic tilt-head stand mixer with 10 speeds. Perfect for mixing, kneading, whipping, and more with 10+ attachments available.',
    price: 449.99,
    originalPrice: 479.99,
    discount: 6,
    rating: 4.9,
    reviews: 6700,
    category: 'Home',
    brand: 'KitchenAid',
    inStock: true,
    stockCount: 40,
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    dateAdded: '2023-08-15',
    images: [
      'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?q=80&w=800&auto=format&fit=crop'
    ],
    variants: [
      { name: 'Color', options: ['Empire Red', 'Black', 'Silver', 'Blue'] }
    ],
    specifications: {
      'Capacity': '5 Quarts',
      'Speeds': '10',
      'Motor': '275W'
    }
  }
];
