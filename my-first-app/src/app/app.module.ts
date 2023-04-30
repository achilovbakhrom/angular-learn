import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppSuccessMessageComponent } from './app-success-message/app-success-message.component';
import { AppErrorMessageComponent } from './app-error-message/app-error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSuccessMessageComponent,
    AppErrorMessageComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
