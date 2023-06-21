import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from "../models/team";
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiKey = 'f137b3c03886c6db19c618934315181f';

  constructor(
    private httpClient: HttpClient,
  ) { }

  configUrl = 'https://v3.football.api-sports.io/teams?country=Italy';

 getTeams(): Observable<Team[]>{
  console.log("Service teams");
  const headers = new HttpHeaders().set('x-apisports-key', this.apiKey);
  return this.httpClient
  .get<Team[]>(this.configUrl, { headers })
}
}
