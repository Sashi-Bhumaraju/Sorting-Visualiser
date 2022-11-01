import { Component, OnInit } from '@angular/core';
import { Deafault } from 'models/Deafault';
import { SetDefault } from 'models/SetDefault';
import { SGA } from 'models/ShowGenerateArray';
import { Tip } from 'models/ShowTip';
import { Tv } from 'models/ShowTv';
import { Speed } from 'models/Speed';
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
  showTip:boolean[]=Tip;
  valueU:number=Speed[0];
  showTv:boolean[]=Tv;
  showSpeed:boolean=false;
  isCompleteTip:boolean=true;
  showGenerateArrayButton:boolean[]=SGA;
  constructor() { }

  ngOnInit(): void {

    from(SetDefault).subscribe((v)=>{
      // console.log("inside setdeafault"+v.isBubbleSort)
      this.default = SetDefault;
  
      }); 
  }

  buildNewArray():void{


    from(SGA).subscribe((v)=>{
      this.showGenerateArrayButton = SGA;
    })

    if( this.default[0].isRunning)
      {
        this.showToast=true
        setTimeout(()=>{ this.showToast=false},2500);
      }
    else {
            GenerateBarNodeArray.build()    
      }
  }


  mergeSort():void{
    if( !this.default[0].isRunning)
    {
      this.showGenerateArrayButton[0] = false;
      this.default[0].isRunning=true
      this.default[0].isMergeSort= true;
      Algorithms.mergeSort();
    }
  }


  quickSort():void{
    if( !this.default[0].isRunning)
    {
      this.showGenerateArrayButton[0] = false;
      this.default[0].isRunning=true
      this.default[0].isQuickSort = true;
      Algorithms.quickSort();
    }
  }
  

  insertionSort():void{
    if( !this.default[0].isRunning)
    {
      this.showGenerateArrayButton[0] = false;
      this.default[0].isRunning=true
      this.default[0].isInsertionSort = true;
      Algorithms.insertionSort();
    }
  }

  bubbleSort():void{
    if( !this.default[0].isRunning)
    {
      this.showGenerateArrayButton[0] = false;
      this.default[0].isRunning=true
      this.default[0].isBubbleSort = true;
      Algorithms.bubbleSort();
    }
 }



}
