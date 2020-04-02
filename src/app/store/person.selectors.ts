import *  as fromPersonReducer from './person.reducer'
import { createFeatureSelector } from '@ngrx/store';

export const peopleState = createFeatureSelector<fromPersonReducer.PeopleState>('people')

export const {
    selectIds,
    selectAll,
    selectEntities,
    selectTotal

} = fromPersonReducer.peopleAdapter.getSelectors(peopleState);