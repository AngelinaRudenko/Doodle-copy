import { createAction, props } from '@ngrx/store';
import { Booking } from 'src/app/state/booking';

export const saveBookingDraft = createAction(
  '[DRAFT] Save booking draft',
  props<{ draft: Booking }>()
);
