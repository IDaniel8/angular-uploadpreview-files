import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pdfsection',
    loadChildren: () =>
      import('./modules/pdf-section/pdf-section.module').then(
        (m) => m.PdfSectionModule
      ),
  },
  {
    path: 'excelsection',
    loadChildren: () =>
      import('./modules/excel-section/excel-section.module').then(
        (m) => m.ExcelSectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
