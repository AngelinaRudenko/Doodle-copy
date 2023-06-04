import { Booking } from "./booking";

export interface AppState {
  bookings: Booking[];
}

export const initialAppState: AppState = {
  bookings: []
}
