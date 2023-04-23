import { ACTIONS } from "./constants";

export const initial = async ({ message, say }: any) => {
  await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `:wave:  Hello, <@${message.user}>. This is your *#1* assistant Wakko Warner. You can ask me anything you want to know about the countries of the world!!! \n\n *Please select a question:*`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "country_name",
          placeholder: {
            type: "plain_text",
            text: "Enter country name",
          },
        },
        label: {
          type: "plain_text",
          text: "Do you want to know a country?",
          emoji: true,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Ask me",
              emoji: true,
            },
            value: ACTIONS.COUNTRY,
            action_id: ACTIONS.COUNTRY,
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "country_name",
          placeholder: {
            type: "plain_text",
            text: "Enter country name",
          },
        },
        label: {
          type: "plain_text",
          text: "Do want to know the capital of a country?",
          emoji: true,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Ask me",
              emoji: true,
            },
            value: ACTIONS.CAPITAL,
            action_id: ACTIONS.CAPITAL,
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "continent",
          placeholder: {
            type: "plain_text",
            text: "Enter country name",
          },
        },
        label: {
          type: "plain_text",
          text: "Do want to know the continent of a country?",
          emoji: true,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Ask me",
              emoji: true,
            },
            value: ACTIONS.CONTINENT,
            action_id: ACTIONS.CONTINENT,
          },
        ],
      },
    ],
  });
};
