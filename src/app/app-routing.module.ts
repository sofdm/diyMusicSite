import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandProfileComponent } from './band-profile/band-profile.component';
import { HomeComponent } from './home/home.component';
import { ListOfBandsComponent } from './list-of-bands/list-of-bands.component';


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: BandProfileComponent },
  { path: 'list', component: ListOfBandsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
