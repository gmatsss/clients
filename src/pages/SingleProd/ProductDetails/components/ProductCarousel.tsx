import React from "react";
import img from "../../../../img/no_img.png";

interface ProductCarouselProps {
  ImageSrc: string; // Assuming a single image for simplicity
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ ImageSrc }) => {
  return (
    <div className="col-lg-5 mb-30">
      <div
        id="product-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner bg-light">
          {/* Now using ImageSrc prop for the image source */}
          <div className="carousel-item active">
            <img
              className="w-100 h-100"
              src={ImageSrc ? ImageSrc : img}
              alt="Product"
            />
          </div>
          {/* Add more <div className="carousel-item"> if there are multiple images */}
        </div>
        <a
          className="carousel-control-prev"
          href="#product-carousel"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-2x fa-angle-left text-dark"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#product-carousel"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-2x fa-angle-right text-dark"></span>
        </a>
      </div>
    </div>
  );
};

export default ProductCarousel;
