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
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {User} from "../../interface/User";
import {UserService} from "../../services/user.service";
import {FieldType} from "../../interface/FieldType";
import {FieldService} from "../../services/field.service";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-field-type-list',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    MatHeaderCellDef,
    MatIconButton,
    MatTooltip,
    MatIcon
  ],
  templateUrl: './field-type-list.component.html',
  styleUrl: './field-type-list.component.css'
})
export class FieldTypeListComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FieldType>;
  dataSource = new MatTableDataSource<FieldType>()

  private fieldService = inject(FieldService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'delete'];

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
    this.fieldService.fieldTypes$.subscribe(list => {
      console.log(list)
      this.dataSource.data = list
    })
  }

  delete(fieldTypeId: FieldType["id"]) {
    this.fieldService.deleteFieldType(fieldTypeId).subscribe()
  }
}
