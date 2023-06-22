import { Component, Input } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent{


  @Input('currentIdTeam') currentIdTeam?: any;

  teamDetails: any[]=[];
  teamsService: any;

  constructor(private teamService:TeamsService){
    this.getTeamDetails();
  }

  getTeamDetails(){
   // this.teamDetails = this.teamsService.getTeamDetails(this.currentIdTeam).subscribe();
    console.log("questooooooo",this.currentIdTeam)
  }

}
