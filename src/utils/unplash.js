import Unsplash, { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "YdwyPcttzIAetr16_G3AZ-mHAITgrQeO8T0ODhytZGQ",
});


export function requestMore(text,color,actualPage) {

    const a = unsplash.search
    .photos(text, actualPage+1, 10,{ orientation: "portrait", color: color })
    .then(toJson)
    .catch((err)=> alert("Error, limite de peticiones alcanzado"))
    return a;
}

export function request(text,color,actualPage) {

    const a =  unsplash.search
    .photos(text, 1, 10,{ orientation: "portrait", color: color })
    .then(toJson)
    .catch((err)=> alert("Error, limite de peticiones alcanzado"))
    return a;
}