import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// HttpClientModule needed to enable HTTP requests.
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import HttpClientModule into NgModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
