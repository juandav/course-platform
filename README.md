<p align="center">
  <a href="https://juandav.github.io/" target="blank"><img src="https://raw.githubusercontent.com/juandav/course-platform/master/src/assets/images/course-platform.png" width="300" alt="Coondorlabs Logo" /></a>
</p>
<p align="center">A challenge made for <a href="https://condorlabs.io/" target="_blank">Condorlabs</a></p>

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
