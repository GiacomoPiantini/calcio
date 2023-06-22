export interface Team {
  id: number
  name: string
  country: string
  founded: any
  national: boolean
  logo: string
  code: any
}

export interface Venue{
  id: number,
  name: string,
  address: string,
  city: string,
  capacity: number,
  surface: string,
  image: string,
}

export interface Responce{
  team: Team;
  venue: any;
}
