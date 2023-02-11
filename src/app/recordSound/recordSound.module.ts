import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { recordSoundPage } from './recordSound.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { recordSoundPageRoutingModule } from './recordSoundRouting.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    recordSoundPageRoutingModule
  ],
  declarations: [recordSoundPage]
})
export class recordSoundPageModule {}
