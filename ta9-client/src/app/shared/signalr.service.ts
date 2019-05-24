import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import {environment} from '../../environments/environment';


export class SignalrService {
  connection;
  constructor() {
      this.initConnection();
  }

  private initConnection() {

    this.connection  = new signalR.HubConnectionBuilder()
      .withUrl(environment.signalrHub + "?token=" + Math.floor((Math.random() * 100000) + 1).toString())
      .build();

      this.connection.start().catch(err => document.write(err));
  }

  setlistener(eventName:string,eventHandler:Function){
    this.connection.on(eventName, eventHandler);
  }

  setInvoke(eventName:string,Invo:Function):Promise<any>{
       return this.connection.invoke(eventName);
  }
}
