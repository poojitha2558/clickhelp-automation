const axios = require("axios");

async function testEndpoint() {
  try {
    const username =
      process.env.CLICKHELP_USERNAME;

    const apiKey =
      process.env.CLICKHELP_API_KEY;

    const authToken = Buffer.from(
      `${username}:${apiKey}`
    ).toString("base64");

    const response = await axios.options(
      "https://poojithadigital25.try.clickhelp.co/api/v1/projects/project-sample-project/articles",
      {
        headers: {
          Authorization:
            `Basic ${authToken}`,
        },
      }
    );

    console.log(response.headers);
  } catch (error) {
    console.error(
      error.response?.data ||
      error.message
    );

    process.exit(1);
  }
}

testEndpoint();//testfreeesxddesj