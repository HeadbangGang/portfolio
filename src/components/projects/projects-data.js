/* eslint-disable max-len */
const pokedexSample = require('../../media/pokedex.png')
const dndSample = require('../../media/dnd.png')

const data = [
  {
    description: 'Pokédex is a web app utilizing the public open PokéApi. It generates all Pokémon currently released by The Pokémon Company and offers each Pokémon dedicated page that displays which games it was included in as well as an image of what it looked like in the respective version.',
    img: pokedexSample,
    name: 'Pokédex',
    title: 'Tayden Flitcroft // Pokédex',
    url: 'https://www.pokedex.taydenflitcroft.com'
  },
  {
    description: 'Dungeons and Dragons is a web app created too be used in my friends and my weekly Dungeons and Dragons session. It includes a random number generator that accentuates when a 1 or a 20 (the worst and best roll possible on a 20 sided die), as well as a real time data sheet to track each players initiative value (or turn order). This application utilized Googles Firestore database to maintain all user account data as well as each game instance\'s data. The apps main functionality is hidden behind user authentication, as it requires a user to create a game instance and share the game id with others. However, the Dice Roller is visible without authentication.',
    img: dndSample,
    name: 'Dungeons and Dragons',
    title: 'Tayden Flitcroft // Dungeons and Dragons',
    url: 'https://www.dnd.taydenflitcroft.com'
  },
  {
    description: 'fdafds',
    name: 'Global Backend',
    title: 'Tayden Flitcroft // Global Backend',
    url: 'https://desolate-basin-78066.herokuapp.com'
  }
]
module.exports = data
