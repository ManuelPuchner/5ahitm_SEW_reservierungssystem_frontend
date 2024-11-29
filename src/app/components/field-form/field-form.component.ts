import {Component, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FieldService} from "../../services/field.service";
import {Field} from "../../interface/Field";

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
    ReactiveFormsModule,
    MatSuffix
  ],
  templateUrl: './field-form.component.html',
  styleUrl: './field-form.component.css'
})
export class FieldFormComponent {
  fieldService = inject(FieldService);

  @ViewChild('formDirective')
  private formDirective!: NgForm;

  private fb = inject(FormBuilder);
  fieldForm = this.fb.group({
    name: [null, Validators.required],
    timeslotDuration: [null, Validators.required],
    openTime:  [null, Validators.required],
    closeTime:  [null, Validators.required],
    fieldType:  [null, Validators.required],
  });

  onSubmit(): void {

    if (this.fieldForm.valid) {
      const newField = {
        name: this.fieldForm.controls['name'].value || '',
        timeslotDuration: Number(this.fieldForm.controls['timeslotDuration'].value) || -1,
        openTime: this.fieldForm.controls['openTime'].value || '',
        closeTime: this.fieldForm.controls['closeTime'].value || '',
        type: {
          id: this.fieldForm.controls['fieldType'].value || -1
        },
      };



    }

  }
}
