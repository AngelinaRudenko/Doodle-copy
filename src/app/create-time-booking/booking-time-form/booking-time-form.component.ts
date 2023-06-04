import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DraftState } from '../state/draft.state';
import * as DraftActions from '../state/draft.actions';
import { Booking } from 'src/app/state/booking';
import * as DraftSelectors from '../state/draft.selectors';
import { UnsubscribingComponent } from 'src/app/common-components/unsubscribing.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-booking-time-form',
  templateUrl: './booking-time-form.component.html',
  styleUrls: ['./booking-time-form.component.scss'],
})
export class BookingTimeFormComponent
  extends UnsubscribingComponent
  implements OnInit
{
  private draft!: Booking;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<DraftState>,
    private router: Router
  ) {
    super();

    const today = new Date();
    let weekAfterToday = new Date();
    weekAfterToday.setDate(today.getDate() + 7);

    this.form = this.fb.group({
      dateFrom: [this.formatDateForDatePicker(today), Validators.required],
      dateTo: [
        this.formatDateForDatePicker(weekAfterToday),
        Validators.required,
      ],
      timeFrom: ['09:00', Validators.required],
      timeTo: ['18:00', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store
      .select(DraftSelectors.getDraft)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((draft) => {
        if (draft) {
          this.draft = draft;
        }
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
          ...this.draft,
          dateFrom: this.getField('dateFrom').value,
          dateTo: this.getField('dateTo').value,
          timeFrom: this.getField('timeFrom').value,
          timeTo: this.getField('timeTo').value,
        },
      })
    );

    this.router.navigate(['/booking-submission-form']);
  }

  private formatDateForDatePicker(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
