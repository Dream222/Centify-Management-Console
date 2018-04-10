import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUserIdentity } from 'redux/modules/users'
import { push } from 'react-router-redux';

const mapStateToProps = ({ users }) => ({
  identity: users.get('identity'),
  loadingIdentity: users.get('loadingIdentity'),
  loadedIdentity: users.get('loadedIdentity'),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUserIdentity,
  push,
}, dispatch)

export default (container) => connect(
  mapStateToProps,
  mapDispatchToProps
)(container)
