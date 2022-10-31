import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { audio } from 'models/AudioRef';
import { Tip } from 'models/ShowTip';
import { Tv } from 'models/ShowTv';
import { stopTipp } from 'models/Speed';
import { from } from 'rxjs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  

  bars:number[] = [5];
  i=0
  open:boolean=true;
  showTv: boolean[]=Tv;

  constructor(private route:Router) {


   

   }

  ngOnInit(): void {

   
    let i =0;
     this.repeat();
   
     from(Tv).subscribe(()=>{
      this.showTv=Tv
    })

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
      // console.log(this.bars[j])
    }
  }

  goToMain():void{
  
    // setTimeout(()=>
    // {
      // if(this.showTv[0]==false)
      //    {
      //     audio.pause();

      //     if(stopTipp[0]==false)
      //     {
      //       Tip.length=0
      //       Tip.push(true)
      //     }
        
      //     return;
      //    }
      // Tv.length=0;
      // Tv.push(false);
      // if(Tip[0]==false)
      // {
      //   Tip.length=0
      //   Tip.push(true)
      // }
    

    // },30000)
    
    // audio.src= "https://github.com/sasibhumaraju/Sorting-Visualiser/blob/main/docs/assets/dog.wav?raw=true";
    //           //  "https://github.com/sasibhumaraju/Sorting-Visualiser/blob/main/docs/assets/dog.wav?raw=true"
    // audio.load();
    // audio.play();
  //  a.controls;
  // Tip.length=0
  // Tip.push(true)
  // Tv.length=0
  // Tv.push(true)
  this.open=false
  Tip.length=0
  Tip.push(true)
  }
}
