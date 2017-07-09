import { Component, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Каталог фильмов';

constructor( private renderer: Renderer){
this.renderer.listenGlobal('window', 'scroll', (evt) => {
  this.gotoTop();
  console.log("renderer");

});


}
  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/filmList', icon: 'theaters', label: 'Все фильмы'},
    { path: '/profile', icon: 'person', label: 'Профиль'},
    { path: '/form', icon: 'list', label: 'Форма'}
  ];

gotoTop() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}


goTop(){
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("up");

  
  }
}
