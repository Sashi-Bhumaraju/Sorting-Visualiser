import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray";

export class GenerateBarNodeArray{

  
  static  build():BarNode[]
    {
        BarNodeArray.length=0;

        while(BarNodeArray.length < 20){
        var r = (Math.random() * 250) + 20;
        for(let i = 0 ; i< BarNodeArray.length; i++)
        {
          if(BarNodeArray[i].height == r)
          {
            continue
          }
        }
        BarNodeArray.push({
          height: r,
          color: 'N',
          left: false,
          right: false,
          overLeft: false,
          overRight: false
        });

        
         
         
      }
       
        // BarNodeArray.push({color:'N',height:10})
        
        return BarNodeArray   
    }
}
