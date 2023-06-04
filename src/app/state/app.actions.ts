import { createAction, props } from '@ngrx/store';
import { Booking } from 'src/app/state/booking';

export const saveBooking = createAction(
  '[BOOKINGS] Save booking',
  props<{ booking: Booking }>()
);

export const deleteBooking = createAction(
  '[BOOKINGS] Delete booking',
  props<{ booking: Booking }>()
);

export const loadStateFromLocalStorage = createAction(
  '[BOOKINGS] Load state from local storage',
  props<{ bookings: Booking[] }>()
);
