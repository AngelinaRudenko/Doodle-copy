export interface Booking {
  title: string;
  description: string | null;
  location: string | null;
  dateFrom: Date;
  dateTo: Date;
  timeFrom: string;
  timeTo: string;
}
