import {inject, Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {FieldType} from "../interface/FieldType";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private httpService = inject(HttpService);
  fieldTypes$ = new BehaviorSubject<FieldType[]>([])

  constructor() {
    this.httpService.getAllFieldTypes().subscribe(fieldTypes => this.fieldTypes$.next(fieldTypes))
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
}
