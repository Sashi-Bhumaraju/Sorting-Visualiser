import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray";
import { ApplicationStateService } from "./application-state.service";
import { SpeechText } from "./Create-Array-Speech";

export class GenerateBarNodeArray{

  static inputNumbers:number[]=[];

  static  buildRandom():void
    {

      GenerateBarNodeArray.inputNumbers.length = 0;
         let height = 0;
         ApplicationStateService.getIsMobileResolution()?  height = 107.4285 :  height = 200;

        while(GenerateBarNodeArray.inputNumbers.length < 18){
        var r = (Math.random() * height) + 20;
        let flag = true;
        while(flag)
        {
          var r = (Math.random() * height) + 20;
          let i;
          for( i = 0 ; i< GenerateBarNodeArray.inputNumbers.length; i++)
          {
            if(GenerateBarNodeArray.inputNumbers[i] == r)
            {
              break;
            }
          }
          if(i == GenerateBarNodeArray.inputNumbers.length)
          {
            flag = false;
          }
        }
        GenerateBarNodeArray.inputNumbers.push(r)
      }

      GenerateBarNodeArray.build()
      //  let t1 = ""
      // GenerateBarNodeArray.inputNumbers.map((v)=>{
      //   t1 = " "+ t1 + Math.floor(v) +", "
      // })
      SpeechText.next("Random number input is given")  
    }

    static build():void{

           BarNodeArray.length=0;
            for(let i = 0; i< GenerateBarNodeArray.inputNumbers.length; i++){
              BarNodeArray.push({
                height: GenerateBarNodeArray.inputNumbers[i],
                color: 'N',
                left: false,
                right: false,
                overLeft: false,
                overRight: false
              });
            }
            console.log(BarNodeArray.length,GenerateBarNodeArray.inputNumbers.length)

    }

    static buildManual(input:string):void{
      // let temp :number[]=JSON.parse(JSON.stringify(input))
     GenerateBarNodeArray.inputNumbers.length=0;
      let temp = input.split(',') 
      for(let i = 0; i<temp.length; i++)
      {
       let  v1 = +temp[i]
        if(GenerateBarNodeArray.inputNumbers.indexOf(v1) != -1)
        {
          var r = (Math.random() * 1) + v1;
          //  v1 =  Number(v1 +r)
           console.log("ttttttttttttttt"+v1)
           GenerateBarNodeArray.inputNumbers.push(r)
        }
        else{
          GenerateBarNodeArray.inputNumbers.push(+temp[i])
        }
       
      }
      GenerateBarNodeArray.build()
    }
}
