import { Component, forwardRef, Inject, Input } from '@angular/core';
import { AppModule } from './app.module';
import { applyThemePageModule } from './applyTheme/applyTheme.module';
import {applyThemePage} from './applyTheme/applyTheme.page'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  //providers:[applyThemePage, applyThemePageModule, AppModule], // triggers the empty page
})

export class AppComponent {
  @Input() name?: string;

  constructor(){ };

  //constructor(@Inject(forwardRef(() => applyThemePage))private applyThemePage: applyThemePage){ }
  
  defaultImage:string = 'https://picsum.photos/id/237/200/300';

  /*selectImage() {  
    this.applyThemePage.selectImage();
  }*/

  getbackground(){
    try{
      var e = document.getElementsByTagName('body')[0].style.backgroundImage = localStorage.getItem('back') ? "url('"+localStorage.getItem('back')+"')" : this.defaultImage;
      console.log("getbackground",e, localStorage.getItem('back'));
      return e;
    }catch(err: any){
      console.log(err);
      return err;
    }
  }

  changebackground(){
    try{
      var bannerImage:any = document.getElementById('bannerImg');
      var imgData = getBase64Image(bannerImage!);
      localStorage.setItem("back", imgData);
    }catch(err: any){
      console.log("error", err);
      return err;
    }
  }
}

function getBase64Image(img: ImageBitmap) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx!.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}