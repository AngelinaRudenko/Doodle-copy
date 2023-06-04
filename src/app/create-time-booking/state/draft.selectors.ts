import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DraftState } from './draft.state';

const getDraftFeatureState = createFeatureSelector<DraftState>('draft');

export const getDraft = createSelector(
  getDraftFeatureState,
  (state) => state.draft
);
