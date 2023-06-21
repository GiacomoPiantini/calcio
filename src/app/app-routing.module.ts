import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'formation',
    component: FormationComponent,
  },
  {
    path: 'player/:id',
    component: PlayerComponent,
  },
  { path: '**', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }