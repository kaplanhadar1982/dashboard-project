import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";

import { SignalrService } from '../shared/signalr.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  connection;
  constructor(private sinalrService:SignalrService) { }

  ngOnInit() {

      // this.sinalrService.initConnection("http://localhost:5000/hub");
      // this.sinalrService.setlistener("ReceiveMessage",(method:string, appClient:any ) => {
      //     console.log(appClient);
      // });
      // this.sinalrService.setlistener("ReceiveMessage2",(method:string, appClient:any ) => {
      //   console.log(appClient);
    //});

      //  this.connection  = new signalR.HubConnectionBuilder()
      // .withUrl("http://localhost:5000/hub")
      // .build();

      // this.connection.start().catch(err => document.write(err));

      // this.connection.on("ReceiveMessage", (method:string, appClient:any ) => {
      //     console.log(appClient);
      // });
  }
  // onClick(){
  //   console.log(1);
  //   this.connection.invoke("SendMessage", "fdsfdsfsd", "message")
  //       .then(() =>{
  //         console.log("invoke");
  //       })
  //       .catch(function (err) {
  //       return console.error(err.toString());
  //   });
  // }
}
