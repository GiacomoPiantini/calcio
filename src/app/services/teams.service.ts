import { Team } from './../models/team';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responce } from "../models/team";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiKey = '81160fb33f04de1d3143c8722f8b50f6';

  constructor(
    private httpClient: HttpClient,
  ){}

  configUrl = 'https://v3.football.api-sports.io/teams?';

  getTeams(): Observable<Responce[]>{
    return of(this.TEAMS)
/*     console.log("Service teams");
    const headers = new HttpHeaders().set('x-apisports-key', this.apiKey);
    return this.httpClient
    .get<Team[]>(this.configUrl + "country=Italy", { headers }) */
  };

  getTeamDetails(id: number): Observable<Team>{
    return of(this.TEAMS.map((t) => t.team).filter((t) => t.id === id)[0]);
    /* console.log("Service team details");
    const headers = new HttpHeaders().set('x-apisports-key', this.apiKey);
    return this.httpClient
    .get<Team>(this.configUrl + "id=" + id, { headers }) */
  };

  getFormation(currentIdTeam:number):  Observable<any>{
    return of(this.PLAYERSTEAM.filter(t => t.parameters.team === currentIdTeam)) //sceglie la squadra
  }






  TEAMS:Responce[] = [
    {
        "team": {
            "id": 487,
            "name": "Lazio",
            "code": "LAZ",
            "country": "Italy",
            "founded": 1900,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/487.png"
        },
        "venue": {
            "id": 910,
            "name": "Stadio Olimpico",
            "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
            "city": "Roma",
            "capacity": 68530,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/910.png"
        }
    },
    {
        "team": {
            "id": 488,
            "name": "Sassuolo",
            "code": "SAS",
            "country": "Italy",
            "founded": 1922,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/488.png"
        },
        "venue": {
            "id": 935,
            "name": "MAPEI Stadium - Città del Tricolore",
            "address": "Piazzale Atleti Azzuri D'Italia, 1",
            "city": "Reggio nell&apos;Emilia",
            "capacity": 23717,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/935.png"
        }
    },
    {
        "team": {
            "id": 489,
            "name": "AC Milan",
            "code": "MIL",
            "country": "Italy",
            "founded": 1899,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/489.png"
        },
        "venue": {
            "id": 907,
            "name": "Stadio Giuseppe Meazza",
            "address": "Via Piccolomini 5",
            "city": "Milano",
            "capacity": 80018,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/907.png"
        }
    },
    {
        "team": {
            "id": 490,
            "name": "Cagliari",
            "code": "CAG",
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/490.png"
        },
        "venue": {
            "id": 12275,
            "name": "Unipol Domus",
            "address": "Via Raimondo Carta Raspi",
            "city": "Cagliari",
            "capacity": 16416,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12275.png"
        }
    },
    {
        "team": {
            "id": 491,
            "name": "Chievo",
            "code": "CHI",
            "country": "Italy",
            "founded": 1929,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/491.png"
        },
        "venue": {
            "id": 890,
            "name": "Stadio Marc'Antonio Bentegodi",
            "address": "Piazzale Olimpia",
            "city": "Verona",
            "capacity": 39211,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/890.png"
        }
    },
    {
        "team": {
            "id": 492,
            "name": "Napoli",
            "code": "NAP",
            "country": "Italy",
            "founded": 1904,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/492.png"
        },
        "venue": {
            "id": 11904,
            "name": "Stadio Diego Armando Maradona",
            "address": "Pizzale Vincenzo Tecchio",
            "city": "Napoli",
            "capacity": 60240,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/11904.png"
        }
    },
    {
        "team": {
            "id": 493,
            "name": "Spal",
            "code": "SPA",
            "country": "Italy",
            "founded": 1907,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/493.png"
        },
        "venue": {
            "id": 938,
            "name": "Stadio Paolo Mazza",
            "address": "Corso Piave, 28",
            "city": "Ferrara",
            "capacity": 16134,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/938.png"
        }
    },
    {
        "team": {
            "id": 494,
            "name": "Udinese",
            "code": "UDI",
            "country": "Italy",
            "founded": 1896,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/494.png"
        },
        "venue": {
            "id": 928,
            "name": "Dacia Arena",
            "address": "Piazza le Repubblica Argentina, 3",
            "city": "Udine",
            "capacity": 25952,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/928.png"
        }
    },
    {
        "team": {
            "id": 495,
            "name": "Genoa",
            "code": "GEN",
            "country": "Italy",
            "founded": 1893,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/495.png"
        },
        "venue": {
            "id": 905,
            "name": "Stadio Comunale Luigi Ferraris",
            "address": "Via Giovanni De Prà, 1",
            "city": "Genova",
            "capacity": 36703,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/905.png"
        }
    },
    {
        "team": {
            "id": 496,
            "name": "Juventus",
            "code": "JUV",
            "country": "Italy",
            "founded": 1897,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/496.png"
        },
        "venue": {
            "id": 909,
            "name": "Allianz Stadium",
            "address": "Strada Comunale di Altessano 131",
            "city": "Torino",
            "capacity": 45666,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/909.png"
        }
    },
    {
        "team": {
            "id": 497,
            "name": "AS Roma",
            "code": "ROM",
            "country": "Italy",
            "founded": 1927,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/497.png"
        },
        "venue": {
            "id": 910,
            "name": "Stadio Olimpico",
            "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
            "city": "Roma",
            "capacity": 68530,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/910.png"
        }
    },
    {
        "team": {
            "id": 498,
            "name": "Sampdoria",
            "code": "SAM",
            "country": "Italy",
            "founded": 1946,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/498.png"
        },
        "venue": {
            "id": 905,
            "name": "Stadio Comunale Luigi Ferraris",
            "address": "Via Giovanni De Prà, 1",
            "city": "Genova",
            "capacity": 36703,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/905.png"
        }
    },
    {
        "team": {
            "id": 499,
            "name": "Atalanta",
            "code": "ATA",
            "country": "Italy",
            "founded": 1907,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/499.png"
        },
        "venue": {
            "id": 879,
            "name": "Gewiss Stadium",
            "address": "Viale Giulio Cesare 18",
            "city": "Bergamo",
            "capacity": 21300,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/879.png"
        }
    },
    {
        "team": {
            "id": 500,
            "name": "Bologna",
            "code": "BOL",
            "country": "Italy",
            "founded": 1909,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/500.png"
        },
        "venue": {
            "id": 881,
            "name": "Stadio Renato Dall'Ara",
            "address": "Via Andrea Costa, 174",
            "city": "Bologna",
            "capacity": 39279,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/881.png"
        }
    },
    {
        "team": {
            "id": 501,
            "name": "Crotone",
            "code": "CRO",
            "country": "Italy",
            "founded": 1923,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/501.png"
        },
        "venue": {
            "id": 895,
            "name": "Stadio Ezio Scida",
            "address": "Via Cutro",
            "city": "Crotone",
            "capacity": 16108,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/895.png"
        }
    },
    {
        "team": {
            "id": 502,
            "name": "Fiorentina",
            "code": "FIO",
            "country": "Italy",
            "founded": 1926,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/502.png"
        },
        "venue": {
            "id": 902,
            "name": "Stadio Artemio Franchi",
            "address": "Viale Manfredo Fanti 14",
            "city": "Firenze",
            "capacity": 43147,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/902.png"
        }
    },
    {
        "team": {
            "id": 503,
            "name": "Torino",
            "code": "TOR",
            "country": "Italy",
            "founded": 1906,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/503.png"
        },
        "venue": {
            "id": 943,
            "name": "Stadio Olimpico Grande Torino",
            "address": "Corso Sebastopoli 123, Santa Rita",
            "city": "Torino",
            "capacity": 27958,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/943.png"
        }
    },
    {
        "team": {
            "id": 504,
            "name": "Verona",
            "code": "VER",
            "country": "Italy",
            "founded": 1903,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/504.png"
        },
        "venue": {
            "id": 890,
            "name": "Stadio Marc'Antonio Bentegodi",
            "address": "Piazzale Olimpia",
            "city": "Verona",
            "capacity": 39211,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/890.png"
        }
    },
    {
        "team": {
            "id": 505,
            "name": "Inter",
            "code": "INT",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/505.png"
        },
        "venue": {
            "id": 907,
            "name": "Stadio Giuseppe Meazza",
            "address": "Via Piccolomini 5",
            "city": "Milano",
            "capacity": 80018,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/907.png"
        }
    },
    {
        "team": {
            "id": 506,
            "name": "Benevento",
            "code": "BEN",
            "country": "Italy",
            "founded": 1929,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/506.png"
        },
        "venue": {
            "id": 880,
            "name": "Stadio Ciro Vigorito",
            "address": "Piazzale degli Atleti",
            "city": "Benevento",
            "capacity": 17554,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/880.png"
        }
    },
    {
        "team": {
            "id": 507,
            "name": "Ascoli",
            "code": "ASC",
            "country": "Italy",
            "founded": 1898,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/507.png"
        },
        "venue": {
            "id": 876,
            "name": "Stadio Cino e Lillo Del Duca",
            "address": "Via delle Zeppelle, 1",
            "city": "Ascoli Piceno",
            "capacity": 20853,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/876.png"
        }
    },
    {
        "team": {
            "id": 508,
            "name": "Bari",
            "code": "BAR",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/508.png"
        },
        "venue": {
            "id": 2763,
            "name": "Stadio Comunale San Nicola",
            "address": "Strada Provinciale Modugno-Carbonara",
            "city": "Bari",
            "capacity": 58270,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/2763.png"
        }
    },
    {
        "team": {
            "id": 509,
            "name": "Cesena",
            "code": "CES",
            "country": "Italy",
            "founded": 1940,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/509.png"
        },
        "venue": {
            "id": 2758,
            "name": "Orogel Stadium-Dino Manuzzi",
            "address": "Via dello Stadio, 124",
            "city": "Cesena",
            "capacity": 23860,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/2758.png"
        }
    },
    {
        "team": {
            "id": 510,
            "name": "Cittadella",
            "code": "CIT",
            "country": "Italy",
            "founded": 1973,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/510.png"
        },
        "venue": {
            "id": 891,
            "name": "Stadio Pier Cesare Tombolato",
            "address": "Viale dello Sport, 7",
            "city": "Cittadella",
            "capacity": 7623,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/891.png"
        }
    },
    {
        "team": {
            "id": 511,
            "name": "Empoli",
            "code": "EMP",
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/511.png"
        },
        "venue": {
            "id": 896,
            "name": "Stadio Carlo Castellani",
            "address": "Viale delle Olimpiadi",
            "city": "Empoli",
            "capacity": 16284,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/896.png"
        }
    },
    {
        "team": {
            "id": 512,
            "name": "Frosinone",
            "code": "FRO",
            "country": "Italy",
            "founded": 1928,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/512.png"
        },
        "venue": {
            "id": 904,
            "name": "Stadio Benito Stirpe",
            "address": "Viale Olimpia",
            "city": "Frosinone",
            "capacity": 16310,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/904.png"
        }
    },
    {
        "team": {
            "id": 513,
            "name": "Novara",
            "code": "NOV",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/513.png"
        },
        "venue": {
            "id": 917,
            "name": "Stadio Comunale Silvio Piola",
            "address": "Viale Kennedy, 8",
            "city": "Novara",
            "capacity": 17875,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/917.png"
        }
    },
    {
        "team": {
            "id": 514,
            "name": "Salernitana",
            "code": "SAL",
            "country": "Italy",
            "founded": 2011,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/514.png"
        },
        "venue": {
            "id": 933,
            "name": "Stadio Arechi",
            "address": "Via Salvador Allende",
            "city": "Salerno",
            "capacity": 37245,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/933.png"
        }
    },
    {
        "team": {
            "id": 515,
            "name": "Spezia",
            "code": "SPE",
            "country": "Italy",
            "founded": 1906,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/515.png"
        },
        "venue": {
            "id": 939,
            "name": "Stadio Alberto Picco",
            "address": "Via Nicolò Fieschi, 18",
            "city": "La Spezia",
            "capacity": 11767,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/939.png"
        }
    },
    {
        "team": {
            "id": 516,
            "name": "Ternana",
            "code": "TER",
            "country": "Italy",
            "founded": 1925,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/516.png"
        },
        "venue": {
            "id": 942,
            "name": "Stadio Libero Liberati",
            "address": "Viale dello Stadio",
            "city": "Terni",
            "capacity": 17460,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/942.png"
        }
    },
    {
        "team": {
            "id": 517,
            "name": "Venezia",
            "code": "VEN",
            "country": "Italy",
            "founded": 1907,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/517.png"
        },
        "venue": {
            "id": 948,
            "name": "Stadio Pierluigi Penzo",
            "address": "Isola di Sant&apos;Elena",
            "city": "Venezia",
            "capacity": 11150,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/948.png"
        }
    },
    {
        "team": {
            "id": 518,
            "name": "Brescia",
            "code": "BRE",
            "country": "Italy",
            "founded": 1911,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/518.png"
        },
        "venue": {
            "id": 882,
            "name": "Stadio Mario Rigamonti",
            "address": "Via Giovanni Novagani, 8",
            "city": "Brescia",
            "capacity": 27547,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/882.png"
        }
    },
    {
        "team": {
            "id": 519,
            "name": "Carpi",
            "code": "CAR",
            "country": "Italy",
            "founded": 1909,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/519.png"
        },
        "venue": {
            "id": 884,
            "name": "Stadio Sandro Cabassi",
            "address": "Via Carlo Marx, 26",
            "city": "Carpi",
            "capacity": 5584,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/884.png"
        }
    },
    {
        "team": {
            "id": 520,
            "name": "Cremonese",
            "code": "CRE",
            "country": "Italy",
            "founded": 1903,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/520.png"
        },
        "venue": {
            "id": 894,
            "name": "Stadio Giovanni Zini",
            "address": "Via Persico, 19",
            "city": "Cremona",
            "capacity": 20034,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/894.png"
        }
    },
    {
        "team": {
            "id": 521,
            "name": "Foggia",
            "code": "FOG",
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/521.png"
        },
        "venue": {
            "id": 903,
            "name": "Stadio Comunale Pino Zaccheria",
            "address": "Via Vincenzo Gioberti",
            "city": "Foggia",
            "capacity": 25085,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/903.png"
        }
    },
    {
        "team": {
            "id": 522,
            "name": "Palermo",
            "code": "PAL",
            "country": "Italy",
            "founded": 1900,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/522.png"
        },
        "venue": {
            "id": 920,
            "name": "Stadio Renzo Barbera",
            "address": "Viale del Fante, 11",
            "city": "Palermo",
            "capacity": 36349,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/920.png"
        }
    },
    {
        "team": {
            "id": 523,
            "name": "Parma",
            "code": "PAR",
            "country": "Italy",
            "founded": 1913,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/523.png"
        },
        "venue": {
            "id": 921,
            "name": "Stadio Ennio Tardini",
            "address": "Via Partigiani d&apos;Italia, 1",
            "city": "Parma",
            "capacity": 21473,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/921.png"
        }
    },
    {
        "team": {
            "id": 524,
            "name": "Perugia",
            "code": "PER",
            "country": "Italy",
            "founded": 1905,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/524.png"
        },
        "venue": {
            "id": 922,
            "name": "Stadio Renato Curi",
            "address": "Via Pietro Conti",
            "city": "Perugia",
            "capacity": 23625,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/922.png"
        }
    },
    {
        "team": {
            "id": 525,
            "name": "Pescara",
            "code": "PES",
            "country": "Italy",
            "founded": 1936,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/525.png"
        },
        "venue": {
            "id": 923,
            "name": "Stadio Adriatico-Giovanni Cornacchia",
            "address": "Via Pepe",
            "city": "Pescara",
            "capacity": 20476,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/923.png"
        }
    },
    {
        "team": {
            "id": 526,
            "name": "PRO Vercelli",
            "code": "VER",
            "country": "Italy",
            "founded": 1892,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/526.png"
        },
        "venue": {
            "id": 930,
            "name": "Stadio Silvio Piola",
            "address": "Via Massaua, 5",
            "city": "Vercelli",
            "capacity": 5500,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/930.png"
        }
    },
    {
        "team": {
            "id": 527,
            "name": "Virtus Entella",
            "code": "ENT",
            "country": "Italy",
            "founded": 1914,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/527.png"
        },
        "venue": {
            "id": 872,
            "name": "Stadio Comunale Chiavari",
            "address": "Via Aldo Gastaldi, 22",
            "city": "Chiavari",
            "capacity": 6113,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/872.png"
        }
    },
    {
        "team": {
            "id": 528,
            "name": "Avellino",
            "code": "AVE",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/528.png"
        },
        "venue": {
            "id": 2756,
            "name": "Stadio Partenio-Adriano Lombardi",
            "address": "Contrada Zoccolari, 1",
            "city": "Avellino",
            "capacity": 26308,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/2756.png"
        }
    },
    {
        "team": {
            "id": 768,
            "name": "Italy",
            "code": "ITA",
            "country": "Italy",
            "founded": 1898,
            "national": true,
            "logo": "https://media-1.api-sports.io/football/teams/768.png"
        },
        "venue": {
            "id": 910,
            "name": "Stadio Olimpico",
            "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
            "city": "Roma",
            "capacity": 68530,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/910.png"
        }
    },
    {
        "team": {
            "id": 801,
            "name": "Pisa",
            "code": "PIS",
            "country": "Italy",
            "founded": 1909,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/801.png"
        },
        "venue": {
            "id": 925,
            "name": "Arena Garibaldi - Stadio Romeo Anconetani",
            "address": "Via di Gello, 25",
            "city": "Pisa",
            "capacity": 17500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/925.png"
        }
    },
    {
        "team": {
            "id": 803,
            "name": "Trapani",
            "code": "TRA",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/803.png"
        },
        "venue": {
            "id": 878,
            "name": "Stadio Polisportivo Provinciale",
            "address": "Via Giuseppe Cesarò, Casa Santa di Erice",
            "city": "Trapani",
            "capacity": 7787,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/878.png"
        }
    },
    {
        "team": {
            "id": 804,
            "name": "Latina",
            "code": "LAT",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/804.png"
        },
        "venue": {
            "id": 2768,
            "name": "Stadio Comunale Domenico Francioni",
            "address": "Piazzale Prampolini 4",
            "city": "Latina",
            "capacity": 11200,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/2768.png"
        }
    },
    {
        "team": {
            "id": 862,
            "name": "Pordenone",
            "code": "POR",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/862.png"
        },
        "venue": {
            "id": 19210,
            "name": "Stadio Comunale Omero Tognon",
            "address": "Viale dello Sport 11/A",
            "city": "Fontanafredda",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19210.png"
        }
    },
    {
        "team": {
            "id": 863,
            "name": "Juve Stabia",
            "code": "JUV",
            "country": "Italy",
            "founded": 1907,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/863.png"
        },
        "venue": {
            "id": 908,
            "name": "Stadio Comunale Romeo Menti",
            "address": "Via G. Cosenza, 283",
            "city": "Castellammare di Stabia",
            "capacity": 7642,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/908.png"
        }
    },
    {
        "team": {
            "id": 864,
            "name": "Cosenza",
            "code": null,
            "country": "Italy",
            "founded": 1914,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/864.png"
        },
        "venue": {
            "id": 893,
            "name": "Stadio San Vito-Luigi Marulla",
            "address": "Via degli Stadio",
            "city": "Cosenza",
            "capacity": 24209,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/893.png"
        }
    },
    {
        "team": {
            "id": 865,
            "name": "Giana Erminio",
            "code": "GIA",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/865.png"
        },
        "venue": {
            "id": 873,
            "name": "Stadio Comunale",
            "address": "Via Milano 23",
            "city": "Gorgonzola",
            "capacity": 3766,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/873.png"
        }
    },
    {
        "team": {
            "id": 866,
            "name": "Gubbio",
            "code": "GUB",
            "country": "Italy",
            "founded": 1910,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/866.png"
        },
        "venue": {
            "id": 906,
            "name": "Stadio Pietro Barbetti",
            "address": "Via Parruccini",
            "city": "Gubbio",
            "capacity": 4939,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/906.png"
        }
    },
    {
        "team": {
            "id": 867,
            "name": "Lecce",
            "code": "LEC",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/867.png"
        },
        "venue": {
            "id": 911,
            "name": "Stadio Comunale Via del Mare",
            "address": "Viale dello Stadio",
            "city": "Lecce",
            "capacity": 33876,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/911.png"
        }
    },
    {
        "team": {
            "id": 868,
            "name": "Livorno",
            "code": "LIV",
            "country": "Italy",
            "founded": 1915,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/868.png"
        },
        "venue": {
            "id": 912,
            "name": "Stadio Armando Picchi",
            "address": "Piazzale Montello 14",
            "city": "Livorno",
            "capacity": 19238,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/912.png"
        }
    },
    {
        "team": {
            "id": 869,
            "name": "Matera",
            "code": "MAT",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/869.png"
        },
        "venue": {
            "id": 898,
            "name": "Stadio XXI Settembre-Franco Salerno",
            "address": "Via Guiseppe Saragat, 46",
            "city": "Matera",
            "capacity": 7490,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/898.png"
        }
    },
    {
        "team": {
            "id": 870,
            "name": "Padova",
            "code": "PAD",
            "country": "Italy",
            "founded": 2014,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/870.png"
        },
        "venue": {
            "id": 2764,
            "name": "Stadio Comunale Euganeo",
            "address": "Via Nereo Rocco, 60",
            "city": "Padova",
            "capacity": 32420,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/2764.png"
        }
    },
    {
        "team": {
            "id": 871,
            "name": "Sambenedettese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/871.png"
        },
        "venue": {
            "id": 934,
            "name": "Stadio Riviera delle Palme",
            "address": "Viale Dello Sport 62",
            "city": "San Benedetto del Tronto",
            "capacity": 22000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/934.png"
        }
    },
    {
        "team": {
            "id": 872,
            "name": "Piacenza",
            "code": "PIA",
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/872.png"
        },
        "venue": {
            "id": 924,
            "name": "Stadio Leonardo Garilli",
            "address": "Via Egidio Gorra, 25",
            "city": "Piacenza",
            "capacity": 21668,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/924.png"
        }
    },
    {
        "team": {
            "id": 873,
            "name": "Virtus Francavilla",
            "code": null,
            "country": "Italy",
            "founded": 1946,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/873.png"
        },
        "venue": {
            "id": 1856,
            "name": "Stadio Giovanni Paolo II",
            "address": "Via Suor Antonietta Zullino, 6, Strada provinciale, 26 km 0.5",
            "city": "Francavilla Fontana",
            "capacity": 3360,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/1856.png"
        }
    },
    {
        "team": {
            "id": 874,
            "name": "Trastevere",
            "code": null,
            "country": "Italy",
            "founded": 1934,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/874.png"
        },
        "venue": {
            "id": 2761,
            "name": "Centro Sportivo Vittorio Bachelet",
            "address": "Via Vitellia, 50",
            "city": "Roma",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/2761.png"
        }
    },
    {
        "team": {
            "id": 875,
            "name": "Renate",
            "code": "REN",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/875.png"
        },
        "venue": {
            "id": 871,
            "name": "Stadio Città di Meda",
            "address": "Via Privata Icmesa",
            "city": "Meda",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/871.png"
        }
    },
    {
        "team": {
            "id": 876,
            "name": "Arezzo",
            "code": "ARE",
            "country": "Italy",
            "founded": 1923,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/876.png"
        },
        "venue": {
            "id": 875,
            "name": "Stadio Città di Arezzo",
            "address": "Viale Antonio Gramsci",
            "city": "Arezzo",
            "capacity": 13128,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/875.png"
        }
    },
    {
        "team": {
            "id": 877,
            "name": "Triestina",
            "code": "TRI",
            "country": "Italy",
            "founded": 1918,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/877.png"
        },
        "venue": {
            "id": 944,
            "name": "Stadio Nereo Rocco",
            "address": "Via dei Macelli, 5",
            "city": "Trieste",
            "capacity": 32454,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/944.png"
        }
    },
    {
        "team": {
            "id": 878,
            "name": "Alessandria",
            "code": "ALE",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/878.png"
        },
        "venue": {
            "id": 874,
            "name": "Stadio Giuseppe Moccagatta",
            "address": "Via Spalto Rovereto, 28",
            "city": "Alessandria",
            "capacity": 7694,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/874.png"
        }
    },
    {
        "team": {
            "id": 879,
            "name": "Albinoleffe",
            "code": "ALB",
            "country": "Italy",
            "founded": 1998,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/879.png"
        },
        "venue": {
            "id": 19209,
            "name": "AlbinoLeffe Stadium",
            "address": "Zanica Via Comun Nuovo",
            "city": "Zanica",
            "capacity": 1791,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19209.png"
        }
    },
    {
        "team": {
            "id": 880,
            "name": "Reggiana",
            "code": "REG",
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/880.png"
        },
        "venue": {
            "id": 935,
            "name": "MAPEI Stadium - Città del Tricolore",
            "address": "Piazza Azzuri d&apos;Italia, 1",
            "city": "Reggio nell&apos;Emilia",
            "capacity": 23717,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/935.png"
        }
    },
    {
        "team": {
            "id": 881,
            "name": "Bassano Virtus",
            "code": "BAS",
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/881.png"
        },
        "venue": {
            "id": 2757,
            "name": "Stadio Rino Mercante",
            "address": "Via Piave, 27",
            "city": "Bassano del Grappa",
            "capacity": 2952,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/2757.png"
        }
    },
    {
        "team": {
            "id": 882,
            "name": "Monterosi",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/882.png"
        },
        "venue": {
            "id": 945,
            "name": "Stadio Ettore Mannucci",
            "address": "Via Vittorio Veneto",
            "city": "Pontedera",
            "capacity": 4014,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/945.png"
        }
    },
    {
        "team": {
            "id": 883,
            "name": "Ciliverghe",
            "code": null,
            "country": "Italy",
            "founded": 1979,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/883.png"
        },
        "venue": {
            "id": 2766,
            "name": "Stadio Comunale",
            "address": "Viale Giuseppe Mazzini",
            "city": "Mazzano",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/2766.png"
        }
    },
    {
        "team": {
            "id": 884,
            "name": "Feralpisalo",
            "code": "FER",
            "country": "Italy",
            "founded": 2009,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/884.png"
        },
        "venue": {
            "id": 900,
            "name": "Stadio Lino Turina",
            "address": "Via Enzo Ferrari 3, Località Due Pin",
            "city": "Salò",
            "capacity": 2364,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/900.png"
        }
    },
    {
        "team": {
            "id": 885,
            "name": "Casertana",
            "code": "CAS",
            "country": "Italy",
            "founded": 1924,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/885.png"
        },
        "venue": {
            "id": 886,
            "name": "Stadio Comunale Alberto Pinto",
            "address": "Viale Medaglie d&apos;Oro",
            "city": "Caserta",
            "capacity": 6017,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/886.png"
        }
    },
    {
        "team": {
            "id": 886,
            "name": "Rende",
            "code": "REN",
            "country": "Italy",
            "founded": 1968,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/886.png"
        },
        "venue": {
            "id": 1804,
            "name": "Stadio Comunale Marco Lorenzon",
            "address": "Via Fratelli Bandiera",
            "city": "Rende",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/1804.png"
        }
    },
    {
        "team": {
            "id": 887,
            "name": "Varese",
            "code": "VAR",
            "country": "Italy",
            "founded": 1910,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/887.png"
        },
        "venue": {
            "id": 2762,
            "name": "Stadio Franco Ossola",
            "address": "Via Bolchini, Masnago",
            "city": "Varese",
            "capacity": 8146,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/2762.png"
        }
    },
    {
        "team": {
            "id": 888,
            "name": "Matelica",
            "code": "MAT",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/888.png"
        },
        "venue": {
            "id": 1805,
            "name": "Centro Sportivo Giovanni Paolo II",
            "address": "Via Guido Rossa",
            "city": "Matelica",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/1805.png"
        }
    },
    {
        "team": {
            "id": 889,
            "name": "Lucchese",
            "code": "LUC",
            "country": "Italy",
            "founded": 1905,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/889.png"
        },
        "venue": {
            "id": 913,
            "name": "Stadio Porta Elisa",
            "address": "Via dello Stadio",
            "city": "Lucca",
            "capacity": 7386,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/913.png"
        }
    },
    {
        "team": {
            "id": 890,
            "name": "Paganese",
            "code": "PAG",
            "country": "Italy",
            "founded": 1926,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/890.png"
        },
        "venue": {
            "id": 919,
            "name": "Stadio Marcello Torre",
            "address": "Via Cesare Sportelli",
            "city": "Pagani",
            "capacity": 5093,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/919.png"
        }
    },
    {
        "team": {
            "id": 891,
            "name": "Massese",
            "code": "MAS",
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/891.png"
        },
        "venue": {
            "id": 2759,
            "name": "Stadio degli Oliveti",
            "address": "Via dello Sport",
            "city": "Massa",
            "capacity": 8900,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/2759.png"
        }
    },
    {
        "team": {
            "id": 892,
            "name": "PRO Piacenza",
            "code": "PRO",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/892.png"
        },
        "venue": {
            "id": 924,
            "name": "Stadio Leonardo Garilli",
            "address": "Via Egidio Gorra, 25",
            "city": "Piacenza",
            "capacity": 21668,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/924.png"
        }
    },
    {
        "team": {
            "id": 893,
            "name": "Imolese",
            "code": "IMO",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/893.png"
        },
        "venue": {
            "id": 1803,
            "name": "Stadio Romeo Galli",
            "address": "via Romeo Galli 1",
            "city": "Imola",
            "capacity": 3809,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/1803.png"
        }
    },
    {
        "team": {
            "id": 894,
            "name": "Siracusa",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/894.png"
        },
        "venue": {
            "id": 937,
            "name": "Stadio Nicola de Simone",
            "address": "Piazza Luigi Leone Cuella, 1",
            "city": "Siracusa",
            "capacity": 5946,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/937.png"
        }
    },
    {
        "team": {
            "id": 895,
            "name": "Como",
            "code": "COM",
            "country": "Italy",
            "founded": 1907,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/895.png"
        },
        "venue": {
            "id": 892,
            "name": "Stadio Giuseppe Sinigaglia",
            "address": "Via Giuseppe Sinigaglia, 3",
            "city": "Como",
            "capacity": 13602,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/892.png"
        }
    },
    {
        "team": {
            "id": 896,
            "name": "Seregno",
            "code": "SER",
            "country": "Italy",
            "founded": 1913,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/896.png"
        },
        "venue": {
            "id": 2772,
            "name": "Stadio Ferrucio",
            "address": "Via Avogadro",
            "city": "Seregno",
            "capacity": 3700,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/2772.png"
        }
    },
    {
        "team": {
            "id": 897,
            "name": "Ancona",
            "code": null,
            "country": "Italy",
            "founded": 1948,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/897.png"
        },
        "venue": {
            "id": 2773,
            "name": "Stadio del Conero",
            "address": "Frazione Varano, Località Passo Varano",
            "city": "Ancona",
            "capacity": 23983,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/2773.png"
        }
    },
    {
        "team": {
            "id": 898,
            "name": "Messina",
            "code": null,
            "country": "Italy",
            "founded": 1906,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/898.png"
        },
        "venue": {
            "id": 2770,
            "name": "Stadio Comunale Franco Scoglio",
            "address": "Via Comunale, San Filippo",
            "city": "Messina",
            "capacity": 37895,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/2770.png"
        }
    },
    {
        "team": {
            "id": 899,
            "name": "Modena",
            "code": "MOD",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/899.png"
        },
        "venue": {
            "id": 2771,
            "name": "Stadio Alberto Braglia",
            "address": "Viale Monte Kosica, 128/134",
            "city": "Modena",
            "capacity": 21151,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/2771.png"
        }
    },
    {
        "team": {
            "id": 900,
            "name": "Maceratese",
            "code": "MAC",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/900.png"
        },
        "venue": {
            "id": 2769,
            "name": "Stadio Helvia Recina",
            "address": "Via dei Velini, 50",
            "city": "Macerata",
            "capacity": 9000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/2769.png"
        }
    },
    {
        "team": {
            "id": 1578,
            "name": "Sudtirol",
            "code": "SUD",
            "country": "Italy",
            "founded": 1974,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1578.png"
        },
        "venue": {
            "id": 940,
            "name": "Stadio Marco Druso",
            "address": "Viale Trieste / Trieststraße 29",
            "city": "Bozen",
            "capacity": 5500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/940.png"
        }
    },
    {
        "team": {
            "id": 1579,
            "name": "Monza",
            "code": "MON",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1579.png"
        },
        "venue": {
            "id": 12086,
            "name": "U-Power Stadium",
            "address": "Via Franco Tognini",
            "city": "Monza",
            "capacity": 18568,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12086.png"
        }
    },
    {
        "team": {
            "id": 1580,
            "name": "Catania",
            "code": "CAT",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1580.png"
        },
        "venue": {
            "id": 887,
            "name": "Stadio Angelo Massimino",
            "address": "Piazza Vincenzo Spedini",
            "city": "Catania",
            "capacity": 20104,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/887.png"
        }
    },
    {
        "team": {
            "id": 1581,
            "name": "Carrarese",
            "code": "CAR",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1581.png"
        },
        "venue": {
            "id": 885,
            "name": "Stadio dei Marmi",
            "address": "Piazza Vittorio Veneto, 8",
            "city": "Carrara",
            "capacity": 4975,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/885.png"
        }
    },
    {
        "team": {
            "id": 1582,
            "name": "Monopoli",
            "code": null,
            "country": "Italy",
            "founded": 1958,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1582.png"
        },
        "venue": {
            "id": 914,
            "name": "Stadio Vito Simone Veneziani",
            "address": "Via Palmiro Togliatti, 23",
            "city": "Monopoli",
            "capacity": 6880,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/914.png"
        }
    },
    {
        "team": {
            "id": 1583,
            "name": "Robur Siena",
            "code": "SIE",
            "country": "Italy",
            "founded": 1904,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1583.png"
        },
        "venue": {
            "id": 936,
            "name": "Stadio Comunale Artemio Franchi - Montepaschi Arena",
            "address": "Via Mille, 3",
            "city": "Siena",
            "capacity": 15373,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/936.png"
        }
    },
    {
        "team": {
            "id": 1584,
            "name": "Vicenza Virtus",
            "code": "VIC",
            "country": "Italy",
            "founded": 1902,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1584.png"
        },
        "venue": {
            "id": 2767,
            "name": "Stadio Romeo Menti",
            "address": "Via Schio, 21",
            "city": "Vicenza",
            "capacity": 20920,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/2767.png"
        }
    },
    {
        "team": {
            "id": 1585,
            "name": "Viterbese",
            "code": null,
            "country": "Italy",
            "founded": 2013,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1585.png"
        },
        "venue": {
            "id": 1849,
            "name": "Stadio Enrico Rocchi",
            "address": "Via della Palazzina",
            "city": "Viterbo",
            "capacity": 5526,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/1849.png"
        }
    },
    {
        "team": {
            "id": 1586,
            "name": "Albalonga",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1586.png"
        },
        "venue": {
            "id": 1855,
            "name": "Stadio Pio XII",
            "address": "Via Orti Pompei",
            "city": "Albano Laziale",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/1855.png"
        }
    },
    {
        "team": {
            "id": 1587,
            "name": "AZ Picerno",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1587.png"
        },
        "venue": {
            "id": 1832,
            "name": "Stadio Comunale Alfredo Viviani",
            "address": "Viale Guglielmo Marconi",
            "city": "Potenza",
            "capacity": 5500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/1832.png"
        }
    },
    {
        "team": {
            "id": 1588,
            "name": "Rezzato",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1588.png"
        },
        "venue": {
            "id": 1914,
            "name": "Centro Sportivo Comunale Rezzato",
            "address": "Via Milano 14",
            "city": "Rezzato",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/1914.png"
        }
    },
    {
        "team": {
            "id": 1589,
            "name": "Pistoiese",
            "code": "PIS",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1589.png"
        },
        "venue": {
            "id": 926,
            "name": "Stadio Marcello Melani",
            "address": "Via dello Stadio 8",
            "city": "Pistoia",
            "capacity": 13195,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/926.png"
        }
    },
    {
        "team": {
            "id": 1590,
            "name": "Sicula Leonzio",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1590.png"
        },
        "venue": {
            "id": 1892,
            "name": "Stadio Comunale Angelino Nobile",
            "address": "Via dello Stadio 37",
            "city": "Lentini",
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/1892.png"
        }
    },
    {
        "team": {
            "id": 1591,
            "name": "Pontedera",
            "code": "PON",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1591.png"
        },
        "venue": {
            "id": 945,
            "name": "Stadio Ettore Mannucci",
            "address": "Via Vittorio Veneto",
            "city": "Pontedera",
            "capacity": 4014,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/945.png"
        }
    },
    {
        "team": {
            "id": 1592,
            "name": "Campodarsego",
            "code": null,
            "country": "Italy",
            "founded": 1974,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1592.png"
        },
        "venue": {
            "id": 1854,
            "name": "Centro Sportivo Il Gabbiano",
            "address": "Via Olmo, 16",
            "city": "Campodarsego",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/1854.png"
        }
    },
    {
        "team": {
            "id": 1593,
            "name": "S.S.D. Unione Sanremo",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1593.png"
        },
        "venue": {
            "id": 946,
            "name": "Stadio Comunale Luigi Cichero",
            "address": "Via Giuseppe Mazzini, 15",
            "city": "Sanremo",
            "capacity": 4850,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/946.png"
        }
    },
    {
        "team": {
            "id": 1594,
            "name": "Chieri",
            "code": "CHI",
            "country": "Italy",
            "founded": 1955,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1594.png"
        },
        "venue": {
            "id": 877,
            "name": "Stadio Piero de Paoli",
            "address": "Strada San Silvestro",
            "city": "Chieri",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/877.png"
        }
    },
    {
        "team": {
            "id": 1680,
            "name": "Prato",
            "code": "PRA",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1680.png"
        },
        "venue": {
            "id": 6523,
            "name": "Campo Centrale Ado Nelli",
            "address": "Via Oglio, 13",
            "city": "Montemurlo",
            "capacity": 1500,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6523.png"
        }
    },
    {
        "team": {
            "id": 1681,
            "name": "Vibonese",
            "code": "VIB",
            "country": "Italy",
            "founded": 1928,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1681.png"
        },
        "venue": {
            "id": 949,
            "name": "Stadio Luigi Razza",
            "address": "Via Piazza d&apos;Armi",
            "city": "Vibo Valentia",
            "capacity": 6000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/949.png"
        }
    },
    {
        "team": {
            "id": 1682,
            "name": "AJ Fano",
            "code": "FAN",
            "country": "Italy",
            "founded": 1906,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1682.png"
        },
        "venue": {
            "id": 897,
            "name": "Stadio Raffaele Mancini",
            "address": "Via Metauro",
            "city": "Fano",
            "capacity": 8800,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/897.png"
        }
    },
    {
        "team": {
            "id": 1683,
            "name": "Teramo",
            "code": "TER",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1683.png"
        },
        "venue": {
            "id": 941,
            "name": "Stadio Gaetano Bonolis",
            "address": "Viale Amerigo Vespucci, Piano d&apos;Accio",
            "city": "Teramo",
            "capacity": 8840,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/941.png"
        }
    },
    {
        "team": {
            "id": 1684,
            "name": "Akragas",
            "code": "AKR",
            "country": "Italy",
            "founded": 1952,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1684.png"
        },
        "venue": {
            "id": 7328,
            "name": "Stadio Esseneto",
            "address": "Via Petrarca",
            "city": "Agrigento",
            "capacity": 12000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/7328.png"
        }
    },
    {
        "team": {
            "id": 1685,
            "name": "Lupa Roma",
            "code": "LUP",
            "country": "Italy",
            "founded": 1958,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1685.png"
        },
        "venue": {
            "id": 7322,
            "name": "Stadio Montefiore",
            "address": "Via dell’Arenatura 27",
            "city": "Rocca Priora",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/7322.png"
        }
    },
    {
        "team": {
            "id": 1686,
            "name": "Tuttocuoio",
            "code": "TUT",
            "country": "Italy",
            "founded": 1957,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1686.png"
        },
        "venue": {
            "id": 6589,
            "name": "Stadio Leporaia",
            "address": "Via N. Sauro, Ponte a Egola",
            "city": "San Miniato",
            "capacity": 600,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6589.png"
        }
    },
    {
        "team": {
            "id": 1687,
            "name": "Catanzaro",
            "code": "CAT",
            "country": "Italy",
            "founded": 1929,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1687.png"
        },
        "venue": {
            "id": 888,
            "name": "Stadio Nicola Ceravolo",
            "address": "Via Francesco Paglia",
            "city": "Catanzaro",
            "capacity": 14650,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/888.png"
        }
    },
    {
        "team": {
            "id": 1688,
            "name": "Forli",
            "code": "FOR",
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1688.png"
        },
        "venue": {
            "id": 6575,
            "name": "Stadio Tullo Morgagni",
            "address": "Viale Roma 128/B",
            "city": "Forlì",
            "capacity": 3466,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6575.png"
        }
    },
    {
        "team": {
            "id": 1689,
            "name": "Lumezzane",
            "code": "LUM",
            "country": "Italy",
            "founded": 1948,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1689.png"
        },
        "venue": {
            "id": 7324,
            "name": "Nuovo Stadio Comunale",
            "address": "Via Magante, 14",
            "city": "Lumezzane",
            "capacity": 4004,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/7324.png"
        }
    },
    {
        "team": {
            "id": 1690,
            "name": "Melfi",
            "code": "MEL",
            "country": "Italy",
            "founded": 1929,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1690.png"
        },
        "venue": {
            "id": 7327,
            "name": "Stadio Arturo Valerio",
            "address": "Contrada Sant&apos;Abbruzzese 12",
            "city": "Melfi",
            "capacity": 4100,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/7327.png"
        }
    },
    {
        "team": {
            "id": 1691,
            "name": "Fondi",
            "code": "FON",
            "country": "Italy",
            "founded": 1922,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1691.png"
        },
        "venue": {
            "id": 7326,
            "name": "Stadio Domenico Purificato",
            "address": "Via Arnale Rosso",
            "city": "Fondi",
            "capacity": 2500,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/7326.png"
        }
    },
    {
        "team": {
            "id": 1692,
            "name": "Reggina",
            "code": "REG",
            "country": "Italy",
            "founded": 1914,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1692.png"
        },
        "venue": {
            "id": 2760,
            "name": "Stadio Oreste Granillo",
            "address": "Via Galileo Galilei",
            "city": "Reggio Calabria",
            "capacity": 25314,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/2760.png"
        }
    },
    {
        "team": {
            "id": 1693,
            "name": "Mantova",
            "code": "MAN",
            "country": "Italy",
            "founded": 1906,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1693.png"
        },
        "venue": {
            "id": 4185,
            "name": "Stadio Danilo Martelli",
            "address": "Viale Te, 7-9",
            "city": "Mantova",
            "capacity": 14854,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/4185.png"
        }
    },
    {
        "team": {
            "id": 1694,
            "name": "Santarcangelo",
            "code": "SAN",
            "country": "Italy",
            "founded": 1926,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1694.png"
        },
        "venue": {
            "id": 7325,
            "name": "Stadio Valentino Mazzola",
            "address": "Via della Resistenza, 5",
            "city": "Santarcangelo di Romagna",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/7325.png"
        }
    },
    {
        "team": {
            "id": 1695,
            "name": "Fidelis Andria",
            "code": null,
            "country": "Italy",
            "founded": 1971,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1695.png"
        },
        "venue": {
            "id": 6632,
            "name": "Stadio Degli Ulivi",
            "address": "Piazzale della Repubblica",
            "city": "Andria",
            "capacity": 9141,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6632.png"
        }
    },
    {
        "team": {
            "id": 1696,
            "name": "Taranto",
            "code": "TAR",
            "country": "Italy",
            "founded": 1924,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1696.png"
        },
        "venue": {
            "id": 6635,
            "name": "Stadio Comunale Erasmo Iacovone",
            "address": "Via Lago di Como, Rione Salinella",
            "city": "Taranto",
            "capacity": 26384,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6635.png"
        }
    },
    {
        "team": {
            "id": 1697,
            "name": "Olbia",
            "code": "OLB",
            "country": "Italy",
            "founded": 1905,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1697.png"
        },
        "venue": {
            "id": 918,
            "name": "Stadio Bruno Nespoli",
            "address": "Via Ungheria, 9",
            "city": "Olbia",
            "capacity": 3200,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/918.png"
        }
    },
    {
        "team": {
            "id": 1698,
            "name": "Racing Roma",
            "code": null,
            "country": "Italy",
            "founded": 2013,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1698.png"
        },
        "venue": {
            "id": 7323,
            "name": "Stadio Casal del Marmo",
            "address": "Via Giuseppe Barellai",
            "city": "Roma",
            "capacity": 2250,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/7323.png"
        }
    },
    {
        "team": {
            "id": 1699,
            "name": "Gavorrano",
            "code": "GAV",
            "country": "Italy",
            "founded": 1930,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1699.png"
        },
        "venue": {
            "id": 6588,
            "name": "Stadio Romeo Malservisi",
            "address": "Via Rodolfo Morandi, 2",
            "city": "Bagno di Gavorrano",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6588.png"
        }
    },
    {
        "team": {
            "id": 1700,
            "name": "Cuneo",
            "code": "CUN",
            "country": "Italy",
            "founded": 1905,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1700.png"
        },
        "venue": {
            "id": 870,
            "name": "Stadio Fratelli Paschiero",
            "address": "Corso Monviso 21",
            "city": "Cuneo",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/870.png"
        }
    },
    {
        "team": {
            "id": 1701,
            "name": "Fermana",
            "code": "FER",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1701.png"
        },
        "venue": {
            "id": 901,
            "name": "Stadio Bruno Recchioni",
            "address": "Viale Trento, 13",
            "city": "Fermo",
            "capacity": 11150,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/901.png"
        }
    },
    {
        "team": {
            "id": 1702,
            "name": "Arzachena",
            "code": "ARZ",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1702.png"
        },
        "venue": {
            "id": 927,
            "name": "Stadio Biagio Pirina",
            "address": "Viale Paulo Delton",
            "city": "Arzachena",
            "capacity": 3100,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/927.png"
        }
    },
    {
        "team": {
            "id": 1703,
            "name": "Bisceglie",
            "code": null,
            "country": "Italy",
            "founded": 1913,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1703.png"
        },
        "venue": {
            "id": 1766,
            "name": "Stadio Gustavo Ventura",
            "address": "Via Carrara Salsello, 30",
            "city": "Bisceglie",
            "capacity": 8000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/1766.png"
        }
    },
    {
        "team": {
            "id": 1704,
            "name": "Mestre",
            "code": null,
            "country": "Italy",
            "founded": 1927,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1704.png"
        },
        "venue": {
            "id": 6557,
            "name": "Stadio Francesco Baracca",
            "address": "Via Francesco Baracca, 19",
            "city": "Mestre",
            "capacity": 8074,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6557.png"
        }
    },
    {
        "team": {
            "id": 1705,
            "name": "Ravenna",
            "code": null,
            "country": "Italy",
            "founded": 1913,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1705.png"
        },
        "venue": {
            "id": 931,
            "name": "Stadio Comunale Bruno Benelli",
            "address": "Via Punta Stilo, 29",
            "city": "Ravenna",
            "capacity": 12020,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/931.png"
        }
    },
    {
        "team": {
            "id": 1706,
            "name": "Pro Patria",
            "code": "PAT",
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1706.png"
        },
        "venue": {
            "id": 929,
            "name": "Stadio Carlo Speroni",
            "address": "Via Cà Bianca, 42",
            "city": "Busto Arsizio",
            "capacity": 4504,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/929.png"
        }
    },
    {
        "team": {
            "id": 1707,
            "name": "Virtus Verona",
            "code": "VIR",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1707.png"
        },
        "venue": {
            "id": 947,
            "name": "Stadio Comunale Gavagnin-Nocini",
            "address": "Via Montorio 112",
            "city": "Verona",
            "capacity": 1421,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/947.png"
        }
    },
    {
        "team": {
            "id": 1708,
            "name": "Vis Pesaro",
            "code": "PES",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1708.png"
        },
        "venue": {
            "id": 950,
            "name": "Stadio Tonino Benelli",
            "address": "Via dei Campo Sportivo",
            "city": "Pesaro",
            "capacity": 4898,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/950.png"
        }
    },
    {
        "team": {
            "id": 1709,
            "name": "Rimini",
            "code": "RIM",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1709.png"
        },
        "venue": {
            "id": 932,
            "name": "Stadio Romeo Neri",
            "address": "Viale 9 Febbraio 1849",
            "city": "Rimini",
            "capacity": 9798,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/932.png"
        }
    },
    {
        "team": {
            "id": 1710,
            "name": "Potenza",
            "code": null,
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1710.png"
        },
        "venue": {
            "id": 1832,
            "name": "Stadio Comunale Alfredo Viviani",
            "address": "Viale Guglielmo Marconi",
            "city": "Potenza",
            "capacity": 5500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/1832.png"
        }
    },
    {
        "team": {
            "id": 1711,
            "name": "Rieti",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1711.png"
        },
        "venue": {
            "id": 899,
            "name": "Stadio Centro d'Italia - Manlio Scopigno",
            "address": "Piazza Veterani dello Sport",
            "city": "Rieti",
            "capacity": 9980,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/899.png"
        }
    },
    {
        "team": {
            "id": 1712,
            "name": "Cavese",
            "code": "CAV",
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1712.png"
        },
        "venue": {
            "id": 889,
            "name": "Stadio Comunale Simonetta Lamberti",
            "address": "Corso Mazzini, 1",
            "city": "Cava de&apos; Tirreni",
            "capacity": 15200,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/889.png"
        }
    },
    {
        "team": {
            "id": 1713,
            "name": "Albissola",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1713.png"
        },
        "venue": {
            "id": 872,
            "name": "Stadio Comunale Chiavari",
            "address": "Via Aldo Gastaldi, 22",
            "city": "Chiavari",
            "capacity": 5535,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/872.png"
        }
    },
    {
        "team": {
            "id": 1714,
            "name": "Gozzano",
            "code": "GOZ",
            "country": "Italy",
            "founded": 1924,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1714.png"
        },
        "venue": {
            "id": 1740,
            "name": "Stadio Alfredo D'Albertas",
            "address": "Via Madonna Luzzara",
            "city": "Gozzano",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/1740.png"
        }
    },
    {
        "team": {
            "id": 1715,
            "name": "Juventus U23",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1715.png"
        },
        "venue": {
            "id": 874,
            "name": "Stadio Giuseppe Moccagatta",
            "address": "Via Spalto Rovereto, 28",
            "city": "Alessandria",
            "capacity": 7694,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/874.png"
        }
    },
    {
        "team": {
            "id": 1748,
            "name": "Italy W",
            "code": null,
            "country": "Italy",
            "founded": 1898,
            "national": true,
            "logo": "https://media-3.api-sports.io/football/teams/1748.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1872,
            "name": "RES Roma W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1872.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1873,
            "name": "Brescia W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1873.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1874,
            "name": "Cuneo W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1874.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1875,
            "name": "Jesina W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1875.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1876,
            "name": "Tavagnacco W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1876.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1877,
            "name": "Zaccaria W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1877.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1878,
            "name": "Chieti W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1878.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1879,
            "name": "Como 2000 W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1879.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1880,
            "name": "Fiorentina W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1880.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1881,
            "name": "Luserna W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1881.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1882,
            "name": "Mozzanica W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1882.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1883,
            "name": "Verona W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1883.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1884,
            "name": "Bari Pink W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1884.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1885,
            "name": "Empoli W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1885.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1886,
            "name": "Juventus W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1886.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1887,
            "name": "Chievo Verona W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1887.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1888,
            "name": "Ravenna W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1888.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1889,
            "name": "Sassuolo W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/1889.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1890,
            "name": "Florentia W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1890.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1891,
            "name": "Orobica W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/1891.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1892,
            "name": "Roma W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1892.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 1893,
            "name": "AC Milan W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/1893.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 5603,
            "name": "Adriese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/5603.png"
        },
        "venue": {
            "id": 4186,
            "name": "Stadio Luigi Bettinazzi",
            "address": "Via Bettinazzi 1",
            "city": "Adria",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/4186.png"
        }
    },
    {
        "team": {
            "id": 5604,
            "name": "Città di Fasano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/5604.png"
        },
        "venue": {
            "id": 4187,
            "name": "Stadio Comunale Vito Curlo",
            "address": null,
            "city": "Fasano",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/4187.png"
        }
    },
    {
        "team": {
            "id": 5605,
            "name": "Fanfulla",
            "code": null,
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/5605.png"
        },
        "venue": {
            "id": 4188,
            "name": "Stadio Dossenina",
            "address": "Viale Pavia, 24",
            "city": "Lodi",
            "capacity": 2184,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/4188.png"
        }
    },
    {
        "team": {
            "id": 5606,
            "name": "Lanusei",
            "code": null,
            "country": "Italy",
            "founded": 1986,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/5606.png"
        },
        "venue": {
            "id": 4189,
            "name": "Campo Comunale Lixius Lanusei",
            "address": "Via Circonvallazione Sud, Lixius",
            "city": "Lanusei",
            "capacity": 600,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/4189.png"
        }
    },
    {
        "team": {
            "id": 5607,
            "name": "Ponsacco",
            "code": null,
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/5607.png"
        },
        "venue": {
            "id": 4190,
            "name": "Stadio Comunale",
            "address": null,
            "city": "Ponsacco",
            "capacity": 3220,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/4190.png"
        }
    },
    {
        "team": {
            "id": 5608,
            "name": "Turris",
            "code": "TUR",
            "country": "Italy",
            "founded": 1944,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/5608.png"
        },
        "venue": {
            "id": 4191,
            "name": "Stadio Amerigo Liguori",
            "address": "Viale Ungheria, 54",
            "city": "Torre del Greco",
            "capacity": 5300,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/4191.png"
        }
    },
    {
        "team": {
            "id": 6378,
            "name": "Arzignano Valchiampo",
            "code": null,
            "country": "Italy",
            "founded": 2011,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/6378.png"
        },
        "venue": {
            "id": 12420,
            "name": "Stadio Tommaso Dal Molin",
            "address": "Via Consolini",
            "city": "Arzignano",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12420.png"
        }
    },
    {
        "team": {
            "id": 6379,
            "name": "Lecco",
            "code": "LEC",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/6379.png"
        },
        "venue": {
            "id": 4705,
            "name": "Stadio Rigamonti Ceppi",
            "address": "Via Don Pozzi, 6",
            "city": "Lecco",
            "capacity": 4997,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/4705.png"
        }
    },
    {
        "team": {
            "id": 6380,
            "name": "Pergolettese",
            "code": "PER",
            "country": "Italy",
            "founded": 1932,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/6380.png"
        },
        "venue": {
            "id": 4706,
            "name": "Stadio Giuseppe Voltini",
            "address": "Viale Alcide de Gasperi, 67",
            "city": "Crema",
            "capacity": 4095,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/4706.png"
        }
    },
    {
        "team": {
            "id": 6381,
            "name": "Pianese",
            "code": "PIA",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/6381.png"
        },
        "venue": {
            "id": 12423,
            "name": "Stadio Comunale",
            "address": "Via Fratelli Rosselli 1",
            "city": "Piancastagnaio",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12423.png"
        }
    },
    {
        "team": {
            "id": 7533,
            "name": "Inter Milano W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/7533.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 7883,
            "name": "Atalanta U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/7883.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 7903,
            "name": "Internazionale U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/7903.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 7904,
            "name": "Juventus U19",
            "code": "JUV",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/7904.png"
        },
        "venue": {
            "id": 5702,
            "name": "Campo Chisola",
            "address": "Via del Castello, 3",
            "city": "Vinovo",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/5702.png"
        }
    },
    {
        "team": {
            "id": 7917,
            "name": "Napoli U19",
            "code": "NAP",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/7917.png"
        },
        "venue": {
            "id": 5703,
            "name": "Centro Sportivo Sant'Antimo",
            "address": "Via G. Marconi, 117",
            "city": "Sant&apos;Antimo",
            "capacity": 2500,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/5703.png"
        }
    },
    {
        "team": {
            "id": 7966,
            "name": "Roma U19",
            "code": "ROM",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/7966.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 7971,
            "name": "Vllaznia Shkodër U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/7971.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 7978,
            "name": "Dinamo Bucureşti U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/7978.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 8201,
            "name": "Italy U21",
            "code": "ITA",
            "country": "Italy",
            "founded": 1898,
            "national": true,
            "logo": "https://media-3.api-sports.io/football/teams/8201.png"
        },
        "venue": {
            "id": 910,
            "name": "Stadio Olimpico",
            "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
            "city": "Roma",
            "capacity": 82656,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/910.png"
        }
    },
    {
        "team": {
            "id": 9429,
            "name": "Borgosesia",
            "code": "BOR",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9429.png"
        },
        "venue": {
            "id": 6524,
            "name": "Stadio Comunale",
            "address": "Via Marconi",
            "city": "Borgosesia",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6524.png"
        }
    },
    {
        "team": {
            "id": 9430,
            "name": "Bra",
            "code": "BRA",
            "country": "Italy",
            "founded": 1913,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9430.png"
        },
        "venue": {
            "id": 6525,
            "name": "Stadio Comunale Attilio Bravi",
            "address": "Via Madonna dei Fiori, 91",
            "city": "Bra",
            "capacity": 1230,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6525.png"
        }
    },
    {
        "team": {
            "id": 9431,
            "name": "Caronnese",
            "code": "CAR",
            "country": "Italy",
            "founded": 1927,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9431.png"
        },
        "venue": {
            "id": 6526,
            "name": "Campo Sportivo Comunale",
            "address": "Corso della Vittoria 698",
            "city": "Caronno Pertusella",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6526.png"
        }
    },
    {
        "team": {
            "id": 9432,
            "name": "Casale",
            "code": null,
            "country": "Italy",
            "founded": 1909,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9432.png"
        },
        "venue": {
            "id": 6527,
            "name": "Stadio Natale Palli",
            "address": "Via Bruno Buozzi",
            "city": "Casale Monferrato",
            "capacity": 6035,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6527.png"
        }
    },
    {
        "team": {
            "id": 9433,
            "name": "Fezzanese",
            "code": null,
            "country": "Italy",
            "founded": 1930,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9433.png"
        },
        "venue": {
            "id": 6528,
            "name": "Stadio Miro Luperi",
            "address": "Via Villefranche de Rouergue 1",
            "city": "Sarzana",
            "capacity": 4500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6528.png"
        }
    },
    {
        "team": {
            "id": 9434,
            "name": "Fossano",
            "code": null,
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9434.png"
        },
        "venue": {
            "id": 6529,
            "name": "Stadio Angelo Pochissimo",
            "address": "Corso Trento, 53",
            "city": "Fossano",
            "capacity": 1500,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6529.png"
        }
    },
    {
        "team": {
            "id": 9435,
            "name": "Ghivizzano Borgo Mozzano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9435.png"
        },
        "venue": {
            "id": 12421,
            "name": "Stadio delle Terme",
            "address": "Via Lima",
            "city": "Bagni di Lucca",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12421.png"
        }
    },
    {
        "team": {
            "id": 9436,
            "name": "Lavagnese",
            "code": "LAV",
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9436.png"
        },
        "venue": {
            "id": 6531,
            "name": "Stadio Edoardo Riboli",
            "address": "Via Edoardo Riboli",
            "city": "Lavagna",
            "capacity": 800,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6531.png"
        }
    },
    {
        "team": {
            "id": 9437,
            "name": "Ligorna",
            "code": null,
            "country": "Italy",
            "founded": 1922,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9437.png"
        },
        "venue": {
            "id": 6532,
            "name": "Campo Sportivo Ligorna",
            "address": "Via Solimano, Serino",
            "city": "Genova",
            "capacity": 1500,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6532.png"
        }
    },
    {
        "team": {
            "id": 9438,
            "name": "Real Forte Querceta",
            "code": null,
            "country": "Italy",
            "founded": 2012,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9438.png"
        },
        "venue": {
            "id": 6533,
            "name": "Stadio Comunale Carlo Necchi",
            "address": "Via XX Settembre 91",
            "city": "Forte dei Marmi",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6533.png"
        }
    },
    {
        "team": {
            "id": 9439,
            "name": "Sanremese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9439.png"
        },
        "venue": {
            "id": 946,
            "name": "Stadio Comunale Luigi Cichero",
            "address": "Via Giuseppe Mazzini, 15",
            "city": "Sanremo",
            "capacity": 4850,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/946.png"
        }
    },
    {
        "team": {
            "id": 9440,
            "name": "Savona",
            "code": "SAV",
            "country": "Italy",
            "founded": 1907,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9440.png"
        },
        "venue": {
            "id": 6534,
            "name": "Stadio Valerio Bacigalupo",
            "address": "Via Luigi Cadorna, 5",
            "city": "Savona",
            "capacity": 3999,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6534.png"
        }
    },
    {
        "team": {
            "id": 9441,
            "name": "Seravezza",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9441.png"
        },
        "venue": {
            "id": 6535,
            "name": "Stadio Comunale Buon Riposo",
            "address": "Via del Campo",
            "city": "Pozzi Seravezza",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6535.png"
        }
    },
    {
        "team": {
            "id": 9442,
            "name": "Vado",
            "code": null,
            "country": "Italy",
            "founded": 1913,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9442.png"
        },
        "venue": {
            "id": 6536,
            "name": "Stadio Ferruccio Chittolina",
            "address": "Via Diaz 33, Vallegia-Quiliano",
            "city": "Vadu Ligure",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6536.png"
        }
    },
    {
        "team": {
            "id": 9443,
            "name": "Verbania",
            "code": "VER",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9443.png"
        },
        "venue": {
            "id": 6537,
            "name": "Stadio Carlo Pedroli",
            "address": "Via Arturo Farinelli, 10",
            "city": "Verbania",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6537.png"
        }
    },
    {
        "team": {
            "id": 9444,
            "name": "Arconatese",
            "code": null,
            "country": "Italy",
            "founded": 1926,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9444.png"
        },
        "venue": {
            "id": 6540,
            "name": "Centro Sportivo Comunale Roberto Battaglia",
            "address": "Via Benvenuto Cellini, 42",
            "city": "Busto Garolfo",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6540.png"
        }
    },
    {
        "team": {
            "id": 9445,
            "name": "Brusaporto",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9445.png"
        },
        "venue": {
            "id": 6539,
            "name": "Campo Sportivo Comunale Brusaporto",
            "address": "Via Belvedere",
            "city": "Brusaporto",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6539.png"
        }
    },
    {
        "team": {
            "id": 9446,
            "name": "Bustese Milano City",
            "code": null,
            "country": "Italy",
            "founded": 2015,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9446.png"
        },
        "venue": {
            "id": 6540,
            "name": "Centro Sportivo Comunale Roberto Battaglia",
            "address": "Via Benvenuto Cellini, 42",
            "city": "Busto Garolfo",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6540.png"
        }
    },
    {
        "team": {
            "id": 9447,
            "name": "Caravaggio",
            "code": "CAR",
            "country": "Italy",
            "founded": 1958,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9447.png"
        },
        "venue": {
            "id": 6541,
            "name": "Stadio Comunale",
            "address": "Via Olimpia",
            "city": "Caravaggio",
            "capacity": 2180,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6541.png"
        }
    },
    {
        "team": {
            "id": 9448,
            "name": "Castellanzese",
            "code": null,
            "country": "Italy",
            "founded": 1921,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9448.png"
        },
        "venue": {
            "id": 12414,
            "name": "Stadio Comunale Giovanni Provasi",
            "address": "Via Generale Luigi Cadorna, 11",
            "city": "Castellanza",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12414.png"
        }
    },
    {
        "team": {
            "id": 9449,
            "name": "Dro Alto Garda",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9449.png"
        },
        "venue": {
            "id": 6543,
            "name": "Stadio Comunale Dro",
            "address": "Via Capitelli",
            "city": "Dro",
            "capacity": 500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6543.png"
        }
    },
    {
        "team": {
            "id": 9450,
            "name": "Folgore Caratese",
            "code": "FOL",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9450.png"
        },
        "venue": {
            "id": 6544,
            "name": "Stadio XXV Aprile",
            "address": "Via XXV Aprile, 13",
            "city": "Carate Brianza",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6544.png"
        }
    },
    {
        "team": {
            "id": 9451,
            "name": "Inveruno",
            "code": "INV",
            "country": "Italy",
            "founded": 1945,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9451.png"
        },
        "venue": {
            "id": 6545,
            "name": "Centro Sportivo Comunale",
            "address": "Via Lazzaretto 13",
            "city": "Inveruno",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6545.png"
        }
    },
    {
        "team": {
            "id": 9452,
            "name": "Legnano",
            "code": null,
            "country": "Italy",
            "founded": 1913,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9452.png"
        },
        "venue": {
            "id": 6546,
            "name": "Stadio Comunale Giovanni Mari",
            "address": "Via Carlo Pisacane",
            "city": "Legnano",
            "capacity": 6700,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6546.png"
        }
    },
    {
        "team": {
            "id": 9453,
            "name": "Levico",
            "code": null,
            "country": "Italy",
            "founded": 1958,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9453.png"
        },
        "venue": {
            "id": 6547,
            "name": "Stadio Comunale",
            "address": "Viale Lido",
            "city": "Levico Terme",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6547.png"
        }
    },
    {
        "team": {
            "id": 9454,
            "name": "Nibionnoggiono",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9454.png"
        },
        "venue": {
            "id": 6548,
            "name": "Stadio Comunale Al Bersaglio",
            "address": "Loc.Bersaglio Via P. de Coubertin",
            "city": "Oggiono",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6548.png"
        }
    },
    {
        "team": {
            "id": 9455,
            "name": "Ponte San Pietro",
            "code": null,
            "country": "Italy",
            "founded": 1910,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9455.png"
        },
        "venue": {
            "id": 6549,
            "name": "Stadio Matteo Legler",
            "address": "Via Trento e Trieste, 12",
            "city": "Ponte San Pietro",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6549.png"
        }
    },
    {
        "team": {
            "id": 9456,
            "name": "Pro Sesto",
            "code": "SES",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9456.png"
        },
        "venue": {
            "id": 6550,
            "name": "Stadio Ernesto Breda",
            "address": "Via XX Settembre, 162",
            "city": "Sesto San Giovanni",
            "capacity": 4475,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6550.png"
        }
    },
    {
        "team": {
            "id": 9457,
            "name": "Scanzorosciate",
            "code": null,
            "country": "Italy",
            "founded": 1967,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9457.png"
        },
        "venue": {
            "id": 6551,
            "name": "Stadio Comunale Unione Sportiva Scanzorosciate",
            "address": "Via Polcarezzo 11",
            "city": "Scanzorosciate",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6551.png"
        }
    },
    {
        "team": {
            "id": 9458,
            "name": "Sondrio",
            "code": null,
            "country": "Italy",
            "founded": 1932,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9458.png"
        },
        "venue": {
            "id": 6552,
            "name": "Stadio Coni Castellina",
            "address": "Via Valeriana 33",
            "city": "Sondrio",
            "capacity": 1300,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6552.png"
        }
    },
    {
        "team": {
            "id": 9459,
            "name": "Tritium",
            "code": "TRI",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9459.png"
        },
        "venue": {
            "id": 6553,
            "name": "Stadio Comunale La Rocca",
            "address": "Via Rocca, 19",
            "city": "Trezzo sull&apos;Adda",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6553.png"
        }
    },
    {
        "team": {
            "id": 9460,
            "name": "Villa Valle",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9460.png"
        },
        "venue": {
            "id": 6554,
            "name": "Campo Sportivo Comunale Villa D'Almè",
            "address": "Via Ronco Basso 15",
            "city": "Villa D&apos;Almè",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6554.png"
        }
    },
    {
        "team": {
            "id": 9461,
            "name": "Virtus Bolzano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9461.png"
        },
        "venue": {
            "id": 6555,
            "name": "Campo Calcio Righi",
            "address": "Via Luigi Cadorna, 25 (Cadornastrasse 25)",
            "city": "Bozen",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/6555.png"
        }
    },
    {
        "team": {
            "id": 9462,
            "name": "Virtus Ciserano Bergamo",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9462.png"
        },
        "venue": {
            "id": 6556,
            "name": "Stadio Carlo Rossoni",
            "address": "Via Mazzini 13",
            "city": "Ciserano",
            "capacity": 1000,
            "surface": null,
            "image": "https://media-1.api-sports.io/football/venues/6556.png"
        }
    },
    {
        "team": {
            "id": 9463,
            "name": "Ambrosiana",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9463.png"
        },
        "venue": {
            "id": 6558,
            "name": "Stadio Montindon",
            "address": "Via Alessandro Volta",
            "city": "Sant&apos;ambrogio Di Valpolicella",
            "capacity": 2000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6558.png"
        }
    },
    {
        "team": {
            "id": 9464,
            "name": "Belluno",
            "code": "BEL",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9464.png"
        },
        "venue": {
            "id": 6559,
            "name": "Stadio Comunale Polisportivo",
            "address": "Piazzale Resistenza 27",
            "city": "Belluno",
            "capacity": 2585,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6559.png"
        }
    },
    {
        "team": {
            "id": 9465,
            "name": "Caldiero Terme",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9465.png"
        },
        "venue": {
            "id": 6560,
            "name": "Stadio Comunale di Caldiero",
            "address": "Via Santi, 54",
            "city": "Caldiero",
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6560.png"
        }
    },
    {
        "team": {
            "id": 9466,
            "name": "Cartigliano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9466.png"
        },
        "venue": {
            "id": 6561,
            "name": "Stadio Fair Play di Cartigliano",
            "address": "Viale Lungo Brenta",
            "city": "Cartigliano",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6561.png"
        }
    },
    {
        "team": {
            "id": 9467,
            "name": "Chions",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9467.png"
        },
        "venue": {
            "id": 6562,
            "name": "Stadio Comunale Francesco Tesolin",
            "address": "Via Garibaldi",
            "city": "Chions",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6562.png"
        }
    },
    {
        "team": {
            "id": 9468,
            "name": "Cjarlins Muzane",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9468.png"
        },
        "venue": {
            "id": 6563,
            "name": "Stadio Via Rizzolo",
            "address": "Via Rizzolo",
            "city": "Carlino",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6563.png"
        }
    },
    {
        "team": {
            "id": 9469,
            "name": "Clodiense",
            "code": "CLO",
            "country": "Italy",
            "founded": 2011,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9469.png"
        },
        "venue": {
            "id": 6564,
            "name": "Stadio Aldo e Dino Ballarin",
            "address": "Via Stazione, 30",
            "city": "Chioggia",
            "capacity": 3622,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6564.png"
        }
    },
    {
        "team": {
            "id": 9470,
            "name": "Delta Porto Tolle",
            "code": "POR",
            "country": "Italy",
            "founded": 1999,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9470.png"
        },
        "venue": {
            "id": 6565,
            "name": "Stadio Comunale Umberto Cavallari",
            "address": "Via Tangenziale, 10",
            "city": "Porto Tolle",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6565.png"
        }
    },
    {
        "team": {
            "id": 9471,
            "name": "Este",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9471.png"
        },
        "venue": {
            "id": 6566,
            "name": "Nuovo Stadio Comunale",
            "address": "Via Monte Cero 81",
            "city": "Este",
            "capacity": 1200,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6566.png"
        }
    },
    {
        "team": {
            "id": 9472,
            "name": "Legnago Salus",
            "code": "LEG",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9472.png"
        },
        "venue": {
            "id": 6567,
            "name": "Stadio Mario Sandrini",
            "address": "Via Olimpia",
            "city": "Legnago",
            "capacity": 2152,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6567.png"
        }
    },
    {
        "team": {
            "id": 9473,
            "name": "Luparense",
            "code": "SPP",
            "country": "Italy",
            "founded": 1965,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9473.png"
        },
        "venue": {
            "id": 6568,
            "name": "Stadio Comunale Gianni Casée",
            "address": "Via Leonardo da Vinci, 7",
            "city": "San Martino di Lupari",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6568.png"
        }
    },
    {
        "team": {
            "id": 9474,
            "name": "Montebelluna",
            "code": "MON",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9474.png"
        },
        "venue": {
            "id": 6569,
            "name": "Stadio San Vigilio",
            "address": "Via Piave",
            "city": "Montebelluna",
            "capacity": 1900,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6569.png"
        }
    },
    {
        "team": {
            "id": 9475,
            "name": "San Luigi",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9475.png"
        },
        "venue": {
            "id": 6570,
            "name": "Stadio Comunale Via Felluga",
            "address": "Via Felluga Umberto, 58",
            "city": "Trieste",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/6570.png"
        }
    },
    {
        "team": {
            "id": 9476,
            "name": "Tamai",
            "code": "TAM",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9476.png"
        },
        "venue": {
            "id": 6571,
            "name": "Stadio Comunale di Tamai",
            "address": "Via Giovanni XXIII 41",
            "city": "Tamai",
            "capacity": 1140,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6571.png"
        }
    },
    {
        "team": {
            "id": 9477,
            "name": "Union Feltre",
            "code": null,
            "country": "Italy",
            "founded": 2016,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9477.png"
        },
        "venue": {
            "id": 6572,
            "name": "Stadio Zugni Tauro",
            "address": "Via Bagnols Sur Cèzè, 1",
            "city": "Feltre",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6572.png"
        }
    },
    {
        "team": {
            "id": 9478,
            "name": "Vigasio",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9478.png"
        },
        "venue": {
            "id": 6573,
            "name": "Stadio Comunale Umberto Capone",
            "address": "Via Alzeri",
            "city": "Vigasio",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6573.png"
        }
    },
    {
        "team": {
            "id": 9480,
            "name": "Alfonsine",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9480.png"
        },
        "venue": {
            "id": 6576,
            "name": "Stadio Comunale Brigata Cremona",
            "address": "Piazza Generale Clemente Primieri, 9",
            "city": "Alfonsine",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6576.png"
        }
    },
    {
        "team": {
            "id": 9481,
            "name": "Breno",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9481.png"
        },
        "venue": {
            "id": 6577,
            "name": "Campo Sportivo Comunale Tassara",
            "address": "Viale Italia",
            "city": "Breno",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6577.png"
        }
    },
    {
        "team": {
            "id": 9482,
            "name": "Calvina",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9482.png"
        },
        "venue": {
            "id": 6578,
            "name": "Stadio Comunal Mundial ‘82",
            "address": "Via Giovanni Verga",
            "city": "Carpenedolo",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6578.png"
        }
    },
    {
        "team": {
            "id": 9483,
            "name": "Correggese",
            "code": "COR",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9483.png"
        },
        "venue": {
            "id": 6579,
            "name": "Nuevo Stadio Comunale Walter Borelli",
            "address": "Via Fazzano 4",
            "city": "Correggio",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6579.png"
        }
    },
    {
        "team": {
            "id": 9484,
            "name": "Crema",
            "code": null,
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9484.png"
        },
        "venue": {
            "id": 4706,
            "name": "Stadio Giuseppe Voltini",
            "address": "Viale Alcide de Gasperi, 67",
            "city": "Crema",
            "capacity": 4095,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/4706.png"
        }
    },
    {
        "team": {
            "id": 9485,
            "name": "Fiorenzuola",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9485.png"
        },
        "venue": {
            "id": 6580,
            "name": "Stadio Comunale",
            "address": "Via Campo Sportivo 1",
            "city": "Fiorenzuola d&apos;Arda",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6580.png"
        }
    },
    {
        "team": {
            "id": 9486,
            "name": "Franciacorta",
            "code": null,
            "country": "Italy",
            "founded": 1909,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9486.png"
        },
        "venue": {
            "id": 6581,
            "name": "Campo Sportivo Comunale Maselli",
            "address": "Via Tullio Dandolo, 57",
            "city": "Adro",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6581.png"
        }
    },
    {
        "team": {
            "id": 9487,
            "name": "Lentigione",
            "code": null,
            "country": "Italy",
            "founded": 1948,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9487.png"
        },
        "venue": {
            "id": 6582,
            "name": "Stadio Comunale Valente Levantini",
            "address": "Via Bacchi Mellini, 22",
            "city": "Lentigione",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6582.png"
        }
    },
    {
        "team": {
            "id": 9488,
            "name": "Mezzolara",
            "code": "MEZ",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9488.png"
        },
        "venue": {
            "id": 6583,
            "name": "Stadio Pietro Zucchini",
            "address": "Piazzale della Gioventù",
            "city": "Budrio",
            "capacity": 1300,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6583.png"
        }
    },
    {
        "team": {
            "id": 9489,
            "name": "Sammaurese",
            "code": null,
            "country": "Italy",
            "founded": 1935,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9489.png"
        },
        "venue": {
            "id": 6584,
            "name": "Campo Da Calcio Macrelli",
            "address": "Via Monti 1",
            "city": "San Mauro Pascoli",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6584.png"
        }
    },
    {
        "team": {
            "id": 9490,
            "name": "Sasso Marconi Zola",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9490.png"
        },
        "venue": {
            "id": 6585,
            "name": "Centro Sportivo Enrico Filippetti",
            "address": "Via Gesso, 26, Riale",
            "city": "Zola Predosa",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6585.png"
        }
    },
    {
        "team": {
            "id": 9491,
            "name": "Savignanese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9491.png"
        },
        "venue": {
            "id": 6586,
            "name": "Stadio Giuseppe Capanni",
            "address": "Via della Resistenza",
            "city": "Savignano sul Rubicone",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6586.png"
        }
    },
    {
        "team": {
            "id": 9492,
            "name": "Vigor Carpaneto",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9492.png"
        },
        "venue": {
            "id": 6587,
            "name": "Stadio Carpaneto Piacentino",
            "address": "Via S. Lazzaro 1",
            "city": "Carpaneto Piacentino",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6587.png"
        }
    },
    {
        "team": {
            "id": 9493,
            "name": "Aglianese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9493.png"
        },
        "venue": {
            "id": 6590,
            "name": "Stadio Comunale Germano Bellucci",
            "address": "Via Giovannella, 1",
            "city": "Agliana",
            "capacity": 2582,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6590.png"
        }
    },
    {
        "team": {
            "id": 9494,
            "name": "Bastia Calcio",
            "code": null,
            "country": "Italy",
            "founded": 1924,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9494.png"
        },
        "venue": {
            "id": 6591,
            "name": "Stadio Comunale",
            "address": "Piazza Bakunin 1",
            "city": "Bastia Umbra",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6591.png"
        }
    },
    {
        "team": {
            "id": 9495,
            "name": "Cannara",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9495.png"
        },
        "venue": {
            "id": 6592,
            "name": "Stadio Comunale Spoletini",
            "address": "Via Assisi",
            "city": "Cannara",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6592.png"
        }
    },
    {
        "team": {
            "id": 9496,
            "name": "Città di Foligno",
            "code": "FOL",
            "country": "Italy",
            "founded": 1928,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9496.png"
        },
        "venue": {
            "id": 6593,
            "name": "Stadio Enzo Blasone",
            "address": "Via Monte Cucco, Santo Pietro",
            "city": "Foligno",
            "capacity": 5650,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6593.png"
        }
    },
    {
        "team": {
            "id": 9497,
            "name": "Flaminia",
            "code": "FLA",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9497.png"
        },
        "venue": {
            "id": 6594,
            "name": "Stadio Turiddu Madami",
            "address": "Via Enrico Minio",
            "city": "Civita Castellana",
            "capacity": 1300,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6594.png"
        }
    },
    {
        "team": {
            "id": 9498,
            "name": "Grassina",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9498.png"
        },
        "venue": {
            "id": 6595,
            "name": "Stadio di Grassina",
            "address": "Via Abebe Bikila, Grassina",
            "city": "Bagno a Ripoli",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6595.png"
        }
    },
    {
        "team": {
            "id": 9499,
            "name": "Grosseto",
            "code": "GRO",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9499.png"
        },
        "venue": {
            "id": 4707,
            "name": "Stadio Olimpico Carlo Zecchini",
            "address": "Via Veterani dello Sport, 6",
            "city": "Grosseto",
            "capacity": 9779,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/4707.png"
        }
    },
    {
        "team": {
            "id": 9500,
            "name": "Montevarchi Calcio",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9500.png"
        },
        "venue": {
            "id": 6596,
            "name": "Stadio Gastone Brilli Peri",
            "address": "Via Gramsci",
            "city": "Montevarchi",
            "capacity": 7200,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6596.png"
        }
    },
    {
        "team": {
            "id": 9501,
            "name": "Pomezia",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9501.png"
        },
        "venue": {
            "id": 6597,
            "name": "Stadio Comunale",
            "address": "Via Giuseppe Saragat",
            "city": "Pomezia",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6597.png"
        }
    },
    {
        "team": {
            "id": 9502,
            "name": "San Donato Tavarnelle",
            "code": null,
            "country": "Italy",
            "founded": 2006,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9502.png"
        },
        "venue": {
            "id": 6596,
            "name": "Stadio Gastone Brilli Peri",
            "address": "Via Gramsci",
            "city": "Montevarchi",
            "capacity": 7200,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6596.png"
        }
    },
    {
        "team": {
            "id": 9503,
            "name": "Sangiovannese",
            "code": null,
            "country": "Italy",
            "founded": 1927,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9503.png"
        },
        "venue": {
            "id": 6599,
            "name": "Stadio Virgilio Fedini",
            "address": "Via Bruno Buozzi",
            "city": "San Giovanni Valdarno",
            "capacity": 3400,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6599.png"
        }
    },
    {
        "team": {
            "id": 9504,
            "name": "Scandicci",
            "code": "SCA",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9504.png"
        },
        "venue": {
            "id": 6600,
            "name": "Stadio Turri",
            "address": "Via Rialdoli",
            "city": "Firenze",
            "capacity": 1800,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6600.png"
        }
    },
    {
        "team": {
            "id": 9505,
            "name": "Sporting Trestina",
            "code": "TRE",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9505.png"
        },
        "venue": {
            "id": 12425,
            "name": "Stadio Lorenzo Casini",
            "address": "Via G. Bretagna 3 / Via Raffaello Lambruschini",
            "city": "Trestina",
            "capacity": 666,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12425.png"
        }
    },
    {
        "team": {
            "id": 9506,
            "name": "Atletico Terme Fiuggi",
            "code": null,
            "country": "Italy",
            "founded": 2016,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9506.png"
        },
        "venue": {
            "id": 12430,
            "name": "Stadio Comunale",
            "address": "Viale dello Sport",
            "city": "Fiuggi",
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12430.png"
        }
    },
    {
        "team": {
            "id": 9507,
            "name": "Avezzano",
            "code": null,
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9507.png"
        },
        "venue": {
            "id": 6603,
            "name": "Stadio dei Marsi",
            "address": "Via Ferrara",
            "city": "Avezzano",
            "capacity": 3692,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6603.png"
        }
    },
    {
        "team": {
            "id": 9508,
            "name": "Cattolica",
            "code": null,
            "country": "Italy",
            "founded": 2019,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9508.png"
        },
        "venue": {
            "id": 6604,
            "name": "Stadio Giorgio Calbi",
            "address": "Via del Partigiano 4",
            "city": "Cattolica",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6604.png"
        }
    },
    {
        "team": {
            "id": 9509,
            "name": "Chieti",
            "code": "CAL",
            "country": "Italy",
            "founded": 1922,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9509.png"
        },
        "venue": {
            "id": 6605,
            "name": "Stadio Guido Angelini",
            "address": "Viale Abruzzo, Chieti Scalo",
            "city": "Chieti",
            "capacity": 12750,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6605.png"
        }
    },
    {
        "team": {
            "id": 9510,
            "name": "Città di Campobasso",
            "code": null,
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9510.png"
        },
        "venue": {
            "id": 6606,
            "name": "Stadio Nuovo Romagnoli",
            "address": "Contrada Fontana Vecchia",
            "city": "Campobasso",
            "capacity": 21800,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6606.png"
        }
    },
    {
        "team": {
            "id": 9511,
            "name": "Jesina",
            "code": "JES",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9511.png"
        },
        "venue": {
            "id": 6607,
            "name": "Stadio Comunale P. Carotti",
            "address": "Viale Cavallotti",
            "city": "Jesi",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6607.png"
        }
    },
    {
        "team": {
            "id": 9512,
            "name": "Montegiorgio",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9512.png"
        },
        "venue": {
            "id": 6608,
            "name": "Stadio Comunale Pianarelle Tamburrini",
            "address": "Contrada Pianarelle",
            "city": "Montegiorgio",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6608.png"
        }
    },
    {
        "team": {
            "id": 9513,
            "name": "Olympia Agnonese",
            "code": "AGN",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9513.png"
        },
        "venue": {
            "id": 6609,
            "name": "Stadio Comunale Civitelle",
            "address": "Viale Castelnuovo",
            "city": "Agnone",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6609.png"
        }
    },
    {
        "team": {
            "id": 9514,
            "name": "Pineto",
            "code": null,
            "country": "Italy",
            "founded": 1962,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9514.png"
        },
        "venue": {
            "id": 6610,
            "name": "Stadio Comunale Mimmo Pavone",
            "address": "Strada Provinciale Pineto-Atri",
            "city": "Pineto",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6610.png"
        }
    },
    {
        "team": {
            "id": 9515,
            "name": "Porto Sant'Elpidio",
            "code": null,
            "country": "Italy",
            "founded": 1947,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9515.png"
        },
        "venue": {
            "id": 6611,
            "name": "Stadio Ferranti",
            "address": "Via Della Liberazione",
            "city": "Porto Sant&apos;elpidio",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6611.png"
        }
    },
    {
        "team": {
            "id": 9516,
            "name": "Real Giulianova",
            "code": "GIU",
            "country": "Italy",
            "founded": 1924,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9516.png"
        },
        "venue": {
            "id": 6612,
            "name": "Stadio Rubens Fadini",
            "address": "Via Migliori, 13",
            "city": "Giulianova",
            "capacity": 5625,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6612.png"
        }
    },
    {
        "team": {
            "id": 9517,
            "name": "Recanatese",
            "code": "REC",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9517.png"
        },
        "venue": {
            "id": 6613,
            "name": "Stadio Nicola Tubaldi",
            "address": "Via Aldo Moro",
            "city": "Recanati",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6613.png"
        }
    },
    {
        "team": {
            "id": 9518,
            "name": "San Nicolò",
            "code": null,
            "country": "Italy",
            "founded": 1968,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9518.png"
        },
        "venue": {
            "id": 6614,
            "name": "Stadio Comunale Vincenzo Savini",
            "address": "Via Fosse Ardeatine",
            "city": "Notaresco",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6614.png"
        }
    },
    {
        "team": {
            "id": 9519,
            "name": "Sangiustese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9519.png"
        },
        "venue": {
            "id": 6615,
            "name": "Stadio Comunale Villa San Filippo",
            "address": "Via Magellano Monte, Villa San Filippo",
            "city": "Monte San Giusto",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6615.png"
        }
    },
    {
        "team": {
            "id": 9520,
            "name": "Tolentino",
            "code": null,
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9520.png"
        },
        "venue": {
            "id": 6616,
            "name": "Campo Sportivo della Vittoria Tolentino",
            "address": "Via Arnaldo Lucentini, 3",
            "city": "Tolentino",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6616.png"
        }
    },
    {
        "team": {
            "id": 9521,
            "name": "Vastese",
            "code": null,
            "country": "Italy",
            "founded": 1902,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9521.png"
        },
        "venue": {
            "id": 6617,
            "name": "Stadio Comunale Aragona",
            "address": "Via San Michele, 52",
            "city": "Vasto",
            "capacity": 5374,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6617.png"
        }
    },
    {
        "team": {
            "id": 9522,
            "name": "Vastogirardi",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9522.png"
        },
        "venue": {
            "id": 12431,
            "name": "Stadio Comunale Vastogirardi",
            "address": "Viale Raffaello Sanzio",
            "city": "Vastogirardi",
            "capacity": 1200,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12431.png"
        }
    },
    {
        "team": {
            "id": 9523,
            "name": "Aprilia",
            "code": null,
            "country": "Italy",
            "founded": 1971,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9523.png"
        },
        "venue": {
            "id": 6619,
            "name": "Stadio Quinto Ricci",
            "address": "Via Donato Bardi, 6",
            "city": "Aprilia",
            "capacity": 2504,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6619.png"
        }
    },
    {
        "team": {
            "id": 9524,
            "name": "Budoni",
            "code": "BUD",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9524.png"
        },
        "venue": {
            "id": 6620,
            "name": "Stadio Comunale San Teodoro",
            "address": "Via Donat Cattin",
            "city": "San Teodoro",
            "capacity": 1500,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/6620.png"
        }
    },
    {
        "team": {
            "id": 9525,
            "name": "Cassino",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9525.png"
        },
        "venue": {
            "id": 6621,
            "name": "Stadio Comunale Gino Salvetti",
            "address": "Via Appia Nuova",
            "city": "Cassino",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6621.png"
        }
    },
    {
        "team": {
            "id": 9526,
            "name": "Città di Anagni",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9526.png"
        },
        "venue": {
            "id": 6622,
            "name": "Campo Sportivo Caslini Andrea",
            "address": "Via Francesco Berni",
            "city": "Colleferro",
            "capacity": 2500,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/6622.png"
        }
    },
    {
        "team": {
            "id": 9527,
            "name": "Ladispoli",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9527.png"
        },
        "venue": {
            "id": 6623,
            "name": "Stadio Angelo Sale",
            "address": "Via Lazzari, Loc. Campi Vaccina",
            "city": "Ladispoli",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6623.png"
        }
    },
    {
        "team": {
            "id": 9528,
            "name": "Latte Dolce",
            "code": "LAT",
            "country": "Italy",
            "founded": 1973,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9528.png"
        },
        "venue": {
            "id": 6624,
            "name": "Stadio Comunale Latte Dolce",
            "address": "Via Leoncavallo 6",
            "city": "Sassari",
            "capacity": 1500,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6624.png"
        }
    },
    {
        "team": {
            "id": 9529,
            "name": "Muravera",
            "code": null,
            "country": "Italy",
            "founded": 1965,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9529.png"
        },
        "venue": {
            "id": 6625,
            "name": "Campo Sportivo di Muravera",
            "address": "Via Roma",
            "city": "Muravera",
            "capacity": 2500,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6625.png"
        }
    },
    {
        "team": {
            "id": 9530,
            "name": "Ostia Mare",
            "code": null,
            "country": "Italy",
            "founded": 1945,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9530.png"
        },
        "venue": {
            "id": 6626,
            "name": "Stadio Anco Marzio",
            "address": "Via Giovanni Amenduni, 15",
            "city": "Lido di Ostia",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6626.png"
        }
    },
    {
        "team": {
            "id": 9531,
            "name": "Portici",
            "code": null,
            "country": "Italy",
            "founded": 1906,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9531.png"
        },
        "venue": {
            "id": 6627,
            "name": "Stadio San Ciro",
            "address": "Via Farina",
            "city": "Portici",
            "capacity": 7000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6627.png"
        }
    },
    {
        "team": {
            "id": 9532,
            "name": "Pro Calcio Tor Sapienza",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9532.png"
        },
        "venue": {
            "id": 6628,
            "name": "Stadio Giorgio Castelli",
            "address": "Via Felice De Andreis, 29/31",
            "city": "Roma",
            "capacity": 3000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6628.png"
        }
    },
    {
        "team": {
            "id": 9533,
            "name": "Team Nuova Florida",
            "code": null,
            "country": "Italy",
            "founded": 2005,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9533.png"
        },
        "venue": {
            "id": 6629,
            "name": "Stadio Marco Mazzucchi",
            "address": "Via Rieti",
            "city": "Ardea",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6629.png"
        }
    },
    {
        "team": {
            "id": 9534,
            "name": "Torres",
            "code": null,
            "country": "Italy",
            "founded": 1903,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9534.png"
        },
        "venue": {
            "id": 6630,
            "name": "Stadio Vanni Sanna",
            "address": "Via Coradduzza, 2",
            "city": "Sassari",
            "capacity": 7480,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6630.png"
        }
    },
    {
        "team": {
            "id": 9535,
            "name": "Vis Artena",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9535.png"
        },
        "venue": {
            "id": 6631,
            "name": "Stadio Comunale (Sintex)",
            "address": "Via Guglielmo Marconi 52",
            "city": "Artena",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6631.png"
        }
    },
    {
        "team": {
            "id": 9536,
            "name": "Nardò",
            "code": null,
            "country": "Italy",
            "founded": 1925,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9536.png"
        },
        "venue": {
            "id": 6633,
            "name": "Stadio Comunale Giovanni Paolo II",
            "address": "Via Rubichi 4",
            "city": "Nardò",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6633.png"
        }
    },
    {
        "team": {
            "id": 9537,
            "name": "Sorrento",
            "code": "SOR",
            "country": "Italy",
            "founded": 1945,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9537.png"
        },
        "venue": {
            "id": 6634,
            "name": "Stadio Italia",
            "address": "Via Aniello Califano, 7",
            "city": "Sorrento",
            "capacity": 3600,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6634.png"
        }
    },
    {
        "team": {
            "id": 9538,
            "name": "Agropoli",
            "code": "AGR",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9538.png"
        },
        "venue": {
            "id": 6636,
            "name": "Stadio Raffaele Guariglia",
            "address": "Via San Pio X",
            "city": "Agropoli",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6636.png"
        }
    },
    {
        "team": {
            "id": 9539,
            "name": "Audace Cerignola",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9539.png"
        },
        "venue": {
            "id": 6637,
            "name": "Campo Comunale Domenico Monterisi",
            "address": "Via Napoli",
            "city": "Cerignola",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6637.png"
        }
    },
    {
        "team": {
            "id": 9540,
            "name": "Bitonto",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9540.png"
        },
        "venue": {
            "id": 6638,
            "name": "Campo Sportivo Comunale Città degli Ulivi",
            "address": null,
            "city": "Bitonto",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6638.png"
        }
    },
    {
        "team": {
            "id": 9541,
            "name": "Brindisi",
            "code": "BRI",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9541.png"
        },
        "venue": {
            "id": 6639,
            "name": "Stadio Franco Fanuzzi",
            "address": "Via Santa Maria del Casale",
            "city": "Brindisi",
            "capacity": 7600,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6639.png"
        }
    },
    {
        "team": {
            "id": 9542,
            "name": "Casarano",
            "code": null,
            "country": "Italy",
            "founded": 1927,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9542.png"
        },
        "venue": {
            "id": 6640,
            "name": "Stadio Giuseppe Capozza",
            "address": "Via Matino",
            "city": "Casarano",
            "capacity": 6200,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6640.png"
        }
    },
    {
        "team": {
            "id": 9543,
            "name": "Francavilla",
            "code": null,
            "country": "Italy",
            "founded": 1931,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9543.png"
        },
        "venue": {
            "id": 6641,
            "name": "Stadio Nunzio Fittipaldi",
            "address": "Via Luigi Ciminelli, 128",
            "city": "Francavilla in Sinni",
            "capacity": 1200,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6641.png"
        }
    },
    {
        "team": {
            "id": 9544,
            "name": "Gelbison",
            "code": "GEL",
            "country": "Italy",
            "founded": 1956,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9544.png"
        },
        "venue": {
            "id": 6642,
            "name": "Stadio Giovanni Morra",
            "address": "Via Torrusio",
            "city": "Vallo della Lucania",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6642.png"
        }
    },
    {
        "team": {
            "id": 9545,
            "name": "Gladiator",
            "code": "GLA",
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9545.png"
        },
        "venue": {
            "id": 6643,
            "name": "Stadio Mario Piccirillo",
            "address": "Via Martiri del Dissenso",
            "city": "Santa Maria Capua Vetere",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6643.png"
        }
    },
    {
        "team": {
            "id": 9546,
            "name": "Gravina",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9546.png"
        },
        "venue": {
            "id": 6644,
            "name": "Stadio Comunale Stefano Vicino",
            "address": "Via Fazzatoia, 9",
            "city": "Gravina in Puglia",
            "capacity": 6000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6644.png"
        }
    },
    {
        "team": {
            "id": 9547,
            "name": "Grumentum",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9547.png"
        },
        "venue": {
            "id": 6645,
            "name": "Stadio Comunale Villa D'Agri C11",
            "address": "Via Grumentina",
            "city": "Marsicovetere",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/6645.png"
        }
    },
    {
        "team": {
            "id": 9548,
            "name": "Nocerina",
            "code": "NOC",
            "country": "Italy",
            "founded": 1910,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9548.png"
        },
        "venue": {
            "id": 6646,
            "name": "Stadio San Francesco",
            "address": "Viale San Francesco",
            "city": "Nocera Inferiore",
            "capacity": 9998,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6646.png"
        }
    },
    {
        "team": {
            "id": 9549,
            "name": "Team Altamura",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9549.png"
        },
        "venue": {
            "id": 6647,
            "name": "Stadio Comunale Tonino D'Angelo",
            "address": "Via Mura Megalitiche, 61",
            "city": "Altamura",
            "capacity": 8000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6647.png"
        }
    },
    {
        "team": {
            "id": 9550,
            "name": "Acireale",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9550.png"
        },
        "venue": {
            "id": 6648,
            "name": "Stadio Tupparello",
            "address": "Via dello Stadio",
            "city": "Acireale",
            "capacity": 12000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6648.png"
        }
    },
    {
        "team": {
            "id": 9551,
            "name": "Biancavilla",
            "code": null,
            "country": "Italy",
            "founded": 1990,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9551.png"
        },
        "venue": {
            "id": 6649,
            "name": "Stadio Orazio Raiti",
            "address": "Via Giacomo Matteotti, 74",
            "city": "Biancavilla",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6649.png"
        }
    },
    {
        "team": {
            "id": 9552,
            "name": "Castrovillari",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9552.png"
        },
        "venue": {
            "id": 6650,
            "name": "Stadio Comunale Castrovillari Mimmo Rende",
            "address": "Via Veterani dello Sport",
            "city": "Castrovillari",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6650.png"
        }
    },
    {
        "team": {
            "id": 9553,
            "name": "Cittanovese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9553.png"
        },
        "venue": {
            "id": 6651,
            "name": "Stadio Comunale Cittanova",
            "address": "Viale A. Moro, Loc. S. Maria",
            "city": "Cittanova",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/6651.png"
        }
    },
    {
        "team": {
            "id": 9554,
            "name": "Corigliano Calabro",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9554.png"
        },
        "venue": {
            "id": 6652,
            "name": "Stadio Comunale di Corigliano",
            "address": "Strada Provinciale 196",
            "city": "Corigliano Calabro",
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6652.png"
        }
    },
    {
        "team": {
            "id": 9555,
            "name": "FC Messina",
            "code": "MES",
            "country": "Italy",
            "founded": 2010,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9555.png"
        },
        "venue": {
            "id": 2770,
            "name": "Stadio Comunale Franco Scoglio",
            "address": "Via Comunale, San Filippo",
            "city": "Messina",
            "capacity": 37895,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/2770.png"
        }
    },
    {
        "team": {
            "id": 9556,
            "name": "Giugliano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9556.png"
        },
        "venue": {
            "id": 12435,
            "name": "Stadio Comunale Alberto De Cristofaro",
            "address": "Via Epitaffio",
            "city": "Giugliano in Campania",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12435.png"
        }
    },
    {
        "team": {
            "id": 9557,
            "name": "Licata",
            "code": "LIC",
            "country": "Italy",
            "founded": 1931,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9557.png"
        },
        "venue": {
            "id": 6655,
            "name": "Stadio Dino Liotta",
            "address": "Corso Argentina",
            "city": "Licata",
            "capacity": 11000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6655.png"
        }
    },
    {
        "team": {
            "id": 9558,
            "name": "Marina di Ragusa",
            "code": null,
            "country": "Italy",
            "founded": 2003,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9558.png"
        },
        "venue": {
            "id": 6656,
            "name": "Stadio Aldo Campo",
            "address": "Via Avvocato Giovanni Alberto Cartia, Contrada Selvaggio",
            "city": "Ragusa",
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6656.png"
        }
    },
    {
        "team": {
            "id": 9559,
            "name": "Marsala",
            "code": null,
            "country": "Italy",
            "founded": 1967,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9559.png"
        },
        "venue": {
            "id": 6657,
            "name": "Stadio Antonio Lombardo Angotta",
            "address": "Via Olimpia",
            "city": "Marsala",
            "capacity": 13500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/6657.png"
        }
    },
    {
        "team": {
            "id": 9560,
            "name": "Nola 1925",
            "code": null,
            "country": "Italy",
            "founded": 2013,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9560.png"
        },
        "venue": {
            "id": 6658,
            "name": "Stadio Sporting Club",
            "address": "Via Seminario",
            "city": "Nola",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6658.png"
        }
    },
    {
        "team": {
            "id": 9561,
            "name": "Palmese",
            "code": null,
            "country": "Italy",
            "founded": 1912,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/9561.png"
        },
        "venue": {
            "id": 6659,
            "name": "Stadio Giuseppe Lopresti",
            "address": "Via del Tracciolino",
            "city": "Palmi",
            "capacity": 4000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6659.png"
        }
    },
    {
        "team": {
            "id": 9562,
            "name": "Roccella",
            "code": null,
            "country": "Italy",
            "founded": 1935,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/9562.png"
        },
        "venue": {
            "id": 6660,
            "name": "Stadio Comunale Ninetto Muscolo",
            "address": "Viale degli Ulivi",
            "city": "Roccella Ionica",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6660.png"
        }
    },
    {
        "team": {
            "id": 9563,
            "name": "San Tommaso",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9563.png"
        },
        "venue": {
            "id": 2756,
            "name": "Stadio Partenio-Adriano Lombardi",
            "address": "Contrada Zoccolari, 1",
            "city": "Avellino",
            "capacity": 26308,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/2756.png"
        }
    },
    {
        "team": {
            "id": 9564,
            "name": "Savoia",
            "code": "SAV",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9564.png"
        },
        "venue": {
            "id": 6661,
            "name": "Stadio Alfredo Giraud",
            "address": "Piazzale Gargiulo, 2",
            "city": "Torre Annunziata",
            "capacity": 10750,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6661.png"
        }
    },
    {
        "team": {
            "id": 9565,
            "name": "Troina",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/9565.png"
        },
        "venue": {
            "id": 12444,
            "name": "Stadio Comunale Gagliano Castelferrato",
            "address": "Via Regione Siciliana, Zona Stadio 17",
            "city": "Gagliano Castelferrato",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/12444.png"
        }
    },
    {
        "team": {
            "id": 10137,
            "name": "Cosenza",
            "code": "NUO",
            "country": "Italy",
            "founded": 1914,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/10137.png"
        },
        "venue": {
            "id": 893,
            "name": "Stadio San Vito-Luigi Marulla",
            "address": "Via degli Stadio",
            "city": "Cosenza",
            "capacity": 24209,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/893.png"
        }
    },
    {
        "team": {
            "id": 10138,
            "name": "SS Monopoli",
            "code": null,
            "country": "Italy",
            "founded": 1958,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/10138.png"
        },
        "venue": {
            "id": 914,
            "name": "Stadio Vito Simone Veneziani",
            "address": "Via Palmiro Togliatti, 23",
            "city": "Monopoli",
            "capacity": 6880,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/914.png"
        }
    },
    {
        "team": {
            "id": 10289,
            "name": "Italy U20",
            "code": null,
            "country": "Italy",
            "founded": 1898,
            "national": true,
            "logo": "https://media-3.api-sports.io/football/teams/10289.png"
        },
        "venue": {
            "id": 910,
            "name": "Stadio Olimpico",
            "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
            "city": "Roma",
            "capacity": 82656,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/910.png"
        }
    },
    {
        "team": {
            "id": 10338,
            "name": "Italy U19",
            "code": "ITA",
            "country": "Italy",
            "founded": null,
            "national": true,
            "logo": "https://media-1.api-sports.io/football/teams/10338.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 10681,
            "name": "Villafranca",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/10681.png"
        },
        "venue": {
            "id": 19110,
            "name": "Stadio Comunale",
            "address": "Via Arnaldo Porta 12",
            "city": "Villafranca di Verona",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19110.png"
        }
    },
    {
        "team": {
            "id": 10691,
            "name": "San Bonifacio W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/10691.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 10929,
            "name": "Bangladesh U23",
            "code": null,
            "country": "Italy",
            "founded": 1972,
            "national": true,
            "logo": "https://media-3.api-sports.io/football/teams/10929.png"
        },
        "venue": {
            "id": 3798,
            "name": "Bangabandhu National Stadium",
            "address": "Abdul Gani Road, Motijheel",
            "city": "Dhaka",
            "capacity": 36000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/3798.png"
        }
    },
    {
        "team": {
            "id": 10932,
            "name": "China PR U23",
            "code": null,
            "country": "Italy",
            "founded": 1924,
            "national": true,
            "logo": "https://media-3.api-sports.io/football/teams/10932.png"
        },
        "venue": {
            "id": 347,
            "name": "Beijing National Stadium",
            "address": null,
            "city": "Beijing",
            "capacity": 91000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/347.png"
        }
    },
    {
        "team": {
            "id": 10934,
            "name": "Hong Kong U23",
            "code": null,
            "country": "Italy",
            "founded": 1914,
            "national": true,
            "logo": "https://media-2.api-sports.io/football/teams/10934.png"
        },
        "venue": {
            "id": 3385,
            "name": "Hong Kong Stadium",
            "address": "55 Eastern Hospital Road, So Kon Po, Wanchai",
            "city": "Hong Kong",
            "capacity": 40000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/3385.png"
        }
    },
    {
        "team": {
            "id": 10935,
            "name": "India U23",
            "code": null,
            "country": "Italy",
            "founded": 1937,
            "national": true,
            "logo": "https://media-3.api-sports.io/football/teams/10935.png"
        },
        "venue": {
            "id": 832,
            "name": "Jawaharlal Nehru Stadium",
            "address": "Jawaharlal Nehru Stadium Marg, Lodi Estate",
            "city": "New Delhi",
            "capacity": 78000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/832.png"
        }
    },
    {
        "team": {
            "id": 10937,
            "name": "Iran U23",
            "code": null,
            "country": "Italy",
            "founded": 1920,
            "national": true,
            "logo": "https://media-1.api-sports.io/football/teams/10937.png"
        },
        "venue": {
            "id": 845,
            "name": "Azadi Stadium",
            "address": "Azadi Stadium Boulevard",
            "city": "Teheran",
            "capacity": 100000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/845.png"
        }
    },
    {
        "team": {
            "id": 10939,
            "name": "Korea DPR U23",
            "code": null,
            "country": "Italy",
            "founded": 1945,
            "national": true,
            "logo": "https://media-3.api-sports.io/football/teams/10939.png"
        },
        "venue": {
            "id": 1001,
            "name": "Rŭngrado May First Stadium",
            "address": null,
            "city": "Pyongyang",
            "capacity": 150000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/1001.png"
        }
    },
    {
        "team": {
            "id": 10946,
            "name": "Maldives U23",
            "code": null,
            "country": "Italy",
            "founded": 1982,
            "national": true,
            "logo": "https://media-1.api-sports.io/football/teams/10946.png"
        },
        "venue": {
            "id": 19656,
            "name": "National Football Stadium (Maldives)",
            "address": "Majeedhee Magu",
            "city": "Malé, North Malé Atoll, Kaafu Atoll",
            "capacity": 11850,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19656.png"
        }
    },
    {
        "team": {
            "id": 10961,
            "name": "Timor-Leste U23",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": true,
            "logo": "https://media-1.api-sports.io/football/teams/10961.png"
        },
        "venue": {
            "id": 4159,
            "name": "Stadion Nasional Timor Leste",
            "address": null,
            "city": "Dili",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/4159.png"
        }
    },
    {
        "team": {
            "id": 10964,
            "name": "Vietnam U23",
            "code": null,
            "country": "Italy",
            "founded": 1962,
            "national": true,
            "logo": "https://media-1.api-sports.io/football/teams/10964.png"
        },
        "venue": {
            "id": 1666,
            "name": "Sân vận động quốc gia Mỹ Đình (My Dinh National Stadium)",
            "address": "Từ Liêm",
            "city": "Hanoi",
            "capacity": 40192,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/1666.png"
        }
    },
    {
        "team": {
            "id": 12510,
            "name": "Italy U17",
            "code": "ITA",
            "country": "Italy",
            "founded": 1898,
            "national": true,
            "logo": "https://media-2.api-sports.io/football/teams/12510.png"
        },
        "venue": {
            "id": 910,
            "name": "Stadio Olimpico",
            "address": "Viale dei Gladiatori, 2 / Via del Foro Italico",
            "city": "Roma",
            "capacity": 82656,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/910.png"
        }
    },
    {
        "team": {
            "id": 13168,
            "name": "Progresso",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/13168.png"
        },
        "venue": {
            "id": 18540,
            "name": "Stadio Comunale Progresso",
            "address": "Via Lirone, 44",
            "city": "Castel Maggiore",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/18540.png"
        }
    },
    {
        "team": {
            "id": 14432,
            "name": "Napoli W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/14432.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15623,
            "name": "San Marino W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15623.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15654,
            "name": "Ascoli U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15654.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15655,
            "name": "Benevento U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15655.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15656,
            "name": "Bologna U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15656.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15657,
            "name": "Brescia U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15657.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15658,
            "name": "Cagliari U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15658.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15659,
            "name": "Chievo Verona U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15659.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15660,
            "name": "Cittadella U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15660.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15661,
            "name": "Cosenza U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15661.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15662,
            "name": "Cremonese U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15662.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15663,
            "name": "Crotone U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15663.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15664,
            "name": "Empoli U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15664.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15665,
            "name": "Fiorentina U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15665.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15666,
            "name": "Frosinone U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15666.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15667,
            "name": "Genoa U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15667.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15668,
            "name": "Lazio U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15668.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15669,
            "name": "Lecce U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15669.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15670,
            "name": "Milan U19",
            "code": "ACM",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15670.png"
        },
        "venue": {
            "id": 6550,
            "name": "Stadio Ernesto Breda",
            "address": "Via XX Settembre, 162",
            "city": "Sesto San Giovanni",
            "capacity": 4475,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6550.png"
        }
    },
    {
        "team": {
            "id": 15671,
            "name": "Monza U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15671.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15672,
            "name": "Parma U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15672.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15673,
            "name": "Pescara U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15673.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15674,
            "name": "Pisa U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15674.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15675,
            "name": "Pordenone U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15675.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15676,
            "name": "Reggiana U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15676.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15677,
            "name": "Reggina U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15677.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15678,
            "name": "SPAL U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15678.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15679,
            "name": "Salernitana U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15679.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15680,
            "name": "Sampdoria U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15680.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15681,
            "name": "Sassuolo U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15681.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15682,
            "name": "Spezia U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15682.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15683,
            "name": "Torino U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/15683.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15684,
            "name": "Udinese U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/15684.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15685,
            "name": "Venezia U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15685.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15686,
            "name": "Verona U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15686.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15687,
            "name": "Vicenza U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15687.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 15688,
            "name": "Virtus Entella U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/15688.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17079,
            "name": "Real Fondo Gesu",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17079.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17105,
            "name": "Valdinievole Montecatini",
            "code": null,
            "country": "Italy",
            "founded": 2010,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17105.png"
        },
        "venue": {
            "id": 12034,
            "name": "Stadio Daniele Mariotti",
            "address": "Via di Maratona, 16",
            "city": "Montecatini Terme",
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12034.png"
        }
    },
    {
        "team": {
            "id": 17133,
            "name": "FC Obermais",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17133.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17140,
            "name": "Real Calepina",
            "code": null,
            "country": "Italy",
            "founded": 2020,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17140.png"
        },
        "venue": {
            "id": 12053,
            "name": "Campo Sportivo Comunale Libico",
            "address": "Via Don Pietro Belotti, 53",
            "city": "Grumello del Monte",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12053.png"
        }
    },
    {
        "team": {
            "id": 17147,
            "name": "Trento",
            "code": null,
            "country": "Italy",
            "founded": 1921,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17147.png"
        },
        "venue": {
            "id": 12059,
            "name": "Stadio Briamasco",
            "address": "Via R. da Sanseverino 41",
            "city": "Trento",
            "capacity": 4227,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12059.png"
        }
    },
    {
        "team": {
            "id": 17368,
            "name": "Pomigliano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17368.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17369,
            "name": "Lazio W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17369.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17370,
            "name": "Sampdoria W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17370.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17536,
            "name": "Olginatese",
            "code": "OLG",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17536.png"
        },
        "venue": {
            "id": 12415,
            "name": "Stadio Comunale",
            "address": "Via dell&apos;Industria 33",
            "city": "Olginate",
            "capacity": 1050,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12415.png"
        }
    },
    {
        "team": {
            "id": 17542,
            "name": "Puteolana",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17542.png"
        },
        "venue": {
            "id": 12530,
            "name": "Stadio Domenico Conte",
            "address": "Prima Traversa Via Virgilio",
            "city": "Pozzuoli",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12530.png"
        }
    },
    {
        "team": {
            "id": 17550,
            "name": "Sansepolcro",
            "code": "SAN",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17550.png"
        },
        "venue": {
            "id": 12534,
            "name": "Stadio Buitoni",
            "address": "Via del Campo Sportivo 1",
            "city": "Sansepolcro",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12534.png"
        }
    },
    {
        "team": {
            "id": 17563,
            "name": "USD Casatese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17563.png"
        },
        "venue": {
            "id": 12416,
            "name": "Campo Sportivo Comunale n.2",
            "address": "Via Alessandro Volta",
            "city": "Casatenovo",
            "capacity": 1500,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/12416.png"
        }
    },
    {
        "team": {
            "id": 17726,
            "name": "Alessandria U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17726.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17727,
            "name": "Cesena U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17727.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17728,
            "name": "Como U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17728.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17729,
            "name": "Perugia U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17729.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17730,
            "name": "Ternana U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17730.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 17808,
            "name": "Asti",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17808.png"
        },
        "venue": {
            "id": 12408,
            "name": "Stadio Vincenzo Cesin Bosia",
            "address": "Via Ugo Foscolo 19",
            "city": "Asti",
            "capacity": 6000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12408.png"
        }
    },
    {
        "team": {
            "id": 17809,
            "name": "Città di Varese",
            "code": null,
            "country": "Italy",
            "founded": 2019,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17809.png"
        },
        "venue": {
            "id": 2762,
            "name": "Stadio Franco Ossola",
            "address": "Via Bolchini, Masnago",
            "city": "Varese",
            "capacity": 8146,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/2762.png"
        }
    },
    {
        "team": {
            "id": 17810,
            "name": "Derthona",
            "code": "DER",
            "country": "Italy",
            "founded": 1908,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17810.png"
        },
        "venue": {
            "id": 12409,
            "name": "Stadio Fausto Coppi",
            "address": "Viale della Libertá",
            "city": "Tortona",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12409.png"
        }
    },
    {
        "team": {
            "id": 17811,
            "name": "Imperia",
            "code": null,
            "country": "Italy",
            "founded": 1970,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17811.png"
        },
        "venue": {
            "id": 12410,
            "name": "Stadio Nino Ciccione",
            "address": "Strada Vivinale Costamagna",
            "city": "Imperia",
            "capacity": 3900,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12410.png"
        }
    },
    {
        "team": {
            "id": 17812,
            "name": "PDHAE",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17812.png"
        },
        "venue": {
            "id": 12411,
            "name": "Stadio Crestella",
            "address": "Via Crestellaz",
            "city": "Donnas",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12411.png"
        }
    },
    {
        "team": {
            "id": 17813,
            "name": "RG Ticino",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17813.png"
        },
        "venue": {
            "id": 12640,
            "name": "Campo Sportivo Romentino",
            "address": "Via del Tintoretto, 9",
            "city": "Romentino",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12640.png"
        }
    },
    {
        "team": {
            "id": 17814,
            "name": "Saluzzo",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17814.png"
        },
        "venue": {
            "id": 12412,
            "name": "Stadio Amedeo Damiano",
            "address": "Via della Croce",
            "city": "Saluzzo",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12412.png"
        }
    },
    {
        "team": {
            "id": 17815,
            "name": "Sestri Levante",
            "code": "SES",
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17815.png"
        },
        "venue": {
            "id": 12413,
            "name": "Stadio Giuseppe Sivori",
            "address": "Via per Santa Vittoria, 5",
            "city": "Sestri Levante",
            "capacity": 1800,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12413.png"
        }
    },
    {
        "team": {
            "id": 17816,
            "name": "Desenzano Calvina",
            "code": null,
            "country": "Italy",
            "founded": 2020,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17816.png"
        },
        "venue": {
            "id": 12417,
            "name": "Stadio Tre Stelle",
            "address": "Via Giotto, 104",
            "city": "Desenzano del Garda",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12417.png"
        }
    },
    {
        "team": {
            "id": 17817,
            "name": "Sangiuliano City",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17817.png"
        },
        "venue": {
            "id": 6550,
            "name": "Stadio Ernesto Breda",
            "address": "Via XX Settembre, 162",
            "city": "Sesto San Giovanni",
            "capacity": 4475,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6550.png"
        }
    },
    {
        "team": {
            "id": 17818,
            "name": "Sona",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17818.png"
        },
        "venue": {
            "id": 12418,
            "name": "Stadio Comunale Sona",
            "address": "Via Casella, 22",
            "city": "Sona",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12418.png"
        }
    },
    {
        "team": {
            "id": 17819,
            "name": "Vis Nova Giussano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17819.png"
        },
        "venue": {
            "id": 12419,
            "name": "Centro sportivo comunale Stefano Borgonovo",
            "address": "Largo Donatori di Sangue, 3",
            "city": "Giussano",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12419.png"
        }
    },
    {
        "team": {
            "id": 17820,
            "name": "Dolomiti Bellunesi",
            "code": null,
            "country": "Italy",
            "founded": 2021,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17820.png"
        },
        "venue": {
            "id": 6559,
            "name": "Stadio Comunale Polisportivo",
            "address": "Piazzale Resistenza 27",
            "city": "Belluno",
            "capacity": 2585,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6559.png"
        }
    },
    {
        "team": {
            "id": 17821,
            "name": "San Martino Speme",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17821.png"
        },
        "venue": {
            "id": 12641,
            "name": "Campo San Martino Buon Albergo",
            "address": null,
            "city": "San Martino Buon Albergo",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12641.png"
        }
    },
    {
        "team": {
            "id": 17822,
            "name": "Spinea",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17822.png"
        },
        "venue": {
            "id": 12642,
            "name": "Stadio Comunale Salvador Allende",
            "address": "Viale Sanremo, 63",
            "city": "Spinea",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12642.png"
        }
    },
    {
        "team": {
            "id": 17823,
            "name": "ASD Sasso Marconi",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17823.png"
        },
        "venue": {
            "id": 6585,
            "name": "Centro Sportivo Enrico Filippetti",
            "address": "Via Gesso, 26, Riale",
            "city": "Zola Predosa",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/6585.png"
        }
    },
    {
        "team": {
            "id": 17824,
            "name": "Alcione",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17824.png"
        },
        "venue": {
            "id": 19261,
            "name": "Campo Comunale Kennedy",
            "address": "Via Alessio Olivieri, 13",
            "city": "Milano",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/19261.png"
        }
    },
    {
        "team": {
            "id": 17825,
            "name": "Athletic Carpi",
            "code": null,
            "country": "Italy",
            "founded": 2021,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17825.png"
        },
        "venue": {
            "id": 12639,
            "name": "Comunale Dorando Pietri",
            "address": "Via Nuova Ponente 24/C",
            "city": "Carpi",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12639.png"
        }
    },
    {
        "team": {
            "id": 17826,
            "name": "Bagnolese BP",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17826.png"
        },
        "venue": {
            "id": 12422,
            "name": "Stadio Fratelli Campari",
            "address": "Via Olimpia 4",
            "city": "Bagnolo in Piano",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12422.png"
        }
    },
    {
        "team": {
            "id": 17827,
            "name": "Borgo San Donnino",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17827.png"
        },
        "venue": {
            "id": 12644,
            "name": "Stadio Dario Ballotta",
            "address": "Via Palmiro Togliatti",
            "city": "Fidenza",
            "capacity": 2400,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12644.png"
        }
    },
    {
        "team": {
            "id": 17828,
            "name": "Cascina",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17828.png"
        },
        "venue": {
            "id": 12645,
            "name": "Stadio Redini",
            "address": "Piazza Ferrari, 5",
            "city": "Cascina",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12645.png"
        }
    },
    {
        "team": {
            "id": 17829,
            "name": "Lornano Badesse",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17829.png"
        },
        "venue": {
            "id": 12426,
            "name": "Stadio Mauro Nannotti",
            "address": "Via Palmiro Togliatti 2, Badesse",
            "city": "Monteriggioni",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12426.png"
        }
    },
    {
        "team": {
            "id": 17830,
            "name": "Montespaccato",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17830.png"
        },
        "venue": {
            "id": 12427,
            "name": "Campo Sportivo Montespaccato",
            "address": "Via Stefano Vaj, 41",
            "city": "Roma",
            "capacity": 2000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/12427.png"
        }
    },
    {
        "team": {
            "id": 17831,
            "name": "Poggibonsi",
            "code": "POG",
            "country": "Italy",
            "founded": 1925,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17831.png"
        },
        "venue": {
            "id": 12428,
            "name": "Stadio Stefano Lotti",
            "address": "Viale Marconi, 105",
            "city": "Poggibonsi",
            "capacity": 3621,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12428.png"
        }
    },
    {
        "team": {
            "id": 17832,
            "name": "Pro Livorno",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17832.png"
        },
        "venue": {
            "id": 12429,
            "name": "Stadio Banditella",
            "address": "Via Sommati Pier Donato, 2",
            "city": "Livorno",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12429.png"
        }
    },
    {
        "team": {
            "id": 17833,
            "name": "Tiferno Lerchi",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17833.png"
        },
        "venue": {
            "id": 6601,
            "name": "Stadio Comunale C. Bernicchi",
            "address": "Viale Europa 5",
            "city": "Citta di Castello",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/6601.png"
        }
    },
    {
        "team": {
            "id": 17834,
            "name": "Unipomezia",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17834.png"
        },
        "venue": {
            "id": 12646,
            "name": "Stadio Franco Maniscalco",
            "address": "Piazzale Aldo Moro",
            "city": "Pomezia",
            "capacity": 1500,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/12646.png"
        }
    },
    {
        "team": {
            "id": 17835,
            "name": "Aurora Alto Casertano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17835.png"
        },
        "venue": {
            "id": 12647,
            "name": "Campo Sportivo di Capriati a Volturno",
            "address": null,
            "city": "Capriati a Volturno",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/12647.png"
        }
    },
    {
        "team": {
            "id": 17836,
            "name": "Castelfidardo Calcio",
            "code": null,
            "country": "Italy",
            "founded": 1944,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17836.png"
        },
        "venue": {
            "id": 12432,
            "name": "Nuovo Stadio Comunale G.Mancini",
            "address": "Via dello Sport",
            "city": "Castelfidardo",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12432.png"
        }
    },
    {
        "team": {
            "id": 17837,
            "name": "Castelnuovo Vomano",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17837.png"
        },
        "venue": {
            "id": 12433,
            "name": "Campo Comunale",
            "address": "Via Napoli",
            "city": "Castelnuovo Vomano",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12433.png"
        }
    },
    {
        "team": {
            "id": 17838,
            "name": "Matese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17838.png"
        },
        "venue": {
            "id": 12434,
            "name": "Stadio Comunale P. Ferrante",
            "address": "Via Limate, 11",
            "city": "Piedimonte Matese",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/12434.png"
        }
    },
    {
        "team": {
            "id": 17839,
            "name": "Nereto",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17839.png"
        },
        "venue": {
            "id": 12648,
            "name": "Stadio Comunale di Nereto",
            "address": "Via Vibrata",
            "city": "Nereto",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12648.png"
        }
    },
    {
        "team": {
            "id": 17840,
            "name": "Porto D' Ascoli",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17840.png"
        },
        "venue": {
            "id": 12649,
            "name": "Campo Ciarrocchi",
            "address": "Via Martiri di Marzabotto",
            "city": "San Benedetto del Tronto",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/12649.png"
        }
    },
    {
        "team": {
            "id": 17841,
            "name": "Afragolese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17841.png"
        },
        "venue": {
            "id": 12436,
            "name": "Stadio Caduti di Brema",
            "address": "Via delle Repubbliche Marinare, 223, Barra",
            "city": "Napoli",
            "capacity": 2500,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/12436.png"
        }
    },
    {
        "team": {
            "id": 17842,
            "name": "Atletico Uri",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17842.png"
        },
        "venue": {
            "id": 12650,
            "name": "Campo Comunale Uri",
            "address": "Via L. Tolstoj, 40",
            "city": "Uri",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12650.png"
        }
    },
    {
        "team": {
            "id": 17843,
            "name": "Carbonia",
            "code": null,
            "country": "Italy",
            "founded": 1939,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17843.png"
        },
        "venue": {
            "id": 12437,
            "name": "Stadio Carlo Zoboli",
            "address": "Via della Stazione, 19",
            "city": "Carbonia",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/12437.png"
        }
    },
    {
        "team": {
            "id": 17844,
            "name": "CynthiAlbalonga",
            "code": null,
            "country": "Italy",
            "founded": 2020,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17844.png"
        },
        "venue": {
            "id": 12438,
            "name": "Stadio Comunale",
            "address": "Via Sicilia 27",
            "city": "Genzano di Roma",
            "capacity": 6500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12438.png"
        }
    },
    {
        "team": {
            "id": 17845,
            "name": "Insieme Formia",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17845.png"
        },
        "venue": {
            "id": 12439,
            "name": "Stadio Comunale di Formia",
            "address": "Via della Fontana",
            "city": "Formia",
            "capacity": 5000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/12439.png"
        }
    },
    {
        "team": {
            "id": 17846,
            "name": "Real Monterotondo Scalo",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17846.png"
        },
        "venue": {
            "id": 12651,
            "name": "Stadio Ottavio Pierangeli",
            "address": null,
            "city": "Monterotondo",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/12651.png"
        }
    },
    {
        "team": {
            "id": 17847,
            "name": "Lavello",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17847.png"
        },
        "venue": {
            "id": 12441,
            "name": "Stadio Franco Pisicchio",
            "address": null,
            "city": "Lavello",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12441.png"
        }
    },
    {
        "team": {
            "id": 17848,
            "name": "Mariglianese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17848.png"
        },
        "venue": {
            "id": 12652,
            "name": "Stadio Comunale di Marigliano",
            "address": "Via Europa, 18",
            "city": "Marigliano",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/12652.png"
        }
    },
    {
        "team": {
            "id": 17849,
            "name": "Molfetta Calcio",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17849.png"
        },
        "venue": {
            "id": 12442,
            "name": "Stadio Comunale Paolo Poli",
            "address": "Via Don Pietro Pappagallo",
            "city": "Molfetta",
            "capacity": 5000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12442.png"
        }
    },
    {
        "team": {
            "id": 17850,
            "name": "Rotonda",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17850.png"
        },
        "venue": {
            "id": 12443,
            "name": "Campo sportivo Nicola Vulcano",
            "address": "Forcelle",
            "city": "Castelluccio Inferiore",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/12443.png"
        }
    },
    {
        "team": {
            "id": 17851,
            "name": "San Giorgio",
            "code": null,
            "country": "Italy",
            "founded": 1926,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17851.png"
        },
        "venue": {
            "id": 12653,
            "name": "Stadio Comunale Rafaele Paudice",
            "address": "Via Sandriana",
            "city": "San Giorgio a Cremano",
            "capacity": 800,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/12653.png"
        }
    },
    {
        "team": {
            "id": 17852,
            "name": "Virtus Matino",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17852.png"
        },
        "venue": {
            "id": 12654,
            "name": "Stadio Comunale Via Del Mare",
            "address": "Via Olimpia, 36",
            "city": "Matino",
            "capacity": 1000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/12654.png"
        }
    },
    {
        "team": {
            "id": 17853,
            "name": "Cittanova Interpiana",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17853.png"
        },
        "venue": {
            "id": 12445,
            "name": "Stadio Proto-Morreale",
            "address": "Via Fausto Coppi",
            "city": "Melicucco",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12445.png"
        }
    },
    {
        "team": {
            "id": 17854,
            "name": "Città Di Sant’Agata",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17854.png"
        },
        "venue": {
            "id": 12446,
            "name": "Campo da Calcio di Sant'Agata di Militello",
            "address": null,
            "city": "Sant&apos;Agata di Militello",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12446.png"
        }
    },
    {
        "team": {
            "id": 17855,
            "name": "Giarre",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17855.png"
        },
        "venue": {
            "id": 12655,
            "name": "Stadio Regionale Giarre",
            "address": "Via Olimpia",
            "city": "Giarre",
            "capacity": 3000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/12655.png"
        }
    },
    {
        "team": {
            "id": 17856,
            "name": "Lamezia Terme",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17856.png"
        },
        "venue": {
            "id": 12632,
            "name": "Stadio Guido D'Ippolito",
            "address": "Via Guglielmo Marconi",
            "city": "Lamezia Terme",
            "capacity": 3878,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12632.png"
        }
    },
    {
        "team": {
            "id": 17857,
            "name": "Paternò",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17857.png"
        },
        "venue": {
            "id": 12447,
            "name": "Stadio Falcone-Borsellino",
            "address": "Via dello Stadio",
            "city": "Paternò",
            "capacity": 4000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12447.png"
        }
    },
    {
        "team": {
            "id": 17858,
            "name": "Real Agro Aversa",
            "code": "AVE",
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17858.png"
        },
        "venue": {
            "id": 12448,
            "name": "Stadio Augusto Bisceglia",
            "address": "Via Enrico Caruso, San Lorenzo",
            "city": "Aversa",
            "capacity": 2565,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12448.png"
        }
    },
    {
        "team": {
            "id": 17859,
            "name": "San Luca",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/17859.png"
        },
        "venue": {
            "id": 12449,
            "name": "Stadio San Luca",
            "address": null,
            "city": "Vorea",
            "capacity": 2500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12449.png"
        }
    },
    {
        "team": {
            "id": 17860,
            "name": "Sancataldese",
            "code": null,
            "country": "Italy",
            "founded": 1945,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17860.png"
        },
        "venue": {
            "id": 12450,
            "name": "Stadio Valentino Mazzola",
            "address": "Via Trieste",
            "city": "San Cataldo",
            "capacity": 3000,
            "surface": "artificial turf",
            "image": "https://media-3.api-sports.io/football/venues/12450.png"
        }
    },
    {
        "team": {
            "id": 17861,
            "name": "Santa Maria Cilento",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/17861.png"
        },
        "venue": {
            "id": 12451,
            "name": "Campo Sportivo Antonio Carrano",
            "address": "Strada Statale 267",
            "city": "Santa Maria di Castellabate",
            "capacity": 3000,
            "surface": "artificial turf",
            "image": "https://media-1.api-sports.io/football/venues/12451.png"
        }
    },
    {
        "team": {
            "id": 17862,
            "name": "Trapani 1905",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17862.png"
        },
        "venue": {
            "id": 878,
            "name": "Stadio Polisportivo Provinciale",
            "address": "Via Giuseppe Cesarò, Casa Santa di Erice",
            "city": "Trapani",
            "capacity": 7787,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/878.png"
        }
    },
    {
        "team": {
            "id": 17904,
            "name": "Leon",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/17904.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 18089,
            "name": "CFI Alicante",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/18089.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 18175,
            "name": "US Russi",
            "code": null,
            "country": "Italy",
            "founded": 0,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/18175.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 18176,
            "name": "US Sestese",
            "code": null,
            "country": "Italy",
            "founded": 0,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/18176.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 18177,
            "name": "Varesina",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/18177.png"
        },
        "venue": {
            "id": 12637,
            "name": "Campo Comunale",
            "address": "Via Monte Nero",
            "city": "Venegono Superiore",
            "capacity": 1200,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/12637.png"
        }
    },
    {
        "team": {
            "id": 18819,
            "name": "Carrarese U18",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/18819.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 18821,
            "name": "Garden City Panthers U18",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/18821.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19064,
            "name": "Italy U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": true,
            "logo": "https://media-2.api-sports.io/football/teams/19064.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19071,
            "name": "Italy U18",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": true,
            "logo": "https://media-2.api-sports.io/football/teams/19071.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19264,
            "name": "Real Vicenza",
            "code": null,
            "country": "Italy",
            "founded": 2010,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19264.png"
        },
        "venue": {
            "id": 18733,
            "name": "Stadio Romeo Menti",
            "address": "Via Schio, 21",
            "city": "Vicenza",
            "capacity": 20920,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/18733.png"
        }
    },
    {
        "team": {
            "id": 19659,
            "name": "Castelvetro",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19659.png"
        },
        "venue": {
            "id": 19268,
            "name": "Stadio William Venturelli",
            "address": "Via Costituzione, 11",
            "city": "Castelvetro di Modena",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19268.png"
        }
    },
    {
        "team": {
            "id": 19673,
            "name": "Formigine",
            "code": null,
            "country": "Italy",
            "founded": 1968,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19673.png"
        },
        "venue": {
            "id": 19271,
            "name": "Stadio Pincelli",
            "address": "Via J. Barozzi",
            "city": "Formigine",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19271.png"
        }
    },
    {
        "team": {
            "id": 19747,
            "name": "Como W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19747.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19748,
            "name": "Parma W",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19748.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19852,
            "name": "AlbinoLeffe U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19852.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19853,
            "name": "FeralpiSalò U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19853.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19854,
            "name": "Imolese U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19854.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19855,
            "name": "Monopoli U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19855.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19856,
            "name": "Padova U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19856.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19857,
            "name": "Viterbese Castrense U19",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19857.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19967,
            "name": "Angri Calcio",
            "code": null,
            "country": "Italy",
            "founded": 0,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19967.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19968,
            "name": "Barletta",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19968.png"
        },
        "venue": {
            "id": 19053,
            "name": "Stadio Cosimo Puttilli",
            "address": "Via Vittorio Veneto",
            "city": "Barletta",
            "capacity": 4170,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19053.png"
        }
    },
    {
        "team": {
            "id": 19969,
            "name": "Castanese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19969.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19970,
            "name": "Chisola",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19970.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19971,
            "name": "Città di Castello",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19971.png"
        },
        "venue": {
            "id": 6601,
            "name": "Stadio Comunale C. Bernicchi",
            "address": "Viale Europa 5",
            "city": "Citta di Castello",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6601.png"
        }
    },
    {
        "team": {
            "id": 19972,
            "name": "Corticella",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19972.png"
        },
        "venue": {
            "id": 19054,
            "name": "Centro Sportivo Biavato",
            "address": null,
            "city": "Bologna",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19054.png"
        }
    },
    {
        "team": {
            "id": 19973,
            "name": "Ilvamaddalena",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19973.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19974,
            "name": "Locri 1909",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19974.png"
        },
        "venue": {
            "id": 19055,
            "name": "Stadio Comunale Locri",
            "address": "Via Angelo Cusmano, 10",
            "city": "Locri",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/19055.png"
        }
    },
    {
        "team": {
            "id": 19975,
            "name": "Martina Franca",
            "code": null,
            "country": "Italy",
            "founded": 1947,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19975.png"
        },
        "venue": {
            "id": 19056,
            "name": "Stadio Gian Domenico Tursi",
            "address": "Via Sanita, 5",
            "city": "Martina Franca",
            "capacity": 3976,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/19056.png"
        }
    },
    {
        "team": {
            "id": 19976,
            "name": "Montecchio Maggiore",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19976.png"
        },
        "venue": {
            "id": 19057,
            "name": "Stadio G. Corsaro",
            "address": "Via del Vigo 11",
            "city": "Montecchio Maggiore",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19057.png"
        }
    },
    {
        "team": {
            "id": 19977,
            "name": "Orvietana Calcio",
            "code": null,
            "country": "Italy",
            "founded": 0,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19977.png"
        },
        "venue": {
            "id": 19058,
            "name": "Stadio Luigi Muzi",
            "address": null,
            "city": null,
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/19058.png"
        }
    },
    {
        "team": {
            "id": 19978,
            "name": "Pinerolo",
            "code": null,
            "country": "Italy",
            "founded": 1918,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19978.png"
        },
        "venue": {
            "id": 19059,
            "name": "Stadio Luigi Barbieri",
            "address": "Viale Piazza d&apos;Armi 6",
            "city": "Pinerolo",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19059.png"
        }
    },
    {
        "team": {
            "id": 19979,
            "name": "Portosummaga",
            "code": null,
            "country": "Italy",
            "founded": 1919,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19979.png"
        },
        "venue": {
            "id": 19060,
            "name": "Stadio Pier Giovanni Mecchia",
            "address": "Viale Luigi Cadorna",
            "city": "Portogruaro",
            "capacity": 3335,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19060.png"
        }
    },
    {
        "team": {
            "id": 19980,
            "name": "Riccione",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19980.png"
        },
        "venue": {
            "id": 19061,
            "name": "Stadio Comunale Italo Nicoletti",
            "address": "Via Forlimpopoli 15",
            "city": "Riccione",
            "capacity": 3370,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19061.png"
        }
    },
    {
        "team": {
            "id": 19981,
            "name": "Roma City",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19981.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19982,
            "name": "Salsomaggiore",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19982.png"
        },
        "venue": {
            "id": 19111,
            "name": "Stadio C. Francani",
            "address": "Viale Crispi, 27",
            "city": "Salsomaggiore Terme",
            "capacity": 1000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19111.png"
        }
    },
    {
        "team": {
            "id": 19983,
            "name": "Sant'Angelo",
            "code": null,
            "country": "Italy",
            "founded": 1907,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19983.png"
        },
        "venue": {
            "id": 19062,
            "name": "Stadio Carlo Chiesa",
            "address": "Via Fratelli Cortese",
            "city": "Sant&apos;Angelo Lodigiano",
            "capacity": 4100,
            "surface": "grass",
            "image": "https://media-3.api-sports.io/football/venues/19062.png"
        }
    },
    {
        "team": {
            "id": 19984,
            "name": "Sarrabus Ogliastra",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19984.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19985,
            "name": "Stresa",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19985.png"
        },
        "venue": {
            "id": 19063,
            "name": "Stadio Comunale Luigi Forlano",
            "address": "via Fiume",
            "city": "Stresa",
            "capacity": 2000,
            "surface": "grass",
            "image": "https://media-2.api-sports.io/football/venues/19063.png"
        }
    },
    {
        "team": {
            "id": 19986,
            "name": "Tau Altopascio",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19986.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19987,
            "name": "Termoli Calcio",
            "code": null,
            "country": "Italy",
            "founded": 1920,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19987.png"
        },
        "venue": {
            "id": 19064,
            "name": "Stadio Gino Cannarsa",
            "address": "Via dello Sport",
            "city": "Termoli",
            "capacity": 3300,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19064.png"
        }
    },
    {
        "team": {
            "id": 19989,
            "name": "Tivoli",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/19989.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19990,
            "name": "Torviscosa",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-1.api-sports.io/football/teams/19990.png"
        },
        "venue": {
            "id": 19109,
            "name": "Stadio Beppino Tonello",
            "address": "Via Fornelli di Sotto",
            "city": "Torviscosa",
            "capacity": 1500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19109.png"
        }
    },
    {
        "team": {
            "id": 19991,
            "name": "USD Palmese",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19991.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 19992,
            "name": "Vigor Senigallia",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/19992.png"
        },
        "venue": {
            "id": 19280,
            "name": "Stadio Comunale Goffredo Bianchelli",
            "address": "Via Montenegro, 21",
            "city": "Senigallia",
            "capacity": 4000,
            "surface": "artificial turf",
            "image": "https://media-2.api-sports.io/football/venues/19280.png"
        }
    },
    {
        "team": {
            "id": 20111,
            "name": "United Riccione",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/20111.png"
        },
        "venue": {
            "id": 19112,
            "name": "Stadio Comunale Italo Nicoletti",
            "address": "Via Forlimpopoli 15",
            "city": "Riccione",
            "capacity": 3370,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/19112.png"
        }
    },
    {
        "team": {
            "id": 20302,
            "name": "Canicattì",
            "code": null,
            "country": "Italy",
            "founded": null,
            "national": false,
            "logo": "https://media-3.api-sports.io/football/teams/20302.png"
        },
        "venue": {
            "id": null,
            "name": null,
            "address": null,
            "city": null,
            "capacity": null,
            "surface": null,
            "image": null
        }
    },
    {
        "team": {
            "id": 20303,
            "name": "Ragusa",
            "code": null,
            "country": "Italy",
            "founded": 1940,
            "national": false,
            "logo": "https://media-2.api-sports.io/football/teams/20303.png"
        },
        "venue": {
            "id": 6656,
            "name": "Stadio Aldo Campo",
            "address": "Via Avvocato Giovanni Alberto Cartia, Contrada Selvaggio",
            "city": "Ragusa",
            "capacity": 3500,
            "surface": "grass",
            "image": "https://media-1.api-sports.io/football/venues/6656.png"
        }
    }
]

