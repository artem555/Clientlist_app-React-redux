import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const List = ({
  clients, searchValue, onShowPreview, onRemoveClient,
}) => (
  <section className="listblock">
    <ul className="list">
      {clients.map((client) => {
        if (
          !client.general.firstName.toLowerCase().includes(searchValue.toLowerCase())
          && !client.general.lastName.toLowerCase().includes(searchValue.toLowerCase())
          && !client.job.title.toLowerCase().includes(searchValue.toLowerCase())
          && !client.job.company.toLowerCase().includes(searchValue.toLowerCase())
          && !client.contact.email.toLowerCase().includes(searchValue.toLowerCase())
          && !client.contact.phone.toLowerCase().includes(searchValue.toLowerCase())
          && !client.address.street.toLowerCase().includes(searchValue.toLowerCase())
          && !client.address.city.toLowerCase().includes(searchValue.toLowerCase())
          && !client.address.zipCode.toLowerCase().includes(searchValue.toLowerCase())
          && !client.address.country.toLowerCase().includes(searchValue.toLowerCase())

        ) {
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
            <button
              type="button"
              key={client.contact.email}
              onClick={() => onRemoveClient(client)}
            />
          </li>
        );
      })}
    </ul>
  </section>
);

List.propTypes = {
  clients: propTypes.instanceOf(Array).isRequired,
  searchValue: propTypes.string.isRequired,
  onShowPreview: propTypes.func.isRequired,
  onRemoveClient: propTypes.func.isRequired,
};

export default List;
