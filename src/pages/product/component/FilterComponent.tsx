// FilterComponent.tsx
import React from "react";
import FilterSection from "./FilterSection.tsx"; // Ensure this path is correct

interface Counts {
  [key: string]: number;
}

interface FilterComponentProps {
  onFilterChange: (idPrefix: string, filterLabel: string) => void;
  priceCounts: Counts;
  colorCounts: Counts;
  categoryCounts: Counts;
  selectedFilters: Filters;
  products: Product[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange,
  priceCounts,
  colorCounts,
  categoryCounts,
  selectedFilters,
  products,
}) => {
  // Determine the max price from products
  const maxPrice = Math.max(...products.map((product) => product.price));
  const priceRangeStep = 100; // Define the step for each price range
  const priceRanges = [];

  // Dynamically generate price ranges based on max price
  for (let price = 0; price <= maxPrice; price += priceRangeStep) {
    const rangeStart = price;
    const rangeEnd = price + priceRangeStep;
    if (rangeEnd > maxPrice && rangeStart < maxPrice) {
      priceRanges.push(`$${rangeStart} - $${maxPrice}`);
      break;
    } else if (rangeEnd > maxPrice) {
      break;
    } else {
      priceRanges.push(`$${rangeStart} - $${rangeEnd}`);
    }
  }
  // Function to determine if a product's price falls within a given range
  const isPriceInRange = (price: number, range: string): boolean => {
    const [min, max] = range
      .split(" - ")
      .map((value) => parseFloat(value.replace("$", "")));
    return price >= min && price <= max;
  };

  // Generate price filters dynamically based on the products and the defined ranges
  const priceFilters = priceRanges.map((range) => {
    const count = products.filter((product) =>
      isPriceInRange(product.price, range)
    ).length;
    return {
      label: range,
      count,
      defaultChecked: selectedFilters.price.includes(range),
    };
  });

  // Dynamic Color Filters
  const colorFilters = Array.from(
    new Set(
      products.flatMap((product) =>
        typeof product.color === "string" ? [product.color] : product.color
      )
    )
  )
    .sort()
    .map((color) => ({
      label: color,
      count: colorCounts[color] || 0,
      defaultChecked: selectedFilters.color.includes(color),
    }));

  const categoryFilters = Array.from(
    new Set(products.map((product) => product.category))
  )
    .sort()
    .map((category) => ({
      label: category,
      count: categoryCounts[category] || 0,
      defaultChecked: selectedFilters.category.includes(category),
    }));

  return (
    <div className="col-lg-3 col-md-4">
      <FilterSection
        title="Filter by price"
        filters={priceFilters}
        idPrefix="price"
        onFilterChange={onFilterChange}
      />
      <FilterSection
        title="Filter by color"
        filters={colorFilters}
        idPrefix="color"
        onFilterChange={onFilterChange}
      />
      <FilterSection
        title="Filter by category"
        filters={categoryFilters}
        idPrefix="category"
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default FilterComponent;
