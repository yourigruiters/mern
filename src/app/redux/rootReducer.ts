import themeReducer from './theme/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
