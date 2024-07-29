import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../../../../context/CartContext.tsx";

interface Product {
  id: number;
  name: string;
  Description: string;
  price: number;
  originalPrice: number;
  rating: number;
  ratingCount: number;
  ImageSrc: string;
  category: string;
  color: string[] | string;
  sizes: string[] | string;
}

interface ProductViewProps {
  product: Product;
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addItem } = useCart();

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < Math.floor(product.rating); i++) {
      stars.push(<FontAwesomeIcon key={`star-full-${i}`} icon={faStar} />);
    }
    if (product.rating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={`star-half`} icon={faStarHalfAlt} />);
    }
    while (stars.length < 5) {
      stars.push(
        <FontAwesomeIcon key={`star-empty-${stars.length}`} icon={farStar} />
      );
    }
    return stars;
  };

  const handleQuantityChange = (delta: number): void => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const colors = Array.isArray(product.color)
    ? product.color
    : product.color
    ? [product.color]
    : [];
  const sizes = Array.isArray(product.sizes)
    ? product.sizes
    : product.sizes
    ? [product.sizes]
    : [];

  const handleAddToCart = () => {
    if ((sizes.length && !selectedSize) || (colors.length && !selectedColor)) {
      alert("Please select all available options.");
      return;
    }
    const itemToAdd = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      quantity,
      ImageSrc: product.ImageSrc,
      size: selectedSize,
      color: selectedColor,
    };
    addItem(itemToAdd);
  };

  return (
    <div className="col-lg-7 h-auto mb-30">
      <div className="h-100 bg-light p-30 ">
        <div className="textStart">
          <h3>{product.name}</h3>
          <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              {renderStars(product.rating)}
            </div>
            <small className="pt-1">({product.ratingCount} Reviews)</small>
          </div>
          <div
            style={{ fontSize: "24px" }}
            className="font-weight-semi-bold mb-4"
          >
            ${product.price.toFixed(2)}
            {product.originalPrice > product.price && (
              <>
                <FontAwesomeIcon icon={faTag} className="text-success ml-2" />
                <small className="text-muted ml-2" style={{ fontSize: "18px" }}>
                  <del>${product.originalPrice.toFixed(2)}</del>
                </small>
              </>
            )}
          </div>

          <p className="mb-4">{product.Description}</p>
        </div>
        <div className="d-flex flex-column-buttons mb-4">
          <strong className="text-dark mb-2">Sizes:</strong>
          <div className="button-row">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`btn btn-outline-primary mr-2 ${
                  selectedSize === size ? "active" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column-buttons mb-4">
          <strong className="text-dark mb-2">Colors:</strong>
          <div className="button-row">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`btn btn-outline-primary mr-2 ${
                  selectedColor === color ? "active" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center mb-4 pt-2">
          <div className="input-group quantity mr-3" style={{ width: "130px" }}>
            <div
              className="btn btn-primary btn-minus"
              onClick={() => handleQuantityChange(-1)}
            >
              <i className="fa fa-minus"></i>
            </div>
            <input
              type="text"
              className="form-control bg-secondary border-0 text-center"
              value={quantity.toString()}
              readOnly
            />
            <div
              className="btn btn-primary btn-plus"
              onClick={() => handleQuantityChange(1)}
            >
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <button className="btn btn-primary px-3" onClick={handleAddToCart}>
            <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
          </button>
        </div>
        <div className="d-flex pt-2">
          <strong className="text-dark mr-2">Share on:</strong>
          {/* Social icons */}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
