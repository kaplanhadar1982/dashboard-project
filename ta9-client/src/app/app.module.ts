import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ClientComponent } from './dashboard-client-management/client/client.component';
import { ClientsPanelComponent } from './dashboard-client-management/clients-panel/clients-panel.component';
import { SignalrService } from './shared/signalr.service';
import { clientsReducer} from './dashboard-client-management/store/clients.reducers';



@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    ClientComponent,
    ClientsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({clientsR: clientsReducer})
  ],
  providers: [SignalrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
