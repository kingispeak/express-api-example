<h1 align="center"><a href="#" target="_blank" rel="noopener noreferrer">Nodejs Express API Demo</a></h1>
<p align="center">
  <a href="https://github.com/kingispeak/express-api-example/actions/workflows/ci.yml"><img src="https://github.com/kingispeak/express-api-example/actions/workflows/ci.yml/badge.svg" alt="Build Status"></a>
</p>

Table of contents:

- [Install](#install)
- [Tests](#tests)
- [Docker](#docker)
- [License](#license)

## Install

```sh
git clone git@github.com:kingispeak/express-api-example.git
npm install
cp .env.example .env
npm start
```

Then visit [http://localhost:3000/](http://localhost:3000/)

## Tests

```sh
npm test
npm run lint
```

## Docker

```sh
docker-compose up server -d
# rebuild
docker-compose build server
# scripts
docker-compose run server npm test
```

Then visit [http://localhost:3000/](http://localhost:3000/)

## License

MIT

