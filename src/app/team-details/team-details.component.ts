import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnChanges{


  @Input('currentIdTeam') currentIdTeam?: any; //prendiamo in imput dal componente home l'id della squadra

  teamDetails: Team | undefined;

  constructor(private teamsService:TeamsService,private router: Router){}

  ngOnChanges(changes: SimpleChanges): void { //inserisco ngOnChanges perchè deve visualizzare il cambiamento
    this.getTeamDetail(this.currentIdTeam);
  }

  getTeamDetail(currentId: number){ //chiamiamo il servizio per recuperare il dettaglio
    console.log("current ID>", currentId)
    this.teamsService.getTeamDetails(currentId).subscribe((res:any) => this.teamDetails = res);
    console.log(this.teamDetails)
  }

  goFormation(currentId:number){
    console.log("sonolaformazione",currentId);
    this.router.navigateByUrl('formation/' + currentId);
  }
}
