import { ACTIONS } from "./constants";
import { question } from "./blocks";

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
      { type: "divider" },
      question.input(
        ACTIONS.COUNTRY,
        "Enter country name",
        "What is the country of?"
      ),
      question.actions(ACTIONS.COUNTRY, "Ask me"),
      { type: "divider" },
      question.input(
        ACTIONS.CAPITAL,
        "Enter country's capital",
        "What country has the capital of?"
      ),
      question.actions(ACTIONS.CAPITAL, "Ask me"),
      { type: "divider" },
      question.input(
        ACTIONS.CONTINENT,
        "Enter continent name",
        "What are the countries in the continent of?"
      ),
      question.actions(ACTIONS.CONTINENT, "Ask me"),
    ],
  });
};
