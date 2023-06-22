import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Responce, Team, Venue } from '../models/team';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  teamsControl = new FormControl<Responce | null >(null, Validators.required)
  selectFormControl = new FormControl("", Validators.required)
  teamsData: Responce[]=[]
  teams: Team[] = [];
  stadiumTeam: Venue[] = [];
  teamId?: number;

  constructor(
    private teamsService: TeamsService,
  ){
    this.getNamesTeams();
    this.getVenueTeams();
  }

  public getNamesTeams(){
    this.teamsService.getTeams()
    .subscribe(
      (res: any) => {
        this.teamsData= res;
        this.teams = this.teamsData.map((teams: any) => ({
          id: teams.team.id,
          name: teams.team.name,
          country: teams.team.country,
          founded: teams.team.founded,
          national: teams.team.national,
          logo: teams.team.logo,
          code: teams.team.code,
          address: teams.venue.address,
        }));
        this.stadiumTeam = this.teamsData.map((teams: any) => ({
          id: teams.venue.id,
          name: teams.venue.name,
          address: teams.venue.address,
          city: teams.venue.city,
          capacity: teams.venue.capacity,
          surface: teams.venue.surface,
          image: teams.venue.image,
        }));
        console.log(this.teams);
      }
    )
  }

  public getVenueTeams(){
    this.teamsService.getTeams()
    .subscribe(
      (res: any) => {
        const teamsData: any[] = res;
        this.stadiumTeam = teamsData.map((teams: any) => ({
          id: teams.venue.id,
          name: teams.venue.name,
          address: teams.venue.address,
          city: teams.venue.city,
          capacity: teams.venue.capacity,
          surface: teams.venue.surface,
          image: teams.venue.image,
        }));
        console.log(this.stadiumTeam);
      }
    )
  }

  teamDetails() {
    const selectedTeam = this.teamsControl.value?.team; //prendo l'id del team per poter poi prendere i dettagli e mandarlo ai componente dei dettagli
    if (selectedTeam) {
      this.teamId = selectedTeam.id; //assegno l'id a questa variabile che poi passo al template
      //console.log('ID della squadra è: ' + this.teamId);
    }
  }

}
