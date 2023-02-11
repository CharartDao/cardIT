import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addTextPage } from './addText.page';

const routes: Routes = [
  {
    path: '',
    component: addTextPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addTextPageRoutingModule {}
