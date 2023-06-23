import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';
import { delay } from 'rxjs';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

  currentId = this.activatedRoute.snapshot.params['id']
  formation: Player[]=[];
  isLoading = true;

  constructor(
    private teamsService: TeamsService,
    private activatedRoute: ActivatedRoute
  ){
    this.getPlayers()
  }


  getPlayers(){
    this.isLoading = true;
    console.log(this.currentId)
    this.teamsService.getFormation(this.currentId)
    .pipe(delay(500))
    .subscribe(
      (res: any) => {
      const playersData: any[] = res[0].response;
      this.formation = playersData.map((players: any) => {
        const { player, statistics } = players;
        return {
        id: player.id,
        name: player.firstname,
        lastname: player.lastname,
        age: player.age,
        weight: player.weight,
        height: player.height,
        nationality: player.nationality,
        position: statistics[0].games.position,
        photo: player.photo
      }
      });
      console.log("Formazione della squadra scelta:", this.formation);
      this.isLoading = false;
    })
  }
}
