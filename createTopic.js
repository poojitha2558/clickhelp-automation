const axios = require("axios");

async function getArticles() {
  try {
    const response = await axios.get(
      "https://poojithadigital25.try.clickhelp.co/api/v1/projects/project-sample-project/articles",
      {
        auth: {
          username: process.env.CLICKHELP_USERNAME,
          password: process.env.CLICKHELP_API_KEY,
        },
      }
    );

    console.log(
      JSON.stringify(response.data, null, 2)
    );
  } catch (error) {
    console.error(
      "ERROR:",
      error.response?.data || error.message
    );

    process.exit(1);
  }
}

getArticles();