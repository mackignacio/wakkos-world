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
          action_id: ACTIONS.COUNTRY,
          placeholder: {
            type: "plain_text",
            text: "Enter country name",
          },
        },
        label: {
          type: "plain_text",
          text: "What is the country of?",
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
          action_id: ACTIONS.CAPITAL,
          placeholder: {
            type: "plain_text",
            text: "Enter country's capital",
          },
        },
        label: {
          type: "plain_text",
          text: "What country has the capital of?",
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
          action_id: ACTIONS.CONTINENT,
          placeholder: {
            type: "plain_text",
            text: "Enter continent name",
          },
        },
        label: {
          type: "plain_text",
          text: "What are the countries in the continent of?",
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
