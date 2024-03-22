import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) { }

  goToPage(address: string) {
    this.router.navigate(['/' + address + '']);
  }

  goToBlog() {
    window.open("https://abhinav3254.hashnode.dev/")
  }

}
