import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingTimeFormComponent } from './booking-time-form/booking-time-form.component';
import { BookingDetailsFormComponent } from './booking-details-form/booking-details-form.component';
import { BookingSubmissionFormComponent } from './booking-submission-form/booking-submission-form.component';

const routes: Routes = [
  { path: "booking-details-form", component: BookingDetailsFormComponent },
  { path: 'booking-time-form', component: BookingTimeFormComponent },
  { path: 'booking-submission-form', component: BookingSubmissionFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTimeBookingRoutingModule {}
