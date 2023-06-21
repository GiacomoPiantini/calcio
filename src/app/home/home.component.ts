import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  teamsControl = new FormControl<Team | null >(null, Validators.required)
  selectFormControl = new FormControl("", Validators.required)

  teams: Team[] = []

  constructor(
    private teamsService: TeamsService,
  ){
    this.getNamesTeams()
  }

  public getNamesTeams(){
    this.teamsService.getTeams()
    .subscribe(
      (res:any) => {
        this.teams = res.response;
        console.log(this.teams)
      }
    )
  }
}
