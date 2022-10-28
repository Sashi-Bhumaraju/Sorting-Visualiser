import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { mobileAbout } from 'models/mobile-about';
import { from } from 'rxjs';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mA = mobileAbout;

  constructor() { }
  ngOnInit(): void {
    from(mobileAbout).subscribe((v)=>{
      this.mA=mobileAbout;
    })
  }

}
