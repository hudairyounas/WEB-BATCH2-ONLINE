const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    stock: 15
  },
  {
    id: '2',
    name: 'Minimalist Smartwatch',
    description: 'Sleek design with heart rate monitoring, fitness tracking, and notifications.',
    price: 199.50,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    stock: 8
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable mesh chair with lumbar support for long hours of work.',
    price: 249.00,
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80',
    stock: 0
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    description: 'Tactile switches with customizable RGB lighting and aluminum frame.',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80',
    stock: 25
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug',
    description: 'Handcrafted ceramic mug with a beautiful matte finish.',
    price: 24.50,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80',
    stock: 50
  },
  {
    id: '6',
    name: 'Leather Weekend Bag',
    description: 'Genuine leather duffel bag perfect for short trips and getaways.',
    price: 159.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    stock: 12
  }
];

export const getProducts = async () => {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_PRODUCTS), 600));
};

export const getProductById = async (id) => {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_PRODUCTS.find(p => p.id === id)), 400));
};