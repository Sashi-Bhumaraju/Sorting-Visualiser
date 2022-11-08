import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { AutoFocus } from 'src/app/create-array/autofocus.directive';
import { Analysis } from 'services/Create-Array-Analysis';
import { Speech, SpeechText } from 'services/Create-Array-Speech';
import { CreateArrayValidate } from 'services/Create-Array-Validate';
@Component({
  selector: 'app-create-array',
  templateUrl: './create-array.component.html',
  styleUrls: ['./create-array.component.css']
})
export class CreateArrayComponent implements OnInit {

 sT:string = '';

inputForm:FormGroup ;
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
      Speech.inputText(Analysis.start(text) as string)
    }
    else{
      Speech.inputText(speech)
    }
  
  }
   
 
  }

}
