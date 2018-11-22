import React from 'react';
import clients from '../../assets/clients.json';
import './style.css';

const List = ({ searchValue, showPreview }) => {
  return (
    <section>
      <ul className="list">
        {clients.map(client => {
          if (!client.general.firstName.toLowerCase().includes(searchValue.toLowerCase())) {
            return null;
          }

          return (
            <li
              key={client.contact.email}
              onClick={() => showPreview(client)}
            >
              <img
                className="icon"
                src={client.general.avatar}
                alt={client.general.firstname}
              />
              <span>Firstname: {client.general.firstName}</span>
              <span>Lastname: {client.general.lastName}</span>
            </li>
          )
        })}
      </ul>
    </section>
  );
};

export default List;
