import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Define the prop types for the component
interface SortingAndShowingComponentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SortingAndShowingComponent: React.FC<SortingAndShowingComponentProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="col-12 pb-1">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <button className="btn btn-sm btn-light">
            <i className="fa fa-th-large"></i>
          </button>
          <button className="btn btn-sm btn-light ml-2">
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="ml-2">
          <div className="btn-group">
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                className="modern-search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingAndShowingComponent;
