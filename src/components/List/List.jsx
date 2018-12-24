import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const onRenderTemplate = (isFetching, clients, onShowPreview, onRemoveClient) => {
  if (isFetching) {
    return <p className="loadblock">Loading...</p>;
  }

  return clients.map(client => (
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
  ));
};

const List = ({
  isFetching, clients, onShowPreview, onRemoveClient,
}) => (
  <section className="listblock">
    <ul className="list">
      {onRenderTemplate(isFetching, clients, onShowPreview, onRemoveClient)}
    </ul>
  </section>
);

List.propTypes = {
  isFetching: propTypes.bool.isRequired,
  clients: propTypes.instanceOf(Array).isRequired,
  onShowPreview: propTypes.func.isRequired,
  onRemoveClient: propTypes.func.isRequired,
};

export default List;
