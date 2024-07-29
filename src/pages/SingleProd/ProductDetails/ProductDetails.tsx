import React from "react";
import ProductCarousel from "./components/ProductCarousel.tsx"; // Ensure these components are also converted to TypeScript
import ProductTabs from "./components/ProductTabs.tsx";
import ProductView from "./components/ProductView.tsx"; // Corrected the spelling from 'Productview' to 'ProductView'

interface ProductDetailsProps {
  product: Product; // Use the Product interface defined earlier
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="container-fluid pb-5">
      <div className="row px-xl-5">
        <ProductCarousel ImageSrc={product.ImageSrc} />{" "}
        {/* Pass ImageSrc to ProductCarousel */}
        <ProductView product={product} />
      </div>

      <ProductTabs product={product} />
    </div>
  );
};

export default ProductDetails;
