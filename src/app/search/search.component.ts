import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filmName: string;
  @Output()
  getFilms = new EventEmitter<string>();

  constructor() { }

  getNewFilms(): void {
    this.getFilms.emit(this.filmName);
  }
}
