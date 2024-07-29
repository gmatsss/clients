import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import img from "../../../img/no_img.png";

// Define an interface for the component props
interface ProductItemProps {
  id: number;
  ImageSrc: string;
  productName: string;
  price: string;
  originalPrice: string;
  rating: number;
  ratingCount: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  ImageSrc,
  productName,
  price,
  originalPrice,
  rating,
  ratingCount,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleProductClick = () => {
    if (isMounted) {
      navigate(`/singleproduct/${id}`);
    }
  };

  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6 pb-1"
      style={{ cursor: "pointer" }}
      onClick={handleProductClick}
    >
      <div className="product-item bg-light mb-4">
        <div className="product-image position-relative overflow-hidden">
          <img
            className="image-fluid w-100"
            src={ImageSrc !== "" ? ImageSrc : img}
            alt={productName}
            style={{ height: "300px" }}
          />

          <div className="product-action"></div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate">{productName}</a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{price}</h5>
            <h6 className="text-muted ml-2">
              <del>{originalPrice}</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            {[...Array(5)].map((_, i) => (
              <small
                key={i}
                className={`fa ${
                  i < rating ? "fa-star" : "far fa-star"
                } text-primary mr-1`}
              ></small>
            ))}
            <small>({ratingCount})</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
