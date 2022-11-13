import { Component, OnInit } from '@angular/core';
import { Deafault } from 'models/Deafault';
import { SetDefault } from 'models/SetDefault';
import { SGA, sortButton } from 'models/ShowGenerateArray';
import { Tip } from 'models/ShowTip';
import { Tv } from 'models/ShowTv';
import { Speed } from 'models/Speed';
import { Stop } from 'models/Stop';
import { from } from 'rxjs';
import { Algorithms } from 'services/Algorithms';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-mobile-bottom-navv',
  templateUrl: './mobile-bottom-navv.component.html',
  styleUrls: ['./mobile-bottom-navv.component.css']
})
export class MobileBottomNavvComponent implements OnInit {

  default:Deafault[]=SetDefault;
  showToast:boolean=false
  showTip:boolean[]=Tip;;
  valueU:number=Speed[0];
  showTv:boolean[]=Tv;
  showSpeed:boolean=false;
  isCompleteTip:boolean=true;
  showGenerateArrayButton:boolean[] = SGA;
  i:number | undefined;
  constructor() { }

  ngOnInit(): void {

    from(SGA).subscribe(()=>{
      this.showGenerateArrayButton = SGA;
    })

    from(SetDefault).subscribe((v)=>{
      // console.log("inside setdeafault"+v.isBubbleSort)
      this.default = SetDefault;
  
      }); 
  }

  sortIt():void{

    if( !this.default[0].isRunning)
    switch(this.i){
    case 0: {
      this.default[0].isRunning=true
      this.default[0].isMergeSort= true;
      Algorithms.mergeSort();
            break;}

    case 1: {
      this.default[0].isRunning=true
      this.default[0].isQuickSort = true;

      Algorithms.quickSort();
           break;}

    case 3: {
      this.default[0].isRunning=true
      this.default[0].isInsertionSort = true;
      Algorithms.insertionSort();
           break;}

    case 2: {
      this.default[0].isRunning=true
      this.default[0].isBubbleSort = true;
      Algorithms.bubbleSort();
            break;}

    }

  }

  buildNewArray():void{


  

    if( this.default[0].isRunning)
      {
        this.showToast=true
        setTimeout(()=>{ this.showToast=false},2500);
      }
    else {
            GenerateBarNodeArray.buildRandom()    
      }
  }

 


  mergeSort():void{
   
    {
      if(Stop[0] == false &&   this.default[0].isRunning==true)
      {
        this.default[0].isRunning=false;
        Stop[0]=true;
      }
      else{
        this.buildNewArray()
      }
      
      sortButton(0);
      this.i=0;
   
     
    }
  }


  quickSort():void{
   
    {
      if(Stop[0] == false &&   this.default[0].isRunning==true)
      {
        this.default[0].isRunning=false;
        Stop[0]=true;
      }
      else{
        this.buildNewArray()
      }
      sortButton(0); 
      this.i=1;
    
    
    }
  }
  

  insertionSort():void{
   
    {
      if(Stop[0] == false &&   this.default[0].isRunning==true)
      {
        this.default[0].isRunning=false;
        Stop[0]=true;
      }
      else{
        this.buildNewArray()
      }
      sortButton(0);
      this.i=3;
   
     
    }
  }

  bubbleSort():void{
   
    {
      if(Stop[0] == false &&   this.default[0].isRunning==true)
      {
        this.default[0].isRunning=false;
        Stop[0]=true;
      }
      else{
        this.buildNewArray()
      }
      sortButton(0);
      this.i=2;
     
     
    }
 }



}
