const API = "https://api.imgflip.com";
const memeQuery = "/get_memes";

export default async function getMeme(){
    const response = await fetch(API + memeQuery);

    if (response.status === 404){
        console.error("Couldn't fetch the API URL, 404");
    }
    else{
        let data = await response.json();
        console.log(response)
        console.log(data)

        // gets all the urls
        let meme = data.data.memes.map(item => item.url)
        console.log(meme)*

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    }
};