import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {MatTableModule, MatTable, MatTableDataSource} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import {Reservation} from "../../interface/Reservation";
import {HttpService} from "../../services/http.service";
import {ReservationService} from "../../services/reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class ReservationListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Reservation>;
  dataSource = new MatTableDataSource<Reservation>()

  private reservationService = inject(ReservationService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'start', 'end', 'field'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.refreshData()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  refreshData() {
    this.reservationService.getReservationList().subscribe(list => {
      this.dataSource.data = list
    })
  }
}
