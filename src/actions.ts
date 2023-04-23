const country = async ({ ack, say }: any) => {
  await ack();
  await say("Request country approved 👍");
};

const capital = async ({ ack, say }: any) => {
  await ack();
  await say("Request capital approved 👍");
};

const continent = async ({ ack, say }: any) => {
  await ack();
  await say("Request continent approved 👍");
};

export default {
  country,
  capital,
  continent,
};
