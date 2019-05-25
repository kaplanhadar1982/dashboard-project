import { Component, OnInit } from '@angular/core';
import {Subscription,Observable} from 'rxjs';
import { Store } from '@ngrx/store';

import {ClientService} from '../client.service';
import {SignalrService} from '../../shared/signalr.service';
import {IAppClient} from '../client.model';
import * as clientsReducers from '../store/clients.reducers';
import * as clientsActions from '../store/clients.actions';

@Component({
  selector: 'app-clients-panel',
  templateUrl: './clients-panel.component.html',
  styleUrls: ['./clients-panel.component.css'],
  providers:[ClientService]
})
export class ClientsPanelComponent implements OnInit {
  clientsState: Observable<clientsReducers.ClientsState>;
  clients:IAppClient[];
  subscription: Subscription;

  constructor(private clientService:ClientService, private signalrService:SignalrService,
    private store: Store<clientsReducers.AppState>) { }

  ngOnInit() {
    // this.subscription = this.clientService.clientsChanged
    //   .subscribe(
    //     (clients: IAppClient[]) => {
    //       this.clients = clients;
    //     }
    //   );
    this.clientsState = this.store.select('clientsR');

     this.signalrService.setlistener("ReceiveMessage",(method:string, appClient:any[] ) => {
           this.store.dispatch(new clientsActions.setClients(appClient));
           //this.clientService.setClients(appClient);
     });
  }

}
