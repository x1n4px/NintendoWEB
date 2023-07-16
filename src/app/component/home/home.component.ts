import { Component } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaJuegos: any[] = [];
  x: number = 0;
  constructor(private productService: ProductosService) {
    this.listaJuegos = productService.devolverLista();
  }


  moverSlide(position: number) {
     if (position === 0) {
      if (this.x > 0) {
        this.x -= 4;

      }
    } else if (position === 1) {
      this.x += 4;

    }
    console.log(this.x);
  }
}
