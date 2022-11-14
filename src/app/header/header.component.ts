import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { audio } from 'models/AudioRef';
import { Deafault } from 'models/Deafault';
import { SetDefault } from 'models/SetDefault';
import { SGA, sortButton } from 'models/ShowGenerateArray';
import { Tip } from 'models/ShowTip';
import { Tv } from 'models/ShowTv';
import { Speed, stopTipp } from 'models/Speed';
import { SortNumber, Stop } from 'models/Stop';
// import { ShowTip } from 'models/ShowTip';
import { from, of } from 'rxjs';
import { Algorithms } from 'services/Algorithms';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';
import { CreateArrayComponent } from '../create-array/create-array.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.component2.css']
})

export class HeaderComponent implements OnInit {

  default:Deafault[]=SetDefault;
  showToast:boolean=false
  showTip:boolean[]=Tip;
  valueU:number=Speed[0];
  showTv:boolean[]=Tv;
  showSpeed:boolean=false;
  isCompleteTip:boolean=true;
  showGenerateArrayButton: boolean[]=SGA;
  i: any;

  constructor() { }

  ngOnInit(): void {  

    from(SetDefault).subscribe((v)=>{
    // console.log("inside setdeafault"+v.isBubbleSort)
    this.default = SetDefault;

    }); 

    from(Tip).subscribe(()=>{
      this.showTip=Tip
    })

    from(SGA).subscribe(()=>{
      this.showGenerateArrayButton = SGA;
    })
    // from(Tv).subscribe(()=>{
    //   this.showTv=Tv
    // })
  }

// stopTv():void{
//   this.showSpeed = true
//   stopTipp[0]=true;
//   Tv.length=0;
//   Tv.push(false);
//   Tip.length = 0;
//   Tip.push(true);
//   audio.pause();
// }
// goToOpeningPage():void{
//     this.router.navigate(['get-started'])
// }

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
    GenerateBarNodeArray.build()    
    // if( this.default[0].isRunning)
    //   {
    //     this.showToast=true
    //     setTimeout(()=>{ this.showToast=false},2500);
    //   }
    // else {
            
    //         GenerateBarNodeArray.build()    
    //   }
  }


  
  mergeSort():void{
   
    {
     
      if( SetDefault[0].isRunning == true)
      {
        // this.default[0].isRunning=false;
        // SetDefault[0].isRunning = true
        SortNumber[0]=0;
        Stop[0]=true;

      }
      else{
        SetDefault.length = 0;
            SetDefault.push({
                isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                
            })
        SetDefault[0].isRunning = true
        SetDefault[0].isMergeSort= true;
        this.buildNewArray()
        Algorithms.mergeSort();
      }
      sortButton(0); 
      this.i=0;
     
    }
  }


  quickSort():void{
   
  
    {
     
      if( SetDefault[0].isRunning == true)
      {
        // this.default[0].isRunning=false;
        // SetDefault[0].isRunning = true
        SortNumber[0]=1;
        Stop[0]=true;
      }
      else{
        SetDefault.length = 0;
            SetDefault.push({
                isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                
            })
        SetDefault[0].isRunning = true
        SetDefault[0].isQuickSort= true;
        this.buildNewArray()
        Algorithms.quickSort();
      }
      sortButton(0); 
      this.i=1;
     
    }
  }
  

  insertionSort():void{
   
    {
     
      if( SetDefault[0].isRunning == true)
      {
        // this.default[0].isRunning=false;
        // SetDefault[0].isRunning = true
        SortNumber[0]=3;
        Stop[0]=true;
      }
      else{
        SetDefault.length = 0;
            SetDefault.push({
                isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                
            })
        SetDefault[0].isRunning = true
        SetDefault[0].isInsertionSort= true;
        this.buildNewArray()
        Algorithms.insertionSort();
      }
      sortButton(0); 
      this.i=3;
     
    }
  }

  bubbleSort():void{
   
    {
     
      if( SetDefault[0].isRunning == true)
      {
        // this.default[0].isRunning=false;
        // SetDefault[0].isRunning = true
        SortNumber[0]=2;
        Stop[0]=true;
      }
      else{
        SetDefault.length = 0;
            SetDefault.push({
                isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                
            })
        SetDefault[0].isRunning = true
        SetDefault[0].isBubbleSort= true;
        this.buildNewArray()
        Algorithms.bubbleSort();
      }
      sortButton(0); 
      this.i=2;
     
    }
 }


 






 yourMethod(v:any):void
 {
      //  console.log(v)
       Speed.length=0
       Speed.push(v)
      
 }

 stopTip():void{
  Tip.length=0;
  Tip.push(false)

  // Tv.length=0;
  // Tv.push(true)
    if ( this.isCompleteTip )
     this.repeat();
    this.isCompleteTip=false;
    CreateArrayComponent.getVoices("")
 }

 flag=0;
 flag2=0;
 repeat():void
 {
//  console.log(".................hitted"+this.valueU)  
   setTimeout(()=>{
    if(this.valueU == 600)
      this.flag2++;

    if(this.flag2 == 3)
    {
      this.valueU = 600;
      return

    }
    if(this.valueU == 700)
        this.flag = 0;

    if(this.valueU == 500)
        this.flag = 1;     

     if(this.flag == 1)   
        this.valueU = this.valueU + 5;

     if(this.flag == 0)   
        this.valueU= this.valueU -5
      this.repeat()
   },1)

 }
}