//--------------PLAYERS---------

  PLAYERSTEAM: any[]=[
    {
      "get": "players",
      "parameters": {
          "team": "489",
          "season": "2022"
      },
      "errors": [],
      "results": 20,
      "paging": {
          "current": 1,
          "total": 3
      },
      "response": [
          {
              "player": {
                  "id": 765,
                  "name": "A. Mirante",
                  "firstname": "Antonio",
                  "lastname": "Mirante",
                  "age": 40,
                  "birth": {
                      "date": "1983-07-08",
                      "place": "Castellamare di Stabia",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "193 cm",
                  "weight": "79 kg",
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/765.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 1,
                          "lineups": 0,
                          "minutes": 1,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 0,
                          "bench": 38
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 4,
                          "key": null,
                          "accuracy": 4
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 11
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 1
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 769,
                  "name": "A. Florenzi",
                  "firstname": "Alessandro",
                  "lastname": "Florenzi",
                  "age": 32,
                  "birth": {
                      "date": "1991-03-11",
                      "place": "Roma",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "173 cm",
                  "weight": "67 kg",
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/769.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 6,
                          "lineups": 2,
                          "minutes": 200,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.740000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 4,
                          "out": 1,
                          "bench": 12
                      },
                      "shots": {
                          "total": 3,
                          "on": 2
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 98,
                          "key": 4,
                          "accuracy": 14
                      },
                      "tackles": {
                          "total": 5,
                          "blocks": null,
                          "interceptions": 4
                      },
                      "duels": {
                          "total": 12,
                          "won": 7
                      },
                      "dribbles": {
                          "attempts": 1,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": 2
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 4
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 1265,
                  "name": "Y. Adli",
                  "firstname": "Yacine Zinedine",
                  "lastname": "Adli",
                  "age": 23,
                  "birth": {
                      "date": "2000-07-29",
                      "place": "Vitry-sur-Seine",
                      "country": "France"
                  },
                  "nationality": "France",
                  "height": "186 cm",
                  "weight": "73 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/1265.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 6,
                          "lineups": 1,
                          "minutes": 141,
                          "number": null,
                          "position": "Midfielder",
                          "rating": "6.566666",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 5,
                          "out": 1,
                          "bench": 37
                      },
                      "shots": {
                          "total": 2,
                          "on": 2
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 69,
                          "key": 2,
                          "accuracy": 7
                      },
                      "tackles": {
                          "total": 6,
                          "blocks": null,
                          "interceptions": 1
                      },
                      "duels": {
                          "total": 26,
                          "won": 12
                      },
                      "dribbles": {
                          "attempts": 6,
                          "success": 4,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": 4
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 1627,
                  "name": "D. Calabria",
                  "firstname": "Davide",
                  "lastname": "Calabria",
                  "age": 27,
                  "birth": {
                      "date": "1996-12-06",
                      "place": "Brescia",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "177 cm",
                  "weight": "70 kg",
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/1627.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 25,
                          "lineups": 21,
                          "minutes": 1697,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.917391",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 4,
                          "out": 11,
                          "bench": 7
                      },
                      "shots": {
                          "total": 12,
                          "on": 2
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": 4,
                          "saves": null
                      },
                      "passes": {
                          "total": 1000,
                          "key": 16,
                          "accuracy": 37
                      },
                      "tackles": {
                          "total": 69,
                          "blocks": 7,
                          "interceptions": 24
                      },
                      "duels": {
                          "total": 161,
                          "won": 98
                      },
                      "dribbles": {
                          "attempts": 10,
                          "success": 2,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 14,
                          "committed": 15
                      },
                      "cards": {
                          "yellow": 6,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 6,
                          "lineups": 6,
                          "minutes": 499,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.966666",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 2,
                          "bench": 2
                      },
                      "shots": {
                          "total": 3,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 260,
                          "key": 2,
                          "accuracy": 35
                      },
                      "tackles": {
                          "total": 17,
                          "blocks": 3,
                          "interceptions": 15
                      },
                      "duels": {
                          "total": 45,
                          "won": 26
                      },
                      "dribbles": {
                          "attempts": 4,
                          "success": 2,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 4,
                          "committed": 6
                      },
                      "cards": {
                          "yellow": 2,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 3173,
                  "name": "I. Bennacer",
                  "firstname": "Ismaël",
                  "lastname": "Bennacer",
                  "age": 26,
                  "birth": {
                      "date": "1997-12-01",
                      "place": "Arles",
                      "country": "France"
                  },
                  "nationality": "Algeria",
                  "height": "175 cm",
                  "weight": "70 kg",
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/3173.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 28,
                          "lineups": 24,
                          "minutes": 2013,
                          "number": null,
                          "position": "Midfielder",
                          "rating": "7.251851",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 4,
                          "out": 11,
                          "bench": 5
                      },
                      "shots": {
                          "total": 12,
                          "on": 3
                      },
                      "goals": {
                          "total": 2,
                          "conceded": 0,
                          "assists": 2,
                          "saves": null
                      },
                      "passes": {
                          "total": 1301,
                          "key": 43,
                          "accuracy": 42
                      },
                      "tackles": {
                          "total": 61,
                          "blocks": 7,
                          "interceptions": 25
                      },
                      "duels": {
                          "total": 240,
                          "won": 133
                      },
                      "dribbles": {
                          "attempts": 37,
                          "success": 25,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 25,
                          "committed": 36
                      },
                      "cards": {
                          "yellow": 5,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 10,
                          "lineups": 9,
                          "minutes": 592,
                          "number": null,
                          "position": "Midfielder",
                          "rating": "6.840000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 8,
                          "bench": 1
                      },
                      "shots": {
                          "total": 4,
                          "on": 3
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 335,
                          "key": 4,
                          "accuracy": 28
                      },
                      "tackles": {
                          "total": 26,
                          "blocks": null,
                          "interceptions": 7
                      },
                      "duels": {
                          "total": 108,
                          "won": 57
                      },
                      "dribbles": {
                          "attempts": 21,
                          "success": 13,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 12,
                          "committed": 11
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 19209,
                  "name": "F. Tomori",
                  "firstname": "Oluwafikayomi Oluwadamilola",
                  "lastname": "Tomori",
                  "age": 26,
                  "birth": {
                      "date": "1997-12-19",
                      "place": "Calgary",
                      "country": "Canada"
                  },
                  "nationality": "England",
                  "height": "185 cm",
                  "weight": "75 kg",
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/19209.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 33,
                          "lineups": 32,
                          "minutes": 2765,
                          "number": null,
                          "position": "Defender",
                          "rating": "7.156250",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 6,
                          "bench": 2
                      },
                      "shots": {
                          "total": 7,
                          "on": 4
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": 1,
                          "saves": null
                      },
                      "passes": {
                          "total": 1803,
                          "key": 7,
                          "accuracy": 49
                      },
                      "tackles": {
                          "total": 69,
                          "blocks": 24,
                          "interceptions": 29
                      },
                      "duels": {
                          "total": 224,
                          "won": 156
                      },
                      "dribbles": {
                          "attempts": 3,
                          "success": 2,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 25,
                          "committed": 27
                      },
                      "cards": {
                          "yellow": 5,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-1.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 10,
                          "lineups": 10,
                          "minutes": 828,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.600000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": 1,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 511,
                          "key": 3,
                          "accuracy": 44
                      },
                      "tackles": {
                          "total": 22,
                          "blocks": 8,
                          "interceptions": 10
                      },
                      "duels": {
                          "total": 65,
                          "won": 33
                      },
                      "dribbles": {
                          "attempts": 2,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 2,
                          "committed": 14
                      },
                      "cards": {
                          "yellow": 4,
                          "yellowred": 0,
                          "red": 1
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 21081,
                  "name": "C. Tătărușanu",
                  "firstname": "Anton Ciprian",
                  "lastname": "Tătărușanu",
                  "age": 37,
                  "birth": {
                      "date": "1986-02-09",
                      "place": "București",
                      "country": "Romania"
                  },
                  "nationality": "Romania",
                  "height": "198 cm",
                  "weight": "90 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/21081.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 16,
                          "lineups": 16,
                          "minutes": 1440,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": "6.812500",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 22
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 22,
                          "assists": 1,
                          "saves": 41
                      },
                      "passes": {
                          "total": 481,
                          "key": 2,
                          "accuracy": 22
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": 1
                      },
                      "duels": {
                          "total": 5,
                          "won": 4
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 3,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 5,
                          "lineups": 5,
                          "minutes": 450,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": "7.400000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 5,
                          "assists": null,
                          "saves": 20
                      },
                      "passes": {
                          "total": 158,
                          "key": null,
                          "accuracy": 24
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": 3,
                          "won": 3
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 51070,
                  "name": "Z. Ibrahimović",
                  "firstname": "Zlatan",
                  "lastname": "Ibrahimović",
                  "age": 42,
                  "birth": {
                      "date": "1981-10-03",
                      "place": "Malmö",
                      "country": "Sweden"
                  },
                  "nationality": "Sweden",
                  "height": "195 cm",
                  "weight": "95 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/51070.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 4,
                          "lineups": 1,
                          "minutes": 144,
                          "number": null,
                          "position": "Attacker",
                          "rating": "6.825000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 3,
                          "out": 1,
                          "bench": 6
                      },
                      "shots": {
                          "total": 5,
                          "on": 3
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 51,
                          "key": 1,
                          "accuracy": 9
                      },
                      "tackles": {
                          "total": null,
                          "blocks": 1,
                          "interceptions": null
                      },
                      "duels": {
                          "total": 19,
                          "won": 9
                      },
                      "dribbles": {
                          "attempts": 2,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": 2
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 1,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-1.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Attacker",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 56473,
                  "name": "M. Gabbia",
                  "firstname": "Matteo",
                  "lastname": "Gabbia",
                  "age": 24,
                  "birth": {
                      "date": "1999-10-21",
                      "place": "Busto Arsizio",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "185 cm",
                  "weight": "78 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/56473.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 12,
                          "lineups": 6,
                          "minutes": 608,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.616666",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 6,
                          "out": 1,
                          "bench": 30
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 356,
                          "key": null,
                          "accuracy": 24
                      },
                      "tackles": {
                          "total": 17,
                          "blocks": 3,
                          "interceptions": 5
                      },
                      "duels": {
                          "total": 47,
                          "won": 33
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": 8
                      },
                      "cards": {
                          "yellow": 2,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 4,
                          "lineups": 2,
                          "minutes": 209,
                          "number": null,
                          "position": "Defender",
                          "rating": "7.100000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 2,
                          "out": 0,
                          "bench": 10
                      },
                      "shots": {
                          "total": 1,
                          "on": 1
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 105,
                          "key": null,
                          "accuracy": 23
                      },
                      "tackles": {
                          "total": 3,
                          "blocks": null,
                          "interceptions": 3
                      },
                      "duels": {
                          "total": 12,
                          "won": 7
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 3,
                          "committed": 5
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 81012,
                  "name": "D. Vásquez",
                  "firstname": "Devis Estiven",
                  "lastname": "Vásquez Llach",
                  "age": 25,
                  "birth": {
                      "date": "1998-05-12",
                      "place": "Barranquilla",
                      "country": "Colombia"
                  },
                  "nationality": "Colombia",
                  "height": "195 cm",
                  "weight": "93 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/81012.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 6
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 162045,
                  "name": "M. Lazetić",
                  "firstname": "Marko",
                  "lastname": "Lazetić",
                  "age": 19,
                  "birth": {
                      "date": "2004-01-22",
                      "place": "Belgrade",
                      "country": "Serbia"
                  },
                  "nationality": "Serbia",
                  "height": "190 cm",
                  "weight": "80 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/162045.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 1,
                          "lineups": 0,
                          "minutes": 7,
                          "number": null,
                          "position": "Attacker",
                          "rating": "6.300000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 0,
                          "bench": 5
                      },
                      "shots": {
                          "total": 1,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 1,
                          "key": null,
                          "accuracy": 1
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": 3,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Attacker",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 297579,
                  "name": "C. Traorè",
                  "firstname": "Chaka",
                  "lastname": "Traorè",
                  "age": 18,
                  "birth": {
                      "date": "2004-12-23",
                      "place": "Abengourou",
                      "country": "Côte d'Ivoire"
                  },
                  "nationality": "Côte d'Ivoire",
                  "height": "175 cm",
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/297579.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Attacker",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": null,
                          "name": "Club Friendlies",
                          "country": null,
                          "logo": null,
                          "flag": null,
                          "season": "2022"
                      },
                      "games": {
                          "appearences": 1,
                          "lineups": 0,
                          "minutes": 28,
                          "number": null,
                          "position": "Attacker",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 325143,
                  "name": "G. Robotti",
                  "firstname": "Giovanni",
                  "lastname": "Robotti",
                  "age": 20,
                  "birth": {
                      "date": "2002-01-30",
                      "place": "Varese",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/325143.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": null,
                          "name": "Club Friendlies",
                          "country": null,
                          "logo": null,
                          "flag": null,
                          "season": "2022"
                      },
                      "games": {
                          "appearences": 1,
                          "lineups": 0,
                          "minutes": 8,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 336609,
                  "name": "A. Bozzolan",
                  "firstname": "Andrea",
                  "lastname": "Bozzolan",
                  "age": 19,
                  "birth": {
                      "date": "2004-02-23",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "178 cm",
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/336609.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 4
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 336687,
                  "name": "A. Coubiș",
                  "firstname": "Andrei",
                  "lastname": "Coubiș",
                  "age": 20,
                  "birth": {
                      "date": "2003-09-29",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Romania",
                  "height": "189 cm",
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/336687.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 3
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 336689,
                  "name": "Y. El Hilali",
                  "firstname": "Youns Gabriele",
                  "lastname": "El Hilali",
                  "age": 19,
                  "birth": {
                      "date": "2003-06-08",
                      "place": "Milan",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/336689.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Attacker",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": null,
                          "name": "Club Friendlies",
                          "country": null,
                          "logo": null,
                          "flag": null,
                          "season": "2022"
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Attacker",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 342995,
                  "name": "L. Nava",
                  "firstname": "Lapo Francesco Maria",
                  "lastname": "Nava",
                  "age": 19,
                  "birth": {
                      "date": "2004-01-22",
                      "place": "Milano",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/342995.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 2
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 2,
                          "name": "UEFA Champions League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/2.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 4
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 371910,
                  "name": "J. Šimić",
                  "firstname": "Jan-Carlo",
                  "lastname": "Šimić",
                  "age": 18,
                  "birth": {
                      "date": "2005-05-02",
                      "place": null,
                      "country": "Germany"
                  },
                  "nationality": "Serbia",
                  "height": "186 cm",
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/371910.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-1.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 374359,
                  "name": "D. Bartesaghi",
                  "firstname": "Davide",
                  "lastname": "Bartesaghi",
                  "age": 17,
                  "birth": {
                      "date": "2005-12-29",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/374359.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-3.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": null,
                          "name": "Club Friendlies",
                          "country": null,
                          "logo": null,
                          "flag": null,
                          "season": "2022"
                      },
                      "games": {
                          "appearences": 1,
                          "lineups": 0,
                          "minutes": 8,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 384423,
                  "name": "A. Bakoune",
                  "firstname": "Adam",
                  "lastname": "Bakoune",
                  "age": 17,
                  "birth": {
                      "date": "2006-02-06",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/384423.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 489,
                          "name": "AC Milan",
                          "logo": "https://media-2.api-sports.io/football/teams/489.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          }
      ]
    },
    {
    "get": "players",
    "parameters": {
        "team": "488",
        "season": "2022"
    },
    "errors": [],
    "results": 20,
    "paging": {
        "current": 1,
        "total": 3
    },
    "response": [
        {
            "player": {
                "id": 1719,
                "name": "M. Müldür",
                "firstname": "Mert",
                "lastname": "Müldür",
                "age": 24,
                "birth": {
                    "date": "1999-04-03",
                    "place": "Wien",
                    "country": "Austria"
                },
                "nationality": "Türkiye",
                "height": "188 cm",
                "weight": "74 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/1719.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-1.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-3.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 2,
                        "lineups": 1,
                        "minutes": 13,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.300000",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 1,
                        "out": 1,
                        "bench": 7
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": 3,
                        "key": null,
                        "accuracy": 1
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": 1,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": 1
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 25448,
                "name": "K. Ayhan",
                "firstname": "Kaan",
                "lastname": "Ayhan",
                "age": 29,
                "birth": {
                    "date": "1994-11-10",
                    "place": "Gelsenkirchen",
                    "country": "Germany"
                },
                "nationality": "Türkiye",
                "height": "184 cm",
                "weight": "84 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/25448.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-1.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 10,
                        "lineups": 5,
                        "minutes": 540,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.644444",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 5,
                        "out": 0,
                        "bench": 13
                    },
                    "shots": {
                        "total": 1,
                        "on": 1
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": 329,
                        "key": null,
                        "accuracy": 31
                    },
                    "tackles": {
                        "total": 10,
                        "blocks": 4,
                        "interceptions": 5
                    },
                    "duels": {
                        "total": 32,
                        "won": 20
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 8,
                        "committed": 4
                    },
                    "cards": {
                        "yellow": 1,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 26828,
                "name": "G. Kiriakopoulos",
                "firstname": "Giorgos",
                "lastname": "Kiriakopoulos",
                "age": 27,
                "birth": {
                    "date": "1996-02-05",
                    "place": "Patras",
                    "country": "Greece"
                },
                "nationality": "Greece",
                "height": "178 cm",
                "weight": "74 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/26828.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-3.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 12,
                        "lineups": 9,
                        "minutes": 772,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.716666",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 3,
                        "out": 8,
                        "bench": 11
                    },
                    "shots": {
                        "total": 4,
                        "on": 3
                    },
                    "goals": {
                        "total": 1,
                        "conceded": 0,
                        "assists": 2,
                        "saves": null
                    },
                    "passes": {
                        "total": 336,
                        "key": 9,
                        "accuracy": 25
                    },
                    "tackles": {
                        "total": 13,
                        "blocks": 2,
                        "interceptions": 4
                    },
                    "duels": {
                        "total": 85,
                        "won": 41
                    },
                    "dribbles": {
                        "attempts": 15,
                        "success": 11,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 12,
                        "committed": 9
                    },
                    "cards": {
                        "yellow": 3,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30516,
                "name": "A. Consigli",
                "firstname": "Andrea",
                "lastname": "Consigli",
                "age": 36,
                "birth": {
                    "date": "1987-01-27",
                    "place": "Milano",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "189 cm",
                "weight": "82 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/30516.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-3.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-1.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 35,
                        "lineups": 35,
                        "minutes": 3150,
                        "number": null,
                        "position": "Goalkeeper",
                        "rating": "6.554285",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 0,
                        "out": 0,
                        "bench": 1
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 55,
                        "assists": null,
                        "saves": 64
                    },
                    "passes": {
                        "total": 1238,
                        "key": null,
                        "accuracy": 27
                    },
                    "tackles": {
                        "total": 1,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": 16,
                        "won": 14
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 4,
                        "committed": null
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": 0
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30517,
                "name": "G. Pegolo",
                "firstname": "Gianluca",
                "lastname": "Pegolo",
                "age": 42,
                "birth": {
                    "date": "1981-03-25",
                    "place": "Bassano del Grappa",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "184 cm",
                "weight": "76 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/30517.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-1.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-1.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 2,
                        "lineups": 2,
                        "minutes": 180,
                        "number": null,
                        "position": "Goalkeeper",
                        "rating": "6.500000",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 0,
                        "out": 0,
                        "bench": 36
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 3,
                        "assists": null,
                        "saves": 3
                    },
                    "passes": {
                        "total": 67,
                        "key": null,
                        "accuracy": 27
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": 2,
                        "won": 1
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 1,
                        "committed": null
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": 0
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30523,
                "name": "G. Ferrari",
                "firstname": "Gian Marco",
                "lastname": "Ferrari",
                "age": 31,
                "birth": {
                    "date": "1992-05-15",
                    "place": "Parma",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "189 cm",
                "weight": "82 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/30523.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-1.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 33,
                        "lineups": 24,
                        "minutes": 2218,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.696774",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 9,
                        "out": 3,
                        "bench": 13
                    },
                    "shots": {
                        "total": 7,
                        "on": 1
                    },
                    "goals": {
                        "total": 1,
                        "conceded": 0,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": 1279,
                        "key": 4,
                        "accuracy": 35
                    },
                    "tackles": {
                        "total": 23,
                        "blocks": 20,
                        "interceptions": 23
                    },
                    "duels": {
                        "total": 158,
                        "won": 101
                    },
                    "dribbles": {
                        "attempts": 1,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 31,
                        "committed": 24
                    },
                    "cards": {
                        "yellow": 5,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30527,
                "name": "Rogério",
                "firstname": "Rogério",
                "lastname": "Oliveira da Silva",
                "age": 25,
                "birth": {
                    "date": "1998-01-13",
                    "place": "Nobres",
                    "country": "Brazil"
                },
                "nationality": "Brazil",
                "height": "178 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/30527.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-1.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 36,
                        "lineups": 34,
                        "minutes": 2999,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.800000",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 2,
                        "out": 4,
                        "bench": 3
                    },
                    "shots": {
                        "total": 10,
                        "on": 5
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": 3,
                        "saves": null
                    },
                    "passes": {
                        "total": 1588,
                        "key": 30,
                        "accuracy": 36
                    },
                    "tackles": {
                        "total": 36,
                        "blocks": 9,
                        "interceptions": 37
                    },
                    "duels": {
                        "total": 214,
                        "won": 117
                    },
                    "dribbles": {
                        "attempts": 33,
                        "success": 22,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 38,
                        "committed": 30
                    },
                    "cards": {
                        "yellow": 5,
                        "yellowred": 0,
                        "red": 1
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30528,
                "name": "Federico Peluso",
                "firstname": "Federico",
                "lastname": "Peluso",
                "age": 38,
                "birth": {
                    "date": "1984-01-20",
                    "place": "Roma",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "187 cm",
                "weight": "82 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/30528.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-1.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": null,
                        "lineups": null,
                        "minutes": null,
                        "number": null,
                        "position": "Defender",
                        "rating": null,
                        "captain": false
                    },
                    "substitutes": {
                        "in": null,
                        "out": null,
                        "bench": null
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": null,
                        "conceded": null,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": null,
                        "key": null,
                        "accuracy": null
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": null,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": null,
                        "yellowred": null,
                        "red": null
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": null,
                        "missed": null,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30534,
                "name": "Francesco Magnanelli",
                "firstname": "Francesco",
                "lastname": "Magnanelli",
                "age": 38,
                "birth": {
                    "date": "1984-11-12",
                    "place": "Umbertide",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "181 cm",
                "weight": "79 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/30534.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-1.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": null,
                        "lineups": null,
                        "minutes": null,
                        "number": null,
                        "position": "Midfielder",
                        "rating": null,
                        "captain": false
                    },
                    "substitutes": {
                        "in": null,
                        "out": null,
                        "bench": null
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": null,
                        "conceded": null,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": null,
                        "key": null,
                        "accuracy": null
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": null,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": null,
                        "yellowred": null,
                        "red": null
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": null,
                        "missed": null,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30543,
                "name": "G. Raspadori",
                "firstname": "Giacomo",
                "lastname": "Raspadori",
                "age": 23,
                "birth": {
                    "date": "2000-02-18",
                    "place": "Bentivoglio",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "172 cm",
                "weight": "69 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/30543.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-1.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 1,
                        "lineups": 0,
                        "minutes": 44,
                        "number": null,
                        "position": "Attacker",
                        "rating": "6.808333",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 1,
                        "out": 0,
                        "bench": 1
                    },
                    "shots": {
                        "total": 26,
                        "on": 16
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": 2,
                        "saves": null
                    },
                    "passes": {
                        "total": 400,
                        "key": 17,
                        "accuracy": 13
                    },
                    "tackles": {
                        "total": 9,
                        "blocks": null,
                        "interceptions": 3
                    },
                    "duels": {
                        "total": 73,
                        "won": 31
                    },
                    "dribbles": {
                        "attempts": 18,
                        "success": 8,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 11,
                        "committed": 7
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30556,
                "name": "F. Romagna",
                "firstname": "Filippo",
                "lastname": "Romagna",
                "age": 26,
                "birth": {
                    "date": "1997-05-26",
                    "place": "Fano",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "186 cm",
                "weight": "75 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/30556.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-1.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-3.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 2,
                        "lineups": 0,
                        "minutes": 44,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.300000",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 2,
                        "out": 0,
                        "bench": 19
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": 36,
                        "key": null,
                        "accuracy": 17
                    },
                    "tackles": {
                        "total": null,
                        "blocks": 1,
                        "interceptions": null
                    },
                    "duels": {
                        "total": 2,
                        "won": 2
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30766,
                "name": "A. Russo",
                "firstname": "Alessandro",
                "lastname": "Russo",
                "age": 22,
                "birth": {
                    "date": "2001-03-31",
                    "place": "Reggio Calabria",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "196 cm",
                "weight": null,
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/30766.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 1,
                        "lineups": 1,
                        "minutes": 90,
                        "number": null,
                        "position": "Goalkeeper",
                        "rating": "6.000000",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 0,
                        "out": 0,
                        "bench": 33
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 3,
                        "assists": null,
                        "saves": 4
                    },
                    "passes": {
                        "total": 48,
                        "key": null,
                        "accuracy": 35
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": 1,
                        "won": 1
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": 1,
                        "committed": null
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": 0
                    }
                }
            ]
        },
        {
            "player": {
                "id": 30981,
                "name": "R. Marchizza",
                "firstname": "Riccardo",
                "lastname": "Marchizza",
                "age": 25,
                "birth": {
                    "date": "1998-03-26",
                    "place": "Roma",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "185 cm",
                "weight": "80 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/30981.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 10,
                        "lineups": 3,
                        "minutes": 279,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.360000",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 7,
                        "out": 3,
                        "bench": 35
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": 1,
                        "saves": null
                    },
                    "passes": {
                        "total": 138,
                        "key": 3,
                        "accuracy": 11
                    },
                    "tackles": {
                        "total": 2,
                        "blocks": null,
                        "interceptions": 2
                    },
                    "duels": {
                        "total": 24,
                        "won": 8
                    },
                    "dribbles": {
                        "attempts": 5,
                        "success": 1,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": 7
                    },
                    "cards": {
                        "yellow": 1,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 128461,
                "name": "N. Zortea",
                "firstname": "Nadir",
                "lastname": "Zortea",
                "age": 24,
                "birth": {
                    "date": "1999-06-19",
                    "place": "Feltre",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "175 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/128461.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 10,
                        "lineups": 7,
                        "minutes": 655,
                        "number": null,
                        "position": "Defender",
                        "rating": "6.885714",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 3,
                        "out": 1,
                        "bench": 9
                    },
                    "shots": {
                        "total": 3,
                        "on": 3
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": 73,
                        "key": 3,
                        "accuracy": 6
                    },
                    "tackles": {
                        "total": 10,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": 43,
                        "won": 25
                    },
                    "dribbles": {
                        "attempts": 20,
                        "success": 10,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": 4
                    },
                    "cards": {
                        "yellow": 4,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 180584,
                "name": "B. Oddei",
                "firstname": "Brian Safo",
                "lastname": "Oddei",
                "age": 21,
                "birth": {
                    "date": "2002-09-18",
                    "place": null,
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": null,
                "weight": null,
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/180584.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-3.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-3.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 0,
                        "lineups": 0,
                        "minutes": 0,
                        "number": null,
                        "position": "Attacker",
                        "rating": null,
                        "captain": false
                    },
                    "substitutes": {
                        "in": 0,
                        "out": 0,
                        "bench": 0
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": null,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": null,
                        "key": null,
                        "accuracy": null
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": null,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": null,
                        "missed": null,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 193870,
                "name": "J. Antiste",
                "firstname": "Janis",
                "lastname": "Antiste",
                "age": 21,
                "birth": {
                    "date": "2002-08-18",
                    "place": "Toulouse",
                    "country": "France"
                },
                "nationality": "France",
                "height": "183 cm",
                "weight": "75 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/193870.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-3.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 2,
                        "lineups": 0,
                        "minutes": 50,
                        "number": null,
                        "position": "Attacker",
                        "rating": "6.800000",
                        "captain": false
                    },
                    "substitutes": {
                        "in": 2,
                        "out": 0,
                        "bench": 15
                    },
                    "shots": {
                        "total": 1,
                        "on": 1
                    },
                    "goals": {
                        "total": 1,
                        "conceded": 0,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": 18,
                        "key": null,
                        "accuracy": 6
                    },
                    "tackles": {
                        "total": 1,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": 9,
                        "won": 3
                    },
                    "dribbles": {
                        "attempts": 1,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": 4
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 292519,
                "name": "G. Zacchi",
                "firstname": "Gioele",
                "lastname": "Zacchi",
                "age": 20,
                "birth": {
                    "date": "2003-07-10",
                    "place": null,
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "178 cm",
                "weight": null,
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/292519.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-3.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": 0,
                        "lineups": 0,
                        "minutes": 0,
                        "number": null,
                        "position": "Goalkeeper",
                        "rating": null,
                        "captain": false
                    },
                    "substitutes": {
                        "in": 0,
                        "out": 0,
                        "bench": 6
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": 0,
                        "conceded": 0,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": null,
                        "key": null,
                        "accuracy": null
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": null,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": 0,
                        "yellowred": 0,
                        "red": 0
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": 0,
                        "missed": 0,
                        "saved": 0
                    }
                }
            ]
        },
        {
            "player": {
                "id": 341991,
                "name": "A. Mata",
                "firstname": "Asan",
                "lastname": "Mata",
                "age": 19,
                "birth": {
                    "date": "2003-08-18",
                    "place": null,
                    "country": "Albania"
                },
                "nationality": "Albania",
                "height": null,
                "weight": null,
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/341991.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-2.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": null,
                        "lineups": null,
                        "minutes": null,
                        "number": null,
                        "position": "Midfielder",
                        "rating": null,
                        "captain": false
                    },
                    "substitutes": {
                        "in": null,
                        "out": null,
                        "bench": null
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": null,
                        "conceded": null,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": null,
                        "key": null,
                        "accuracy": null
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": null,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": null,
                        "yellowred": null,
                        "red": null
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": null,
                        "missed": null,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 341994,
                "name": "S. Abubakar",
                "firstname": "Salim",
                "lastname": "Abubakar",
                "age": 19,
                "birth": {
                    "date": "2003-04-06",
                    "place": null,
                    "country": "Ghana"
                },
                "nationality": "Ghana",
                "height": null,
                "weight": null,
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/341994.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-2.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-1.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": null,
                        "lineups": null,
                        "minutes": null,
                        "number": null,
                        "position": "Midfielder",
                        "rating": null,
                        "captain": false
                    },
                    "substitutes": {
                        "in": null,
                        "out": null,
                        "bench": null
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": null,
                        "conceded": null,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": null,
                        "key": null,
                        "accuracy": null
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": null,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": null,
                        "yellowred": null,
                        "red": null
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": null,
                        "missed": null,
                        "saved": null
                    }
                }
            ]
        },
        {
            "player": {
                "id": 341995,
                "name": "J. Kumi",
                "firstname": "Justin",
                "lastname": "Kumi",
                "age": 18,
                "birth": {
                    "date": "2004-07-16",
                    "place": null,
                    "country": "Ghana"
                },
                "nationality": "Italy",
                "height": null,
                "weight": null,
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/341995.png"
            },
            "statistics": [
                {
                    "team": {
                        "id": 488,
                        "name": "Sassuolo",
                        "logo": "https://media-3.api-sports.io/football/teams/488.png"
                    },
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                        "flag": "https://media-3.api-sports.io/flags/it.svg",
                        "season": 2022
                    },
                    "games": {
                        "appearences": null,
                        "lineups": null,
                        "minutes": null,
                        "number": null,
                        "position": "Midfielder",
                        "rating": null,
                        "captain": false
                    },
                    "substitutes": {
                        "in": null,
                        "out": null,
                        "bench": null
                    },
                    "shots": {
                        "total": null,
                        "on": null
                    },
                    "goals": {
                        "total": null,
                        "conceded": null,
                        "assists": null,
                        "saves": null
                    },
                    "passes": {
                        "total": null,
                        "key": null,
                        "accuracy": null
                    },
                    "tackles": {
                        "total": null,
                        "blocks": null,
                        "interceptions": null
                    },
                    "duels": {
                        "total": null,
                        "won": null
                    },
                    "dribbles": {
                        "attempts": null,
                        "success": null,
                        "past": null
                    },
                    "fouls": {
                        "drawn": null,
                        "committed": null
                    },
                    "cards": {
                        "yellow": null,
                        "yellowred": null,
                        "red": null
                    },
                    "penalty": {
                        "won": null,
                        "commited": null,
                        "scored": null,
                        "missed": null,
                        "saved": null
                    }
                }
            ]
        }
    ]
    },
    {
      "get": "players",
      "parameters": {
          "team": "497",
          "season": "2022"
      },
      "errors": [],
      "results": 20,
      "paging": {
          "current": 1,
          "total": 3
      },
      "response": [
          {
              "player": {
                  "id": 324,
                  "name": "A. Diawara",
                  "firstname": "Amadou",
                  "lastname": "Diawara",
                  "age": 26,
                  "birth": {
                      "date": "1997-07-17",
                      "place": "Conakry",
                      "country": "Guinea"
                  },
                  "nationality": "Guinea",
                  "height": "183 cm",
                  "weight": "75 kg",
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/324.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-1.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 556,
                  "name": "M. Svilar",
                  "firstname": "Mile",
                  "lastname": "Svilar",
                  "age": 24,
                  "birth": {
                      "date": "1999-08-27",
                      "place": "Antwerpen",
                      "country": "Belgium"
                  },
                  "nationality": "Serbia",
                  "height": "189 cm",
                  "weight": "77 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/556.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 3,
                          "lineups": 3,
                          "minutes": 270,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": "6.600000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 35
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 3,
                          "assists": null,
                          "saves": 7
                      },
                      "passes": {
                          "total": 64,
                          "key": null,
                          "accuracy": 12
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 1
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 1,
                          "lineups": 1,
                          "minutes": 90,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": "6.200000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 14
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 2,
                          "assists": null,
                          "saves": 1
                      },
                      "passes": {
                          "total": 22,
                          "key": null,
                          "accuracy": 17
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 770,
                  "name": "R. Karsdorp",
                  "firstname": "Rick",
                  "lastname": "Karsdorp",
                  "age": 28,
                  "birth": {
                      "date": "1995-02-11",
                      "place": "Schoonhoven",
                      "country": "Netherlands"
                  },
                  "nationality": "Netherlands",
                  "height": "184 cm",
                  "weight": "80 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/770.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 13,
                          "lineups": 8,
                          "minutes": 712,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.615384",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 5,
                          "out": 6,
                          "bench": 8
                      },
                      "shots": {
                          "total": 2,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 296,
                          "key": 6,
                          "accuracy": 19
                      },
                      "tackles": {
                          "total": 21,
                          "blocks": null,
                          "interceptions": 7
                      },
                      "duels": {
                          "total": 52,
                          "won": 26
                      },
                      "dribbles": {
                          "attempts": 5,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": 4
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-1.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 5,
                          "lineups": 4,
                          "minutes": 276,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.680000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 2,
                          "bench": 6
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 101,
                          "key": 6,
                          "accuracy": 15
                      },
                      "tackles": {
                          "total": 2,
                          "blocks": null,
                          "interceptions": 1
                      },
                      "duels": {
                          "total": 13,
                          "won": 10
                      },
                      "dribbles": {
                          "attempts": 3,
                          "success": 3,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 3,
                          "committed": 2
                      },
                      "cards": {
                          "yellow": 2,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 775,
                  "name": "D. Santon",
                  "firstname": "Davide",
                  "lastname": "Santon",
                  "age": 31,
                  "birth": {
                      "date": "1991-01-02",
                      "place": "Porto Maggiore",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "187 cm",
                  "weight": "77 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/775.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": null,
                          "name": "Club Friendlies",
                          "country": null,
                          "logo": null,
                          "flag": null,
                          "season": "2022"
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 777,
                  "name": "A. Ćorić",
                  "firstname": "Ante",
                  "lastname": "Ćorić",
                  "age": 26,
                  "birth": {
                      "date": "1997-04-14",
                      "place": "Zagreb",
                      "country": "Croatia"
                  },
                  "nationality": "Croatia",
                  "height": "172 cm",
                  "weight": "68 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/777.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 786,
                  "name": "N. Zaniolo",
                  "firstname": "Nicolò",
                  "lastname": "Zaniolo",
                  "age": 24,
                  "birth": {
                      "date": "1999-07-02",
                      "place": "Massa",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "190 cm",
                  "weight": "79 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/786.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 13,
                          "lineups": 12,
                          "minutes": 898,
                          "number": null,
                          "position": "Midfielder",
                          "rating": "6.484615",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 8,
                          "bench": 2
                      },
                      "shots": {
                          "total": 20,
                          "on": 7
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 174,
                          "key": 8,
                          "accuracy": 9
                      },
                      "tackles": {
                          "total": 8,
                          "blocks": null,
                          "interceptions": 2
                      },
                      "duels": {
                          "total": 149,
                          "won": 54
                      },
                      "dribbles": {
                          "attempts": 38,
                          "success": 9,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 32,
                          "committed": 22
                      },
                      "cards": {
                          "yellow": 4,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-1.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 3,
                          "lineups": 2,
                          "minutes": 210,
                          "number": null,
                          "position": "Midfielder",
                          "rating": "7.166666",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 1,
                          "bench": 1
                      },
                      "shots": {
                          "total": 12,
                          "on": 6
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": 1,
                          "saves": null
                      },
                      "passes": {
                          "total": 44,
                          "key": 3,
                          "accuracy": 10
                      },
                      "tackles": {
                          "total": 1,
                          "blocks": null,
                          "interceptions": 1
                      },
                      "duels": {
                          "total": 30,
                          "won": 13
                      },
                      "dribbles": {
                          "attempts": 13,
                          "success": 5,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 7,
                          "committed": 4
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 1
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 892,
                  "name": "C. Smalling",
                  "firstname": "Christopher Lloyd",
                  "lastname": "Smalling",
                  "age": 34,
                  "birth": {
                      "date": "1989-11-22",
                      "place": "Greenwich",
                      "country": "England"
                  },
                  "nationality": "England",
                  "height": "194 cm",
                  "weight": "81 kg",
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/892.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 32,
                          "lineups": 31,
                          "minutes": 2808,
                          "number": null,
                          "position": "Defender",
                          "rating": "7.115625",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 1,
                          "bench": 3
                      },
                      "shots": {
                          "total": 13,
                          "on": 5
                      },
                      "goals": {
                          "total": 3,
                          "conceded": 0,
                          "assists": 1,
                          "saves": null
                      },
                      "passes": {
                          "total": 1339,
                          "key": 6,
                          "accuracy": 36
                      },
                      "tackles": {
                          "total": 26,
                          "blocks": 36,
                          "interceptions": 43
                      },
                      "duels": {
                          "total": 164,
                          "won": 113
                      },
                      "dribbles": {
                          "attempts": 3,
                          "success": 2,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 14,
                          "committed": 18
                      },
                      "cards": {
                          "yellow": 7,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 14,
                          "lineups": 12,
                          "minutes": 1154,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.971428",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 2,
                          "out": 1,
                          "bench": 3
                      },
                      "shots": {
                          "total": 2,
                          "on": 1
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 472,
                          "key": 3,
                          "accuracy": 31
                      },
                      "tackles": {
                          "total": 14,
                          "blocks": 15,
                          "interceptions": 14
                      },
                      "duels": {
                          "total": 54,
                          "won": 38
                      },
                      "dribbles": {
                          "attempts": 2,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 3,
                          "committed": 3
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 2674,
                  "name": "Rui Patrício",
                  "firstname": "Rui Pedro",
                  "lastname": "dos Santos Patrício",
                  "age": 35,
                  "birth": {
                      "date": "1988-02-15",
                      "place": "Marrazes",
                      "country": "Portugal"
                  },
                  "nationality": "Portugal",
                  "height": "190 cm",
                  "weight": "84 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/2674.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 35,
                          "lineups": 35,
                          "minutes": 3150,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": "6.757142",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 35,
                          "assists": null,
                          "saves": 74
                      },
                      "passes": {
                          "total": 763,
                          "key": null,
                          "accuracy": 15
                      },
                      "tackles": {
                          "total": 1,
                          "blocks": null,
                          "interceptions": 2
                      },
                      "duels": {
                          "total": 4,
                          "won": 3
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": 1
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 1
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 14,
                          "lineups": 14,
                          "minutes": 1320,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": "6.957142",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 9,
                          "assists": null,
                          "saves": 34
                      },
                      "passes": {
                          "total": 350,
                          "key": null,
                          "accuracy": 16
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": 2,
                          "won": 2
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 2,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 30424,
                  "name": "Ibañez",
                  "firstname": "Roger",
                  "lastname": "Ibañez da Silva",
                  "age": 25,
                  "birth": {
                      "date": "1998-11-23",
                      "place": "Canela",
                      "country": "Brazil"
                  },
                  "nationality": "Brazil",
                  "height": "185 cm",
                  "weight": "73 kg",
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/30424.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 33,
                          "lineups": 32,
                          "minutes": 2797,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.996969",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 1,
                          "bench": 4
                      },
                      "shots": {
                          "total": 19,
                          "on": 11
                      },
                      "goals": {
                          "total": 3,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 1645,
                          "key": 6,
                          "accuracy": 43
                      },
                      "tackles": {
                          "total": 67,
                          "blocks": 11,
                          "interceptions": 66
                      },
                      "duels": {
                          "total": 297,
                          "won": 186
                      },
                      "dribbles": {
                          "attempts": 19,
                          "success": 12,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 48,
                          "committed": 44
                      },
                      "cards": {
                          "yellow": 10,
                          "yellowred": 1,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 13,
                          "lineups": 12,
                          "minutes": 1114,
                          "number": null,
                          "position": "Defender",
                          "rating": "7.061538",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 1,
                          "bench": 1
                      },
                      "shots": {
                          "total": 7,
                          "on": 2
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 509,
                          "key": 2,
                          "accuracy": 34
                      },
                      "tackles": {
                          "total": 20,
                          "blocks": 12,
                          "interceptions": 29
                      },
                      "duels": {
                          "total": 105,
                          "won": 70
                      },
                      "dribbles": {
                          "attempts": 4,
                          "success": 2,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 22,
                          "committed": 14
                      },
                      "cards": {
                          "yellow": 5,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 51572,
                  "name": "M. Viña",
                  "firstname": "Matías Nicolás",
                  "lastname": "Viña Susperreguy",
                  "age": 26,
                  "birth": {
                      "date": "1997-11-09",
                      "place": "Empalme Olmos",
                      "country": "Uruguay"
                  },
                  "nationality": "Uruguay",
                  "height": "175 cm",
                  "weight": "70 kg",
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/51572.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 3,
                          "lineups": 1,
                          "minutes": 54,
                          "number": null,
                          "position": "Defender",
                          "rating": "6.950000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 2,
                          "out": 1,
                          "bench": 19
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 18,
                          "key": 1,
                          "accuracy": 7
                      },
                      "tackles": {
                          "total": 4,
                          "blocks": 1,
                          "interceptions": 2
                      },
                      "duels": {
                          "total": 12,
                          "won": 7
                      },
                      "dribbles": {
                          "attempts": 1,
                          "success": 1,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": 4
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-1.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 4,
                          "lineups": 3,
                          "minutes": 245,
                          "number": null,
                          "position": "Defender",
                          "rating": "7.025000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 1,
                          "bench": 3
                      },
                      "shots": {
                          "total": 1,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 144,
                          "key": 3,
                          "accuracy": 29
                      },
                      "tackles": {
                          "total": 5,
                          "blocks": null,
                          "interceptions": 5
                      },
                      "duels": {
                          "total": 24,
                          "won": 17
                      },
                      "dribbles": {
                          "attempts": 3,
                          "success": 2,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 7,
                          "committed": 2
                      },
                      "cards": {
                          "yellow": 1,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 53535,
                  "name": "E. Shomurodov",
                  "firstname": "Eldor",
                  "lastname": "Azamat Shomurodov",
                  "age": 28,
                  "birth": {
                      "date": "1995-06-29",
                      "place": "Jarkurgan",
                      "country": "Uzbekistan"
                  },
                  "nationality": "Uzbekistan",
                  "height": "190 cm",
                  "weight": "81 kg",
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/53535.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 6,
                          "lineups": 1,
                          "minutes": 115,
                          "number": null,
                          "position": "Attacker",
                          "rating": "6.266666",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 5,
                          "out": 1,
                          "bench": 18
                      },
                      "shots": {
                          "total": 6,
                          "on": 3
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 32,
                          "key": null,
                          "accuracy": 5
                      },
                      "tackles": {
                          "total": 1,
                          "blocks": null,
                          "interceptions": 1
                      },
                      "duels": {
                          "total": 19,
                          "won": 6
                      },
                      "dribbles": {
                          "attempts": 4,
                          "success": 1,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 2,
                          "committed": 1
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-1.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 2,
                          "lineups": 0,
                          "minutes": 35,
                          "number": null,
                          "position": "Attacker",
                          "rating": "7.000000",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 2,
                          "out": 0,
                          "bench": 6
                      },
                      "shots": {
                          "total": 3,
                          "on": 2
                      },
                      "goals": {
                          "total": 1,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 9,
                          "key": 2,
                          "accuracy": 2
                      },
                      "tackles": {
                          "total": 1,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": 9,
                          "won": 3
                      },
                      "dribbles": {
                          "attempts": 3,
                          "success": 1,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 1,
                          "committed": 1
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 85063,
                  "name": "W. Bianda",
                  "firstname": "William Ludovic",
                  "lastname": "Brandon Bianda",
                  "age": 23,
                  "birth": {
                      "date": "2000-04-30",
                      "place": "Suresnes",
                      "country": "France"
                  },
                  "nationality": "France",
                  "height": "185 cm",
                  "weight": "87 kg",
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/85063.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 157052,
                  "name": "R. Calafiori",
                  "firstname": "Riccardo",
                  "lastname": "Calafiori",
                  "age": 21,
                  "birth": {
                      "date": "2002-05-19",
                      "place": "Roma",
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "188 cm",
                  "weight": "86 kg",
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/157052.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 277192,
                  "name": "P. Boer",
                  "firstname": "Pietro",
                  "lastname": "Boer",
                  "age": 21,
                  "birth": {
                      "date": "2002-05-12",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": "193 cm",
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/277192.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 38
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 1
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 15
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 290181,
                  "name": "F. Tripi",
                  "firstname": "Filippo",
                  "lastname": "Tripi",
                  "age": 21,
                  "birth": {
                      "date": "2002-01-06",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/290181.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 15
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Defender",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 6
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 342038,
                  "name": "F. Afena-Gyan",
                  "firstname": "Felix Ohene",
                  "lastname": "Afena-Gyan",
                  "age": 20,
                  "birth": {
                      "date": "2003-01-19",
                      "place": null,
                      "country": "Ghana"
                  },
                  "nationality": "Ghana",
                  "height": "175 cm",
                  "weight": "62 kg",
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/342038.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Attacker",
                          "rating": "6.409523",
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 2
                      },
                      "shots": {
                          "total": 12,
                          "on": 2
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": 174,
                          "key": 2,
                          "accuracy": 6
                      },
                      "tackles": {
                          "total": 7,
                          "blocks": 1,
                          "interceptions": 1
                      },
                      "duels": {
                          "total": 134,
                          "won": 40
                      },
                      "dribbles": {
                          "attempts": 16,
                          "success": 5,
                          "past": null
                      },
                      "fouls": {
                          "drawn": 11,
                          "committed": 17
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Attacker",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 342222,
                  "name": "M. Ivković",
                  "firstname": "Mate",
                  "lastname": "Ivković",
                  "age": 16,
                  "birth": {
                      "date": "2006-01-04",
                      "place": null,
                      "country": "Croatia"
                  },
                  "nationality": "Croatia",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/342222.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": null,
                          "name": "Club Friendlies",
                          "country": null,
                          "logo": null,
                          "flag": null,
                          "season": "2022"
                      },
                      "games": {
                          "appearences": 1,
                          "lineups": 0,
                          "minutes": 2,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 1,
                          "out": 0,
                          "bench": 4
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 354531,
                  "name": "C. Cassano",
                  "firstname": "Claudio",
                  "lastname": "Cassano",
                  "age": 19,
                  "birth": {
                      "date": "2003-07-22",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-3.api-sports.io/football/players/354531.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-3.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-2.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": null,
                          "lineups": null,
                          "minutes": null,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": null,
                          "out": null,
                          "bench": null
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": null,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": null,
                          "yellowred": null,
                          "red": null
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-2.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": null
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": null,
                          "name": "Club Friendlies",
                          "country": null,
                          "logo": null,
                          "flag": null,
                          "season": "2022"
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Midfielder",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 356892,
                  "name": "G. Baldi",
                  "firstname": "Gabriele",
                  "lastname": "Baldi",
                  "age": 19,
                  "birth": {
                      "date": "2004-08-24",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-2.api-sports.io/football/players/356892.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-2.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-3.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  }
              ]
          },
          {
              "player": {
                  "id": 410405,
                  "name": "J. Del Bello",
                  "firstname": "Jacopo",
                  "lastname": "Del Bello",
                  "age": 19,
                  "birth": {
                      "date": "2004-09-25",
                      "place": null,
                      "country": "Italy"
                  },
                  "nationality": "Italy",
                  "height": null,
                  "weight": null,
                  "injured": false,
                  "photo": "https://media-1.api-sports.io/football/players/410405.png"
              },
              "statistics": [
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 135,
                          "name": "Serie A",
                          "country": "Italy",
                          "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                          "flag": "https://media-1.api-sports.io/flags/it.svg",
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 1
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": 0,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": 0,
                          "missed": 0,
                          "saved": 0
                      }
                  },
                  {
                      "team": {
                          "id": 497,
                          "name": "AS Roma",
                          "logo": "https://media-1.api-sports.io/football/teams/497.png"
                      },
                      "league": {
                          "id": 3,
                          "name": "UEFA Europa League",
                          "country": "World",
                          "logo": "https://media-3.api-sports.io/football/leagues/3.png",
                          "flag": null,
                          "season": 2022
                      },
                      "games": {
                          "appearences": 0,
                          "lineups": 0,
                          "minutes": 0,
                          "number": null,
                          "position": "Goalkeeper",
                          "rating": null,
                          "captain": false
                      },
                      "substitutes": {
                          "in": 0,
                          "out": 0,
                          "bench": 0
                      },
                      "shots": {
                          "total": null,
                          "on": null
                      },
                      "goals": {
                          "total": 0,
                          "conceded": null,
                          "assists": null,
                          "saves": null
                      },
                      "passes": {
                          "total": null,
                          "key": null,
                          "accuracy": null
                      },
                      "tackles": {
                          "total": null,
                          "blocks": null,
                          "interceptions": null
                      },
                      "duels": {
                          "total": null,
                          "won": null
                      },
                      "dribbles": {
                          "attempts": null,
                          "success": null,
                          "past": null
                      },
                      "fouls": {
                          "drawn": null,
                          "committed": null
                      },
                      "cards": {
                          "yellow": 0,
                          "yellowred": 0,
                          "red": 0
                      },
                      "penalty": {
                          "won": null,
                          "commited": null,
                          "scored": null,
                          "missed": null,
                          "saved": null
                      }
                  }
              ]
          }
      ]
    },
    {
      "get": "players",
      "parameters": {
      "season": "2022",
      "team": "487"
      },
      "errors": [
      ],
      "results": 20,
      "paging": {
      "current": 1,
      "total": 3
      },
      "response": [
      {
      "player": {
      "id": 317,
      "name": "E. Hysaj",
      "firstname": "Elseid",
      "lastname": "Hysaj",
      "age": 29,
      "birth": {
      "date": "1994-02-02",
      "place": "Shkodër",
      "country": "Albania"
      },
      "nationality": "Albania",
      "height": "182 cm",
      "weight": "75 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/317.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 34,
      "lineups": 22,
      "minutes": 1992,
      "number": null,
      "position": "Defender",
      "rating": "6.741176",
      "captain": false
      },
      "substitutes": {
      "in": 12,
      "out": 8,
      "bench": 15
      },
      "shots": {
      "total": 3,
      "on": 2
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 1214,
      "key": 13,
      "accuracy": 30
      },
      "tackles": {
      "total": 39,
      "blocks": 7,
      "interceptions": 20
      },
      "duels": {
      "total": 165,
      "won": 83
      },
      "dribbles": {
      "attempts": 16,
      "success": 6,
      "past": null
      },
      "fouls": {
      "drawn": 14,
      "committed": 19
      },
      "cards": {
      "yellow": 3,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 6,
      "lineups": 6,
      "minutes": 540,
      "number": null,
      "position": "Defender",
      "rating": "6.700000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 378,
      "key": 3,
      "accuracy": 54
      },
      "tackles": {
      "total": 9,
      "blocks": 1,
      "interceptions": 6
      },
      "duels": {
      "total": 41,
      "won": 18
      },
      "dribbles": {
      "attempts": 9,
      "success": 3,
      "past": null
      },
      "fouls": {
      "drawn": 2,
      "committed": 6
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1470,
      "name": "Luís Maximiano",
      "firstname": "Luís Manuel",
      "lastname": "Arantes Maximiano",
      "age": 24,
      "birth": {
      "date": "1999-01-05",
      "place": "Braga",
      "country": "Portugal"
      },
      "nationality": "Portugal",
      "height": "190 cm",
      "weight": "82 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/1470.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 1,
      "lineups": 1,
      "minutes": 6,
      "number": null,
      "position": "Goalkeeper",
      "rating": "3.000000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 36
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 3,
      "key": null,
      "accuracy": 2
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": 1
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 1
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 1
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 6
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      },
      {
      "player": {
      "id": 1632,
      "name": "A. Romagnoli",
      "firstname": "Alessio",
      "lastname": "Romagnoli",
      "age": 28,
      "birth": {
      "date": "1995-01-12",
      "place": "Roma",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "185 cm",
      "weight": "75 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/1632.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 34,
      "lineups": 33,
      "minutes": 2925,
      "number": null,
      "position": "Defender",
      "rating": "6.994117",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 3,
      "bench": 2
      },
      "shots": {
      "total": 11,
      "on": 5
      },
      "goals": {
      "total": 2,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 1847,
      "key": 2,
      "accuracy": 49
      },
      "tackles": {
      "total": 33,
      "blocks": 26,
      "interceptions": 38
      },
      "duels": {
      "total": 225,
      "won": 131
      },
      "dribbles": {
      "attempts": 1,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 19,
      "committed": 35
      },
      "cards": {
      "yellow": 6,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 4,
      "lineups": 4,
      "minutes": 343,
      "number": null,
      "position": "Defender",
      "rating": "6.650000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 1,
      "bench": 2
      },
      "shots": {
      "total": 1,
      "on": 1
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 288,
      "key": null,
      "accuracy": 66
      },
      "tackles": {
      "total": 4,
      "blocks": 2,
      "interceptions": 2
      },
      "duels": {
      "total": 14,
      "won": 8
      },
      "dribbles": {
      "attempts": 1,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 1,
      "committed": 4
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1836,
      "name": "F. Acerbi",
      "firstname": "Francesco Ace",
      "lastname": "Acerbi",
      "age": 35,
      "birth": {
      "date": "1988-02-10",
      "place": "Vizzolo Predabissi",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "192 cm",
      "weight": "88 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/1836.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": "6.980000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": 10,
      "on": 2
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 2,
      "saves": null
      },
      "passes": {
      "total": 1542,
      "key": 16,
      "accuracy": 45
      },
      "tackles": {
      "total": 32,
      "blocks": 18,
      "interceptions": 36
      },
      "duels": {
      "total": 204,
      "won": 130
      },
      "dribbles": {
      "attempts": 10,
      "success": 7,
      "past": null
      },
      "fouls": {
      "drawn": 13,
      "committed": 16
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1841,
      "name": "Patric",
      "firstname": "Patricio",
      "lastname": "Gabarrón Gil",
      "age": 30,
      "birth": {
      "date": "1993-04-17",
      "place": "Mula",
      "country": "Spain"
      },
      "nationality": "Spain",
      "height": "184 cm",
      "weight": "72 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/1841.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 18,
      "lineups": 16,
      "minutes": 1414,
      "number": null,
      "position": "Defender",
      "rating": "7.082352",
      "captain": false
      },
      "substitutes": {
      "in": 2,
      "out": 3,
      "bench": 19
      },
      "shots": {
      "total": 2,
      "on": 1
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 1062,
      "key": 2,
      "accuracy": 52
      },
      "tackles": {
      "total": 17,
      "blocks": 12,
      "interceptions": 11
      },
      "duels": {
      "total": 62,
      "won": 31
      },
      "dribbles": {
      "attempts": 3,
      "success": 2,
      "past": null
      },
      "fouls": {
      "drawn": 4,
      "committed": 3
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 4,
      "lineups": 2,
      "minutes": 212,
      "number": null,
      "position": "Defender",
      "rating": "6.600000",
      "captain": false
      },
      "substitutes": {
      "in": 2,
      "out": 0,
      "bench": 3
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 190,
      "key": null,
      "accuracy": 42
      },
      "tackles": {
      "total": 1,
      "blocks": 1,
      "interceptions": 2
      },
      "duels": {
      "total": 12,
      "won": 6
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 2,
      "committed": 2
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1843,
      "name": "J. Lukaku",
      "firstname": "Jordan Zacharie",
      "lastname": "Lukaku Menama Mokelenge",
      "age": 29,
      "birth": {
      "date": "1994-07-25",
      "place": "Antwerpen",
      "country": "Belgium"
      },
      "nationality": "Belgium",
      "height": "177 cm",
      "weight": "86 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/1843.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": null,
      "name": "Club Friendlies",
      "country": null,
      "logo": null,
      "flag": null,
      "season": "2022"
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": null,
      "name": "Club Friendlies",
      "country": null,
      "logo": null,
      "flag": null,
      "season": "2022"
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1846,
      "name": "Ş. Radu",
      "firstname": "Ştefan Daniel",
      "lastname": "Radu",
      "age": 37,
      "birth": {
      "date": "1986-10-22",
      "place": "București",
      "country": "Romania"
      },
      "nationality": "Romania",
      "height": "183 cm",
      "weight": "79 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/1846.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 1,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 0,
      "bench": 33
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 6,
      "key": null,
      "accuracy": 6
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 2,
      "lineups": 1,
      "minutes": 66,
      "number": null,
      "position": "Defender",
      "rating": "6.500000",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 1,
      "bench": 5
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 61,
      "key": null,
      "accuracy": 26
      },
      "tackles": {
      "total": 1,
      "blocks": 1,
      "interceptions": 2
      },
      "duels": {
      "total": 4,
      "won": 1
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": 1
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1858,
      "name": "Lucas Leiva",
      "firstname": "Lucas",
      "lastname": "Pezzini Leiva",
      "age": 36,
      "birth": {
      "date": "1987-01-09",
      "place": "Dourados",
      "country": "Brazil"
      },
      "nationality": "Brazil",
      "height": "179 cm",
      "weight": "74 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/1858.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": null,
      "name": "Club Friendlies",
      "country": null,
      "logo": null,
      "flag": null,
      "season": "2022"
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 30554,
      "name": "L. Pellegrini",
      "firstname": "Luca",
      "lastname": "Pellegrini",
      "age": 24,
      "birth": {
      "date": "1999-03-07",
      "place": "Roma",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "178 cm",
      "weight": "72 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/30554.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 7,
      "lineups": 1,
      "minutes": 174,
      "number": null,
      "position": "Defender",
      "rating": "6.557142",
      "captain": false
      },
      "substitutes": {
      "in": 6,
      "out": 0,
      "bench": 16
      },
      "shots": {
      "total": 3,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 128,
      "key": 4,
      "accuracy": 15
      },
      "tackles": {
      "total": 1,
      "blocks": null,
      "interceptions": 7
      },
      "duels": {
      "total": 29,
      "won": 8
      },
      "dribbles": {
      "attempts": 7,
      "success": 3,
      "past": null
      },
      "fouls": {
      "drawn": 1,
      "committed": 5
      },
      "cards": {
      "yellow": 3,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31037,
      "name": "I. Provedel",
      "firstname": "Ivan",
      "lastname": "Provedel",
      "age": 29,
      "birth": {
      "date": "1994-03-17",
      "place": "Udine",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "192 cm",
      "weight": "82 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/31037.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 38,
      "lineups": 37,
      "minutes": 3412,
      "number": null,
      "position": "Goalkeeper",
      "rating": "7.094736",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 0,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 30,
      "assists": null,
      "saves": 100
      },
      "passes": {
      "total": 1153,
      "key": 1,
      "accuracy": 23
      },
      "tackles": {
      "total": 1,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 11,
      "won": 10
      },
      "dribbles": {
      "attempts": 1,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 5,
      "committed": null
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 1
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 6,
      "lineups": 6,
      "minutes": 540,
      "number": null,
      "position": "Goalkeeper",
      "rating": "6.583333",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 11,
      "assists": null,
      "saves": 17
      },
      "passes": {
      "total": 217,
      "key": null,
      "accuracy": 29
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 3,
      "won": 3
      },
      "dribbles": {
      "attempts": 1,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 2,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      },
      {
      "player": {
      "id": 31099,
      "name": "N. Casale",
      "firstname": "Nicolò",
      "lastname": "Casale",
      "age": 25,
      "birth": {
      "date": "1998-02-14",
      "place": "Negrar",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "191 cm",
      "weight": "84 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/31099.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 29,
      "lineups": 27,
      "minutes": 2437,
      "number": null,
      "position": "Defender",
      "rating": "6.968965",
      "captain": false
      },
      "substitutes": {
      "in": 2,
      "out": 2,
      "bench": 8
      },
      "shots": {
      "total": 7,
      "on": 2
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 1609,
      "key": 4,
      "accuracy": 51
      },
      "tackles": {
      "total": 42,
      "blocks": 17,
      "interceptions": 18
      },
      "duels": {
      "total": 158,
      "won": 94
      },
      "dribbles": {
      "attempts": 3,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 7,
      "committed": 22
      },
      "cards": {
      "yellow": 6,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 2,
      "lineups": 1,
      "minutes": 98,
      "number": null,
      "position": "Defender",
      "rating": "6.700000",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 0,
      "bench": 4
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 84,
      "key": null,
      "accuracy": 39
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": 1
      },
      "duels": {
      "total": 4,
      "won": 1
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 1,
      "committed": 2
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31667,
      "name": "D. Anderson",
      "firstname": "Djavan Lorenzo",
      "lastname": "Anderson",
      "age": 28,
      "birth": {
      "date": "1995-04-21",
      "place": "Amsterdam",
      "country": "Netherlands"
      },
      "nationality": "Suriname",
      "height": "174 cm",
      "weight": "70 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/31667.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31678,
      "name": "J. Akpa Akpro",
      "firstname": "Jean-Daniel Dave",
      "lastname": "Lewis Akpa Akpro",
      "age": 31,
      "birth": {
      "date": "1992-10-11",
      "place": "Toulouse",
      "country": "France"
      },
      "nationality": "Côte d'Ivoire",
      "height": "180 cm",
      "weight": "70 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/31678.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": "6.758333",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": 10,
      "on": 5
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 392,
      "key": 6,
      "accuracy": 12
      },
      "tackles": {
      "total": 54,
      "blocks": 4,
      "interceptions": 13
      },
      "duels": {
      "total": 216,
      "won": 118
      },
      "dribbles": {
      "attempts": 49,
      "success": 30,
      "past": null
      },
      "fouls": {
      "drawn": 18,
      "committed": 31
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31775,
      "name": "M. Adamonis",
      "firstname": "Marius",
      "lastname": "Adamonis",
      "age": 26,
      "birth": {
      "date": "1997-05-13",
      "place": "Panevėžys",
      "country": "Lithuania"
      },
      "nationality": "Lithuania",
      "height": "187 cm",
      "weight": "80 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/31775.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 38
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 1
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 45798,
      "name": "D. Kamenović",
      "firstname": "Dimitrije",
      "lastname": "Kamenović",
      "age": 23,
      "birth": {
      "date": "2000-07-16",
      "place": "Pirot",
      "country": "Serbia"
      },
      "nationality": "Serbia",
      "height": "188 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/45798.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 13
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 342651,
      "name": "R. Floriani",
      "firstname": "Romano",
      "lastname": "Floriani",
      "age": 20,
      "birth": {
      "date": "2003-01-27",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/342651.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 2
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 343570,
      "name": "F. Magro",
      "firstname": "Federico",
      "lastname": "Magro",
      "age": 18,
      "birth": {
      "date": "2005-01-10",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "189 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/343570.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-1.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 2
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      },
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 3,
      "name": "UEFA Europa League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/3.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 6
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      },
      {
      "player": {
      "id": 393946,
      "name": "B. Maliszewski",
      "firstname": "Bartłomiej",
      "lastname": "Maliszewski",
      "age": 19,
      "birth": {
      "date": "2004-02-12",
      "place": null,
      "country": "Poland"
      },
      "nationality": "Poland",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/393946.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-2.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": null,
      "lineups": null,
      "minutes": null,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": null,
      "out": null,
      "bench": null
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": null,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": null,
      "yellowred": null,
      "red": null
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 408625,
      "name": "D. Renzetti",
      "firstname": "Davide",
      "lastname": "Renzetti",
      "age": 17,
      "birth": {
      "date": "2006-06-09",
      "place": "Rome",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/408625.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": null,
      "lineups": null,
      "minutes": null,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": null,
      "out": null,
      "bench": null
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": null,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": null,
      "yellowred": null,
      "red": null
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 408626,
      "name": "F. Ruggeri",
      "firstname": "Fabio Andrea",
      "lastname": "Ruggeri",
      "age": 19,
      "birth": {
      "date": "2004-12-13",
      "place": "Roma",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "169 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/408626.png"
      },
      "statistics": [
      {
      "team": {
      "id": 487,
      "name": "Lazio",
      "logo": "https://media-3.api-sports.io/football/teams/487.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      }
      ]
    },
    {
      "get": "players",
      "parameters": {
      "season": "2022",
      "team": "490"
      },
      "errors": [
      ],
      "results": 20,
      "paging": {
      "current": 1,
      "total": 3
      },
      "response": [
      {
      "player": {
      "id": 200,
      "name": "G. Zappa",
      "firstname": "Gabriele",
      "lastname": "Zappa",
      "age": 24,
      "birth": {
      "date": "1999-12-22",
      "place": "Monza",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "180 cm",
      "weight": "78 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/200.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-2.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 34,
      "lineups": 32,
      "minutes": 2752,
      "number": null,
      "position": "Defender",
      "rating": "6.887878",
      "captain": false
      },
      "substitutes": {
      "in": 2,
      "out": 12,
      "bench": 9
      },
      "shots": {
      "total": 10,
      "on": 7
      },
      "goals": {
      "total": 3,
      "conceded": 0,
      "assists": 2,
      "saves": null
      },
      "passes": {
      "total": 1414,
      "key": 25,
      "accuracy": 33
      },
      "tackles": {
      "total": 61,
      "blocks": 11,
      "interceptions": 34
      },
      "duels": {
      "total": 250,
      "won": 122
      },
      "dribbles": {
      "attempts": 37,
      "success": 15,
      "past": null
      },
      "fouls": {
      "drawn": 22,
      "committed": 32
      },
      "cards": {
      "yellow": 8,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 18890,
      "name": "A. Barreca",
      "firstname": "Antonio",
      "lastname": "Barreca",
      "age": 28,
      "birth": {
      "date": "1995-03-18",
      "place": "Torino",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "183 cm",
      "weight": "70 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/18890.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 23,
      "lineups": 8,
      "minutes": 879,
      "number": null,
      "position": "Defender",
      "rating": "6.460869",
      "captain": false
      },
      "substitutes": {
      "in": 15,
      "out": 6,
      "bench": 27
      },
      "shots": {
      "total": 1,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 359,
      "key": 8,
      "accuracy": 13
      },
      "tackles": {
      "total": 14,
      "blocks": 2,
      "interceptions": 4
      },
      "duels": {
      "total": 68,
      "won": 29
      },
      "dribbles": {
      "attempts": 11,
      "success": 4,
      "past": null
      },
      "fouls": {
      "drawn": 3,
      "committed": 11
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 30545,
      "name": "S. Aresti",
      "firstname": "Simone",
      "lastname": "Aresti",
      "age": 37,
      "birth": {
      "date": "1986-03-15",
      "place": "Carbonia",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "187 cm",
      "weight": "72 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/30545.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-2.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 43
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 3
      }
      }
      ]
      },
      {
      "player": {
      "id": 30824,
      "name": "E. Capradossi",
      "firstname": "Elio",
      "lastname": "Capradossi",
      "age": 27,
      "birth": {
      "date": "1996-03-11",
      "place": "Kampala",
      "country": "Uganda"
      },
      "nationality": "Italy",
      "height": "185 cm",
      "weight": "78 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/30824.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 16,
      "lineups": 13,
      "minutes": 1134,
      "number": null,
      "position": "Defender",
      "rating": "6.881250",
      "captain": false
      },
      "substitutes": {
      "in": 3,
      "out": 4,
      "bench": 12
      },
      "shots": {
      "total": 7,
      "on": 1
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 688,
      "key": 3,
      "accuracy": 40
      },
      "tackles": {
      "total": 25,
      "blocks": 11,
      "interceptions": 20
      },
      "duels": {
      "total": 99,
      "won": 55
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 4,
      "committed": 14
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31073,
      "name": "E. Goldaniga",
      "firstname": "Edoardo",
      "lastname": "Goldaniga",
      "age": 30,
      "birth": {
      "date": "1993-11-02",
      "place": "Milano",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "193 cm",
      "weight": "87 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/31073.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-2.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 22,
      "lineups": 17,
      "minutes": 1577,
      "number": null,
      "position": "Defender",
      "rating": "6.842857",
      "captain": false
      },
      "substitutes": {
      "in": 5,
      "out": 4,
      "bench": 17
      },
      "shots": {
      "total": 7,
      "on": 1
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 859,
      "key": 3,
      "accuracy": 34
      },
      "tackles": {
      "total": 16,
      "blocks": 7,
      "interceptions": 33
      },
      "duels": {
      "total": 125,
      "won": 67
      },
      "dribbles": {
      "attempts": 2,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 15,
      "committed": 18
      },
      "cards": {
      "yellow": 5,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31601,
      "name": "B. Radunović",
      "firstname": "Boris",
      "lastname": "Radunović",
      "age": 27,
      "birth": {
      "date": "1996-05-26",
      "place": "Beograd",
      "country": "Serbia"
      },
      "nationality": "Serbia",
      "height": "194 cm",
      "weight": "84 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/31601.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-3.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 43,
      "lineups": 43,
      "minutes": 3870,
      "number": null,
      "position": "Goalkeeper",
      "rating": "7.083333",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 38,
      "assists": null,
      "saves": 113
      },
      "passes": {
      "total": 976,
      "key": null,
      "accuracy": 16
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": 3
      },
      "duels": {
      "total": 18,
      "won": 16
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 6,
      "committed": 1
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 3
      }
      }
      ]
      },
      {
      "player": {
      "id": 31751,
      "name": "G. Altare",
      "firstname": "Giorgio",
      "lastname": "Altare",
      "age": 25,
      "birth": {
      "date": "1998-08-09",
      "place": "Bergamo",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "188 cm",
      "weight": "75 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/31751.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 30,
      "lineups": 24,
      "minutes": 2224,
      "number": null,
      "position": "Defender",
      "rating": "7.000000",
      "captain": false
      },
      "substitutes": {
      "in": 6,
      "out": 3,
      "bench": 16
      },
      "shots": {
      "total": 16,
      "on": 7
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 1355,
      "key": 12,
      "accuracy": 37
      },
      "tackles": {
      "total": 40,
      "blocks": 16,
      "interceptions": 39
      },
      "duels": {
      "total": 215,
      "won": 126
      },
      "dribbles": {
      "attempts": 2,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 11,
      "committed": 33
      },
      "cards": {
      "yellow": 6,
      "yellowred": 1,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 32034,
      "name": "A. Dossena",
      "firstname": "Alberto",
      "lastname": "Dossena",
      "age": 25,
      "birth": {
      "date": "1998-10-13",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/32034.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 27,
      "lineups": 23,
      "minutes": 1990,
      "number": null,
      "position": "Defender",
      "rating": "7.164000",
      "captain": false
      },
      "substitutes": {
      "in": 4,
      "out": 7,
      "bench": 14
      },
      "shots": {
      "total": 15,
      "on": 8
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 1064,
      "key": 4,
      "accuracy": 36
      },
      "tackles": {
      "total": 37,
      "blocks": 17,
      "interceptions": 30
      },
      "duels": {
      "total": 242,
      "won": 154
      },
      "dribbles": {
      "attempts": 1,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 32,
      "committed": 28
      },
      "cards": {
      "yellow": 8,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 40582,
      "name": "S. Walukiewicz",
      "firstname": "Sebastian Wiktor",
      "lastname": "Walukiewicz",
      "age": 23,
      "birth": {
      "date": "2000-04-05",
      "place": "Gorzów Wielkopolski",
      "country": "Poland"
      },
      "nationality": "Poland",
      "height": "188 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/40582.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-3.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 56207,
      "name": "Paulo Azzi",
      "firstname": "Paulo Daniel",
      "lastname": "Dentello Azzi",
      "age": 29,
      "birth": {
      "date": "1994-07-15",
      "place": "São Paulo",
      "country": "Brazil"
      },
      "nationality": "Brazil",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/56207.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 21,
      "lineups": 17,
      "minutes": 1529,
      "number": null,
      "position": "Defender",
      "rating": "6.805000",
      "captain": false
      },
      "substitutes": {
      "in": 4,
      "out": 8,
      "bench": 6
      },
      "shots": {
      "total": 21,
      "on": 4
      },
      "goals": {
      "total": 2,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 567,
      "key": 6,
      "accuracy": 19
      },
      "tackles": {
      "total": 39,
      "blocks": 4,
      "interceptions": 16
      },
      "duels": {
      "total": 181,
      "won": 93
      },
      "dribbles": {
      "attempts": 61,
      "success": 29,
      "past": null
      },
      "fouls": {
      "drawn": 11,
      "committed": 20
      },
      "cards": {
      "yellow": 4,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 56316,
      "name": "L. Belloni",
      "firstname": "Luca",
      "lastname": "Belloni",
      "age": 19,
      "birth": {
      "date": "2003-05-08",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/56316.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-2.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": null,
      "lineups": null,
      "minutes": null,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": null,
      "out": null,
      "bench": null
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": null,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": null,
      "yellowred": null,
      "red": null
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 135863,
      "name": "G. Ciocci",
      "firstname": "Giuseppe",
      "lastname": "Ciocci",
      "age": 21,
      "birth": {
      "date": "2002-01-24",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/135863.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 14
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 2
      }
      }
      ]
      },
      {
      "player": {
      "id": 286473,
      "name": "F. Carboni",
      "firstname": "Franco Ezequiel",
      "lastname": "Carboni",
      "age": 20,
      "birth": {
      "date": "2003-04-04",
      "place": "Buenos Aires",
      "country": "Argentina"
      },
      "nationality": "Argentina",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/286473.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-3.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 13,
      "lineups": 5,
      "minutes": 458,
      "number": null,
      "position": "Defender",
      "rating": "6.550000",
      "captain": false
      },
      "substitutes": {
      "in": 8,
      "out": 4,
      "bench": 16
      },
      "shots": {
      "total": 2,
      "on": 2
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 211,
      "key": 2,
      "accuracy": 12
      },
      "tackles": {
      "total": 10,
      "blocks": null,
      "interceptions": 2
      },
      "duels": {
      "total": 59,
      "won": 28
      },
      "dribbles": {
      "attempts": 12,
      "success": 5,
      "past": null
      },
      "fouls": {
      "drawn": 2,
      "committed": 9
      },
      "cards": {
      "yellow": 3,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 321744,
      "name": "A. Obert",
      "firstname": "Adam",
      "lastname": "Obert",
      "age": 21,
      "birth": {
      "date": "2002-08-23",
      "place": "Bratislava",
      "country": "Slovakia"
      },
      "nationality": "Slovakia",
      "height": "186 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/321744.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-2.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 33,
      "lineups": 26,
      "minutes": 2311,
      "number": null,
      "position": "Defender",
      "rating": "6.871875",
      "captain": false
      },
      "substitutes": {
      "in": 7,
      "out": 8,
      "bench": 15
      },
      "shots": {
      "total": 12,
      "on": 2
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 1333,
      "key": 21,
      "accuracy": 34
      },
      "tackles": {
      "total": 20,
      "blocks": 14,
      "interceptions": 26
      },
      "duels": {
      "total": 189,
      "won": 106
      },
      "dribbles": {
      "attempts": 18,
      "success": 11,
      "past": null
      },
      "fouls": {
      "drawn": 10,
      "committed": 22
      },
      "cards": {
      "yellow": 2,
      "yellowred": 1,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 330723,
      "name": "E. Fusco",
      "firstname": "Eugenio",
      "lastname": "Fusco",
      "age": 19,
      "birth": {
      "date": "2003-03-19",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/330723.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-3.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": null,
      "lineups": null,
      "minutes": null,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": null,
      "out": null,
      "bench": null
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": null,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": null,
      "yellowred": null,
      "red": null
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 333033,
      "name": "D. Veroli",
      "firstname": "Davide",
      "lastname": "Veroli",
      "age": 20,
      "birth": {
      "date": "2003-01-29",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/333033.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 342050,
      "name": "L. Palomba",
      "firstname": "Luigi",
      "lastname": "Palomba",
      "age": 20,
      "birth": {
      "date": "2003-04-17",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/342050.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-2.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 2
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 342051,
      "name": "F. Zallu",
      "firstname": "Francesco",
      "lastname": "Zallu",
      "age": 20,
      "birth": {
      "date": "2003-04-29",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/342051.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-1.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 342311,
      "name": "V. Iliev",
      "firstname": "Velizar-Iliya",
      "lastname": "Svetozarov Iliev",
      "age": 18,
      "birth": {
      "date": "2005-07-20",
      "place": null,
      "country": "Bulgaria"
      },
      "nationality": "Bulgaria",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/342311.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-2.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      },
      {
      "player": {
      "id": 351324,
      "name": "E. Lolic",
      "firstname": "Eldin",
      "lastname": "Lolic",
      "age": 19,
      "birth": {
      "date": "2004-05-15",
      "place": null,
      "country": "Bosnia and Herzegovina"
      },
      "nationality": "Bosnia and Herzegovina",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/351324.png"
      },
      "statistics": [
      {
      "team": {
      "id": 490,
      "name": "Cagliari",
      "logo": "https://media-3.api-sports.io/football/teams/490.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 14
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      }
      ]
    },
    {
      "get": "players",
      "parameters": {
      "season": "2022",
      "team": "492"
      },
      "errors": [
      ],
      "results": 20,
      "paging": {
      "current": 1,
      "total": 2
      },
      "response": [
      {
      "player": {
      "id": 312,
      "name": "A. Meret",
      "firstname": "Alex",
      "lastname": "Meret",
      "age": 26,
      "birth": {
      "date": "1997-03-22",
      "place": "Udine",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "190 cm",
      "weight": "82 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/312.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 34,
      "lineups": 34,
      "minutes": 3060,
      "number": null,
      "position": "Goalkeeper",
      "rating": "6.954545",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 4
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 23,
      "assists": null,
      "saves": 67
      },
      "passes": {
      "total": 778,
      "key": null,
      "accuracy": 20
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 5,
      "won": 5
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 2
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 10,
      "lineups": 10,
      "minutes": 900,
      "number": null,
      "position": "Goalkeeper",
      "rating": "7.050000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 8,
      "assists": null,
      "saves": 22
      },
      "passes": {
      "total": 267,
      "key": null,
      "accuracy": 23
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 7,
      "won": 7
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 3,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 3
      }
      }
      ]
      },
      {
      "player": {
      "id": 322,
      "name": "Mário Rui",
      "firstname": "Mário Rui",
      "lastname": "Silva Duarte",
      "age": 32,
      "birth": {
      "date": "1991-05-27",
      "place": "Sines",
      "country": "Portugal"
      },
      "nationality": "Portugal",
      "height": "170 cm",
      "weight": "67 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/322.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 22,
      "lineups": 21,
      "minutes": 1762,
      "number": null,
      "position": "Defender",
      "rating": "7.280952",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 13,
      "bench": 9
      },
      "shots": {
      "total": 9,
      "on": 4
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 6,
      "saves": null
      },
      "passes": {
      "total": 1364,
      "key": 46,
      "accuracy": 54
      },
      "tackles": {
      "total": 34,
      "blocks": 4,
      "interceptions": 15
      },
      "duels": {
      "total": 153,
      "won": 81
      },
      "dribbles": {
      "attempts": 10,
      "success": 5,
      "past": null
      },
      "fouls": {
      "drawn": 29,
      "committed": 18
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 1
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 6,
      "lineups": 5,
      "minutes": 388,
      "number": null,
      "position": "Defender",
      "rating": "6.866666",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 3,
      "bench": 5
      },
      "shots": {
      "total": 4,
      "on": 1
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 259,
      "key": 6,
      "accuracy": 35
      },
      "tackles": {
      "total": 6,
      "blocks": 2,
      "interceptions": 7
      },
      "duels": {
      "total": 44,
      "won": 18
      },
      "dribbles": {
      "attempts": 5,
      "success": 3,
      "past": null
      },
      "fouls": {
      "drawn": 5,
      "committed": 7
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 323,
      "name": "K. Zedadka",
      "firstname": "Karim",
      "lastname": "Zedadka",
      "age": 23,
      "birth": {
      "date": "2000-06-09",
      "place": "Pertuis",
      "country": "France"
      },
      "nationality": "France",
      "height": "182 cm",
      "weight": "67 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/323.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 3,
      "lineups": 0,
      "minutes": 18,
      "number": null,
      "position": "Midfielder",
      "rating": "6.700000",
      "captain": false
      },
      "substitutes": {
      "in": 3,
      "out": 0,
      "bench": 31
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 12,
      "key": null,
      "accuracy": 2
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 6,
      "won": 5
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 4,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 325,
      "name": "G. Gaetano",
      "firstname": "Gianluca",
      "lastname": "Gaetano",
      "age": 23,
      "birth": {
      "date": "2000-05-05",
      "place": "Cimitile",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "181 cm",
      "weight": "71 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/325.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 8,
      "lineups": 0,
      "minutes": 68,
      "number": null,
      "position": "Midfielder",
      "rating": "6.550000",
      "captain": false
      },
      "substitutes": {
      "in": 8,
      "out": 0,
      "bench": 33
      },
      "shots": {
      "total": 5,
      "on": 5
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 59,
      "key": 1,
      "accuracy": 6
      },
      "tackles": {
      "total": 5,
      "blocks": null,
      "interceptions": 1
      },
      "duels": {
      "total": 13,
      "won": 6
      },
      "dribbles": {
      "attempts": 2,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 1,
      "committed": 2
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 3,
      "lineups": 0,
      "minutes": 28,
      "number": null,
      "position": "Midfielder",
      "rating": "6.450000",
      "captain": false
      },
      "substitutes": {
      "in": 3,
      "out": 0,
      "bench": 10
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 36,
      "key": null,
      "accuracy": 10
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 5,
      "won": 2
      },
      "dribbles": {
      "attempts": 2,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": 2
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 662,
      "name": "T. Ndombélé",
      "firstname": "Tanguy",
      "lastname": "Ndombélé Alvaro",
      "age": 27,
      "birth": {
      "date": "1996-12-28",
      "place": "Longjumeau",
      "country": "France"
      },
      "nationality": "France",
      "height": "181 cm",
      "weight": "76 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/662.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 30,
      "lineups": 8,
      "minutes": 789,
      "number": null,
      "position": "Midfielder",
      "rating": "6.569230",
      "captain": false
      },
      "substitutes": {
      "in": 22,
      "out": 8,
      "bench": 28
      },
      "shots": {
      "total": 8,
      "on": 2
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 549,
      "key": 9,
      "accuracy": 17
      },
      "tackles": {
      "total": 13,
      "blocks": null,
      "interceptions": 7
      },
      "duels": {
      "total": 111,
      "won": 62
      },
      "dribbles": {
      "attempts": 31,
      "success": 19,
      "past": null
      },
      "fouls": {
      "drawn": 23,
      "committed": 13
      },
      "cards": {
      "yellow": 5,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 9,
      "lineups": 3,
      "minutes": 368,
      "number": null,
      "position": "Midfielder",
      "rating": "7.188888",
      "captain": false
      },
      "substitutes": {
      "in": 6,
      "out": 2,
      "bench": 7
      },
      "shots": {
      "total": 6,
      "on": 3
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 264,
      "key": 9,
      "accuracy": 25
      },
      "tackles": {
      "total": 8,
      "blocks": 1,
      "interceptions": 5
      },
      "duels": {
      "total": 52,
      "won": 35
      },
      "dribbles": {
      "attempts": 15,
      "success": 11,
      "past": null
      },
      "fouls": {
      "drawn": 9,
      "committed": 2
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 774,
      "name": "Juan Jesus",
      "firstname": "Juan Guilherme",
      "lastname": "Nunes Jesus",
      "age": 32,
      "birth": {
      "date": "1991-06-10",
      "place": "Belo Horizonte",
      "country": "Brazil"
      },
      "nationality": "Brazil",
      "height": "185 cm",
      "weight": "83 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/774.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 15,
      "lineups": 10,
      "minutes": 929,
      "number": null,
      "position": "Defender",
      "rating": "6.940000",
      "captain": false
      },
      "substitutes": {
      "in": 5,
      "out": 1,
      "bench": 27
      },
      "shots": {
      "total": 3,
      "on": 1
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 734,
      "key": 2,
      "accuracy": 44
      },
      "tackles": {
      "total": 16,
      "blocks": 11,
      "interceptions": 10
      },
      "duels": {
      "total": 73,
      "won": 51
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 5,
      "committed": 10
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 3,
      "lineups": 2,
      "minutes": 204,
      "number": null,
      "position": "Defender",
      "rating": "6.600000",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 0,
      "bench": 8
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 150,
      "key": null,
      "accuracy": 45
      },
      "tackles": {
      "total": 3,
      "blocks": 5,
      "interceptions": 1
      },
      "duels": {
      "total": 15,
      "won": 4
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": 4
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1151,
      "name": "D. Demme",
      "firstname": "Diego",
      "lastname": "Demme",
      "age": 32,
      "birth": {
      "date": "1991-11-21",
      "place": "Herford",
      "country": "Germany"
      },
      "nationality": "Germany",
      "height": "172 cm",
      "weight": "71 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/1151.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 7,
      "lineups": 2,
      "minutes": 143,
      "number": null,
      "position": "Midfielder",
      "rating": "6.616666",
      "captain": false
      },
      "substitutes": {
      "in": 5,
      "out": 2,
      "bench": 29
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 191,
      "key": 1,
      "accuracy": 25
      },
      "tackles": {
      "total": 1,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 17,
      "won": 8
      },
      "dribbles": {
      "attempts": 3,
      "success": 2,
      "past": null
      },
      "fouls": {
      "drawn": 3,
      "committed": 2
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 1314,
      "name": "A. Rrahmani",
      "firstname": "Amir",
      "lastname": "Rrahmani",
      "age": 29,
      "birth": {
      "date": "1994-02-24",
      "place": "Prishtinë",
      "country": "Kosovo"
      },
      "nationality": "Kosovo",
      "height": "192 cm",
      "weight": "87 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/1314.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 29,
      "lineups": 27,
      "minutes": 2448,
      "number": null,
      "position": "Defender",
      "rating": "7.200000",
      "captain": false
      },
      "substitutes": {
      "in": 2,
      "out": 2,
      "bench": 5
      },
      "shots": {
      "total": 19,
      "on": 3
      },
      "goals": {
      "total": 2,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 2037,
      "key": 12,
      "accuracy": 69
      },
      "tackles": {
      "total": 33,
      "blocks": 20,
      "interceptions": 13
      },
      "duels": {
      "total": 186,
      "won": 113
      },
      "dribbles": {
      "attempts": 6,
      "success": 3,
      "past": null
      },
      "fouls": {
      "drawn": 11,
      "committed": 20
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 7,
      "lineups": 7,
      "minutes": 614,
      "number": null,
      "position": "Defender",
      "rating": "7.100000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 1,
      "bench": 0
      },
      "shots": {
      "total": 2,
      "on": 1
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 489,
      "key": 1,
      "accuracy": 62
      },
      "tackles": {
      "total": 9,
      "blocks": 4,
      "interceptions": 2
      },
      "duels": {
      "total": 56,
      "won": 31
      },
      "dribbles": {
      "attempts": 1,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 2,
      "committed": 7
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 2780,
      "name": "V. Osimhen",
      "firstname": "Victor James",
      "lastname": "Osimhen",
      "age": 25,
      "birth": {
      "date": "1998-12-29",
      "place": "Lagos",
      "country": "Nigeria"
      },
      "nationality": "Nigeria",
      "height": "185 cm",
      "weight": "78 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/2780.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 32,
      "lineups": 30,
      "minutes": 2582,
      "number": null,
      "position": "Attacker",
      "rating": "7.181250",
      "captain": false
      },
      "substitutes": {
      "in": 2,
      "out": 17,
      "bench": 2
      },
      "shots": {
      "total": 105,
      "on": 55
      },
      "goals": {
      "total": 26,
      "conceded": 0,
      "assists": 4,
      "saves": null
      },
      "passes": {
      "total": 372,
      "key": 34,
      "accuracy": 8
      },
      "tackles": {
      "total": 10,
      "blocks": 1,
      "interceptions": 6
      },
      "duels": {
      "total": 317,
      "won": 137
      },
      "dribbles": {
      "attempts": 60,
      "success": 24,
      "past": null
      },
      "fouls": {
      "drawn": 38,
      "committed": 40
      },
      "cards": {
      "yellow": 4,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 2,
      "missed": 1,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 6,
      "lineups": 5,
      "minutes": 423,
      "number": null,
      "position": "Attacker",
      "rating": "7.250000",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 4,
      "bench": 2
      },
      "shots": {
      "total": 14,
      "on": 8
      },
      "goals": {
      "total": 5,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 48,
      "key": 3,
      "accuracy": 5
      },
      "tackles": {
      "total": 5,
      "blocks": null,
      "interceptions": 1
      },
      "duels": {
      "total": 59,
      "won": 36
      },
      "dribbles": {
      "attempts": 10,
      "success": 5,
      "past": null
      },
      "fouls": {
      "drawn": 10,
      "committed": 5
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 1,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 2897,
      "name": "Kim Min-Jae",
      "firstname": "Min-Jae",
      "lastname": "Kim",
      "age": 27,
      "birth": {
      "date": "1996-11-15",
      "place": "Tongyeong",
      "country": "Korea Republic"
      },
      "nationality": "Korea Republic",
      "height": "190 cm",
      "weight": "84 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/2897.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 35,
      "lineups": 35,
      "minutes": 3055,
      "number": null,
      "position": "Defender",
      "rating": "7.214705",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 5,
      "bench": 2
      },
      "shots": {
      "total": 7,
      "on": 4
      },
      "goals": {
      "total": 2,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 2694,
      "key": 9,
      "accuracy": 72
      },
      "tackles": {
      "total": 51,
      "blocks": 26,
      "interceptions": 40
      },
      "duels": {
      "total": 240,
      "won": 144
      },
      "dribbles": {
      "attempts": 5,
      "success": 2,
      "past": null
      },
      "fouls": {
      "drawn": 7,
      "committed": 30
      },
      "cards": {
      "yellow": 5,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 9,
      "lineups": 9,
      "minutes": 786,
      "number": null,
      "position": "Defender",
      "rating": "7.177777",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 1,
      "bench": 0
      },
      "shots": {
      "total": 1,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 611,
      "key": 1,
      "accuracy": 59
      },
      "tackles": {
      "total": 12,
      "blocks": 8,
      "interceptions": 22
      },
      "duels": {
      "total": 68,
      "won": 47
      },
      "dribbles": {
      "attempts": 2,
      "success": 2,
      "past": null
      },
      "fouls": {
      "drawn": 1,
      "committed": 9
      },
      "cards": {
      "yellow": 3,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 3406,
      "name": "A. Zambo Anguissa",
      "firstname": "André-Frank",
      "lastname": "Zambo Anguissa",
      "age": 28,
      "birth": {
      "date": "1995-11-16",
      "place": "Yaoundé",
      "country": "Cameroon"
      },
      "nationality": "Cameroon",
      "height": "184 cm",
      "weight": "78 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/3406.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 36,
      "lineups": 36,
      "minutes": 3062,
      "number": null,
      "position": "Midfielder",
      "rating": "6.994285",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 12,
      "bench": 0
      },
      "shots": {
      "total": 39,
      "on": 15
      },
      "goals": {
      "total": 3,
      "conceded": 0,
      "assists": 5,
      "saves": null
      },
      "passes": {
      "total": 2145,
      "key": 32,
      "accuracy": 54
      },
      "tackles": {
      "total": 52,
      "blocks": 4,
      "interceptions": 47
      },
      "duels": {
      "total": 373,
      "won": 179
      },
      "dribbles": {
      "attempts": 65,
      "success": 33,
      "past": null
      },
      "fouls": {
      "drawn": 47,
      "committed": 43
      },
      "cards": {
      "yellow": 3,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 8,
      "lineups": 8,
      "minutes": 653,
      "number": null,
      "position": "Midfielder",
      "rating": "7.162500",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 2,
      "bench": 1
      },
      "shots": {
      "total": 4,
      "on": 2
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": 3,
      "saves": null
      },
      "passes": {
      "total": 400,
      "key": 10,
      "accuracy": 42
      },
      "tackles": {
      "total": 14,
      "blocks": 1,
      "interceptions": 14
      },
      "duels": {
      "total": 97,
      "won": 52
      },
      "dribbles": {
      "attempts": 21,
      "success": 14,
      "past": null
      },
      "fouls": {
      "drawn": 16,
      "committed": 17
      },
      "cards": {
      "yellow": 1,
      "yellowred": 1,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": "7.162500",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": 4,
      "on": 2
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 3,
      "saves": null
      },
      "passes": {
      "total": 400,
      "key": 10,
      "accuracy": 42
      },
      "tackles": {
      "total": 14,
      "blocks": 1,
      "interceptions": 14
      },
      "duels": {
      "total": 97,
      "won": 52
      },
      "dribbles": {
      "attempts": 21,
      "success": 14,
      "past": null
      },
      "fouls": {
      "drawn": 16,
      "committed": 17
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 30418,
      "name": "P. Gollini",
      "firstname": "Pierluigi",
      "lastname": "Gollini",
      "age": 28,
      "birth": {
      "date": "1995-03-18",
      "place": "Bologna",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "194 cm",
      "weight": "94 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/30418.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 4,
      "lineups": 4,
      "minutes": 360,
      "number": null,
      "position": "Goalkeeper",
      "rating": "6.933333",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 15
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 2,
      "assists": null,
      "saves": 6
      },
      "passes": {
      "total": 109,
      "key": null,
      "accuracy": 26
      },
      "tackles": {
      "total": 1,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 1,
      "won": 1
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 4
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 2
      }
      }
      ]
      },
      {
      "player": {
      "id": 30495,
      "name": "S. Sirigu",
      "firstname": "Salvatore",
      "lastname": "Sirigu",
      "age": 36,
      "birth": {
      "date": "1987-01-12",
      "place": "Nuoro",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "192 cm",
      "weight": "80 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/30495.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": "8.300000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 15
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": 5
      },
      "passes": {
      "total": 29,
      "key": null,
      "accuracy": 19
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-3.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 5
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 1
      }
      }
      ]
      },
      {
      "player": {
      "id": 31042,
      "name": "G. Di Lorenzo",
      "firstname": "Giovanni",
      "lastname": "Di Lorenzo",
      "age": 30,
      "birth": {
      "date": "1993-08-04",
      "place": "Castelnuovo Garfagnana",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "183 cm",
      "weight": "83 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/31042.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 37,
      "lineups": 36,
      "minutes": 3257,
      "number": null,
      "position": "Defender",
      "rating": "7.180555",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 1,
      "bench": 2
      },
      "shots": {
      "total": 22,
      "on": 12
      },
      "goals": {
      "total": 3,
      "conceded": 0,
      "assists": 4,
      "saves": null
      },
      "passes": {
      "total": 2210,
      "key": 45,
      "accuracy": 52
      },
      "tackles": {
      "total": 59,
      "blocks": 8,
      "interceptions": 30
      },
      "duels": {
      "total": 260,
      "won": 143
      },
      "dribbles": {
      "attempts": 28,
      "success": 11,
      "past": null
      },
      "fouls": {
      "drawn": 35,
      "committed": 31
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 10,
      "lineups": 10,
      "minutes": 890,
      "number": null,
      "position": "Defender",
      "rating": "7.390000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 2,
      "bench": 0
      },
      "shots": {
      "total": 12,
      "on": 5
      },
      "goals": {
      "total": 2,
      "conceded": 0,
      "assists": 2,
      "saves": null
      },
      "passes": {
      "total": 502,
      "key": 20,
      "accuracy": 43
      },
      "tackles": {
      "total": 18,
      "blocks": 3,
      "interceptions": 12
      },
      "duels": {
      "total": 94,
      "won": 49
      },
      "dribbles": {
      "attempts": 16,
      "success": 8,
      "past": null
      },
      "fouls": {
      "drawn": 9,
      "committed": 12
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 47254,
      "name": "M. Olivera",
      "firstname": "Mathías",
      "lastname": "Olivera Miramontes",
      "age": 26,
      "birth": {
      "date": "1997-10-31",
      "place": "Montevideo",
      "country": "Uruguay"
      },
      "nationality": "Uruguay",
      "height": "184 cm",
      "weight": "78 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/47254.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 30,
      "lineups": 17,
      "minutes": 1634,
      "number": null,
      "position": "Defender",
      "rating": "6.796296",
      "captain": false
      },
      "substitutes": {
      "in": 13,
      "out": 3,
      "bench": 19
      },
      "shots": {
      "total": 7,
      "on": 4
      },
      "goals": {
      "total": 2,
      "conceded": 0,
      "assists": 2,
      "saves": null
      },
      "passes": {
      "total": 1185,
      "key": 24,
      "accuracy": 36
      },
      "tackles": {
      "total": 39,
      "blocks": 2,
      "interceptions": 22
      },
      "duels": {
      "total": 227,
      "won": 106
      },
      "dribbles": {
      "attempts": 22,
      "success": 9,
      "past": null
      },
      "fouls": {
      "drawn": 25,
      "committed": 21
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 8,
      "lineups": 5,
      "minutes": 512,
      "number": null,
      "position": "Defender",
      "rating": "6.812500",
      "captain": false
      },
      "substitutes": {
      "in": 3,
      "out": 1,
      "bench": 5
      },
      "shots": {
      "total": 4,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 2,
      "saves": null
      },
      "passes": {
      "total": 332,
      "key": 11,
      "accuracy": 34
      },
      "tackles": {
      "total": 16,
      "blocks": null,
      "interceptions": 5
      },
      "duels": {
      "total": 64,
      "won": 33
      },
      "dribbles": {
      "attempts": 2,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 7,
      "committed": 6
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 47439,
      "name": "S. Lobotka",
      "firstname": "Stanislav",
      "lastname": "Lobotka",
      "age": 29,
      "birth": {
      "date": "1994-11-25",
      "place": "Trencin",
      "country": "Slovakia"
      },
      "nationality": "Slovakia",
      "height": "170 cm",
      "weight": "68 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/47439.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 38,
      "lineups": 34,
      "minutes": 3110,
      "number": null,
      "position": "Midfielder",
      "rating": "7.072972",
      "captain": false
      },
      "substitutes": {
      "in": 4,
      "out": 14,
      "bench": 4
      },
      "shots": {
      "total": 7,
      "on": 4
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 2214,
      "key": 17,
      "accuracy": 56
      },
      "tackles": {
      "total": 79,
      "blocks": 7,
      "interceptions": 23
      },
      "duels": {
      "total": 245,
      "won": 160
      },
      "dribbles": {
      "attempts": 23,
      "success": 18,
      "past": null
      },
      "fouls": {
      "drawn": 52,
      "committed": 25
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-3.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 10,
      "lineups": 10,
      "minutes": 876,
      "number": null,
      "position": "Midfielder",
      "rating": "6.940000",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 3,
      "bench": 0
      },
      "shots": {
      "total": 2,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 629,
      "key": 6,
      "accuracy": 58
      },
      "tackles": {
      "total": 21,
      "blocks": 2,
      "interceptions": 5
      },
      "duels": {
      "total": 85,
      "won": 51
      },
      "dribbles": {
      "attempts": 11,
      "success": 6,
      "past": null
      },
      "fouls": {
      "drawn": 24,
      "committed": 8
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 91423,
      "name": "D. Marfella",
      "firstname": "Davide",
      "lastname": "Marfella",
      "age": 24,
      "birth": {
      "date": "1999-09-15",
      "place": "Pozzuoli",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "182 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/91423.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 37
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 2
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 134434,
      "name": "H. Idasiak",
      "firstname": "Hubert Dawid",
      "lastname": "Idasiak",
      "age": 21,
      "birth": {
      "date": "2002-02-03",
      "place": "Sławno",
      "country": "Poland"
      },
      "nationality": "Poland",
      "height": "185 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/134434.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 5
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-1.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-2.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 9
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 3
      }
      }
      ]
      },
      {
      "player": {
      "id": 325142,
      "name": "V. Boffelli",
      "firstname": "Valerio",
      "lastname": "Boffelli",
      "age": 19,
      "birth": {
      "date": "2004-09-04",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "182 cm",
      "weight": null,
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/325142.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": null,
      "lineups": null,
      "minutes": null,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": null,
      "out": null,
      "bench": null
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": null,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": null,
      "yellowred": null,
      "red": null
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      },
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media-1.api-sports.io/football/leagues/2.png",
      "flag": null,
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      },
      {
      "player": {
      "id": 341924,
      "name": "B. Barba",
      "firstname": "Benedetto",
      "lastname": "Barba",
      "age": 19,
      "birth": {
      "date": "2003-01-27",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/341924.png"
      },
      "statistics": [
      {
      "team": {
      "id": 492,
      "name": "Napoli",
      "logo": "https://media-2.api-sports.io/football/teams/492.png"
      },
      "league": {
      "id": 135,
      "name": "Serie A",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/135.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": null,
      "lineups": null,
      "minutes": null,
      "number": null,
      "position": "Attacker",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": null,
      "out": null,
      "bench": null
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": null,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": null,
      "yellowred": null,
      "red": null
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      }
      ]
    },
    {
      "get": "players",
      "parameters": {
      "season": "2022",
      "team": "493"
      },
      "errors": [
      ],
      "results": 20,
      "paging": {
      "current": 1,
      "total": 3
      },
      "response": [
      {
      "player": {
      "id": 30430,
      "name": "M. Varnier",
      "firstname": "Marco",
      "lastname": "Varnier",
      "age": 25,
      "birth": {
      "date": "1998-06-08",
      "place": "Padova",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "186 cm",
      "weight": "82 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/30430.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-1.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 15,
      "lineups": 11,
      "minutes": 856,
      "number": null,
      "position": "Defender",
      "rating": "6.986666",
      "captain": false
      },
      "substitutes": {
      "in": 4,
      "out": 6,
      "bench": 8
      },
      "shots": {
      "total": 6,
      "on": 2
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 562,
      "key": 2,
      "accuracy": 34
      },
      "tackles": {
      "total": 20,
      "blocks": 5,
      "interceptions": 12
      },
      "duels": {
      "total": 85,
      "won": 60
      },
      "dribbles": {
      "attempts": 3,
      "success": 2,
      "past": null
      },
      "fouls": {
      "drawn": 6,
      "committed": 13
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 30658,
      "name": "F. Proia",
      "firstname": "Federico",
      "lastname": "Proia",
      "age": 27,
      "birth": {
      "date": "1996-02-04",
      "place": "Roma",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "185 cm",
      "weight": "80 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/30658.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 12,
      "lineups": 8,
      "minutes": 618,
      "number": null,
      "position": "Midfielder",
      "rating": "6.720000",
      "captain": false
      },
      "substitutes": {
      "in": 4,
      "out": 7,
      "bench": 7
      },
      "shots": {
      "total": 6,
      "on": 4
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 152,
      "key": 9,
      "accuracy": 11
      },
      "tackles": {
      "total": 20,
      "blocks": 1,
      "interceptions": 7
      },
      "duels": {
      "total": 72,
      "won": 33
      },
      "dribbles": {
      "attempts": 8,
      "success": 4,
      "past": null
      },
      "fouls": {
      "drawn": 5,
      "committed": 9
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      },
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 974,
      "name": "Serie C - Supercoppa Lega Finals",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/974.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 30664,
      "name": "M. Finotto",
      "firstname": "Mattia",
      "lastname": "Finotto",
      "age": 31,
      "birth": {
      "date": "1992-12-28",
      "place": "Valdobbiadene",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "186 cm",
      "weight": "72 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/30664.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 14,
      "lineups": 3,
      "minutes": 361,
      "number": null,
      "position": "Attacker",
      "rating": "6.562500",
      "captain": false
      },
      "substitutes": {
      "in": 11,
      "out": 3,
      "bench": 16
      },
      "shots": {
      "total": 12,
      "on": 3
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 115,
      "key": 8,
      "accuracy": 5
      },
      "tackles": {
      "total": 3,
      "blocks": null,
      "interceptions": 1
      },
      "duels": {
      "total": 89,
      "won": 37
      },
      "dribbles": {
      "attempts": 11,
      "success": 4,
      "past": null
      },
      "fouls": {
      "drawn": 17,
      "committed": 14
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 30857,
      "name": "L. Dickmann",
      "firstname": "Lorenzo Maria",
      "lastname": "Dickmann",
      "age": 27,
      "birth": {
      "date": "1996-09-24",
      "place": "Milano",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "177 cm",
      "weight": "70 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/30857.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 36,
      "lineups": 34,
      "minutes": 2917,
      "number": null,
      "position": "Defender",
      "rating": "6.775000",
      "captain": false
      },
      "substitutes": {
      "in": 2,
      "out": 18,
      "bench": 2
      },
      "shots": {
      "total": 19,
      "on": 7
      },
      "goals": {
      "total": 3,
      "conceded": 0,
      "assists": 2,
      "saves": null
      },
      "passes": {
      "total": 1230,
      "key": 39,
      "accuracy": 26
      },
      "tackles": {
      "total": 54,
      "blocks": 6,
      "interceptions": 41
      },
      "duels": {
      "total": 219,
      "won": 107
      },
      "dribbles": {
      "attempts": 30,
      "success": 8,
      "past": null
      },
      "fouls": {
      "drawn": 33,
      "committed": 24
      },
      "cards": {
      "yellow": 7,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 30986,
      "name": "A. Tripaldelli",
      "firstname": "Alessandro",
      "lastname": "Tripaldelli",
      "age": 24,
      "birth": {
      "date": "1999-02-09",
      "place": "Naples",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "182 cm",
      "weight": "77 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/30986.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 22,
      "lineups": 17,
      "minutes": 1515,
      "number": null,
      "position": "Defender",
      "rating": "6.713636",
      "captain": false
      },
      "substitutes": {
      "in": 5,
      "out": 8,
      "bench": 14
      },
      "shots": {
      "total": 3,
      "on": 1
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 2,
      "saves": null
      },
      "passes": {
      "total": 458,
      "key": 13,
      "accuracy": 15
      },
      "tackles": {
      "total": 28,
      "blocks": 5,
      "interceptions": 18
      },
      "duels": {
      "total": 180,
      "won": 92
      },
      "dribbles": {
      "attempts": 43,
      "success": 14,
      "past": null
      },
      "fouls": {
      "drawn": 35,
      "committed": 15
      },
      "cards": {
      "yellow": 6,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31007,
      "name": "Gabriel Brazão",
      "firstname": "Gabriel",
      "lastname": "Nascimento Resende Brazão",
      "age": 23,
      "birth": {
      "date": "2000-10-05",
      "place": "Uberlândia",
      "country": "Brazil"
      },
      "nationality": "Brazil",
      "height": "192 cm",
      "weight": "75 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/31007.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 1,
      "lineups": 0,
      "minutes": 18,
      "number": null,
      "position": "Goalkeeper",
      "rating": "5.700000",
      "captain": false
      },
      "substitutes": {
      "in": 1,
      "out": 0,
      "bench": 6
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 3,
      "assists": null,
      "saves": 1
      },
      "passes": {
      "total": 6,
      "key": null,
      "accuracy": 3
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 1,
      "won": 1
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": 1,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      },
      {
      "player": {
      "id": 31090,
      "name": "F. Viviani",
      "firstname": "Federico",
      "lastname": "Viviani",
      "age": 31,
      "birth": {
      "date": "1992-03-24",
      "place": "Lecco",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "180 cm",
      "weight": "75 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/31090.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 1,
      "lineups": 1,
      "minutes": 69,
      "number": null,
      "position": "Midfielder",
      "rating": "7.014285",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 1,
      "bench": 1
      },
      "shots": {
      "total": 17,
      "on": 7
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 477,
      "key": 11,
      "accuracy": 28
      },
      "tackles": {
      "total": 20,
      "blocks": 1,
      "interceptions": 17
      },
      "duels": {
      "total": 81,
      "won": 48
      },
      "dribbles": {
      "attempts": 8,
      "success": 3,
      "past": null
      },
      "fouls": {
      "drawn": 15,
      "committed": 12
      },
      "cards": {
      "yellow": 1,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31126,
      "name": "E. Alfonso",
      "firstname": "Enrico",
      "lastname": "Alfonso",
      "age": 35,
      "birth": {
      "date": "1988-05-04",
      "place": "Padova",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "191 cm",
      "weight": "85 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/31126.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 35,
      "lineups": 35,
      "minutes": 3056,
      "number": null,
      "position": "Goalkeeper",
      "rating": "6.942857",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 3,
      "bench": 1
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 43,
      "assists": null,
      "saves": 102
      },
      "passes": {
      "total": 919,
      "key": null,
      "accuracy": 20
      },
      "tackles": {
      "total": 2,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": 20,
      "won": 14
      },
      "dribbles": {
      "attempts": 1,
      "success": 1,
      "past": null
      },
      "fouls": {
      "drawn": 8,
      "committed": 2
      },
      "cards": {
      "yellow": 4,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 1
      }
      }
      ]
      },
      {
      "player": {
      "id": 31539,
      "name": "A. Pomini",
      "firstname": "Alberto",
      "lastname": "Pomini",
      "age": 42,
      "birth": {
      "date": "1981-03-17",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "185 cm",
      "weight": "80 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/31539.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 3,
      "lineups": 3,
      "minutes": 270,
      "number": null,
      "position": "Goalkeeper",
      "rating": "6.566666",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 15
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 4,
      "assists": null,
      "saves": 7
      },
      "passes": {
      "total": 101,
      "key": null,
      "accuracy": 24
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": 0
      }
      }
      ]
      },
      {
      "player": {
      "id": 31634,
      "name": "M. Arena",
      "firstname": "Matteo",
      "lastname": "Arena",
      "age": 24,
      "birth": {
      "date": "1999-01-14",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/31634.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-1.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 18,
      "lineups": 14,
      "minutes": 1219,
      "number": null,
      "position": "Defender",
      "rating": "6.738888",
      "captain": false
      },
      "substitutes": {
      "in": 4,
      "out": 4,
      "bench": 14
      },
      "shots": {
      "total": 10,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 776,
      "key": 1,
      "accuracy": 35
      },
      "tackles": {
      "total": 29,
      "blocks": 13,
      "interceptions": 19
      },
      "duels": {
      "total": 155,
      "won": 89
      },
      "dribbles": {
      "attempts": 6,
      "success": 4,
      "past": null
      },
      "fouls": {
      "drawn": 11,
      "committed": 28
      },
      "cards": {
      "yellow": 5,
      "yellowred": 0,
      "red": 1
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31727,
      "name": "B. Meccariello",
      "firstname": "Biagio",
      "lastname": "Meccariello",
      "age": 32,
      "birth": {
      "date": "1991-03-27",
      "place": "Benevento",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "188 cm",
      "weight": "85 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/31727.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-1.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 35,
      "lineups": 35,
      "minutes": 3063,
      "number": null,
      "position": "Defender",
      "rating": "7.157142",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 3,
      "bench": 0
      },
      "shots": {
      "total": 11,
      "on": 5
      },
      "goals": {
      "total": 2,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 2105,
      "key": 9,
      "accuracy": 53
      },
      "tackles": {
      "total": 79,
      "blocks": 23,
      "interceptions": 82
      },
      "duels": {
      "total": 366,
      "won": 234
      },
      "dribbles": {
      "attempts": 14,
      "success": 8,
      "past": null
      },
      "fouls": {
      "drawn": 42,
      "committed": 64
      },
      "cards": {
      "yellow": 10,
      "yellowred": 0,
      "red": 1
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 31737,
      "name": "M. Mancosu",
      "firstname": "Marco",
      "lastname": "Mancosu",
      "age": 35,
      "birth": {
      "date": "1988-08-22",
      "place": "Cagliari",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "180 cm",
      "weight": "75 kg",
      "injured": false,
      "photo": "https://media-3.api-sports.io/football/players/31737.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 1,
      "lineups": 1,
      "minutes": 81,
      "number": null,
      "position": "Midfielder",
      "rating": "7.214814",
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 1,
      "bench": 0
      },
      "shots": {
      "total": 34,
      "on": 14
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 5,
      "saves": null
      },
      "passes": {
      "total": 730,
      "key": 54,
      "accuracy": 20
      },
      "tackles": {
      "total": 21,
      "blocks": null,
      "interceptions": 6
      },
      "duels": {
      "total": 177,
      "won": 78
      },
      "dribbles": {
      "attempts": 33,
      "success": 18,
      "past": null
      },
      "fouls": {
      "drawn": 19,
      "committed": 15
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 1,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 56433,
      "name": "R. Celia",
      "firstname": "Raffaele",
      "lastname": "Celia",
      "age": 24,
      "birth": {
      "date": "1999-03-04",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "180 cm",
      "weight": "70 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/56433.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 28,
      "lineups": 21,
      "minutes": 1819,
      "number": null,
      "position": "Defender",
      "rating": "6.750000",
      "captain": false
      },
      "substitutes": {
      "in": 7,
      "out": 6,
      "bench": 15
      },
      "shots": {
      "total": 13,
      "on": 8
      },
      "goals": {
      "total": 4,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 774,
      "key": 20,
      "accuracy": 23
      },
      "tackles": {
      "total": 35,
      "blocks": 6,
      "interceptions": 22
      },
      "duels": {
      "total": 179,
      "won": 91
      },
      "dribbles": {
      "attempts": 58,
      "success": 23,
      "past": null
      },
      "fouls": {
      "drawn": 25,
      "committed": 16
      },
      "cards": {
      "yellow": 4,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 56643,
      "name": "A. Fiordaliso",
      "firstname": "Alessandro",
      "lastname": "Fiordaliso",
      "age": 24,
      "birth": {
      "date": "1999-03-20",
      "place": "Torino",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "184 cm",
      "weight": "73 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/56643.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 15,
      "lineups": 3,
      "minutes": 450,
      "number": null,
      "position": "Defender",
      "rating": "6.486666",
      "captain": false
      },
      "substitutes": {
      "in": 12,
      "out": 2,
      "bench": 31
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 261,
      "key": 3,
      "accuracy": 14
      },
      "tackles": {
      "total": 8,
      "blocks": 1,
      "interceptions": 4
      },
      "duels": {
      "total": 48,
      "won": 23
      },
      "dribbles": {
      "attempts": 3,
      "success": 2,
      "past": null
      },
      "fouls": {
      "drawn": 3,
      "committed": 5
      },
      "cards": {
      "yellow": 2,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 196843,
      "name": "C. Dalle Mura",
      "firstname": "Christian",
      "lastname": "Dalle Mura",
      "age": 21,
      "birth": {
      "date": "2002-02-02",
      "place": "Pietrasanta",
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": "185 cm",
      "weight": "70 kg",
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/196843.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-1.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-1.api-sports.io/football/leagues/136.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 27,
      "lineups": 19,
      "minutes": 1827,
      "number": null,
      "position": "Defender",
      "rating": "6.885185",
      "captain": false
      },
      "substitutes": {
      "in": 8,
      "out": 9,
      "bench": 16
      },
      "shots": {
      "total": 5,
      "on": 3
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": 1,
      "saves": null
      },
      "passes": {
      "total": 1242,
      "key": 11,
      "accuracy": 39
      },
      "tackles": {
      "total": 29,
      "blocks": 14,
      "interceptions": 42
      },
      "duels": {
      "total": 123,
      "won": 64
      },
      "dribbles": {
      "attempts": 3,
      "success": 2,
      "past": null
      },
      "fouls": {
      "drawn": 4,
      "committed": 16
      },
      "cards": {
      "yellow": 7,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 282031,
      "name": "A. Boccia",
      "firstname": "Alessandro",
      "lastname": "Boccia",
      "age": 19,
      "birth": {
      "date": "2004-06-30",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/282031.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-1.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      },
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 137,
      "name": "Coppa Italia",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/137.png",
      "flag": "https://media-1.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Midfielder",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 310576,
      "name": "P. Peda",
      "firstname": "Patryk",
      "lastname": "Peda",
      "age": 21,
      "birth": {
      "date": "2002-04-16",
      "place": null,
      "country": "Poland"
      },
      "nationality": "Poland",
      "height": "190 cm",
      "weight": "76 kg",
      "injured": false,
      "photo": "https://media-1.api-sports.io/football/players/310576.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 21,
      "lineups": 16,
      "minutes": 1439,
      "number": null,
      "position": "Defender",
      "rating": "6.842857",
      "captain": false
      },
      "substitutes": {
      "in": 5,
      "out": 4,
      "bench": 20
      },
      "shots": {
      "total": 6,
      "on": 3
      },
      "goals": {
      "total": 1,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": 1014,
      "key": 2,
      "accuracy": 40
      },
      "tackles": {
      "total": 35,
      "blocks": 15,
      "interceptions": 36
      },
      "duels": {
      "total": 152,
      "won": 88
      },
      "dribbles": {
      "attempts": 12,
      "success": 8,
      "past": null
      },
      "fouls": {
      "drawn": 14,
      "committed": 20
      },
      "cards": {
      "yellow": 3,
      "yellowred": 1,
      "red": 1
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 343560,
      "name": "F. Saiani",
      "firstname": "Filippo",
      "lastname": "Saiani",
      "age": 18,
      "birth": {
      "date": "2005-02-16",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/343560.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-1.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Defender",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 2
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": 0,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": 0,
      "missed": 0,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 350102,
      "name": "L. Martelli",
      "firstname": "Luca",
      "lastname": "Martelli",
      "age": 18,
      "birth": {
      "date": "2005-04-25",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/350102.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-3.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-3.api-sports.io/football/leagues/136.png",
      "flag": "https://media-3.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      },
      {
      "player": {
      "id": 359819,
      "name": "L. Abati",
      "firstname": "Lorenzo",
      "lastname": "Abati",
      "age": 19,
      "birth": {
      "date": "2004-04-07",
      "place": null,
      "country": "Italy"
      },
      "nationality": "Italy",
      "height": null,
      "weight": null,
      "injured": false,
      "photo": "https://media-2.api-sports.io/football/players/359819.png"
      },
      "statistics": [
      {
      "team": {
      "id": 493,
      "name": "Spal",
      "logo": "https://media-2.api-sports.io/football/teams/493.png"
      },
      "league": {
      "id": 136,
      "name": "Serie B",
      "country": "Italy",
      "logo": "https://media-2.api-sports.io/football/leagues/136.png",
      "flag": "https://media-2.api-sports.io/flags/it.svg",
      "season": 2022
      },
      "games": {
      "appearences": 0,
      "lineups": 0,
      "minutes": 0,
      "number": null,
      "position": "Goalkeeper",
      "rating": null,
      "captain": false
      },
      "substitutes": {
      "in": 0,
      "out": 0,
      "bench": 0
      },
      "shots": {
      "total": null,
      "on": null
      },
      "goals": {
      "total": 0,
      "conceded": null,
      "assists": null,
      "saves": null
      },
      "passes": {
      "total": null,
      "key": null,
      "accuracy": null
      },
      "tackles": {
      "total": null,
      "blocks": null,
      "interceptions": null
      },
      "duels": {
      "total": null,
      "won": null
      },
      "dribbles": {
      "attempts": null,
      "success": null,
      "past": null
      },
      "fouls": {
      "drawn": null,
      "committed": null
      },
      "cards": {
      "yellow": 0,
      "yellowred": 0,
      "red": 0
      },
      "penalty": {
      "won": null,
      "commited": null,
      "scored": null,
      "missed": null,
      "saved": null
      }
      }
      ]
      }
      ]
    }

    ]

}

