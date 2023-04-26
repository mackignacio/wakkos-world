import dotenv from "dotenv";
dotenv.config();

import { App } from "@slack/bolt";
import { ACTIONS } from "./constants";
import { initial } from "./message";
import actions from "./actions";

const port = Number(process.env.PORT ?? 3000);

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  port,
});

// Listen to Slack Actions
app.action(ACTIONS.COUNTRY, actions.country);
app.action(ACTIONS.CAPITAL, actions.capital);
app.action(ACTIONS.CONTINENT, actions.continent);
app.action(ACTIONS.INFO, actions.info);

// Listen to Slack Messages
app.message("", initial);

(async () => {
  try {
    // Start the app
    await app.start();
    console.log(`⚡️ Wakko's World App is running on port ${port}!`);
  } catch (error) {
    console.log(error);
  }
})();
