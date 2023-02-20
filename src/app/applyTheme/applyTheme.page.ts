import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-applyTheme',
  templateUrl: 'applyTheme.page.html',
  styleUrls: ['applyTheme.page.scss']
})
export class applyThemePage {

  constructor() {}

}
