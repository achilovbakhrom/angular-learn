import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppServerComponent } from './app-server/app-server.component'
import { AppServersComponent } from './app-servers/app-servers.component'
import { AppDatabindingTestComponent } from './app-databinding-test/app-databinding-test.component'
@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    AppServersComponent,
    AppDatabindingTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
