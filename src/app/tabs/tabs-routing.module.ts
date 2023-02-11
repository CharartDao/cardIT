import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'recordSound',
        loadChildren: () => import('../recordSound/recordSound.module').then(m => m.recordSoundPageModule)
      },
      {
        path: 'addText',
        loadChildren: () => import('../addText/addText.module').then(m => m.addTextPageModule)
      },
      {
        path: 'addImage',
        loadChildren: () => import('../addImage/addImage.module').then(m => m.addImagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/recordSound',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/recordSound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
