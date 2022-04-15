import { ReduxState } from '../typings/state';
import App from '../app';
import { connect } from 'react-redux';
import { selectTheme } from '../redux/theme/selectors';

const mapStateToProps = (state: ReduxState) => {
  return {
    reduxTheme: selectTheme(state),
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App) as any;
