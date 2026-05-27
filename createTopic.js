const axios = require("axios");

async function createTopic() {
  try {
    const prTitle = process.env.PR_TITLE;
    const prAuthor = process.env.PR_AUTHOR;
    const prUrl = process.env.PR_URL;

    const response = await axios.post(
      "https://poojithadigital25.try.clickhelp.co/api/v1/projects/project-sample-project/articles",
      {
        title: `PR: ${prTitle}`,
        body: `
          <h1>Pull Request Created</h1>

          <p>
            <strong>Author:</strong>
            ${prAuthor}
          </p>

          <p>
            <strong>PR URL:</strong>
            <a href="${prUrl}">
              ${prUrl}
            </a>
          </p>
        `,
      },
      {
        auth: {
          username: process.env.CLICKHELP_USERNAME,
          password: process.env.CLICKHELP_API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Topic created successfully");
    console.log(response.data);

  } catch (error) {
    console.error(
      "ERROR:",
      error.response?.data || error.message
    );

    process.exit(1);
  }
}

createTopic();