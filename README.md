# interest-tax-conversor

![github-issues](https://img.shields.io/github/issues/praser/interest-tax-conversor.svg) [![Build Status](https://travis-ci.com/praser/interest-tax-conversor.svg?branch=master)](https://travis-ci.com/praser/interest-tax-conversor) [![Maintainability](https://api.codeclimate.com/v1/badges/1427bfa05f0c749c2ba5/maintainability)](https://codeclimate.com/github/praser/interest-tax-conversor/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/1427bfa05f0c749c2ba5/test_coverage)](https://codeclimate.com/github/praser/interest-tax-conversor/test_coverage)

# A simple Rest API to deal with interest tax conversions #

## Features

## Install

`npm install --save interest-tax-conversor`


## Scripts

 - **npm run dev** : `nodemon --watch "src/" --exec "ts-node src/entry.ts" -e ts`
 - **npm run test** : `jest --no-cache`
 - **npm run build** : `tsc`
 - **npm run prod** : `npm run build && node dist/entry.js`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`

## Dependencies

 ![](https://david-dm.org/praser/interest-tax-conversor/status.svg)
![](https://david-dm.org/praser/interest-tax-conversor/dev-status.svg)

Package | Version | Dev
--- |:---:|:---:
[dotenv](https://www.npmjs.com/package/dotenv) | ^7.0.0 | ✖
[express](https://www.npmjs.com/package/express) | ^4.16.4 | ✖
[@types/dotenv](https://www.npmjs.com/package/@types/dotenv) | ^6.1.0 | ✔
[@types/express](https://www.npmjs.com/package/@types/express) | ^4.16.1 | ✔
[@types/jest](https://www.npmjs.com/package/@types/jest) | ^24.0.11 | ✔
[@types/supertest](https://www.npmjs.com/package/@types/supertest) | ^2.0.7 | ✔
[jest](https://www.npmjs.com/package/jest) | ^24.5.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[nodemon](https://www.npmjs.com/package/nodemon) | ^1.18.10 | ✔
[supertest](https://www.npmjs.com/package/supertest) | ^4.0.2 | ✔
[ts-jest](https://www.npmjs.com/package/ts-jest) | ^24.0.0 | ✔
[ts-node](https://www.npmjs.com/package/ts-node) | ^8.0.3 | ✔
[typescript](https://www.npmjs.com/package/typescript) | ^3.3.4000 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Rubens Praser Júnior

## License

 - **ISC** : http://opensource.org/licenses/ISC
