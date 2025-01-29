import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  contacts = ["insta", "twitter", "git"]

  getContacts(contact: String): String {
    return "/assets/" + contact.toLowerCase() + ".svg";
  }

  navigate(contact: String) {
    if (contact == "insta") {
      window.open("https://www.instagram.com/__abhinav__jha__/", "_blank");
    }
    if (contact == "twitter") {
      window.open("https://x.com/abhinavJha3254", "_blank");
    } else {
      window.open("https://github.com/abhinav3254", "_blank");

    }

  }

}
