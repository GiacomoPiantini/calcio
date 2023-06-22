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
  teamId?: number;

  constructor(
    private teamsService: TeamsService,
  ){
    this.getNamesTeams()
  }

  public getNamesTeams(){
    this.teamsService.getTeams()
    .subscribe(
      (res: any) => {
        const teamsData: any[] = res;
        this.teams = teamsData.map((teams: any) => ({
          id: teams.team.id,
          name: teams.team.name,
          country: teams.team.country,
          founded: teams.team.founded,
          national: teams.team.national,
          logo: teams.team.logo,
          code: teams.team.code
        }));
        console.log(this.teams);
      }
    )
  }

  teamDetails() {
    const selectedTeam: Team | null = this.teamsControl.value; //prendo l'id del team per poter poi prendere i dettagli e mandarlo ai componente dei dettagli
    if (selectedTeam) {
      this.teamId = selectedTeam.id; //assegno l'id a questa variabile che poi passo al template
      //console.log('ID della squadra è: ' + this.teamId);
    }
  }

}
