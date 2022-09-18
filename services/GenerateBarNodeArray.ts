import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray";

export class GenerateBarNodeArray{

  
  static  build():BarNode[]
    {
      
        BarNodeArray.length=0;
        for(let i=0; i<55;i++)
        BarNodeArray.push({height:Math.floor((Math.random() * 480) + 50),color:'N'});
        return BarNodeArray   
    }
}
