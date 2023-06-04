import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export class UnsubscribingComponent implements OnDestroy {
  protected unsubscribe = new Subject<void>();

  // unsubscribe on destroy
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
