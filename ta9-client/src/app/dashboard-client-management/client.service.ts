import { Subject } from 'rxjs';

import {IAppClient} from './client.model';

export class ClientService {
  clientsChanged = new Subject<IAppClient[]>();

  private clients: IAppClient[] =[];

  constructor() {}

  setClients(clients: IAppClient[]) {
    this.clients = clients;
    this.clientsChanged.next(this.clients.slice());
  }

  getClients() {
    return this.clients.slice();
  }

  addClient(client: IAppClient) {
    this.clients.push(client);
    this.clientsChanged.next(this.clients.slice());
  }
}