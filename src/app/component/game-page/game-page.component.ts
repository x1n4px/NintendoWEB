import { Component } from '@angular/core';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {
  GameList: any[] = [];
  constructor(private gameService: GamesService) {
    this.getGames();
  }


  getGames() {
    this.gameService.getAllGames().subscribe((games) => {
      this.GameList = games;
      console.log(games);
    }, error => {
      console.log(error);
    })
  }

  isFechaMayorQueActual(fechaString: string): boolean {
    const fechaActual = new Date();
    const fechaDada = new Date(fechaString);

    return fechaDada > fechaActual;
  }

  isNew(fechaString: string): boolean {

    const date = new Date(fechaString);
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // Restar 30 días a la fecha actual

    return date >= thirtyDaysAgo && date <= today;
  }
}
