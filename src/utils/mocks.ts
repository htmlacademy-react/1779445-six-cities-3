import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createAPI } from '../services/api.ts';
import { State } from '../types/state.ts';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
