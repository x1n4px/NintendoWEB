import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isStoreOpen = false;
  toggleMenu(type: string) {
    console.log(type);
    if(type === 'games'){
      this.isMenuOpen = !this.isMenuOpen;

    }else if(type === 'Store'){
      this.isStoreOpen = !this.isStoreOpen;
    }
  }
}
