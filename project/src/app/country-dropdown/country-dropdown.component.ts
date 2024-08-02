// src/app/country-dropdown/country-dropdown.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Currency {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.scss'],
})
export class CountryDropdownComponent implements OnInit {
  currencies: Currency[] = [
    {
      code: 'USD',
      name: 'United States Dollar',
      flag: '../../assets/Vectors/flags/unitedstates.svg',
    },
    {
      code: 'EUR',
      name: 'Euro',
      flag: '../../assets/Vectors/flags/unitedstates.svg',
    },
    {
      code: 'EGP',
      name: 'EGP Pound',
      flag: '../../assets/Vectors/flags/egypt.svg',
    },
  ];

  currencyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.currencyForm = this.fb.group({
      senderAmount: [0],
      senderCurrency: [this.currencies[0].code],
      recipientAmount: [{ value: 0, disabled: true }],
      recipientCurrency: [this.currencies[1].code],
    });
  }

  ngOnInit(): void {
    this.currencyForm.valueChanges.subscribe((values) => {
      this.updateRecipientAmount();
    });
  }

  updateRecipientAmount() {
    const { senderAmount, senderCurrency, recipientCurrency } =
      this.currencyForm.value;

    const conversionRate = this.getConversionRate(
      senderCurrency,
      recipientCurrency
    );

    const recipientAmount = senderAmount * conversionRate;

    this.currencyForm.patchValue(
      {
        recipientAmount: recipientAmount,
      },
      { emitEvent: false }
    ); // Prevents looping of valueChanges
  }

  getConversionRate(senderCurrency: string, recipientCurrency: string): number {
    // Replace this with actual conversion rate fetching logic
    // For demonstration, let's assume a fixed conversion rate of 1.1 for all currencies
    return 1.1;
  }
  get selectedCurrency(): Currency | undefined {
    return this.currencies.find(
      (currency) =>
        currency.code === this.currencyForm.controls['senderCurrency'].value
    );
  }
}
