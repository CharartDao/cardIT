import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applyThemePage } from './applyTheme.page';

const routes: Routes = [
  {
    path: '',
    component: applyThemePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class applyThemePageRoutingModule {}
