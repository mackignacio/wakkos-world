import axios from "axios";
import { URL_REST_COUNTRIES, URL_WIKIPEDIA } from "./constants";
import { AxiosResponse, ICountry } from "./interfaces";

const buildCountryInfo = async (country: ICountry) => {
  const [countryURL, capitalURL, regionURL, subRegionURL] = await Promise.all([
    axios.get(`${URL_WIKIPEDIA}${country.name.official}`),
    axios.get(`${URL_WIKIPEDIA}${country.capital[0]}`),
    axios.get(`${URL_WIKIPEDIA}${country.region}`),
    axios.get(`${URL_WIKIPEDIA}${country.subregion}`),
  ]);

  const countryLinks = countryURL.data[3];
  const capitalLinks = capitalURL.data[3];
  const regionLinks = regionURL.data[3];
  const subRegionLinks = subRegionURL.data[3];

  country["wiki"] = {
    country: countryLinks[0],
    capital: capitalLinks[0],
    region: regionLinks[0],
    subregion: subRegionLinks[0],
  };

  return country;
};

const getCountry = async (
  name: string
): Promise<AxiosResponse<ICountry | null, { message: string }>> => {
  try {
    const response = await axios.get(`${URL_REST_COUNTRIES}/name/${name}`);

    if (!response?.data[0]) throw new Error("Country not found");

    return {
      status: "success",
      data: await buildCountryInfo(response.data[0] as ICountry),
    };
  } catch (error: any) {
    return { status: "error", data: null, error: error?.message ?? "" };
  }
};

const getByCapital = async (name: string) => {
  try {
    const response = await axios.get(`${URL_REST_COUNTRIES}/capital/${name}`);

    if (!response?.data[0]) throw new Error("Capital not found");

    return {
      status: "success",
      data: await buildCountryInfo(response.data[0] as ICountry),
    };
  } catch (error: any) {
    return { status: "error", data: null, error: error?.message ?? "" };
  }
};

const getByContinent = async (name: string) => {
  try {
    const response = await axios.get(`${URL_REST_COUNTRIES}/region/${name}`);

    if (!response?.data[0]) throw new Error("Continent not found");

    const promises = response?.data.map((country: ICountry) => ({
      type: "section",
      text: {
        type: "mrkdwn",
        text: country.name.common,
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "See info",
          emoji: true,
        },
        value: country.name.common,
        action_id: "country_info",
      },
    }));

    return { status: "success", data: await Promise.all(promises) };
  } catch (error: any) {
    return { status: "error", data: null, error: error?.message ?? "" };
  }
};

export { getCountry, getByCapital, getByContinent };
