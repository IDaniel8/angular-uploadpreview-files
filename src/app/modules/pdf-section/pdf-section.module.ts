import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SharedModule } from '@appshared/shared.module';

import { PdfSectionComponent } from './pdf-section.component';

const routes: Routes = [
  {
    path: '',
    component: PdfSectionComponent,
  },
];

@NgModule({
  declarations: [PdfSectionComponent],
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PdfSectionModule {}
