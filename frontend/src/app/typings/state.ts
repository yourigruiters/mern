/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ThemeState } from '../redux/theme/reducer';

export interface ReduxState {
  theme: ThemeState;
}

export interface ReduxActionState {
  type: string;
  payload?: any;
}
