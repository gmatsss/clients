import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faHome,
  faCity,
  faBuilding,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./Customerinfo.scss";

interface CustomerInfoProps {
  onSubmit: (formData: any) => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ onSubmit }) => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const validateInput = (event: React.FormEvent<HTMLFormElement>): boolean => {
    event.preventDefault();
    const form = event.currentTarget;
    let isValid = true;
    const errors = [];
    const requiredFields = form.querySelectorAll("[required]");

    requiredFields.forEach((field) => {
      if (!field.value) {
        errors.push(`${field.getAttribute("aria-label")} is required.`);
        isValid = false;
      }
    });

    setValidationErrors(errors);
    if (errors.length > 0) {
      alert(errors.join("\n"));
    }
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validateInput(event)) return; // Prevent form submission if validation fails

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <div className="customer-info">
      <h2 className="form-title">Customer Information</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              <FontAwesomeIcon icon={faUser} /> Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              required
              aria-label="Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FontAwesomeIcon icon={faEnvelope} /> Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
              aria-label="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              <FontAwesomeIcon icon={faPhone} /> Contact Number:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="form-input"
              required
              aria-label="Contact Number"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address" className="form-label">
              <FontAwesomeIcon icon={faHome} /> Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              required
              aria-label="Address"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city" className="form-label">
              <FontAwesomeIcon icon={faCity} /> City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-input"
              required
              aria-label="City"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state" className="form-label">
              <FontAwesomeIcon icon={faBuilding} /> State/Province/Region:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="form-input"
              required
              aria-label="State"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="FbLink" className="form-label">
              <FontAwesomeIcon icon={faGlobe} /> Facebook Link:
            </label>
            <input
              type="url"
              id="FbLink"
              name="FbLink"
              className="form-input"
              required
              aria-label="Facebook Link"
            />
          </div>
        </div>
        <div className="form-submit-row">
          <button type="submit" className="form-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
