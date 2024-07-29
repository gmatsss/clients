// Client.tsx
import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Liam Johnson",
    role: "Fashion Aficionado",
    comment:
      "I recently bought a jacket from this shop, and it's been a fantastic addition to my wardrobe. The quality of the material is outstanding, and it fits perfectly. Their selection of stylish and comfortable clothing is impressive. Definitely a top recommendation for anyone looking to enhance their style!",
    image: "", // Update the image path as needed
  },
  {
    id: 2,
    name: "Emma Thompson",
    role: "Regular Shopper",
    comment:
      "This is my go-to shop for all my home essentials. The variety of products is fantastic, and the customer service is always friendly and helpful. Shopping here is always a delightful experience.",
    image: "", // Update the image path as needed
  },
  {
    id: 3,
    name: "Oliver Martinez",
    role: "Accessory Collector",
    comment:
      "The collection of accessories at this shop is truly remarkable. I've added several watches and bracelets to my collection, each exuding elegance and quality. Their attention to detail in design and craftsmanship is evident. The prices are great for the level of quality offered. It's my favorite destination for unique and stylish accessories.",
    image: "", // Update the image path as needed
  },
];

const Client: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Customers Testimonial</h2>
        </div>
        <div
          id="carouselExample3Controls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <div className="box col-lg-10 mx-auto">
                  <div className="Image_container">
                    <div className="Image-box">
                      <div className="Image_box-inner">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>{testimonial.name}</h5>
                    <h6>{testimonial.role}</h6>
                    <p className="commentsss">{testimonial.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel_btn_box">
            <button className="carousel-control-prev" onClick={goToPrev}>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" onClick={goToNext}>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
