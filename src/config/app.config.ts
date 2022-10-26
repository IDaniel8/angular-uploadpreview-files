import { IAppConfig } from './app.config.model';
import { InjectionToken } from '@angular/core';

const APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export { APP_CONFIG, IAppConfig };
