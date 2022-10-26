import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray";
import { ApplicationStateService } from "./application-state.service";

export class GenerateBarNodeArray{

  
  static  build():BarNode[]
    {
        BarNodeArray.length=0;
     let height = 0;
        ApplicationStateService.getIsMobileResolution()?  height = 107.4285 :  height = 250;

        
       

        while(BarNodeArray.length < 20){
        var r = (Math.random() * height) + 20;
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
