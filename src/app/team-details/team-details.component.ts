import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnChanges{


  @Input('currentIdTeam') currentIdTeam?: any; //prendiamo in imput dal componente home l'id della squadra

  teamDetails: Team | undefined;

  constructor(private teamService:TeamsService){}

  ngOnChanges(changes: SimpleChanges): void { //inserisco ngOnChanges perchè deve visualizzare il cambiamento
    this.getTeamDetail(this.currentIdTeam);
  }

  getTeamDetail(currentId: number){ //chiamiamo il servizio per recuperare il dettaglio
    console.log("current ID>", currentId)
    this.teamService.getTeamDetails(currentId).subscribe((res:any) => this.teamDetails = res);
    console.log(this.teamDetails)
  }
/*   getTeamDetail(currentId: number | undefined){ //chiamiamo il servizio per recuperare il dettaglio
    console.log("jdvjsjv sj", currentId)
    if (currentId) {
      this.teamService.getTeamDetails(currentId).subscribe((res:any) => this.teamDetails = res);
      console.log("Questo è dettaglio dal comp team-details", this.teamDetails)
    }
  } */
}
