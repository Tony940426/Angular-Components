import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //If you have AppRoutingModule above the other modules. The routes that are relevant
    //to AppRouting will be first (NotFound and Home), this will override the elements and
    //collections routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
