import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ClientComponent } from './dashboard-client-management/client/client.component';
import { ClientsPanelComponent } from './dashboard-client-management/clients-panel/clients-panel.component';
import { SignalrService } from './shared/signalr.service';


@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    ClientComponent,
    ClientsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SignalrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
