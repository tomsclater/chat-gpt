const { Configuration, OpenAIApi } = require("openai");
// process.env.sk-
const configuration = new Configuration({
    organization: "org-eFtXbJ0UCXeyJXlmM60fCkvK",
    apiKey: "",
    // Fill in the above apiKey with your own API Key from OpenAPI
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model:  "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
   console.log(response.data.choices[0].text)
}
callApi()