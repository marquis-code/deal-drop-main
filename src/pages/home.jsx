import { Header } from '../components/Header';
import { DailyDeal } from '../components/DailyDeal';
import { ExclusiveEvents } from '../components/ExclusiveEvents';
import { ProductList } from '../components/ProductList';
import { Reviews } from '../components/Reviews';
import { Footer } from '../components/Footer';

export default function Home() {
  const bestSellers = [
    { image: '/product1.jpg', title: 'Phantom Pickleball', price: '$39.99' },
    { image: '/product2.jpg', title: 'Vornado Spin Fan', price: '$29.99' },
    // more products...
  ];

  const newArrivals = [
    { image: '/arrival1.jpg', title: 'Vornado Fan', price: '$49.99' },
    { image: '/arrival2.jpg', title: 'XOXO Cat Food', price: '24 for $17.99' },
    // more products...
  ];

  const clearanceItems = [
    { image: '/clearance1.jpg', title: 'Samyang Noodles', price: '40 for $19.99' },
    { image: '/clearance2.jpg', title: 'Bear Dog Treats', price: '8 for $19.99' },
    // more products...
  ];

  return (
    <div className="font-sans">
      <HomePage />
    <SummaryStyles />
    </div>
  );
}
