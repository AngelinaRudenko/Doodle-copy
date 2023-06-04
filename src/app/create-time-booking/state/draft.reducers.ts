import { createReducer, on } from '@ngrx/store';
import { DraftState, initialDraft } from './draft.state';
import * as DraftActions from './draft.actions';

export const draftReducer = createReducer<DraftState>(
  initialDraft,
  on(DraftActions.saveBookingDraft, (state, action): DraftState => {
    return {
      // ...state,

      // for booking draft state I want to replace state with new state
      draft: action.draft
    };
  })
);
