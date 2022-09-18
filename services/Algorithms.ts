import { BarNodeArray } from "models/BarNodeArray"
import { SetDefault } from "models/SetDefault";
import { HeaderComponent } from "src/app/header/header.component";

export class Algorithms{




    static bubbleSort():void{

      

        // console.log("ssssssssssssssssss")
      let  i:number = 0;
       let j:number = 1;
       let l:number = BarNodeArray.length;

       let prevI:number=0;
       let prevJ:number=1;

       (function repeat(){
        // console.log("inside reat"+l)
        setTimeout(()=>
        {
        if(j>=l){
            i++;
            j=i+1;
        }   

        BarNodeArray[prevI].color = 'N';
        BarNodeArray[i].color = 'G';
        prevI = i;
         console.log(i+'-----------')
         console.log(j+'-----------')

         BarNodeArray[prevJ].color = 'N';
         BarNodeArray[j].color = 'R';
         prevJ = j;


           if(BarNodeArray[j].height < BarNodeArray[i].height)
           {
            // console.log("inside timeout + j"+j)
            let temp = BarNodeArray[j].height;
            BarNodeArray[j].height = BarNodeArray[i].height;
            BarNodeArray[i].height = temp;
           }
           if(i==l-2 && j==l-1)
           {

            BarNodeArray.map((v)=>v.color='N')
            SetDefault.length = 0;
            SetDefault.push({
                isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                
            })
            return 
            
           }
         
          j++;
          repeat();
        },1)
       })();
       
      
    }

}


