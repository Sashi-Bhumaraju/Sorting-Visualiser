import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tip } from 'models/ShowTip';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  bars:number[] = [5];
  i=0
  open:boolean=true;

  constructor(private route:Router) { }

  ngOnInit(): void {
    let i =0;
     this.repeat();
    

  }

   repeat():void{
    if (this.i > 70) return;
    setTimeout(() =>{
      this.i++
      this.buildBars();
      this.repeat();
    }, 1);
  }


  buildBars():void{
    for(let j = 1; j < 14 ; j++)
    {
      this.bars[j]= j*this.i*0.4
      console.log(this.bars[j])
    }
  }

  goToMain():void{
  this.open=false
  Tip.length=0
  Tip.push(true)
  }
}
