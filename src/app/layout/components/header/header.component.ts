import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('clickMenuToggle') clickMenuToggle = new EventEmitter();
  showMenu: boolean;

  constructor() { }

  ngOnInit() {
    this.showMenu = true;
    this.toggleMenu();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.clickMenuToggle.emit(this.showMenu);
  }

}
