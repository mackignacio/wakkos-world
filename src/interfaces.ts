export interface AxiosResponse<Data, Error> {
  status: "success" | "error";
  data: Data;
  error?: Error;
}

export interface ICountry {
  wiki: {
    country: string;
    capital: string;
    region: string;
    subregion: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [x: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    eng: string;
    fil: string;
  };
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  population: number;
}
