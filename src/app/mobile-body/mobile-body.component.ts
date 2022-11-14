import { Component, ElementRef, OnInit } from '@angular/core';
import { BarNode } from 'models/BarNode';
import { BarNodeArray } from 'models/BarNodeArray';
import { AnimateDistance, Speed } from 'models/Speed';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-mobile-body',
  templateUrl: './mobile-body.component.html',
  styleUrls: ['./mobile-body.component.css']
})
export class MobileBodyComponent implements OnInit {

  bars:BarNode[]=BarNodeArray;
  valueU:number=Speed[0];
  S:number[]=[0.6];
  constructor(private ele:ElementRef) { 
    console.log(Speed[0]/1000)
    from(Speed).subscribe(()=>{
      this.S = Speed  
    })

  }

  ngOnInit(): void {
    GenerateBarNodeArray.buildRandom();
    GenerateBarNodeArray.build()
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
      console.log(v,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
     })

  }
  yourMethod(v:any):void
  {
       //  console.log(v)
        Speed.length=0
        Speed.push(v)
       
  }

}
