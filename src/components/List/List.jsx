import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const List = ({ clients, searchValue, onShowPreview }) => (
  <section>
    <ul className="list">
      {clients.map((client) => {
        if (!client.general.firstName.toLowerCase().includes(searchValue.toLowerCase())) {
          return null;
        }

        return (
          <li
            key={client.contact.email}
            onClick={() => onShowPreview(client)}
            role="presentation"
          >
            <img
              className="icon"
              src={client.general.avatar}
              alt={client.general.firstname}
            />
            <span>
              Firstname:
              {client.general.firstName}
            </span>
            <span>
              Lastname:
              {client.general.lastName}
            </span>
            <span>
              Job title:
              {client.job.title}
            </span>
          </li>
        );
      })}
    </ul>
  </section>
);

List.propTypes = {
  clients: propTypes.string.isRequired,
  searchValue: propTypes.string.isRequired,
  onShowPreview: propTypes.func.isRequired,
};

export default List;
