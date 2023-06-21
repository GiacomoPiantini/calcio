import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private teamsService: TeamsService,
  ){
    this.getNamesTeams()
  }

  public getNamesTeams(){
    this.teamsService.getTeams()
    .subscribe(
      console.log
    )
  }
}
