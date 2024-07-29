import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faTshirt,
  faHatWizard,
  faRunning,
  faRecycle,
  faHistory,
  faVenusMars,
  faGem,
  faLeaf,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import "./blog.scss";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  icon: any;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Latest Trends in Shoe Fashion",
    date: "July 10, 2024",
    summary:
      "Explore the newest trends in footwear this season, from bold statement shoes to eco-friendly options.",
    icon: faShoePrints,
  },
  {
    id: 2,
    title: "Top T-shirt Designs to Look Out for in 2024",
    date: "July 15, 2024",
    summary:
      "Discover the top t-shirt designs making waves this year, with a focus on sustainable fashion.",
    icon: faTshirt,
  },
  {
    id: 3,
    title: "Accessorize Your Outfit: Must-Have Accessories for 2024",
    date: "July 20, 2024",
    summary:
      "Learn about the must-have accessories that can elevate any outfit, from minimalist jewelry to bold handbags.",
    icon: faHatWizard,
  },
  {
    id: 4,
    title: "Revolutionizing Comfort: Innovations in Activewear",
    date: "August 1, 2024",
    summary:
      "Dive into the latest innovations in activewear that combine comfort with style, ensuring the best performance for athletes and casual users alike.",
    icon: faRunning,
  },
  {
    id: 5,
    title: "Sustainable Fashion: Why It Matters",
    date: "August 15, 2024",
    summary:
      "Understand the importance of sustainable fashion practices and how choosing eco-friendly apparel can make a significant impact on our planet.",
    icon: faRecycle,
  },
  {
    id: 6,
    title: "The Comeback of Vintage Styles in 2024",
    date: "August 30, 2024",
    summary:
      "Vintage is back in vogue! Explore how retro styles from the 60s to 80s are influencing today's fashion scene and how to incorporate them into your wardrobe.",
    icon: faHistory,
  },
  {
    id: 7,
    title: "Breaking the Mold: Unisex Fashion in 2024",
    date: "September 10, 2024",
    summary:
      "Unisex clothing is more than just a trend; it's a fashion revolution. Discover how gender-neutral garments are reshaping the way we think about personal style.",
    icon: faVenusMars,
  },
  {
    id: 8,
    title: "Luxury on a Budget: Finding Affordable Designer Pieces",
    date: "September 25, 2024",
    summary:
      "Indulge in luxury without breaking the bank. Learn tips for finding affordable designer pieces that don't compromise on quality or style.",
    icon: faGem,
  },
  {
    id: 9,
    title: "Eco-Friendly Footwear: Walking the Talk",
    date: "October 5, 2024",
    summary:
      "Step into sustainability with eco-friendly footwear. This post delves into brands that successfully combine ethical production practices with stylish designs.",
    icon: faLeaf,
  },
  {
    id: 10,
    title: "Fashion Tech: Wearables That Will Rock Your World",
    date: "October 20, 2024",
    summary:
      "Fashion meets technology in the latest wearables that do more than just tell time or count steps. Explore the cutting-edge accessories that are setting trends in both tech and fashion circles.",
    icon: faMicrochip,
  },
];

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog on America's Brand Bazaar</h2>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <FontAwesomeIcon className="blog-icon" icon={post.icon} size="2x" />
            <div className="blog-content">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-summary">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
