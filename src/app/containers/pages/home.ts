import { setTheme } from './../../redux/theme/actions';
import { connect } from 'react-redux';
import HomeView from '../../pages/home/home.page';

const mapStateToProps = null;

const mapDispatchToProps = {
  setTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView) as any;
