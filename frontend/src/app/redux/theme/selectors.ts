import { ReduxState } from '../../typings/state';
import { createSelector } from 'reselect';
import { get } from 'lodash-es';

const selectThemeData = (state: ReduxState) => get(state, 'theme');

export const selectTheme = createSelector(
  selectThemeData,
  (themeData) => get(themeData, 'theme'),
);
