import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { recordSoundPage } from './recordSound.page';

const routes: Routes = [
  {
    path: '',
    component: recordSoundPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recordSoundPageRoutingModule {}
