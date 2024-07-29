import React from "react";
import products from "../../product/products.json"; // Assuming the path is correct
import { Link, useNavigate } from "react-router-dom";

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const Product: React.FC = () => {
  const navigate = useNavigate();

  const randomProducts = shuffleArray([...products]).slice(0, 6);

  const handleCategoryClick = (category: string) => {
    navigate("/product", { state: { category } });
  };

  const handleBuyNowClick = (productId: number) => {
    navigate(`/singleproduct/${productId}`); // Navigate to the single product page
  };

  return (
    <section className="product_section layout_padding" id="prodslide">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">
          {randomProducts.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a
                      href="#"
                      className="option1"
                      onClick={() => handleCategoryClick(product.category)}
                    >
                      {product.category}
                    </a>
                    <a
                      href="#"
                      className="option2"
                      onClick={() => handleBuyNowClick(product.id)}
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="Image-box">
                  <img
                    src={product.ImageSrc || "../../img/no_img.png"}
                    alt={product.name}
                  />
                </div>
                <div className="detail-box">
                  <h5>{product.name}</h5>
                  <h6>${product.price.toFixed(2)}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <Link to="/product">View All products</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
