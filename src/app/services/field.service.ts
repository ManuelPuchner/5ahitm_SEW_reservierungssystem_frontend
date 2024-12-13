import {inject, Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {FieldType} from "../interface/FieldType";
import {CreateField, Field} from "../interface/Field";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private httpService = inject(HttpService);
  fieldTypes$ = new BehaviorSubject<FieldType[]>([])
  fields$ = new BehaviorSubject<Field[]>([]);
  constructor() {
    this.httpService.getAllFieldTypes().subscribe(fieldTypes => this.fieldTypes$.next(fieldTypes))
    this.httpService.getAllFields().subscribe(fields => this.fields$.next(fields))
  }

  createNewFieldType(type: Omit<FieldType, "id">) {
    let createdTypeObs = this.httpService.postFieldType(type);

    if(createdTypeObs != null) {
      createdTypeObs.subscribe(createdType => {
        this.fieldTypes$.next([...this.fieldTypes$.getValue(), createdType]);
      })
    } else {
      throw new Error("FieldType already exists")
    }

  }

  deleteFieldType(id: FieldType["id"]) {
    let deleteObs = this.httpService.deleteFieldType(id)

    if(deleteObs) {
      let newFieldTypes = this.fieldTypes$.getValue().filter(type => type.id != id);
      this.fieldTypes$.next(newFieldTypes)
      return deleteObs;
    } else {
      throw new Error("Could not delete Fieldtype with id " + id)
    }
  }

  createField(field: CreateField) {
    let createdFieldObs = this.httpService.postField(field);

    if(createdFieldObs != null) {
      createdFieldObs.subscribe(createdField => {
        console.log(createdField)
        this.fields$.next([...this.fields$.getValue(), createdField])
      })
    } else {
      throw new Error("Field already exists")
    }
  }

  deleteField(id: Field["id"]) {
    let deleteObs = this.httpService.deleteField(id);

    if(deleteObs) {
      let newFields = this.fields$.getValue().filter(field => field.id != id);
      this.fields$.next(newFields);
      return deleteObs;
    } else {
      throw new Error("Could not delete Field with id " + id)
    }
  }
}
