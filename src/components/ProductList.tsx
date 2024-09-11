import Link from 'next/link';
import React from 'react';

interface Product {
  image: string;
  title: string;
  price: string;
  soldOut?: boolean;
  label?: string;
}

interface Props {
  products: Product[];
  sectionTitle: string;
}

export const ProductList: React.FC<Props> = ({ products, sectionTitle }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{sectionTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border p-4 relative">
              <img src={product.image} alt={product.title} className="mb-4" />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p>{product.price}</p>
              {product.soldOut && <span className="text-red-500">Sold Out</span>}
              {/* Remove the <a> tag inside the Link component */}
              <Link href={`/products/${index}`} className="absolute inset-0 z-10" />
            </div>
          ))}
        </div>
        <div className="text-right mt-4">
          {/* Remove the <a> tag here as well */}
          <Link href={`/${sectionTitle.toLowerCase().replace(/ /g, '-')}`} className="text-red-600 hover:underline">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};
