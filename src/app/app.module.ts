import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { NgxsModule } from '@ngxs/store';
import { MovieState } from './store/movies.state';
import { ApiModule } from 'src/api';
import { HttpClientModule } from '@angular/common/http';
import { TestingTableComponent } from './testing-table/testing-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HomeComponent,
    TestingTableComponent
  ],
  imports: [
    NgxsModule.forRoot([MovieState], {
      developmentMode: true
    }),
    HttpClientModule,
    ApiModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
