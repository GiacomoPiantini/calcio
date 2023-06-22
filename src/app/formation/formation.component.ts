import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

  currentId = this.activatedRoute.snapshot.params['id']
  formation: Player[]=[];

  constructor(
    private teamsService: TeamsService,
    private activatedRoute: ActivatedRoute
  ){
    this.getPlayers()
  }


  getPlayers(){
    console.log(this.currentId)
    this.teamsService.getFormation(this.currentId).subscribe(
    /* ((p) => this.formation = p[0].response); */
    (res: any) => {
      const playersData: any[] = res[0].response;
      this.formation = playersData.map((players: any) => ({
        id: players.player.id,
        name: players.player.name,
        lastname: players.player.lastname,
        age: players.player.age,
        nationality: players.player.nationality,
        position: players.statistics[0].games.position,
        photo: players.player.photo
      }));
      console.log("Formazione della squadra scelta:", this.formation);
    })
  }
}
