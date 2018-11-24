import React from 'react';
import propTypes from 'prop-types';
import clients from '../../assets/clients.json';
import './style.css';

const List = ({ searchValue, showPreview }) => (
  <section>
    <ul className="list">
      {clients.map((client) => {
        if (!client.general.firstName.toLowerCase().includes(searchValue.toLowerCase())) {
          return null;
        }

        return (
          <li
            key={client.contact.email}
            onClick={() => showPreview(client)}
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
  searchValue: propTypes.string.isRequired,
  showPreview: propTypes.func.isRequired,
};

export default List;
