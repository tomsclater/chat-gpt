const { Configuration, OpenAIApi } = require("openai");
// process.env.sk-
const express = require('express')
// body parser
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-eFtXbJ0UCXeyJXlmM60fCkvK",
    apiKey: "",
    // Fill in the above apiKey with your own API Key from OpenAPI
});
const openai = new OpenAIApi(configuration);




const app = express()
app.use(bodyParser.json())
app.use(cors())
// cors
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message)
    // const response = await openai.createCompletion({
    //     model:  "text-davinci-003",
    //     prompt: "Say this is a test",
    //     max_tokens: 7,
    //     temperature: 0,
    // });
//    console.log(response.data.choices[0].text)
   res.json({
    // data: response.data
    data: message,
   })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});