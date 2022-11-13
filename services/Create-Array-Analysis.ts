import { Injectable } from "@angular/core";
import { sortButton } from "models/ShowGenerateArray";

@Injectable()
export class Analysis{

    static isSameAsc(inputnumbers:number[]):boolean
    {
        let temp1 :number[]=JSON.parse(JSON.stringify(inputnumbers))
        let temp2 =temp1.sort((a:number,b:number)=>{ if(a>b) return 1; else if(b>a) return -1; else return 0})
      
    
      console.log(inputnumbers)
      console.log(temp2)
        for(let i =0; i<temp2.length;i++)
        {
        if( inputnumbers[i] != temp2[i]){   
             return false;}
        }
         return true;

    }

    static isSameDsc(inputnumbers:number[]):boolean
    {
    
        let temp1 :number[]=JSON.parse(JSON.stringify(inputnumbers))
    let temp2 =temp1.sort((a:number,b:number)=>{ if(a>b) return -1; else if(b>a) return 1; else return 0})
  

  console.log(inputnumbers)
  console.log(temp2)
    for(let i =0; i<temp2.length;i++)
    {
    if( inputnumbers[i] != temp2[i]){   
         return false;}
    }
     return true;
    }

static isSame(inputnumbers:number[]):boolean{

    if(   Analysis.isSameDsc(inputnumbers) || Analysis.isSameAsc(inputnumbers) )
    {
       return true
    }
    else{
       return false
    }   
}       



static isNearlySameAsc(inputnumbers:number[]):boolean
{
    let temp1 :number[]=JSON.parse(JSON.stringify(inputnumbers))
    let temp2 =temp1.sort((a:number,b:number)=>{ if(a>b) return 1; else if(b>a) return -1; else return 0})

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



static isNearlySameDsc(inputnumbers:number[]):boolean
{
    let temp1 :number[]=JSON.parse(JSON.stringify(inputnumbers))
    let temp2 =temp1.sort((a:number,b:number)=>{ if(a>b) return -1; else if(b>a) return 1; else return 0})

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




static isNearlySame(inputnumbers:number[]):boolean{
    if(   Analysis.isNearlySameDsc(inputnumbers) || Analysis.isNearlySameAsc(inputnumbers) )
    {
       return true
    }
    else{
       return false
    }   
}

 static start(text:string):string{

 let inputnumbers:number[]=[];
 let temp = text.split(',') 
 for(let i = 0; i<temp.length; i++)
 {
    inputnumbers.push(+temp[i])
 }

 if(inputnumbers.length<8){ return('input is very small so you can use mergesort quicksort insertion sort bubblesort no problem at all')}
 else if( this.isSame(inputnumbers)) { console.log("sameeeeee");  return ('given input is already sorted so you can use insertion sort or merge sort');}
 else if(this.isNearlySame(inputnumbers)){console.log("nearly sameeeeee"); return ('given input is nearly or almost sorted so you can use insertion sort or merge sort');}
 else return ('given input is purely un sorted so you can use quick sort if there is less space in the disk if not you can use  merge sort ');
    }
}