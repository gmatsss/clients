import React, { useState } from "react";

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  filters,
  idPrefix,
  onFilterChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterLabel: string
  ) => {
    onFilterChange(idPrefix, filterLabel);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredFilters = filters.filter((filter) =>
    filter.label.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">{title}</span>
      </h5>
      <div className="filter-search mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={`Search in ${title.toLowerCase()}`}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filter-scrollable-area bg-light p-4 mb-30">
        <form>
          {filteredFilters.map((filter, index) => (
            <div
              key={index}
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id={`${idPrefix}-${index}`}
                onChange={(e) => handleCheckboxChange(e, filter.label)}
                checked={filter.defaultChecked}
                readOnly
              />
              <label
                className="custom-control-label"
                htmlFor={`${idPrefix}-${index}`}
              >
                {filter.label}
              </label>
              <span className="badge border font-weight-normal">
                {filter.count}
              </span>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default FilterSection;
