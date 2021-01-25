import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
import { DetailviewComponent } from './detailview/detailview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HomeComponent,
    TestingTableComponent,
    DetailviewComponent,
  ],
  imports: [
    NgxsModule.forRoot([MovieState], {
      developmentMode: true,
    }),
    HttpClientModule,
    ApiModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
