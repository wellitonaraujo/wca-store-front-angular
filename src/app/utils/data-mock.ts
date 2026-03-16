import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description:
      'Premium wireless headphones with active noise cancellation and 30-hour battery life',
    price: 299.99,
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=400&q=80',
    isFavorite: false,
    rating: 4.8,
    reviewCount: 6,
    inStock: true,
    category: 'electronics',
  },
  {
    id: '2',
    name: 'Smart 4K TV',
    description: '65-inch OLED Smart TV with HDR and built-in streaming apps',
    price: 1299.99,
    imageUrl:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&w=400&q=80',
    isFavorite: false,
    rating: 4.6,
    reviewCount: 6,
    inStock: true,
    category: 'electronics',
  },
    {
      id: '3',
      name: 'Professional Camera',
      description: 'Mirrorless digital camera with 4K video capabilities',
      price: 899.99,
      imageUrl:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&w=400&q=80',
      isFavorite: false,
      rating: 4.7,
      reviewCount: 6,
      inStock: true,
      category: 'electronics',
    
    },
    {
      id: '4',
      name: 'Classic Denim Jacket',
      description: 'Vintage-style denim jacket with modern fit',
      price: 79.99,
      imageUrl:
        'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&w=400&q=80',
      isFavorite: false,
      rating: 4.5,
      reviewCount: 5,
      inStock: true,
      category: 'clothing',
    },
    {
      id: '5',
      name: 'Cotton T-Shirt Pack',
      description: 'Set of 3 premium cotton t-shirts in essential colors',
      price: 34.99,
      imageUrl:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&w=400&q=80',
      isFavorite: false,
      rating: 4.3,
      reviewCount: 6,
      inStock: true,
      category: 'clothing',
    },
    {
      id: '6',
      name: 'Wool Winter Coat',
      description: 'Elegant wool-blend coat perfect for cold weather',
      price: 199.99,
      imageUrl:
        'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&w=400&q=80',
      isFavorite: false,
      rating: 4.6,
      reviewCount: 6,
      inStock: true,
      category: 'clothing',
    },
];