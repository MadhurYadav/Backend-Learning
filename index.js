require('dotenv').config() // for production
const express = require('express')
// import express from "express"
const app = express()
const port = 3000

const githubData = 
{
    "login": "MadhurYadav",
    "id": 94036633,
    "node_id": "U_kgDOBZrimQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/94036633?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MadhurYadav",
    "html_url": "https://github.com/MadhurYadav",
    "followers_url": "https://api.github.com/users/MadhurYadav/followers",
    "following_url": "https://api.github.com/users/MadhurYadav/following{/other_user}",
    "gists_url": "https://api.github.com/users/MadhurYadav/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MadhurYadav/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MadhurYadav/subscriptions",
    "organizations_url": "https://api.github.com/users/MadhurYadav/orgs",
    "repos_url": "https://api.github.com/users/MadhurYadav/repos",
    "events_url": "https://api.github.com/users/MadhurYadav/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MadhurYadav/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Madhur Yadav",
    "company": null,
    "blog": "",
    "location": "Jaipur, Rajasthan",
    "email": null,
    "hireable": null,
    "bio": "Computer Science Undergrad / Aspiring Software Engineer",
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2021-11-10T06:21:14Z",
    "updated_at": "2023-12-10T20:47:26Z"
  };

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('madhuryadav_14')
})

app.get('/login', (req, res) =>{
    res.send('<h1>please login at google</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send("YOUTUBE")
})

app.get('/github', (req, res) =>{
    res.json(githubData)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// for production we need to do some change
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

