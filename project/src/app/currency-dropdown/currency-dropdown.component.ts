import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss'],
})
export class CurrencyDropdownComponent {
  selectedCurrency = 'USD'; // Default currency
  currencies = [
    {
      code: 'USD',
      name: 'US Dollar',
      flag: '../../assets/Vectors/flags/unitedstates.svg',
    },
    {
      code: 'EGP',
      name: 'Egyptian Pound',
      flag: '../../assets/Vectors/flags/egypt.svg',
    },
  ];

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('pen');
  }
  selectCurrency(currencyCode: string) {
    this.selectedCurrency = currencyCode;
    this.isDropdownOpen = false; // Close the dropdown after selection
  }
  getFlag(currencyCode: string): string {
    const currency = this.currencies.find((c) => c.code === currencyCode);
    return currency
      ? currency.flag
      : '../../assets/Vectors/flags/unitedstates.svg';
  }
}
