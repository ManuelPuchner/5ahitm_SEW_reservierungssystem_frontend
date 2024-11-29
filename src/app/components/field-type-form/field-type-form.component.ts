import {Component, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FieldType} from "../../interface/FieldType";
import {FieldService} from "../../services/field.service";

@Component({
  selector: 'app-field-type-form',
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
  templateUrl: './field-type-form.component.html',
  styleUrl: './field-type-form.component.css'
})
export class FieldTypeFormComponent {
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
      const newFieldType: Omit<FieldType, "id"> = {
        name: this.fieldTypeForm.controls["name"].value || '',
        description: this.fieldTypeForm.controls["description"].value || ''
      };


      this.fieldService.createNewFieldType(newFieldType)
      this.fieldTypeForm.reset();
    }

  }
}
