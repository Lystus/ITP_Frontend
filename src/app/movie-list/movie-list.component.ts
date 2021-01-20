import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MovieListDataSource } from './movie-list-datasource';
import { Movie } from '../../api/model/movie';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'moviereco-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Movie>;
  dataSource: MovieListDataSource;
  dataSourceLength: Observable<number> = of(300);

  constructor(private store: Store) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['movieId', 'title'];

  ngOnInit() {
    this.dataSource = new MovieListDataSource(this.store);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
