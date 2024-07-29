import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.scss";
import ProductDetails from "./ProductDetails/ProductDetails.tsx";
import MoreProduct from "./MoreProduct/MoreProduct.tsx";
// Data
import sampleProducts from "../product/products.json";

// Assuming your product data structure includes an id field
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  ImageSrc: string;
  category: string;
  color: string;
  size?: string;
}

const SingleProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    // Simulate fetching the product by ID
    const productId = parseInt(id); // Assuming `id` is a number
    const foundProduct = sampleProducts.find(
      (product) => product.id === productId
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>; // Or some loading indicator
  }

  return (
    <div>
      <ProductDetails product={product} />
      <MoreProduct />
    </div>
  );
};

export default SingleProductPage;
