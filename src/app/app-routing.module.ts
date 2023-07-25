import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GamePageComponent } from './component/game-page/game-page.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'games', component: GamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
