import { Injectable } from "@angular/core";
import { sortButton } from "models/ShowGenerateArray";
import { GenerateBarNodeArray } from "./GenerateBarNodeArray";

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

 static startManualInput(text:string):string{

 let inputnumbers:number[]=[];
 let temp = text.split(',') 
 for(let i = 0; i<temp.length; i++)
 {
    inputnumbers.push(+temp[i])
 }

 if(inputnumbers.length<8){ return(Analysis.timeComp(inputnumbers)+'')}
 else if( this.isSame(inputnumbers)) { console.log("sameeeeee");  return (Analysis.timeComp(inputnumbers)+'');}
 else if(this.isNearlySame(inputnumbers)){console.log("nearly sameeeeee"); return (Analysis.timeComp(inputnumbers)+'');}
 else return (Analysis.timeComp(inputnumbers)+'');
    }

    static startRandomInput(inputnumbers:number[]):string{

        // let inputnumbers:number[]=[];
        // let temp = text.split(',') 
        // for(let i = 0; i<temp.length; i++)
        // {
        //    inputnumbers.push(+temp[i])
        // }
       
        if(inputnumbers.length<8){ return(Analysis.timeComp(inputnumbers)+'')}
        else if( this.isSame(inputnumbers)) { console.log("sameeeeee");  return (Analysis.timeComp(inputnumbers)+'');}
        else if(this.isNearlySame(inputnumbers)){console.log("nearly sameeeeee"); return (Analysis.timeComp(inputnumbers)+'');}
        else return (Analysis.timeComp(inputnumbers)+'');
           }


           static timeComp(inputnumbers:number[]):string{
            let n = inputnumbers.length;

            let sortindex:{} = {0:'merge sort', 1:'quick sort', 2:'bubble sort', 3:'insertion sort', 4:'merge sort or quick sort', 5:'merge sort or insertion sort'}
            let temp: number[]=[0,0,0,0];
             temp[0] = Math.round( n*Math.log(n));
             temp[1]= this.isSame(inputnumbers) || this.isNearlySame(inputnumbers)? Math.round(n*n): Math.round( n*Math.log(n));
             temp[2]=  Math.round(n*n);
             temp[3]= this.isSame(inputnumbers) || this.isNearlySame(inputnumbers)? n:  Math.round(n*n);
            let small = Number.MAX_VALUE;
            let st = 0;
            
            for ( let i =0 ; i < 4; i++)
            {
                if ( small > temp[i])
                {
                    small = temp[i]
                    st = i;
                }
                   
            }

            if(temp[0] == temp[1])
            {
                st = 4;
            }
            if(temp[0] == temp[3])
            {
                st = 5;
            }
            
            return (
                "Best Time complexity of given input is " +" "+ small+" "+"use" + " "+sortindex[st] +" "
              
            )
           }
}