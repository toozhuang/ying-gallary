/**
 * date: 2023-02-15, Wed, 9:48
 * author: Wang
 * feature： 全局的获取store中状态的方法
 */

import { initialState } from './store';
import { createSelector } from 'reselect';

const selectGlobal = (state: any) => state.global || initialState;

const makeIsLoggedSelector = () =>
  createSelector(selectGlobal, (globalState) => globalState.isLogged);

export { makeIsLoggedSelector };
