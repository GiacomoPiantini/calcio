import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

  currentId = this.activatedRoute.snapshot.params['id']
  formation: any[]=[];

  constructor(
    private teamsService: TeamsService,
    private activatedRoute: ActivatedRoute
  ){
    this.getPlayers()
  }


  getPlayers(){
    console.log(this.currentId)
    this.teamsService.getFormation(this.currentId).subscribe((p) => this.formation = p);
    console.log("La mia formazioneee",this.formation);
    console.log(this.currentId)

  }
}
