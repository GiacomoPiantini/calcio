import { Component, Input } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

  @Input('currentIdTeam') currentIdTeam?: any; //prendiamo in imput dal componente home l'id della squadra

  formation: any[]=[];

  constructor(
    private teamsService: TeamsService,
  ){
    //this.getPlayers()
  }


/*   getPlayers(){
    console.log(this.currentIdTeam)
    this.teamsService.getFormation(this.currentIdTeam).subscribe((p) => this.formation = p);
    console.log(this.formation);

  } */
}
