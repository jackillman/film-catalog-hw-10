import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmService } from './shared/film.service';
import { SearchComponent } from './search/search.component';
import { ChangeViewComponent } from './change-view/change-view.component';
import { FormComponent } from './form/form.component';
// import { WindowRefService } from './window-ref.service';

import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmCardComponent,
    SearchComponent,
    ChangeViewComponent,
    FormComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NguiAutoCompleteModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FilmService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
