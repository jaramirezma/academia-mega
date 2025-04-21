import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi primera SPA';
  author = 'Javier Ramirez';
  perfil = 'Desarrollador Web';
  dato:number = 140
}
