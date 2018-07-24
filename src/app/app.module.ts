import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { GameHttpService } from './game-http.service';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'view', component: ViewComponent },
      { path: 'books', component: HomeComponent },
      { path: 'houses', component: HomeComponent },
      { path: 'characters', component: HomeComponent },
      { path: 'books/:bookId', component: ViewComponent },
      { path: 'characters/:characterId', component: ViewComponent },
      { path: 'houses/:houseId', component: ViewComponent },
    ],{useHash:true})
  ],
  providers: [GameHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
