# Movie Recommendation App
## Overview

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Movie Recommendation App helps users explore popular titles, build their personal watchlist and favorites, and receive curated movie recommendations based on genre overlap—all powered by the TMDB API.


## Features

| Feature | Description |
| ------ | ------ |
| Search | Real-time movie lookup via TMDB |
| Watchlist | Save movies to view later |
| Favorites | Keep track of top-loved movies |
| Recommendations | Smart suggestions based on genre tags |
| Auth Middleware | 	Protected routes with JWT |
|  Responsive UI | 	Custom CSS layout for all devices |


## Technologies
- [Frontend] - React, Axios, Custom CSS  
- [Backend] - Node.js, Express, MongoDB  
- [Auth] - JWT  
- [External API] - TMDB  
- [Hosting] - Netlify (Frontend), Render (Backend)


## Installation

Install the dependencies and devDependencies and start the server.

```sh
# Clone project
git clone https://github.com/akin-holo/3mtt_DareyIO_capstone-project

npm i
# Install dependencies
cd client && npm install
cd server && npm install
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app

# Add .env files
# client/.env
VITE_API_BASE=https://your-backend-url

# server/.env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
TMDB_API_KEY=your-tmdb-key
TMDB_BASE=https://api.themoviedb.org/3

# Start servers
npm run dev (from /client)
npm run dev (from /server)
```

## Demo
- screenshot: 
- Solution URL: [ github ](https://github.com/akin-holo/3mtt_DareyIO_capstone-project)
- Live Site URL: [akin-holo-movie-recommendation-app](https://akin-holo-movie-recommendation-app.netlify.app/)

## Author
Akinseloyin Holo
Fellow ID - FE/23/55210926
Software Development
Cohort 3



