
// const answer = window.prompt("Who's that Pokemon?")

// input: User Guess 

// output: correct/incorrect, how many guesses they have left, give a hint?

// data: array of objs containing pokemons, var for amount of guesses, if/else to match answer

let pokemonList = [
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

const background = document.querySelector('#app')
console.log(background);