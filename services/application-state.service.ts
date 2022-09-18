import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationStateService {

 static   isMobileResolution: boolean =false;

  constructor() {
   
  }

 static  getIsMobileResolution(): boolean {

    if (window.innerWidth < 768) {
        this.isMobileResolution = true;
      } else {
        this.isMobileResolution = false;
      }

    return this.isMobileResolution;
  }
}