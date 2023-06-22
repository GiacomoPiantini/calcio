export interface Team {
  id: number
  name: string
  country: string
  founded: any
  national: boolean
  logo: string
  code: any
}


export interface Responce{
  team: Team;
  venue: any;
}


export interface Responce2{
  player: any;
  statistics: any;
}
