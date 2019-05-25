import { Action } from '@ngrx/store';

import { IAppClient } from '../client.model';

export const SET_CLIENTS = 'SET_CLIENTS';

export class setClients implements Action {
  readonly type = SET_CLIENTS;

  constructor(public payload: IAppClient[]) {}
}

export type ShoppingListActions =
    setClients 