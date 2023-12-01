
// const answer = window.prompt("Who's that Pokemon?")

// input: User Guess 

// output: correct/incorrect, how many guesses they have left, give a hint?

// data: array of objs containing pokemons, var for amount of guesses, if/else to match answer

const pokemonList = [
    {
        name: 'Pikachu',
        imgSrc: 'https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg'
    },
    {
        name: 'Togepi',
        imgSrc: 'https://facts.net/wp-content/uploads/2023/07/16-facts-about-togepi-1689384445.jpg'
    },
    {
        name: 'Electrode',
        imgSrc: 'https://www.pcinvasion.com/wp-content/uploads/2023/01/pokemon-scarlet-violet-evolve-voltorb-into-electrode-result.jpg?fit=1200%2C675',
    }
]
// store index of random answer
const index = getRandomIndex(pokemonList);

//store answer
const answer = pokemonList[index].name;

// creating image in the div and push to html
const divApp = document.querySelector('#app')
displayRandomImg(divApp, pokemonList, index);
const img = document.querySelector("img");

// amount of tries a user has left
let guessesLeft = 5;

// store user's guess
let userGuess = window.prompt(`Who's that Pokemon? You have ${guessesLeft} tries left.`);

// while(guessesLeft !== 0){
//     if (checkAnswer (userGuess, answer)){
//         window.alert("Correct");
//         break;
//     }
//     guessesLeft --;
//     userGuess = window.prompt(`Who's in the Pokeball? You have ${guessesLeft} tries left.`);
// }

// display random image 
function displayRandomImg (element, arr, index){
    
    const img = document.createElement("img");

    img.setAttribute("src", arr[index].imgSrc);
// need append child inorder to display in the html
    element.appendChild(img);
}

// get random index from array
function getRandomIndex(arr){
    return Math.floor(Math.random() * arr.length)
}

// check if user is correct 
function checkAnswer (userGuess, answer){
    if(userGuess.toLowerCase() === answer){
        return window.alert('Correct!');
    } else {
        return window.alert("Wrong!");
    }
}