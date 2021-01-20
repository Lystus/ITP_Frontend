import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, of as observableOf, merge } from 'rxjs';

import { Movie } from '../../api/model/movie';
import {GetMovies} from '../store/movie.actions';
import {MovieState} from '../store/movies.state';
import { Store } from '@ngxs/store';
import { map, mapTo, mergeMap } from 'rxjs/operators';


/**
 * Data source for the MovieList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MovieListDataSource extends DataSource<Movie> {
  data: Movie[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private store: Store) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Movie[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(mergeMap(() => this.getPagedData()));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData() {
    console.log("GET PAGED DATA");
    this.store.dispatch(new GetMovies(this.paginator.pageSize,this.paginator.pageIndex,this.sort.direction === 'asc'));
    return this.store.select(MovieState.movies);
  }
}
