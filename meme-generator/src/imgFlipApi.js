const API = "https://api.imgflip.com";
const memeQuery = "/get_memes";

export default async function getMeme(){
    const response = await fetch(API + memeQuery)
    .then(resp => {
        // console.log(resp);
        // resp.json();
        console.log(resp.json());
    }).then(data => {
        console.log(data);
        return data;
    })
}

// help i got ↓
export default async function getMeme(){
    try {
        const response = await fetch(API + memeQuery);
        const data = await response.json(); // Await the JSON parsing
        console.log(data); // Log the parsed data
        return data; // Return the data
    } catch (error) {
        console.error("Error fetching memes:", error);
    }
}