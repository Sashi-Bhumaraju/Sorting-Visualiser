import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { AutoFocus } from 'src/app/create-array/autofocus.directive';
import { Analysis } from 'services/Create-Array-Analysis';
import { Speech, SpeechText } from 'services/Create-Array-Speech';
import { CreateArrayValidate } from 'services/Create-Array-Validate';
import { GenerateBarNodeArray } from 'services/GenerateBarNodeArray';
import { Stop } from 'models/Stop';
import { Deafault } from 'models/Deafault';
import { SetDefault } from 'models/SetDefault';
import { sortButton } from 'models/ShowGenerateArray';
import { Speed } from 'models/Speed';
@Component({
  selector: 'app-create-array',
  templateUrl: './create-array.component.html',
  styleUrls: ['./create-array.component.css']
})
export class CreateArrayComponent implements OnInit {

 sT:string = '';
 valueU:number=Speed[0];
 default:Deafault[]=SetDefault;
inputForm:FormGroup ;
speed:number[]=Speed
 
  showToast: boolean;
  constructor(private ele:ElementRef) { 
   
    this.inputForm = new FormGroup({
      inputArray: new FormControl(null,Validators.required),
    })
    
  
  }

  ngOnInit(): void {
   
    
    SpeechText.subscribe((v)=>{
      this.sT=v;
    })
    // speechSynthesis.speak(new SpeechSynthesisUtterance('Currently it is 3 o\'clock in the afternoon.'));
    if ('speechSynthesis' in window) {
      console.log("speech synthesis is supported")
     }else{
      console.log("speech synthesis is not supported")
       // Speech Synthesis is not Supported 😞 
     }
    //  this.getVoices("sasi nuvu manchidivi kaani me nannama manchidhi kadhuuu")
   
    

  }


  yourMethod(v:any):void
  {
       //  console.log(v)
        Speed.length=0
        Speed.push(v)
       
  }
 static  getVoices(text:string) {
   
    document.getElementById("inputArray").focus()
  }


  onSubmit() {
    
   let  text:any=this.inputForm.controls['inputArray'].value ;
    console.log(text)
   
  if(text == null)
  {
    // let speech = CreateArrayValidate.validateArray("enter atleast one input");
    Speech.inputText('enter atleast one input')
  }
  else{
    let speech = CreateArrayValidate.validateArray(text);
    if(speech == "")
    {
      Speech.inputText(Analysis.startManualInput(text) as string)
      sortButton(1);
      if(Stop[0] == false &&   this.default[0].isRunning==true)
        {
          this.default[0].isRunning=false;
          Stop[0]=true;
        }
      {
          GenerateBarNodeArray.buildManual(text) 
          console.log("ssssssssssssssssssss"+text)
        }
    }
    else{
     
      // this.inputForm.controls['inputArray'].setValue("|create array here, enter comma seperated numbers")
      Speech.inputText(speech)
    
    }
  
  }
   
 
  }

  generateArray():void{
    sortButton(1);
    if(Stop[0] == false &&   this.default[0].isRunning==true)
      {
        this.default[0].isRunning=false;
        Stop[0]=true;
      
      }
      {
        GenerateBarNodeArray.buildRandom()  
        Speech.inputText(Analysis.startRandomInput(GenerateBarNodeArray.inputNumbers) as string)
      }
      
      // sortButton(1);
     
   
  
    // SpeechText.next("you choose to give random input")  
     
  }


}
