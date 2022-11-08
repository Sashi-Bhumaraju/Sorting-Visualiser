import { Injectable } from "@angular/core";
import { sortButton } from "models/ShowGenerateArray";

@Injectable()
export class Analysis{


static isSame(inputnumbers:number[]):boolean{
    let temp1 :number[]=JSON.parse(JSON.stringify(inputnumbers))
    let temp2 = temp1.sort()

  console.log(inputnumbers)
  console.log(temp2)
    for(let i =0; i<temp2.length;i++)
    {
    if( inputnumbers[i] != temp2[i]){   
         return false;}
    }
     return true;
    
}

static isNearlySame(inputnumbers:number[]):boolean{
    let temp1 :number[]=JSON.parse(JSON.stringify(inputnumbers))
    let temp2 = temp1.sort()

    if(inputnumbers[0] != temp2[0] && inputnumbers[0] != temp2[1]) 
    { return false;}

    for(let i =1; i<temp2.length-1;i++){   

        if((inputnumbers[i] != temp2[i-1] && inputnumbers[i] != temp2[i] ) &&  inputnumbers[i] != temp2[i+1])
        { 
             return false; 
              } }

    if(inputnumbers[temp2.length-1] != temp2[temp2.length-1] && inputnumbers[temp2.length-1] != temp2[temp2.length-2]) 
     {
         return false; }

        return true;
    
}

 static start(text:string):number{

 let inputnumbers:number[]=[];
 let temp = text.split(',') 
 for(let i = 0; i<temp.length; i++)
 {
    inputnumbers.push(+temp[i])
 }
  if( this.isSame(inputnumbers)) { console.log("sameeeeee");  return 1;}
  if( this.isNearlySame(inputnumbers)){console.log("nearly sameeeeee"); return 2;}
  return 3;
    }
}