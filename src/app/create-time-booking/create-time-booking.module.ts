import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsFormComponent } from './booking-details-form/booking-details-form.component';
import { BookingTimeFormComponent } from './booking-time-form/booking-time-form.component';
import { CreateTimeBookingRoutingModule } from './create-time-booking-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingSubmissionFormComponent } from './booking-submission-form/booking-submission-form.component';
import { StoreModule } from '@ngrx/store';
import { draftReducer } from './state/draft.reducers';

@NgModule({
  declarations: [
    BookingDetailsFormComponent,
    BookingTimeFormComponent,
    BookingSubmissionFormComponent,
  ],
  imports: [
    CommonModule,
    CreateTimeBookingRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('draft', draftReducer),
  ],
})
export class CreateTimeBookingModule {}
