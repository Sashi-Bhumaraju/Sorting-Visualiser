import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray";

export class GenerateBarNodeArray{

  
  static  build():BarNode[]
    {
        BarNodeArray.length=0;
        for(let i=0; i<20;i++)
        BarNodeArray.push({
          height: (Math.random() * 250) + 10, color: 'N',
          left: false,
          right: false,
          up: false,
          down: false,
          positionDown: false,
          staydown: false
        });

        // BarNodeArray.push({color:'N',height:10})
        
        return BarNodeArray   
    }
}
