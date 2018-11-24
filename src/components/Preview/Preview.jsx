import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const Preview = ({ previewData }) => {
  if (!previewData) {
    return (
      <div>no display result</div>
    );
  }

  return (
    <section className="mainblock">
      <div>
        <img
          className="mainimg"
          src={previewData.general.avatar}
          alt={previewData.general.firstName}
        />
      </div>
      <div>
        <h2>General</h2>
        <span>
          Firstname:
          {previewData.general.firstName}
        </span>
        <span>
          Lastname:
          {previewData.general.lastName}
        </span>
        <h2>Job</h2>
        <span>
          Company:
          {previewData.job.company}
        </span>
        <span>
          Title:
          {previewData.job.title}
        </span>
        <h2>Contact</h2>
        <span>
          Email:
          {previewData.contact.email}
        </span>
        <span>
          Phone:
          {previewData.contact.phone}
        </span>
        <h2>Address</h2>
        <span>
          Street:
          {previewData.address.street}
        </span>
        <span>
          City:
          {previewData.address.city}
        </span>
        <span>
          ZipCode:
          {previewData.address.zipCode}
        </span>
        <span>
          Country:
          {previewData.address.country}
        </span>
      </div>
    </section>
  );
};

Preview.propTypes = {
  previewData: propTypes.func.isRequired,
};

export default Preview;
