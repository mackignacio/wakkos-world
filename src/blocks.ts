import { ICountry } from "./interfaces";

const country = (country: ICountry) => {
  const { name, flags, wiki, capital, population, region, subregion } = country;

  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${name.official}*\n ${flags.alt}\n<${
        wiki.country
      }|Read more..>\n *Population* : ${population.toLocaleString(
        "en-US"
      )} \n *Capital* : <${wiki.capital}|${capital[0]}> \n *Continent* : <${
        wiki.region
      }|${region}> \n *Sub-Continent* : <${wiki.subregion}|${subregion}>`,
    },
    accessory: {
      type: "image",
      image_url: flags.png,
      alt_text: flags.alt,
    },
  };
};

export { country };
