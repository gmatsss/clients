import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faSocks,
  faClock,
  faHatCowboySide,
} from "@fortawesome/free-solid-svg-icons";
import "./about.scss";

interface Feature {
  id: number;
  icon: typeof FontAwesomeIcon;
  iconName: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: FontAwesomeIcon,
    iconName: faTshirt,
    title: "Premium Apparel",
    description:
      "Discover our range of high-quality, American-made clothing designed for style and comfort. Each piece is crafted to offer both durability and a modern aesthetic.",
  },
  {
    id: 2,
    icon: FontAwesomeIcon,
    iconName: faSocks,
    title: "Artisan Socks",
    description:
      "Step into comfort with our artisan socks, made from the finest materials. Perfect for any occasion, our socks combine unique designs with unmatched quality.",
  },
  {
    id: 3,
    icon: FontAwesomeIcon,
    iconName: faClock,
    title: "Exclusive Timepieces",
    description:
      "Explore our collection of precision-engineered watches, designed to provide impeccable timekeeping and a touch of elegance to your daily wear.",
  },
  {
    id: 4,
    icon: FontAwesomeIcon,
    iconName: faHatCowboySide,
    title: "Stylish Accessories",
    description:
      "Complete your look with our exclusive range of accessories, including hats, belts, and more. All crafted to enhance your outfit with a distinct American flair.",
  },
];

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Our Products</h2>
        <p>
          Experience the best of American craftsmanship with our exclusive
          product line. Designed with the discerning customer in mind, each item
          promises superior quality and style.
        </p>
      </div>
      <div className="feature-section">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="icon-container">
              <FontAwesomeIcon
                icon={feature.iconName}
                size="3x"
                className="feature-icon"
              />
            </div>
            <div className="text-container">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
