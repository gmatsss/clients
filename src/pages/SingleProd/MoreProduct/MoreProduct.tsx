import React, { useEffect, useState } from "react";
import sampleProducts from "../../product/products.json"; // Adjust path as necessary
import img from "../../../img/no_img.png";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  ImageSrc: string;
  category: string;
  color: string | string[];
  sizes?: string[];
  Description: string;
}

const MoreProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Function to get 3 random products from the imported sampleProducts
    const getRandomProducts = (products: Product[], num: number): Product[] => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    // Get 3 random products to display
    const randomProducts = getRandomProducts(sampleProducts, 3);
    setProducts(randomProducts);
  }, []);

  return (
    <div className="container-fluid py-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">You May Also Like</span>
      </h2>
      <div className="row px-xl-5">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="product-item bg-light">
              <div className="product-image position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={product.ImageSrc || img} // Use a default image if ImageSrc is missing
                  alt={product.name}
                />
              </div>
              <div className="text-center py-4">
                <h6 className="text-decoration-none text-truncate">
                  {product.name}
                </h6>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>${product.price.toFixed(2)}</h5>
                  {product.originalPrice && (
                    <h6 className="text-muted ml-2">
                      <del>${product.originalPrice.toFixed(2)}</del>
                    </h6>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`fa ${
                        index < product.rating ? "fa-star" : "far fa-star"
                      } text-primary mr-1`}
                    ></i>
                  ))}
                  <small>({product.ratingCount})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;
