import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@appshared/shared.module';

import { ExcelSectionComponent } from './excel-section.component';

const routes: Routes = [
  {
    path: '',
    component: ExcelSectionComponent,
  },
];

@NgModule({
  declarations: [ExcelSectionComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcelSectionModule {}
