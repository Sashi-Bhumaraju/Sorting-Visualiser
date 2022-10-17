import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray";

export class GenerateBarNodeArray{

  
  static  build():BarNode[]
    {
        BarNodeArray.length=0;
        for(let i=0; i<79;i++)
        BarNodeArray.push({height:Math.floor((Math.random() * 500) + 50),color:'N'});

        // BarNodeArray.push({color:'N',height:10})
        
        return BarNodeArray   
    }
}
