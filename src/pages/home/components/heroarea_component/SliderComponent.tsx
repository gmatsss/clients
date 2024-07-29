import React, { useState, useEffect } from "react";
import fashion from "../../../../img/fashion-trends.png";
import exlusive from "../../../../img/exclusive-accessories.png";
import urban from "../../../../img/urban-streetwear.png";
import luxury from "../../../../img/luxury-apparel.png";

// Define a type for the slide data
interface Slide {
  id: number;
  title: string;
  description: string;
  detail: string;
  buttonText: string;
  image: string; // Assuming this will be a URL to the image
}

const SliderComponent: React.FC = () => {
  const slidesData: Slide[] = [
    {
      id: 1,
      title: "American Fashion Trends",
      description: "Latest Styles from Top US Brands",
      detail:
        "Explore the newest fashion trends and statement pieces from leading American designers.",
      buttonText: "Discover Fashion",
      image: fashion, // Example path, replace with actual
    },
    {
      id: 2,
      title: "Exclusive Accessories",
      description: "Elevate Your Style",
      detail:
        "Accessorize with elegance. Find exclusive, high-quality accessories from renowned US brands.",
      buttonText: "Shop Accessories",
      image: exlusive, // Example path, replace with actual
    },
    {
      id: 3,
      title: "Urban Streetwear",
      description: "Bold and Contemporary",
      detail:
        "Make a statement with the latest in urban streetwear. Edgy, contemporary designs from US urban brands.",
      buttonText: "Explore Streetwear",
      image: urban, // Example path, replace with actual
    },
    {
      id: 4,
      title: "Luxury Apparel",
      description: "Sophistication and Style",
      detail:
        "Indulge in luxury clothing that combines sophistication with modern American style.",
      buttonText: "Shop Luxury",
      image: luxury, // Example path, replace with actual
    },
    // Add other slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [slidesData.length]);

  const changeSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section className="slider_section bg-slider">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-6">
                    <div className="detail-box">
                      <h1>{slide.title}</h1>
                      <h2>{slide.description}</h2>
                      <p>{slide.detail}</p>
                      <a href="#" className="btn12">
                        {slide.buttonText}
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="image-box">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="image-frame"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
