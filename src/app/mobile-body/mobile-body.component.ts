import { Component, OnInit } from '@angular/core';
import { BarNode } from 'models/BarNode';
import { BarNodeArray } from 'models/BarNodeArray';
import { from } from 'rxjs';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-mobile-body',
  templateUrl: './mobile-body.component.html',
  styleUrls: ['./mobile-body.component.css']
})
export class MobileBodyComponent implements OnInit {

  bars:BarNode[]=BarNodeArray;
  S:number[]=[0.6];
  constructor() { }

  ngOnInit(): void {
    GenerateBarNodeArray.build();
    // from(BarNodeArray).subscribe(()=>{
    //   this.bars =BarNodeArray;

    // });

  }

}
