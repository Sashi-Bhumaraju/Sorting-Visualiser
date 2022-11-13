import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CreateArrayValidate{

  static  validateArray(input:string):string
    {
        let k = input.split(',');

        if(k.length>18){
            return('only 18 numbers are allowed to give input');
        }
        
        for (let i=0; i<k.length ; i++)
       {
            if(k[i]=='')
            {
                console.log("error")
                return('enter valid input numbers seperated by commas')
            }
          else  if(!isNaN(Number(k[i]))) {
                console.log("string is a number")
                // return('enter commas  between numbers')
            }
            else {
                console.log("string is NOT a number")
                return('remove alphabets and special symbols in input but enter valid input numbers seperated by commas ')
            }

            if(Number(k[i]) > 200 || Number(k[i]) < 20){
                     return('input numbers should be range between 20 and 200')
            }
        }
             return "";
    }

}