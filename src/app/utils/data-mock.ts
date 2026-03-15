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
];