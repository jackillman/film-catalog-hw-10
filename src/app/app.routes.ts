import { Routes } from "@angular/router";



import { FormComponent } from "./form/form.component";
import { FilmListComponent } from "app/film-list/film-list.component";


export const routes: Routes = [
   
    { path: "film-list",    component: FilmListComponent },

 
    { path: "formslog",         component: FormComponent }

];
