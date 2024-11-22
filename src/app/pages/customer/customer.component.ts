import {Component, inject, ViewChild} from '@angular/core';

import {FormBuilder, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {UserService} from '../../services/user.service';
import {User} from '../../interface/User';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class CustomerComponent {
  userService: UserService = inject(UserService);

  @ViewChild('formDirective')
  private formDirective!: NgForm;

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    telephone: [null, Validators.required],
    password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    country: [null, Validators.required],
    city: [null, Validators.required],
    houseNo: [null, Validators.required],
    street: [null, Validators.required],
    zip: [null, Validators.required],
  });

  onSubmit(): void {

    if (this.addressForm.valid) {
      const newUser: User = {
        firstname: this.addressForm.controls['firstname'].value || '',
        lastname: this.addressForm.controls['lastname'].value || '',
        email: this.addressForm.controls['email'].value || '',
        phone: this.addressForm.controls['telephone'].value || '',
        password: this.addressForm.controls['password'].value || '',
        country: this.addressForm.controls['country'].value || '',
        city: this.addressForm.controls['city'].value || '',
        houseNo: this.addressForm.controls['houseNo'].value || '',
        street: this.addressForm.controls['street'].value || '',
        zip: this.addressForm.controls['zip'].value || '',
      };


      this.userService.createUser(newUser)
        .subscribe(user => {
          if(user != null) {
            this.addressForm.reset( {})
          }
        });
    }

  }

  protected readonly JSON = JSON;
}
