import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deafault } from 'models/Deafault';
import { SetDefault } from 'models/SetDefault';
import { Speed } from 'models/Speed';
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

  constructor(private router:Router) { }

  ngOnInit(): void {
  
    
    from(SetDefault).subscribe((v)=>{
    console.log("inside setdeafault"+v.isBubbleSort)
    this.default = SetDefault;

    }); 
   

    
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
}
