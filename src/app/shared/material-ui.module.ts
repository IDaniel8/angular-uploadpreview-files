import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatRadioModule,
  MatCheckboxModule,
  MatTabsModule,
];

@NgModule({
  exports: [...materialModules],
})
export class MaterialUiModule {}
