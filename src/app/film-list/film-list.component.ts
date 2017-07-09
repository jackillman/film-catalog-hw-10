import { Component, OnInit, Inject } from '@angular/core';
import { FilmService } from '../shared/film.service';



import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'film-list',
  templateUrl: 'film-list.component.html',
  styleUrls: ['film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList: any[] = [];
  filmName: string;
  pageNumber: string;
  viewReq: number;
  rowHeightRequired: string;
  term$ = new Subject<string>();
  constructor(private filmListService: FilmService) { 
         this.term$.subscribe( term => this.getFilms(term));
  }

  ngOnInit() {
    this.filmName = "lord";
    this.pageNumber = "1";
    this.viewReq = 1;
    this.rowHeightRequired = "1000px";
    this.selectView(this.viewReq);
    this.getFilms(this.filmName);
   
  }

  private getFilms(filmName: string): void {
    if(filmName) {
      this.filmListService.getFilms(filmName, this.pageNumber)
        .subscribe(
          (films: any[]) => {
            if (films && films.length) {
              this.filmList = this.filmList.concat(films);
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  getNewFilms(filmName: string): void {
    this.filmName = filmName;
    this.pageNumber = "1";
    this.filmList = [];
    this.getFilms(this.filmName)
  }

  addFilms(filmName: string): void {
    if (this.filmName === filmName) {
      this.getFilms(this.filmName);
    } else {
      this.getNewFilms(filmName);
    }
  }

  addMoreFilms(): void {
    this.pageNumber = String(parseInt(this.pageNumber) + 1);
    this.getFilms(this.filmName);
  }

  selectView(view: number): void {
    this.viewReq = view;
    this.setRowHeight(view);
  }

  setRowHeight(view: number): void {
    view === 1 ? this.rowHeightRequired = "1000px" : this.rowHeightRequired = "450px";
  }



}

