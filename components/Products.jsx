"use client";
import { productData } from "@/api/ProductData";
import ProductCard from "./ProductCard";

const Products = () => {
  console.log(productData);
  const data = productData.products;
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((post) => (
        <ProductCard
          productName={post.name}
          img={post.img}
          price={post.price}
          decs={post.description}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Products;
