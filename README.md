<p align="center">
  <a href="https://juandav.github.io/" target="blank"><img src="https://raw.githubusercontent.com/juandav/course-platform/master/src/assets/images/course-platform.png" width="400" alt="Coondorlabs Logo" /></a>
</p>
<p align="center">A challenge made for <a href="https://condorlabs.io/" target="_blank">Condorlabs</a></p>
<p align="center">
  <a href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="JavaScript Style Guide" /></a>
  <a href="https://paypal.me/kyupss"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/kyupss"><img src="https://img.shields.io/twitter/follow/kyupss.svg?style=social&label=Follow"></a>
</p>

## Description

Course Platform is a challenge for the "Condorlabs" company.

## Run development app

```bash
yarn dev
# or
now dev
```

## Run production app

Build it with docker:

```bash
# build
yarn docker-build
# or, use multi-stage builds to build a smaller docker image
yarn docker-build-ms
```

Run it:

```bash
yarn docker-run
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
yarn deploy
```

> API - doc: <a href="./API-DOC.md">here</a>