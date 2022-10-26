import { APP_CONFIG_PROD } from '@config/app.config.prod';

export const environment = {
  production: true,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },
  configuration: APP_CONFIG_PROD,
};
