import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit{


  @Input('currentIdTeam') currentIdTeam?: any;

  teamDetail: any[]=[];
  teamsService: any;


  ngOnInit(): void {
    this.teamsService.getTeamDetails(this.currentIdTeam).subscribe();
  }


}
