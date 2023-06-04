import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { getBookings } from '../state/app.selectors';
import { Booking } from '../state/booking';
import { LocalStorageSyncService } from 'src/services/localstorage-sync.service';
import { UnsubscribingComponent } from '../common-components/unsubscribing.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent extends UnsubscribingComponent implements OnInit {
  bookings!: Booking[];

  constructor(
    private store: Store<AppState>,
    private localStorageSyncService: LocalStorageSyncService
  ) {
    super();
  }

  ngOnInit(): void {
    this.localStorageSyncService.runSync();

    this.store
      .select(getBookings)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((bookings) => {
        if (bookings) {
          this.bookings = bookings;
        }
      });
  }
}
