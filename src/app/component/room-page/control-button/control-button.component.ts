// import { Component, Input, Output, EventEmitter } from '@angular/core';

// export interface MenuItem {
//   label: string;
// }

// @Component({
//   selector: 'app-control-button',
//   templateUrl: './control-button.component.html',
//   styleUrls: ['./control-button.component.css']
// })
// export class ControlButtonComponent {
//   @Input() label!: string;
//   @Input() disabled: boolean = false;
//   @Input() icon: any; // You may need to import FontAwesome icons in Angular.

//   @Input() menuItems: MenuItem[] = [];
//   @Output() menuItemClick: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

//   onClick(): void {
//     // Handle the click event here.
//   }

//   onMenuItemItemClick(item: MenuItem): void {
//     this.menuItemClick.emit(item);
//   }
// }


import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css']
})
export class ControlButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() disabled?: boolean;
  @Input() icon?: IconDefinition;
  @Input() className?: string;
  @Input() popoverContainerClassName?: string;
  @Input() menuItems?: MenuItem[];
  @Input() onMenuItemClick?: (item: MenuItem) => void;

  faChevronDown = faChevronDown;
  menuVisible = false;
  buttonClasses = 'button';

  ngOnInit(): void {
    if (this.className) {
      this.buttonClasses += ` ${this.className}`;
    }
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  handleMenuItemClick(item: MenuItem) {
    this.menuVisible = false;
    if (this.onMenuItemClick) {
      this.onMenuItemClick(item);
    }
  }
}

export interface MenuItem {
  label: string;
}

