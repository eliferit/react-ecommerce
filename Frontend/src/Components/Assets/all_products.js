import p1_img from './all_p1.jpg'
import p2_img from './all_p2_img.jpg'
import p3_img from './all_p3_img.jpg'
import p4_img from './all_p4_img.jpg'
import p5_img from './all_p5_img.jpg'
import p6_img from './all_p6_img.jpg'
import p7_img from './all_p7_img.jpg'
import p8_img from './all_p8_img.jpg'
import p9_img from './all_p9_img.jpg'
import p10_img from './all_p10_img.jpg'
import p11_img from './all_11_img.webp'
import p12_img from './all_12_img.webp'
import p13_img from './all_13_img.jpg'
import p14_img from './all_14_img.jpg'
import p15_img from './all_15_img.avif'

const all_products = [
  // WOMEN (1–5)
  {
    id: 1,
    name: "Sunlit Aura Embroidered Lehenga",
    image: p1_img,
    new_price: 120.00,
    old_price: 180.50,
    category: "women",
    type: "lehenga",
    tags: ["ethnic", "wedding", "latest"],
    description: "A beautifully embroidered lehenga designed for festive occasions. Crafted with premium fabric for elegance and comfort. Perfect for weddings and celebrations."
  },
  {
    id: 2,
    name: "Bloom Charm Floral Anarkali Set",
    image: p2_img,
    new_price: 95.00,
    old_price: 140.00,
    category: "women",
    type: "anarkali",
    tags: ["traditional", "party", "latest"],
    description: "Graceful floral Anarkali set with a flowing silhouette. Soft and breathable material ensures all-day comfort. Ideal for family functions and parties."
  },
  {
    id: 3,
    name: "Royal Grace Silk Saree",
    image: p3_img,
    new_price: 130.00,
    old_price: 200.00,
    category: "women",
    type: "saree",
    tags: ["silk", "festive", "traditional"],
    description: "Elegant silk saree with a rich traditional finish. Smooth texture with luxurious shine. A timeless choice for festive and cultural events."
  },
  {
    id: 4,
    name: "Sky Mist Embroidered Gown",
    image: p4_img,
    new_price: 110.00,
    old_price: 165.00,
    category: "women",
    type: "gown",
    tags: ["modern", "party", "trendy"],
    description: "Stylish embroidered gown with a modern touch. Lightweight and comfortable for long wear. Perfect for evening parties and special occasions."
  },
  {
    id: 5,
    name: "Starlit Spark Sequin Co-Ord Set",
    image: p5_img,
    new_price: 98.00,
    old_price: 145.00,
    category: "women",
    type: "co-ord",
    tags: ["modern", "stylish", "latest"],
    description: "Trendy sequin co-ord set that adds sparkle to your look. Designed for a chic and confident style. Best suited for celebrations and night events."
  },

  // MEN (6–10)
  {
    id: 6,
    name: "Azure Edge Slim Fit Suit",
    image: p15_img,
    new_price: 150.00,
    old_price: 220.00,
    category: "men",
    type: "suit",
    tags: ["formal", "premium", "latest"],
    description: "Premium slim fit suit with a sharp modern design. Tailored for a classy and professional appearance. Perfect for formal events and business meetings."
  },
  {
    id: 7,
    name: "Midnight Prime Formal Blazer",
    image: p6_img,
    new_price: 130.00,
    old_price: 190.00,
    category: "men",
    type: "blazer",
    tags: ["formal", "party", "classic"],
    description: "Elegant formal blazer with a sleek finish. Made from high-quality fabric for comfort and durability. Ideal for parties and office wear."
  },
  {
    id: 8,
    name: "Urban Drift Casual Cotton Shirt",
    image: p7_img,
    new_price: 55.00,
    old_price: 80.00,
    category: "men",
    type: "shirt",
    tags: ["casual", "cotton", "daily"],
    description: "Comfortable cotton shirt designed for daily wear. Soft texture with a stylish casual look. Great for outings and relaxed weekends."
  },
  {
    id: 9,
    name: "Core Flex Slim Denim Jeans",
    image: p8_img,
    new_price: 75.00,
    old_price: 110.00,
    category: "men",
    type: "jeans",
    tags: ["denim", "casual", "trendy"],
    description: "Slim-fit denim jeans with flexible stretch material. Durable and trendy for everyday fashion. Pairs well with casual and semi-formal outfits."
  },
  {
    id: 10,
    name: "Heritage Line Classic Kurta Set",
    image: p9_img,
    new_price: 90.00,
    old_price: 135.00,
    category: "men",
    type: "kurta",
    tags: ["ethnic", "festive", "traditional"],
    description: "Traditional kurta set with a modern finish. Comfortable fabric suitable for long wear. Perfect for festivals and family gatherings."
  },

  // KIDS (11–15)
  {
    id: 11,
    name: "Little Royal Festive Lehenga Set",
    image: p10_img,
    new_price: 65.00,
    old_price: 95.00,
    category: "kid",
    type: "lehenga",
    tags: ["festive", "cute", "ethnic"],
    description: "Adorable festive lehenga set for kids. Soft material ensures comfort and ease of movement. Ideal for birthdays and celebrations."
  },
  {
    id: 12,
    name: "Playday Fun Shirt & Shorts Set",
    image: p11_img,
    new_price: 50.00,
    old_price: 75.00,
    category: "kid",
    type: "shirt-set",
    tags: ["playwear", "casual", "comfort"],
    description: "Comfortable shirt and shorts set for playful days. Made with breathable fabric for active kids. Perfect for summer outings."
  },
  {
    id: 13,
    name: "Petal Pop Party Dress",
    image: p12_img,
    new_price: 60.00,
    old_price: 90.00,
    category: "kid",
    type: "dress",
    tags: ["party", "cute", "trendy"],
    description: "Cute and colorful party dress for special occasions. Lightweight and stylish design. Makes your little one shine at events."
  },
  {
    id: 14,
    name: "Snow Puff Cozy Winter Jacket",
    image: p13_img,
    new_price: 80.00,
    old_price: 120.00,
    category: "kid",
    type: "jacket",
    tags: ["winter", "warm", "comfort"],
    description: "Warm and cozy winter jacket with soft inner lining. Provides protection from cold weather. Comfortable and trendy design."
  },
  {
    id: 15,
    name: "DreamSoft Cotton Nightwear Set",
    image: p14_img,
    new_price: 45.00,
    old_price: 70.00,
    category: "kid",
    type: "nightwear",
    tags: ["nightwear", "soft", "comfort"],
    description: "Soft cotton nightwear set for a peaceful sleep. Gentle on skin and breathable fabric. Perfect for daily bedtime comfort."
  }
]

export default all_products