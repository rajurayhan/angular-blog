import { BrowserModule, Title }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { ArticlesService } from "./services/articles.service";


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Title,
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
