import { SWITCH_THEME } from './types';
import { ReduxActionState } from '../../typings/state';
import { ThemeType } from 'app/styles/theme';

export interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeReducer = (
  state = initialState,
  action: ReduxActionState,
) => {
  const { type } = action;

  switch (type) {
    case SWITCH_THEME: {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
