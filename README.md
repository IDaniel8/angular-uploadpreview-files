# Immigration Tracking App

<img src="./src/logo.png" alt="Logo" width="50"/>

## Prerequisites
---
* ng angular cli 
* node & npm installed 

Keep your node version >=16.x. This was implemented in order to evade unknow problems related to node version,


## Installation
---
1. `npm i`  on the root folder

## Execution
---
1. `npm run start:dev` 

This command will run the mock server and the ng app.

The app can also be started by the following commands:

1. `ng serve`
2. `cd server_mock && npm run start`


## Architecture
---
The architecture relies on Angualar 13 with NodeJS 16.x, and it is based on the [modularization pattern](https://itnext.io/angular-patterns-1-modules-organisation-d3b2224ec4cf).

The project also follows clean code principles.

* `src/app/shared`
  * Contains the shared modules, like material-ui module, in which all Angular material modules are imported. Reusable components are also placed here. Let be understood that reusable components may be customizable.
* `src/app`
  * Contains the main app routing module
* `src/assets`
  * Contains the fonts to be used on the project.
* `src/globalStyles`
  * Contains the styles, color palette and tokens defined for the project use. Refers to [_Frontend style guide_](https://sngular-labs.atlassian.net/wiki/spaces/SIT/pages/3309570/FE+Style+Guide)
* `src/config`
  * Configuration variables depending on the enviroments


```bash
├── src
│   ├── app
│   │   ├── shared
│   ├── assets
│   ├── globalStyles
│   ├── config
```

## Dependencies
---

| Package                           | Version |
| --------------------------------- | ------- |
| @angular/animations               | ~13.3.0 |
| @angular/cdk                      | 13.3.7  |
| @angular/common                   | ~13.3.0 |
| @angular/compiler                 | ~13.3.0 |
| @angular/core                     | ~13.3.0 |
| @angular/forms                    | ~13.3.0 |
| @angular/material                 | 13.3.7  |
| @angular/platform-browser         | ~13.3.0 |
| @angular/platform-browser-dynamic | ~13.3.0 |
| @angular/router                   | ~13.3.0 |
| rxjs                              | ~7.5.0  |
| tslib                             | ^2.3.0  |
| zone.js                           | ~0.11.4 |


## Additional documentation
---
*  [_Angular 13_](https://angular.io/)
*  [_How to install nvm?_](https://github.com/nvm-sh/nvm#installing-and-updating)
*  [_Repositories Guidelines_](https://sngular-labs.atlassian.net/wiki/spaces/SIT/pages/2818127/Repositories+Guidelines)
*  [_Frontend style guide_](https://sngular-labs.atlassian.net/wiki/spaces/SIT/pages/3309570/FE+Style+Guide)
*  [_UX/UI - SNG-Immigration-Tracking_](https://sngular-labs.atlassian.net/wiki/spaces/SIT/pages/2916431/UX+UI+-+SNG-Immigration-Tracking)
*  [_NGrx_](https://ngrx.io/docs)