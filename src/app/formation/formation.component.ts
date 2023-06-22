import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

  formation: any[]=[];

  constructor(
    private teamsService: TeamsService,
  ){
    this.getPlayers()
  }


  getPlayers(){
    this.teamsService.getFormation().subscribe((p) => this.formation = p);
    console.log(this.formation);

  }
}
