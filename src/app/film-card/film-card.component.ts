import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../shared/film.service'

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string;
  @Input()
  view: number;
  filmDetails: any[] = [];
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId)
        .subscribe(
          (filmDetails: any[]) => {
            if(filmDetails){
              this.filmDetails = filmDetails;
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

}


