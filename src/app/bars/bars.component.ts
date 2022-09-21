import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarNode } from 'models/BarNode';
import { BarNodeArray } from 'models/BarNodeArray';
import { from } from 'rxjs';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  bars:BarNode[]=BarNodeArray;
  constructor(private route:Router) { }

  ngOnInit(): void {
    GenerateBarNodeArray.build();
    from(BarNodeArray).subscribe(()=>{
      this.bars=BarNodeArray;
    });
  }


  

}
