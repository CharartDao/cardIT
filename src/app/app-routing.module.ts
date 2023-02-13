import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'recordSound',
        loadChildren: () => import('./recordSound/recordSound.module').then(m => m.recordSoundPageModule)
      },
      {
        path: 'applyTheme',
        loadChildren: () => import('./applyTheme/applyTheme.module').then(m => m.applyThemePageModule)
      },
      {
        path: '',
        redirectTo: '/recordSound',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/recordSound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
