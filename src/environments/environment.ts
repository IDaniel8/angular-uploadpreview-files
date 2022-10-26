import { APP_CONFIG_DEV } from '@config/app.config.dev';

export const environment = {
  production: false,
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
  configuration: APP_CONFIG_DEV,
};
