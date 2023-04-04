const env = require("./env");
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  organization: "org-Hvw961X78xFmaINCI4rR5eot",
  apiKey: env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const models = async() => {
    const response = await openai.listModels();
    return response;
}
//: Promise<string>
const askOpenAI = async() => {


    //abandon,ability,able,abortion,about,above,abroad,absence,absolute
    //absolutely,absorb,abuse,academic,accept,access,accident,accompany,accomplish,according,account,accurate,accuse,achieve,achievement,acid,acknowledge,acquire,across,act,action,active,activist,activity,actor,actress,actual,actually,ad,adapt,add,addition,additional,address,adequate,adjust,adjustment,administration,administrator,admire,admission,admit,adolescent,adopt,adult,advance,advanced,advantage,adventure,advertising,advice,advise,adviser,advocate,affair,affect,afford,afraid,African,after,afternoon,again,against,age,agency,agenda,agent,aggressive,ago,agree,agreement,agricultural,ah,ahead,aid,aide,aim,air,aircraft,airline,airport,album,alcohol,alive,all,alliance,allow,ally,almost,alone,along,already,also,alter,alternative,although,always,amazing
    //classify these words on a level from 1 to 30 where 1 is a very commonly used word and 30 is a rarely used word in English \n\n absolutely,absorb,abuse,academic,accept,access,accident,accompany,accomplish,according
    //
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Could you generate the 10 most frequent sentences where these words are used and combine them with different tenses and different forms such as affirmative, negative and interrogative?  absolutely,absorb,abuse,academic,accept,access,accident,accompany,accomplish,according",
    temperature: 0,
    max_tokens: 140,
    top_p: 1,
    frequency_penalty: 1.0,
    presence_penalty: 1.0,
    });

    return response

}


/*
models().then(response => {
    //console.log(response.statusText);
    console.log(response.data)
});
*/


askOpenAI().then(response => { 

    let count = 1;
    console.log(response.status);
    console.log('----------');
    console.log(response.data)
    /*
    console.log(response.status)
    console.log('----------')
    console.log(response.data)
    console.log('----------')
    console.log(response.then)
    console.log('----------')
    */
    //console.log(response.text);
    
    
});
