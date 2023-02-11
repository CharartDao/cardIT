import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { soundcanvaPage } from './soundcanva.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { soundcanvaPageRoutingModule } from './soundcanva-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    soundcanvaPageRoutingModule
  ],
  declarations: [soundcanvaPage]
})
export class soundcanvaPageModule {}
