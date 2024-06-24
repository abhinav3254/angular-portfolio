import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  NAV_ITEMS: string[] = ['Home', 'Blogs', 'About', 'Skills', 'Work'];

  constructor(private router: Router) { }

  goToBlog() {
    window.open("https://abhinav3254.hashnode.dev/")
  }

  changePath(name: string): void {
    if (name.toLowerCase() === 'blogs') {
      this.goToBlog();
    } else {
      this.router.navigate([`/${name.toLowerCase()}`]);
    }
  }

}
