import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnChanges{


  @Input('currentIdTeam') currentIdTeam?: any; //prendiamo in imput dal componente home l'id della squadra

  teamDetails: any[]=[];

  constructor(private teamService:TeamsService){}

  ngOnChanges(changes: SimpleChanges): void { //inserisco ngOnChanges perchè deve visualizzare il cambiamento
    //console.log("questooooooo",this.currentIdTeam);
    this.getTeamDetail(this.currentIdTeam);
  }

  getTeamDetail(currentId: number){ //chiamiamo il servizio per recuperare il dettaglio
    //console.log("jdvjsjv sj", currentId)
    this.teamService.getTeamDetails(currentId).subscribe((res:any) => this.teamDetails = res);
  }

}
