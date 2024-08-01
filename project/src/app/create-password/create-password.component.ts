import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { matchPasswordValidator } from '../validators/matchpassword.validator';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent {
  passwordForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: matchPasswordValidator }
    );
  }
  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Form Submitted', this.passwordForm.value);
    }
  }
}
