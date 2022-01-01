const fs = require("fs")

const jokes = {}

jokes.allJokes = () => {
  const fileContents = fs.readFileSync(__dirname + "/jokes.txt", "utf8")
  const arrayOfJokes = fileContents.split(/\r?\n/)

  return arrayOfJokes
}

module.exports = jokes
