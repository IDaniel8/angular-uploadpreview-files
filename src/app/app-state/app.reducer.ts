import { entityReducer, EntityState } from './entity-state/entity.reducer';
import { homeReducer, HomeState } from './home-state/home.reducer';

export interface AppState {
  [entityReducer.name]: EntityState;
  [homeReducer.name]: HomeState;
}

export const appReducer = {
  [entityReducer.name]: entityReducer.reducer,
  [homeReducer.name]: homeReducer.reducer,
};
