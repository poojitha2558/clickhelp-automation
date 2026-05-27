const axios = require("axios");

async function createTopic() {
  try {
    const username =
      process.env.CLICKHELP_USERNAME;

    const apiKey =
      process.env.CLICKHELP_API_KEY;

    const authToken = Buffer.from(
      `${username}:${apiKey}`
    ).toString("base64");

    const prTitle =
      process.env.PR_TITLE || "Test PR";

    const prAuthor =
      process.env.PR_AUTHOR || "Unknown";

    const prUrl =
      process.env.PR_URL || "No URL";

    const response = await axios.post(
      "https://poojithadigital25.try.clickhelp.co/api/v1/articles",
      {
        id: "api-docs-example",

        projectId:
          "project-sample-project",

        title: `PR: ${prTitle}`,

        body: `
          <h1>Pull Request Created</h1>

          <p>
            <strong>Author:</strong>
            ${prAuthor}
          </p>

          <p>
            <strong>PR Link:</strong>
            <a href="${prUrl}">
              ${prUrl}
            </a>
          </p>
        `,
      },
      {
        headers: {
          Authorization:
            `Basic ${authToken}`,

          "Content-Type":
            "application/json",
        },
      }
    );

    console.log("SUCCESS");
    console.log(response.data);

  } catch (error) {
    console.error(
      "ERROR:",
      JSON.stringify(
        error.response?.data,
        null,
        2
      ) || error.message
    );

    process.exit(1);
  }
}

createTopic();//testmatch