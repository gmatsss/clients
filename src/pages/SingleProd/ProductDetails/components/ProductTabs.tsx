import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

interface Review {
  reviewerName: string;
  reviewText: string;
  reviewRating: number;
}

interface Product {
  reviews: Review[];
}

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<string>("tab-pane-1");

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
  };

  // Function to render stars based on reviewRating
  const renderStars = (rating: number) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? faStar : faStarHalfAlt} // Adjust this logic as needed
          className="rating-star"
        />
      );
    }
    return stars;
  };

  return (
    <div className="row px-xl-5">
      <div className="col">
        <div className="bg-light p-30">
          <div className="nav nav-tabs mb-4">
            <a
              className={`nav-item nav-link text-dark ${
                activeTab === "tab-pane-2" ? "active" : ""
              }`}
              onClick={() => handleTabClick("tab-pane-2")}
              href="#tab-pane-2" // Prevent default link behavior
            >
              Information
            </a>
            <a
              className={`nav-item nav-link text-dark ${
                activeTab === "tab-pane-3" ? "active" : ""
              }`}
              onClick={() => handleTabClick("tab-pane-3")}
              href="#tab-pane-3"
            >
              Reviews ({product?.reviews?.length})
            </a>
          </div>
          <div className="tab-content">
            <div
              className={`tab-pane fade ${
                activeTab === "tab-pane-1" ? "show active" : ""
              }`}
              id="tab-pane-1"
            >
              {/* Product Description */}
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "tab-pane-2" ? "show active" : ""
              }`}
              id="tab-pane-2"
            >
              {/* Additional Information */}
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "tab-pane-3" ? "show active" : ""
              }`}
              id="tab-pane-3"
            >
              {product?.reviews?.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <p className="reviewer-name">
                      <strong>{review.reviewerName}</strong> -{" "}
                      {renderStars(review.reviewRating)}
                    </p>
                    <p className="review-text">{review.reviewText}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
