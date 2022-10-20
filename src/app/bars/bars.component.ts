import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarNode } from 'models/BarNode';
import { BarNodeArray } from 'models/BarNodeArray';
import { Speed } from 'models/Speed';
import { from } from 'rxjs';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  bars:BarNode[]=BarNodeArray;
  S:number[]=[0.6];

  constructor(private route:Router) { 

    console.log(Speed[0]/1000)
    from(Speed).subscribe(()=>{
      this.S = Speed
      
    })
  }

  ngOnInit(): void {
    GenerateBarNodeArray.build();
    from(BarNodeArray).subscribe(()=>{
      this.bars =BarNodeArray;

    });
  }


  

}
