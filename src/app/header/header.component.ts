import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isBuildNewArray:boolean=false;
  isMergeSort:boolean=false;
  isQuickSort :boolean=false;
  isInsertionSort:boolean=false;
  isBubbleSort:boolean=false;
  isRunning:boolean=false;

  constructor(private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  goToOpeningPage():void{
      this.router.navigate(['get-started'])
  }

  buildNewArray():void{

    GenerateBarNodeArray.build()
    
    if(   this.isMergeSort == true ||   this.isQuickSort == true ||  this.isInsertionSort == true ||  this.isBubbleSort == true)
      {

      }
    else {
              this.isRunning=true
              setTimeout(()=>{ this.isRunning=false;},2500);
      }

  }

  mergeSort():void{
    this.isBuildNewArray =true;
    this.isMergeSort= true;

  }

  quickSort():void{
    this.isBuildNewArray = true;
    this.isQuickSort = true;

  }
  
  insertionSort():void{
    this.isBuildNewArray = true
    this.isInsertionSort = true;

  }

  bubbleSort():void{
    this.isBuildNewArray =true
    this.isBubbleSort = true;


  }

}
