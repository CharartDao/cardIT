import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addImagePage } from './addImage.page';

const routes: Routes = [
  {
    path: '',
    component: addImagePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addImagePageRoutingModule {}
