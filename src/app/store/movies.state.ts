import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Movie, MoviesService } from '../../api';
import { GetMovies } from './movie.actions';


export interface MovieStateModel {
  movies: Movie[];
  currentMovie: Movie;
}

@State<MovieStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
    currentMovie: null,
  }
})
@Injectable()
export class MovieState {
    constructor(private movieApi: MoviesService){}

    @Selector()
    static movies(state: MovieStateModel){
        return [...state.movies];
    }

    @Action(GetMovies)
    getMovies({patchState}: StateContext<MovieStateModel>, payload: GetMovies){
        this.movieApi.moviesGetMoviesPage(
            payload.limit, 
            payload.offset,
            payload.asc).subscribe((data) => {
                console.log(data);
                
                patchState({
                    movies: data
                  });
            });
    }
}