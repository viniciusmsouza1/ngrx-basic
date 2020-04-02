import { Person } from '../person';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export interface AppState {
    people: fromPersonReducer.PeopleState;

}

export const appReducers : ActionReducerMap<AppState> = {
    people: fromPersonReducer.reducer
}

//export const selectPeople = (state: AppState) => state.people;

// export const selectPeopleCount = createSelector(
//     selectPeople,
//     (people) => people.length
// )