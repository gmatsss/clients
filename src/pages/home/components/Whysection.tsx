import React from "react";

const WhySection: React.FC = () => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Why Shop With Us</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="Image-box"></div>
              <div className="detail-box">
                <h5>Proudly Based in the USA</h5>
                <p>
                  Rooted in quality and innovation, our brand celebrates the
                  spirit of the United States.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="Image-box"></div>
              <div className="detail-box">
                <h5>Complimentary Shipping</h5>
                <p>
                  Enjoy free shipping on all orders, with no minimum purchase
                  required.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="Image-box"></div>
              <div className="detail-box">
                <h5>Unmatched Quality</h5>
                <p>
                  Discover products crafted to the highest standards, ensuring
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
