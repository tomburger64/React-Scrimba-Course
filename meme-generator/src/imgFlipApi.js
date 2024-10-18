const API = "https://api.imgflip.com";
const memeQuery = "/get_memes";

export default async function getMeme(){
    const response = await fetch(API + memeQuery)
    .then(resp => {
        console.log(resp)
        console.log(resp.json())
    });
}