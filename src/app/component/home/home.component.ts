import { Component } from '@angular/core';
import { CharactersService } from 'src/app/service/characters.service';
import { NewsService } from 'src/app/service/news.service';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaJuegos: any[] = [];
  listaNews: any[] = [];
  listaCharacters: any[] = [];
  x: number = 0;
  constructor(private productService: ProductosService,
    private newsService: NewsService,
    private characterService: CharactersService) {
    this.listaJuegos = productService.devolverLista();
    this.listaNews = newsService.devolverNews();
    this.listaCharacters = characterService.returnCharacters();
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
