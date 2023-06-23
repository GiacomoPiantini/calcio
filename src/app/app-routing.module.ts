import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'formation/:id',
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
