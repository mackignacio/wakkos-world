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

const question = {
  input: (actionId: string, text: string, label: string) => {
    return {
      type: "input",
      element: {
        type: "plain_text_input",
        action_id: actionId,
        placeholder: {
          type: "plain_text",
          text,
        },
      },
      label: {
        type: "plain_text",
        text: label,
        emoji: true,
      },
    };
  },
  actions: (action: string, text: string) => {
    return {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: text,
            emoji: true,
          },
          value: action,
          action_id: action,
        },
      ],
    };
  },
};

export { country, question };
