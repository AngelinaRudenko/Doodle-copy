import { Booking } from 'src/app/state/booking';

export interface DraftState {
  draft: Booking | null;
}

export const initialDraft: DraftState = {
  draft: null
}
