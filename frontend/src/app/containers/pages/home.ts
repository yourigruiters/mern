import { setTheme } from './../../redux/theme/actions';
import { connect } from 'react-redux';
import HomeView from '../../pages/home/Home.page';

const mapStateToProps = null;

const mapDispatchToProps = {
  setTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView) as any;
