import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleInterceptor } from './interceptors/example.interceptor';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    LoginComponent,
    HomeComponent,
    MovieComponent,
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleInterceptor,
      multi: true,
    },
  ],

  bootstrap: []

})
export class AppModule { }
