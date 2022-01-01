const jokes = require("./jokes")
const mathLib = require("./mathLib/math")

const app = {}

app.config = {
  timeBetweenJokes: 5000,
}

app.printAJoke = () => {
  const allJokes = jokes.allJokes()
  const numberOfJokes = allJokes.length

  const randomNumber = mathLib.getRandomNumber(1, numberOfJokes)

  const selectedJoke = allJokes[randomNumber - 1]

  console.log(selectedJoke)
}

app.indefiniteLoop = () => {
  setInterval(app.printAJoke, app.config.timeBetweenJokes)
}

app.indefiniteLoop()
