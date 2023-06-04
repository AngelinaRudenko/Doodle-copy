import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

const getAppState = createFeatureSelector<AppState>('bookings');

export const getBookings = createSelector(
  getAppState,
  (state) => state.bookings
);
