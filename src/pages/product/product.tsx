// Import React and useState, useEffect hooks
import React, { useEffect, useState } from "react";

import "./product.scss";
import FilterComponent from "./component/FilterComponent.tsx";
import SortingAndShowingComponent from "./component/SortingAndShowingComponent.tsx";
import ProductItem from "./component/ProductItem.tsx";
import Pagination from "./component/Pagination.tsx";
import sampleProducts from "./products.json";
import { useLocation } from "react-router-dom";

// Define types for products and filters
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  color: string;
  category: string;
  ImageSrc: string;
  rating: number;
  ratingCount: number;
}

interface Filters {
  price: string[];
  color: string[];
  category: string[];
}

interface Counts {
  [key: string]: number;
}

// Assuming sampleProducts is of type Product[]
const ProductPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    price: [],
    color: [],
    category: [],
  });

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [priceCounts, setPriceCounts] = useState<Counts>({});
  const [colorCounts, setColorCounts] = useState<Counts>({});
  const [categoryCounts, setCategoryCounts] = useState<Counts>({});

  const location = useLocation();

  // This effect listens for changes in the location state (category filter from navigation)
  useEffect(() => {
    const state = location.state as { category?: string } | null;
    if (state?.category) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        category: [state.category],
      }));
    }
  }, [location.state]);

  const parsePriceRange = (range: string): [number, number] => {
    if (!range || range === "All Price") return [0, Infinity];
    const [min, max] = range
      .split(" - ")
      .map((price) => parseFloat(price.replace("$", "")));
    return [min, max];
  };

  // Convert JavaScript functions to TypeScript by defining types for parameters and return values
  const calculatePriceCounts = (products: Product[]): Counts => {
    const priceCounts: Counts = {
      "$0 - $100": 0,
      "$100 - $200": 0,
      "$200 - $300": 0,
      "$300 - $400": 0,
      "$400 - $500": 0,
    };

    products.forEach((product) => {
      for (const range in priceCounts) {
        const [minPrice, maxPrice] = parsePriceRange(range);
        if (product.price >= minPrice && product.price <= maxPrice) {
          priceCounts[range]++;
        }
      }
    });

    return priceCounts;
  };

  const calculateColorCounts = (products: Product[]): Counts => {
    const colorCounts = products.reduce((acc: Counts, product) => {
      acc[product.color] = (acc[product.color] || 0) + 1;
      return acc;
    }, {});

    return colorCounts;
  };

  const calculateCategoryCounts = (products: Product[]): Counts => {
    const categoryCounts = products.reduce((acc: Counts, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    return categoryCounts;
  };

  useEffect(() => {
    const shuffledProducts = shuffleArray([...sampleProducts]);
    setFilteredProducts(shuffledProducts);

    setPriceCounts(calculatePriceCounts(shuffledProducts));
    setColorCounts(calculateColorCounts(shuffledProducts));
    setCategoryCounts(calculateCategoryCounts(shuffledProducts));
    setTotalPages(Math.ceil(shuffledProducts.length / 9));
  }, []);

  useEffect(() => {
    let filtered = shuffleArray([...sampleProducts]);

    if (selectedFilters.category.length) {
      filtered = filtered.filter((product) =>
        selectedFilters.category.includes(product.category)
      );
    }

    if (selectedFilters.price.length) {
      filtered = filtered.filter((product) =>
        selectedFilters.price.some((priceRange) => {
          const [minPrice, maxPrice] = parsePriceRange(priceRange);
          return product.price >= minPrice && product.price <= maxPrice;
        })
      );
    }

    if (selectedFilters.color.length) {
      filtered = filtered.filter((product) =>
        selectedFilters.color.includes(product.color)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setTotalPages(Math.ceil(filtered.length / 9));
    const startIndex = (currentPage - 1) * 9;
    setFilteredProducts(filtered.slice(startIndex, startIndex + 9));
    setPriceCounts(calculatePriceCounts(filtered));
    setColorCounts(calculateColorCounts(filtered));
    setCategoryCounts(calculateCategoryCounts(filtered));
  }, [selectedFilters, searchQuery, currentPage]);

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value];
      return { ...prev, [filterType]: newFilters };
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <FilterComponent
            onFilterChange={handleFilterChange}
            priceCounts={priceCounts}
            colorCounts={colorCounts}
            categoryCounts={categoryCounts}
            selectedFilters={selectedFilters}
            products={sampleProducts}
          />
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <SortingAndShowingComponent
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              {filteredProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  ImageSrc={product.ImageSrc}
                  productName={product.name}
                  price={`$${product.price}`}
                  originalPrice={`$${product.originalPrice}`}
                  rating={product.rating}
                  ratingCount={product.ratingCount}
                />
              ))}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
