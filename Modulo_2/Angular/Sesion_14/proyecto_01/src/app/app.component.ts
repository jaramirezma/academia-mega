import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Saludo } from './Components/Saludo/saludo.component';
import { CardComponent } from './Components/card/card.component';
import { TarjetaComponent } from './Components/tarjeta/tarjeta.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './Components/todo/todo.component';
import { ProductManagerComponent } from "./Components/product-manager/product-manager.component";
import { HomeComponent } from './Page/home/home.component';
import { ErrorComponent } from './Page/error/error.component';
import { EdadPipe } from './Pipes/edad.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    EdadPipe
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Mi primera SPA';
  author = 'Javier Ramirez';
  perfil = 'Desarrollador Web';
  dato:number = 140
  
  /*Clase 4*/
  isVisible = true;

  frutas = [
    "Manzana", 
    "Platano", 
    "Naranaja", 
    "Uva", 
    "Pera",
    "Piña"
  ];
  

  rolUsuario: string = "admin";
  edad: number = 3;

  tareaImportante: boolean = true;
  
  isUrgente: boolean = false;

  nombre = "Javier Agustin Ramirez Martinez";
  fechaNacimiento = "10/19/1997";
  salario = 10000;
}