// Partial Application

const fetch = require("node-fetch")

const getFromApi = baseURl => endpoint => cb =>
  fetch(`${baseURl}${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => {
      console.log(err)
    })

const getGitHub = getFromApi('https://api.github.com')

const getGitHubUsers = getGitHub('/users')
const getGitHubRepos = getGitHub('/repositories')

getGitHubUsers(data => {
  console.log(data.map(user => user.login))
})

getGitHubUsers(data => {
  console.log(data.map(user => user.avatar_url))
})