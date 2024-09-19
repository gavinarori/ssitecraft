"use client";

import { useRouter } from 'next/navigation';
import { showCaseBlocks } from "../constants";

const ProductDetail = ({ params }:any ) => {
  const { Id } = params;

  const product = showCaseBlocks.find(p => p.id === parseInt(Id));
  
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-[450px] object-cover mt-4"
      />
      <p className="mt-4">This is a detailed view of the {product.name}.</p>
    </div>
  );
};

export default ProductDetail;
