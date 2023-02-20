import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { applyThemePage } from './applyTheme.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { applyThemePageRoutingModule } from './applyThemeRouting.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    applyThemePageRoutingModule
  ],
  exports: [
    applyThemePage
  ],
  declarations: [applyThemePage]
})
export class applyThemePageModule {}
