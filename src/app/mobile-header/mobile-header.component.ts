import { Component, OnInit } from '@angular/core';
import { BarNode } from 'models/BarNode';
import { BarNodeArray } from 'models/BarNodeArray';
import { mobileAbout } from 'models/mobile-about';
import { from } from 'rxjs';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  mA=mobileAbout;
  constructor() { }

  ngOnInit(): void {
    from(mobileAbout).subscribe((v)=>{
      this.mA=mobileAbout;
    })
  
  }
  
  about():void{
    mobileAbout[0] = !mobileAbout[0];
  }
}
