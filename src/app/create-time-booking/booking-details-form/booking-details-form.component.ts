import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { DraftState } from '../state/draft.state';
import * as DraftActions from '../state/draft.actions';
import { Booking } from 'src/app/state/booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details-form',
  templateUrl: './booking-details-form.component.html',
  styleUrls: ['./booking-details-form.component.scss'],
})
export class BookingDetailsFormComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<DraftState>,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      location: [''],
    });
  }

  getField(name: string): AbstractControl {
    return this.form.controls[name];
  }

  continue(): void {
    if (this.form.invalid) {
      alert('Form is invalid. Fill required fields first.');
      return;
    }

    this.store.dispatch(
      DraftActions.saveBookingDraft({
        draft: {
          title: this.getField('title').value,
          description: this.getField('description').value,
          location: this.getField('location').value,
        } as Booking,
      })
    );

    this.router.navigate(['/booking-time-form']);
  }
}
