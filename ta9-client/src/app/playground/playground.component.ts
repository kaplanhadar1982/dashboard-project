import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  connection;
  constructor() { }

  ngOnInit() {
       this.connection  = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/hub")
      .build();

      this.connection.start().catch(err => document.write(err));

      this.connection.on("ReceiveMessage", (username: string, message: string) => {
          console.log("message:" + message);
      });
  }
  onClick(){
    console.log(1);
    this.connection.invoke("SendMessage", "fdsfdsfsd", "message")
        .then(() =>{
          console.log("invoke");
        })
        .catch(function (err) {
        return console.error(err.toString());
    });
  }
}
