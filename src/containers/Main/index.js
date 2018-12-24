import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';
import {
  showPreview, removeClient, getSearchableValue, loadRequest,
} from '../../actions/creators';

const mapStateToProps = state => ({
  clients: state.data.clients,
  previewData: state.data.previewData,
  isFetching: state.data.isFetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onShowPreview: showPreview,
  onRemoveClient: removeClient,
  onGetSearchableValue: getSearchableValue,
  onLoadRequest: loadRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
