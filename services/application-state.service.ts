import { Injectable } from '@angular/core';
import { isMobile } from 'models/IsMobile';

@Injectable()
export class ApplicationStateService {

 static   isMobileResolution: boolean =false;

  constructor() {
   
  }

 static  getIsMobileResolution(): boolean {

    if (window.innerWidth < 950) {
        this.isMobileResolution = true;
        isMobile[0]=true;
      } else {
        this.isMobileResolution = false;
        isMobile[0]=false;
      }

    return this.isMobileResolution;
  }
}