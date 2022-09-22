import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deafault } from 'models/Deafault';
import { SetDefault } from 'models/SetDefault';
import { Tip } from 'models/ShowTip';
import { Speed } from 'models/Speed';
// import { ShowTip } from 'models/ShowTip';
import { from, of } from 'rxjs';
import { Algorithms } from 'services/Algorithms';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  default:Deafault[]=SetDefault;
  showToast:boolean=false
  showTip:boolean[]=Tip;
  valueU:number=10;

  constructor(private router:Router) { }

  ngOnInit(): void {  

    from(SetDefault).subscribe((v)=>{
    console.log("inside setdeafault"+v.isBubbleSort)
    this.default = SetDefault;

    }); 

    from(Tip).subscribe(()=>{
      this.showTip=Tip
    })
  }


  goToOpeningPage():void{
      this.router.navigate(['get-started'])
  }

  buildNewArray():void{
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
      this.default[0].isRunning=true
      this.default[0].isMergeSort= true;
    }
  }


  quickSort():void{
    if( !this.default[0].isRunning)
    {
      this.default[0].isRunning=true
      this.default[0].isQuickSort = true;
    }
  }
  

  insertionSort():void{
    if( !this.default[0].isRunning)
    {
      this.default[0].isRunning=true
      this.default[0].isInsertionSort = true;
    }
  }

  bubbleSort():void{
    if( !this.default[0].isRunning)
    {
      this.default[0].isRunning=true
      this.default[0].isBubbleSort = true;
      Algorithms.bubbleSort();
    }
 }


 yourMethod(v:any):void
 {
       console.log(v)
       Speed.length=0
       Speed.push(v)
      
 }

 stopTip():void{
  
  Tip.length=0;
  Tip.push(false)
    
    this.repeat();
 }

 flag=1;
 flag2=0;
 repeat():void
 {
 
 console.log(".................hitted"+this.valueU)  
   setTimeout(()=>{

    if(this.valueU == 10)
      this.flag2++;

    if(this.flag2 == 3)
    return  

    if(this.valueU == 20)
        this.flag = 0;

        if(this.valueU == 1)
        this.flag = 1;     

     if(this.flag == 1)   
        this.valueU++;

     if(this.flag == 0)   
        this.valueU--
      this.repeat()
   },20)

 }
}
