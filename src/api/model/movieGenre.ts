/*
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * My Title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/T-Systems-MMS/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */

import { ValidatorFn, Validators } from '@angular/forms';
import { BaseFormControlFactory } from 'openapi-typescript-angular-generator';

import { Genre } from './genre';
import { Movie } from './movie';


export interface MovieGenre { 
    movieId: string;
    movie?: Movie;
    genreId: string;
    genre?: Genre;
}

/**
 * Namespace for property- and property-value-enumerations of MovieGenre.
 */
export namespace MovieGenre {
    /**
     * All properties of MovieGenre.
     */
    export enum Properties {
        movieId = 'movieId',
        movie = 'movie',
        genreId = 'genreId',
        genre = 'genre'
    }

    /**
    * A map of tuples with error name and `ValidatorFn` for each property of MovieGenre.
    */
    export const ModelValidators: {[K in keyof MovieGenre]: [string, ValidatorFn][]} = {
        movieId: [
                ['required', Validators.required],
                ['minlength', Validators.minLength(1)],
        ],
        movie: [
        ],
        genreId: [
                ['required', Validators.required],
        ],
        genre: [
        ],
    };

    /**
    * The FormControlFactory for MovieGenre.
    */
    export class FormControlFactory extends BaseFormControlFactory<MovieGenre> {

        /**
         * Constructor.
         *
         * @param model An existing model for MovieGenre.
         *              If given, all form-controls of the factory automatically have the value of this model. If this
         *              model is not given, all values are `null`.
         */
        constructor(
          model: MovieGenre = {
            movieId: null,
            movie: null,
            genreId: null,
            genre: null,
          }
        ) {
            super(model, MovieGenre.ModelValidators);
        }
    }

}


