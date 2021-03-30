import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BandProfileComponent } from './band-profile/band-profile.component';
import { ListOfBandsComponent } from './list-of-bands/list-of-bands.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BandProfileComponent,
    ListOfBandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
