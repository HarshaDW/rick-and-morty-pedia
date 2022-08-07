export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  created: string;
  episode: string[];
  image: string;
  location: ILocation;
  origin: IOrigin;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

interface IOrigin {
  name: string;
  url: string;
}
