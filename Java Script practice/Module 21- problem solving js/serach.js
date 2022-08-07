const lyrics = "Tumi bondho kala pakhi, ami jeno ki. sada"

const searchString = "pakhi"

// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
const doesExist = lyrics.includes(searchString);


console.log(doesExist);
console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("kalaaa"));

if (lyrics.indexOf('sada') !== -1)
{
    console.log("sada is included in the text");
}

else
{
    console.log("sada is not included in the text");
}


// Satr with and end with

console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.endsWith ('sada'));
console.log(lyrics.endsWith ('kala'));