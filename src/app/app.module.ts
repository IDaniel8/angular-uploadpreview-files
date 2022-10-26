import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@appshared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { appEffects } from '@appstate/app.effects';
import { appReducer } from '@appstate/app.reducer';
import { APP_CONFIG } from '../config/app.config';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production,
    }),
    EffectsModule.forRoot(appEffects),
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [{ provide: APP_CONFIG, useValue: environment.configuration }],
  bootstrap: [AppComponent],
})
export class AppModule {}
