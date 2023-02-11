import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addTextPage } from './addText.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { addTextPageRoutingModule } from './addTextRouting.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    addTextPageRoutingModule
  ],
  declarations: [addTextPage]
})
export class addTextPageModule {}
