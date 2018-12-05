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
  clients: propTypes.string.isRequired,
  searchValue: propTypes.string.isRequired,
  previewData: propTypes.string.isRequired,
  onUpdateSearchValue: propTypes.func.isRequired,
  onShowPreview: propTypes.func.isRequired,
  onRemoveClient: propTypes.func.isRequired,
};

export default Main;
