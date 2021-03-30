import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToBandsList() {
    this.router.navigate(['/list']);
  }

  navigateToBandProfile() {
    console.log("here")
    this.router.navigate(['/profile']);
  }

  searchByBand() {
    // call service
  }

}
