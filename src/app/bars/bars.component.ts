import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarNode } from 'models/BarNode';
import { BarNodeArray } from 'models/BarNodeArray';
import { AnimateDistance, Speed } from 'models/Speed';
import { BehaviorSubject, from, Observable, Subscriber } from 'rxjs';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

 

  

  bars:BarNode[]=BarNodeArray;
  S:number[]=[0.6];
  

  constructor(private route:Router,private ele:ElementRef) { 
   
  
    console.log(Speed[0]/1000)
    from(Speed).subscribe(()=>{
      this.S = Speed  
    })

    

  } 

  floor(i:any):number{
  return Math.floor(i)
  }
 

  ngOnInit(): void {
    
    GenerateBarNodeArray.buildRandom();
    GenerateBarNodeArray.build();
    from(BarNodeArray).subscribe(()=>{
      this.bars =BarNodeArray;

    });

   
   let  a = 10;
   let  o=new Observable((a)=>
     {
             a.next("sashi") 
     })

     o.subscribe((v)=>{
     
     })

     let user = new BehaviorSubject<number>(10);
     user.asObservable
     AnimateDistance.subscribe((v)=>{
      this.ele.nativeElement.style.setProperty('--left',-v+'px');
      this.ele.nativeElement.style.setProperty('--right',v+'px');
      // console.log(v,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
     })
  }


  

}
