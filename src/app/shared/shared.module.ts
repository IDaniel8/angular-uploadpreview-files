import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialUiModule } from './material-ui.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MaterialUiModule],
  exports: [MaterialUiModule],
})
export class SharedModule {}
