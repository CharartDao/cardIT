import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addImagePage } from './addImage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { addImagePageRoutingModule } from './addImageRouting.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    addImagePageRoutingModule
  ],
  declarations: [addImagePage]
})
export class addImagePageModule {}
