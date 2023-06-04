import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from 'src/app/state/app.actions';
import * as AppSelectors from 'src/app/state/app.selectors';
import { AppState } from 'src/app/state/app.state';

const localStorageKey = 'DoodleCopyBookings';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageSyncService {
  private running = false;

  constructor(private store: Store<AppState>) {}

  runSync(): void {
    if (this.running) {
      return;
    }

    this.running = true;

    this.loadStateFromLocalStorage();

    this.store.select(AppSelectors.getBookings).subscribe((bookings) => {
      if (bookings) {
        console.log('sync with storage');
        localStorage.setItem(localStorageKey, JSON.stringify(bookings));
      }
    });

    // fix multiple tabs conflicts
    // synchronize tabs changes
    window.addEventListener('storage', () => this.loadStateFromLocalStorage());
  }

  private loadStateFromLocalStorage(): void {
    const localStorageState = localStorage.getItem(localStorageKey);

    if (!!localStorageState) {
      this.store.dispatch(
        AppActions.loadStateFromLocalStorage({
          bookings: JSON.parse(localStorageState),
        })
      );
    }
  }
}
