import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';
import { updateSearchValue, showPreview } from '../../actions/creators';

const mapStateToProps = state => ({
  clients: state.data.clients,
  searchValue: state.data.searchValue,
  previewData: state.data.previewData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onUpdateSearchValue: updateSearchValue,
  onShowPreview: showPreview,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
