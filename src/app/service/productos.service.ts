import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  juegosPortadas = [
    {
      image: './assets/portadas/pikmin4Portada.png',
      name: 'pikmin 4',
      description: 'Get double the points*-Offer ends 7/23',
      console: 'Nintendo Switch'
    },{
      image: './assets/portadas/pikmin1Portada.png',
      name: 'pikmin 1',
      description: 'Pimin 1+2-Available now',
      console: 'Nintendo Switch'
    },{
      image: './assets/portadas/zeldaPortada.png',
      name: 'Zeld',
      description: 'Tears of the kingdom-Available now',
      console: 'Nintendo Switch'
    },{
      image: './assets/portadas/mariokart8Portda.png',
      name: 'Mario Kart 8',
      description: 'Mario Kart 8 Deluxe DLC Wave 5-Available now',
      console: 'Nintendo Switch'
    },{
      image: './assets/portadas/everybodySwitchPortada.png',
      name: 'EveryBody Switch',
      description: 'Everybody 1-2-Switch!-Available now',
      console: 'Nintendo Switch'
    }
  ];


  devolverLista() {
    return this.juegosPortadas;
  }
}
