import { Component } from '@angular/core';
import { CurrencyDropdownComponent } from '../currency-dropdown/currency-dropdown.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  declarations: any[] = [CurrencyDropdownComponent];
  title = 'home';
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
