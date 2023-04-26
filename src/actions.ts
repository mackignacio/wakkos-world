import { getByCapital, getByContinent, getCountry } from "./axios";
import { ICountry } from "./interfaces";
import * as blocks from "./blocks";

const countryInfo = async (name: string) => {
  const response = await getCountry(name);

  if (response.status === "error") {
    return "Country has not found!";
  }

  if (response.status === "success") {
    return { blocks: [blocks.country(response.data as ICountry)] };
  }
};

const country = async ({ ack, body, view, client, logger, say }: any) => {
  await ack();
  const keys = Object.keys(body.state.values);
  const input = body.state.values[keys[0]].country;
  await say(countryInfo(input.value));
};

const capital = async ({ ack, body, view, client, logger, say }: any) => {
  await ack();
  const keys = Object.keys(body.state.values);
  const input = body.state.values[keys[1]].capital;
  const response = await getByCapital(input.value);

  if (response.status === "error") {
    await say("Country has not found!");
  }

  if (response.status === "success") {
    await say({ blocks: [blocks.country(response.data as ICountry)] });
  }
};

const continent = async ({ ack, body, view, client, logger, say }: any) => {
  await ack();

  const keys = Object.keys(body.state.values);
  const input = body.state.values[keys[2]].continent;
  const response = await getByContinent(input.value);

  if (response.status === "error") {
    await say("Country has not found!");
  }

  if (response.status === "success") {
    await say({ blocks: response.data });
  }
};

const info = async ({ ack, body, view, client, logger, say }: any) => {
  await ack();
  const input = body.actions[0];
  await say(countryInfo(input.value));
};

export default {
  country,
  capital,
  continent,
  info,
};
