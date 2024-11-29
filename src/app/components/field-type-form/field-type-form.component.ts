import {Component, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {UserService} from "../../services/user.service";
import {User} from "../../interface/User";
import {FieldType} from "../../interface/FieldType";
import {FieldService} from "../../services/field.service";

@Component({
  selector: 'app-field-form',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatError,
        MatFormField,
        MatInput,
        ReactiveFormsModule
    ],
  templateUrl: './field-form.component.html',
  styleUrl: './field-form.component.css'
})
export class FieldFormComponent {
  fieldService = inject(FieldService);

  @ViewChild('formDirective')
  private formDirective!: NgForm;

  private fb = inject(FormBuilder);
  fieldTypeForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required]
  });

  onSubmit(): void {

    if (this.fieldTypeForm.valid) {
      const newFieldType: FieldType = {
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
}
