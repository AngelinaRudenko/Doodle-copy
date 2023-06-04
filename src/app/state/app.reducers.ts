import { createReducer, on } from '@ngrx/store';
import { AppState, initialAppState } from './app.state';
import * as AppActions from './app.actions';

export const appReducer = createReducer(
  initialAppState,
  on(AppActions.saveBooking, (state, action): AppState => {
    return {
      ...state,
      // add new booking to store
      bookings: [...state.bookings, action.booking],
    };
  }),
  on(AppActions.loadStateFromLocalStorage, (state, action): AppState => {
    // ignore existing state
    return {
      ...state,
      bookings: action.bookings,
    };
  }),
  on(AppActions.deleteBooking, (state, action): AppState => {
    return {
      ...state,
      bookings: [...state.bookings.slice(0, action.index), ...state.bookings.slice(action.index + 1)],
    };
  })
);
