import * as clientsActions from './clients.actions';

import { IAppClient } from '../client.model';

export interface AppState {
    clientsR: ClientsState
}

export interface ClientsState {
    clients: IAppClient[];
}

const initialState: ClientsState = {
    clients: [
    ]
};

export function clientsReducer(state = initialState, action: clientsActions.ShoppingListActions) {
  switch (action.type) {
    case clientsActions.SET_CLIENTS:
      return {
        ...state,
        clients: [...action.payload]
      };
    default:
      return state;
  }
}