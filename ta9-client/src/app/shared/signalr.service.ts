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
      .withUrl(environment.signalrHub + "?clientid=" + this.getSessionId())
      .build();

      this.connection.start().catch(err => document.write(err));
  }

  setlistener(eventName:string,eventHandler:Function){
    this.connection.on(eventName, eventHandler);
  }

  setInvoke(eventName:string,Invo:Function):Promise<any>{
       return this.connection.invoke(eventName);
  }

  getSessionId()
  {
    var sessionId = window.sessionStorage.sessionId;
    
    if (!sessionId)
    {
        sessionId = window.sessionStorage.sessionId = Math.floor((Math.random() * 10000000000) + 1).toString();
    }
    console.log("sessionId:" + sessionId)
    return sessionId;
  }
}
