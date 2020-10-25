import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'fernando';
  nombre2 = 'emil helmut zapatA arellaNo';
  arreglo: number[] = [1, 2, 3, 4, 56, 12, 13, 14, 15];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'av oshe si',
      departamento: 'Perú',
    },
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego a la data');
    }, 3500);
  });

  fecha = new Date();
  video = 'DHyBWvpl_xM';
  password = '123-*/-*/123';
  activar: boolean = true;
}
