import {AfterViewInit, Component, inject, OnDestroy, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatTooltip} from "@angular/material/tooltip";
import {FieldType} from "../../interface/FieldType";
import {FieldService} from "../../services/field.service";
import {Field} from "../../interface/Field";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-field-list',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    MatTooltip,
    MatHeaderCellDef
  ],
  templateUrl: './field-list.component.html',
  styleUrl: './field-list.component.css'
})
export class FieldListComponent implements OnDestroy, AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Field>;
  dataSource = new MatTableDataSource<Field>()

  private fieldService = inject(FieldService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'openingTimes', 'timeslotDuration', 'delete'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.refreshData()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnDestroy() {

  }

  refreshData() {
    this.fieldService.fields$.subscribe(list => {
      console.log(list)

      this.dataSource.data = list
    })
  }

  delete(fieldId: Field["id"]) {
    this.fieldService.deleteField(fieldId).subscribe()
  }

}
