import React from 'react';
import propTypes from 'prop-types';
import SearchInput from '../../components/SearchInput/SearchInput';
import List from '../../components/List/List';
import Preview from '../../components/Preview/Preview';
import './style.css';

const Main = ({
  clients, searchValue, previewData, onUpdateSearchValue, onShowPreview, onRemoveClient,
}) => (
  <div className="main">
    <SearchInput
      searchValue={searchValue}
      onUpdateSearchValue={onUpdateSearchValue}
    />
    <List
      clients={clients}
      searchValue={searchValue}
      onShowPreview={onShowPreview}
      onRemoveClient={onRemoveClient}
    />
    <Preview
      previewData={previewData}
    />
  </div>
);

Main.propTypes = {
  clients: propTypes.instanceOf(Array).isRequired,
  searchValue: propTypes.string.isRequired,
  previewData: propTypes.shape({
    general: propTypes.shape({
      firstName: propTypes.string.isRequired,
      lastName: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
    }).isRequired,
    job: propTypes.shape({
      company: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
    }).isRequired,
    contact: propTypes.shape({
      email: propTypes.string.isRequired,
      phone: propTypes.string.isRequired,
    }).isRequired,
    address: propTypes.shape({
      street: propTypes.string.isRequired,
      city: propTypes.string.isRequired,
      zipCode: propTypes.string.isRequired,
      country: propTypes.string.isRequired,
    }).isRequired,
  }),
  onUpdateSearchValue: propTypes.func.isRequired,
  onShowPreview: propTypes.func.isRequired,
  onRemoveClient: propTypes.func.isRequired,
};

Main.defaultProps = {
  previewData: null,
};

export default Main;
