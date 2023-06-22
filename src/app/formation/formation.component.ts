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
    })
  }
}
