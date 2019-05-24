import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import {ClientService} from '../client.service';
import {SignalrService} from '../../shared/signalr.service';
import {IAppClient} from '../client.model';

@Component({
  selector: 'app-clients-panel',
  templateUrl: './clients-panel.component.html',
  styleUrls: ['./clients-panel.component.css'],
  providers:[ClientService]
})
export class ClientsPanelComponent implements OnInit {
  clients:IAppClient[];
  subscription: Subscription;

  constructor(private clientService:ClientService, private signalrService:SignalrService) { }

  ngOnInit() {
    this.subscription = this.clientService.clientsChanged
      .subscribe(
        (clients: IAppClient[]) => {
          this.clients = clients;
        }
      );

     this.signalrService.setlistener("ReceiveMessage",(method:string, appClient:any[] ) => {
           this.clientService.setClients(appClient);
     });
  }

}
