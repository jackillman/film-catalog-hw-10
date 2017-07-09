import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'change-view',
  templateUrl: './change-view.component.html',
  styleUrls: ['./change-view.component.css']
})
export class ChangeViewComponent {

  viewCards: number;

  @Output()
  selectView = new EventEmitter<number>();

  constructor() { }

  changeNewView(): void {
    this.selectView.emit(this.viewCards);
  }
  
}
