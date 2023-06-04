import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DraftState } from '../state/draft.state';
import { Booking } from 'src/app/state/booking';
import * as DraftSelectors from '../state/draft.selectors';
import { AppState } from 'src/app/state/app.state';
import { saveBooking } from 'src/app/state/app.actions';
import { UnsubscribingComponent } from 'src/app/common-components/unsubscribing.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-booking-submission-form',
  templateUrl: './booking-submission-form.component.html',
  styleUrls: ['./booking-submission-form.component.scss'],
})
export class BookingSubmissionFormComponent
  extends UnsubscribingComponent
  implements OnInit
{
  public draft!: Booking;

  constructor(
    private draftStore: Store<DraftState>,
    private appStore: Store<AppState>,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.draftStore
      .select(DraftSelectors.getDraft)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((draft) => {
        if (draft) {
          this.draft = draft;
        }
      });
  }

  save(): void {
    this.appStore.dispatch(
      saveBooking({
        booking: this.draft,
      })
    );

    this.router.navigate(['/']);
  }
}
