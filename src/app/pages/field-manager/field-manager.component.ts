import { Component } from '@angular/core';
import {FieldFormComponent} from "../../components/field-form/field-form.component";
import {FieldTypeListComponent} from "../../components/field-type-list/field-type-list.component";
import {MatDialogActions} from "@angular/material/dialog";
import {FieldTypeFormComponent} from "../../components/field-type-form/field-type-form.component";
import {FieldListComponent} from "../../components/field-list/field-list.component";

@Component({
  selector: 'app-field-manager',
  standalone: true,
  imports: [
    FieldFormComponent,
    FieldTypeListComponent,
    MatDialogActions,
    FieldTypeFormComponent,
    FieldListComponent
  ],
  templateUrl: './field-manager.component.html',
  styleUrl: './field-manager.component.css'
})
export class FieldManagerComponent {

}
