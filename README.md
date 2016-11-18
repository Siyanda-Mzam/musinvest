# A Music Investment Platform using Angular 2
Free online music investment platform built to serve as a common ground of reach between musicians and talent seekers. Artists put up their music on the platform for showcasing, and Scouters browse, discover and invest in them.


## Dependencies
- You need `node` and `npm` installed (via `brew install node` or [NodeJS.org](https://nodejs.org/en/) or whatever);
- You must also have `typings` installed globally via `npm i -g typings`
- Be sure that you have `typings` version `1.x`


## Getting Started


```bash
git clone https://github.com/Siyanda-Mzam/museinvest.git
cd museinvest
npm i (if it bugs out, try again with sudo)
typings install
npm start
```

Then navigate your browser to [http://localhost:4200](http://localhost:3001) and use the app.

## Unit Testing
The test setup includes `webpack.test.config.js`, `spec-bundle.js`, and `karma.conf.js`. To run unit tests, execute `npm test` in your terminal.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.