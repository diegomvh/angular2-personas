import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hola {{ nombre }}</h1>
    <input [(ngModel)]="nombre" placeholder="Nombre"/>
  `
})
export class AppComponent {
  nombre: String;
  constructor() {
  }
}