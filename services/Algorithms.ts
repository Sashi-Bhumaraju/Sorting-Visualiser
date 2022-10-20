import { formatDate } from "@angular/common";
import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray"
import { SetDefault } from "models/SetDefault";
import { Speed } from "models/Speed";
import { from, repeat } from "rxjs";
import { HeaderComponent } from "src/app/header/header.component";

export class Algorithms{


// Bubble sort
    static bubbleSort():void{
      // let  i:number = 0;
       let j:number = 0;
       let l:number = BarNodeArray.length;
       let n = l-1;

       let prevI:number=0;
       let prevJ:number=1;

       (function repeat(){
        // console.log("inside reat"+l)
        setTimeout(()=>
        {

          if(j == n)
          {
            BarNodeArray[j].color = 'P';
            n--;
            j=0;
            
          }
        // if(j>=l){
        //     i++;
        //     j=i+1;
        // }   

        BarNodeArray[prevI].color = 'N';
        BarNodeArray[j].color = 'G';

       


        prevI = j;
          // BarNodeArray[prevJ].color = 'N';
         BarNodeArray[j+1].color = 'G';
       
         prevJ = j+1;



           if(BarNodeArray[j].height > BarNodeArray[j+1].height)
           {
            BarNodeArray[j+1].right = true;
            j!=0?  BarNodeArray[j].right = false: null;
            BarNodeArray[j].left=true

            // console.log("inside timeout + j"+j)
            let temp = BarNodeArray[j].height;
            BarNodeArray[j].height = BarNodeArray[j+1].height;
            BarNodeArray[j+1].height = temp;
           }
           if(n==1)
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
        },Speed[0])
       })();
    }

//  Insertion sort
    static insertionSort():void{

      let i:number = 1;
      let j:number = 0;
      let l:number = BarNodeArray.length;

      let prevI:number=1;
      let prevJ:number=0;

      BarNodeArray[j+1].down = true;
      BarNodeArray[j+1].color = 'G';

      (function repeat(){
         

        setTimeout(()=>{

         
          if( j>=0 && BarNodeArray[j].height > BarNodeArray[j+1].height )
          {
            
            BarNodeArray[j+1].right = true;
            j!=0?  BarNodeArray[j].right = false: null;
            BarNodeArray[j].left=true

            i==j+1?  BarNodeArray[j+1].down=false : null;

           
            // BarNodeArray[j+1].right = true;
            // BarNodeArray[j+1].right = true;
            // BarNodeArray[j+1].right = true;
             
              // BarNodeArray[prevJ].color = 'N';
              // BarNodeArray[j].color = 'R';
              // prevJ = j;
              BarNodeArray[j+1].color = 'P';
             
              // BarNodeArray[j+1].staydown = false;
              // BarNodeArray[j].staydown = true;
              // BarNodeArray[j].down=true;
            
          
            let temp = BarNodeArray[j+1].height;
            BarNodeArray[j+1].height = BarNodeArray[j].height;
            BarNodeArray[j].height = temp;
            j--;
            BarNodeArray[prevI].color = 'P';
            BarNodeArray[j+1].color = 'G';
             prevI = j+1;

           
          }
          else{

            
             
           

            j==0? BarNodeArray[j].color = 'P' :BarNodeArray[j+1].color = 'P' ;
            // BarNodeArray[j+1].staydown = false;
            BarNodeArray[j+1].down=false;
            BarNodeArray[j+1].color = 'P';
            BarNodeArray[j+1].up=true ;
            BarNodeArray[i].color = 'P';
            i++;
            j=i-1;
          
            // BarNodeArray[j+1].up = true;

            if(i==l)
            {
              BarNodeArray.map((v)=>v.color='N')
              SetDefault.length = 0;
              SetDefault.push({
                  isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                  
              })
              return;
            }
            BarNodeArray[j+1].color = 'G';
            BarNodeArray[j+1].down=true;
          }
         
            // if(i==l && j==0)
            // {
            //   BarNodeArray.map((v)=>v.color='N')
            //   SetDefault.length = 0;
            //   SetDefault.push({
            //       isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                  
            //   })
            //   return;
            
            // }
         
console.log(i, j, l)
     repeat();
        },Speed[0])

      })();
    }

// Merge sort
static mergeSort():void{
  let animationArray:number[][]=[];
  let tempBarNodeArray :BarNode[]=JSON.parse(JSON.stringify(BarNodeArray))
  let a :BarNode;
  // for(let i =0; i<BarNodeArray.length;i++)
  //     tempBarNodeArray[i].height=10
      // tempBarNodeArray.push(BarNodeArray[i]);
  // BarNodeArray.map((v)=>{
  //             tempBarNodeArray.push(v);
  // }
  // )
 
  console.log(animationArray)

  let  left : number= 0;
  let right : number= tempBarNodeArray.length-1;
  repeat(left,right);

  function repeat(l: number,r: number)
  {
   
      if(l>=r){
        return;//returns recursively
    }
    let m =l+ Math.floor((r-l)/2);

    repeat(l,m);
    repeat(m+1,r);
    console.log(m)

    merge(l,m,r);
    // setTimeout(()=>{
    //   merge(l,m,r);
    // },1000)
   

   
   
  }


  function merge(l:number,m:number,r:number){

    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = tempBarNodeArray[l + i].height;
    for (var j = 0; j < n2; j++)
        R[j] = tempBarNodeArray[m + 1 + j].height;
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
      
        if (L[i] <= R[j]) {
          animationArray.push([k,L[i]])
              tempBarNodeArray[k].height = L[i];
            i++;
        }
        else {
          animationArray.push([k,R[j]])
              tempBarNodeArray[k].height = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      animationArray.push([k,L[i]])
         tempBarNodeArray[k].height = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      animationArray.push([k,R[j]])
         tempBarNodeArray[k].height = R[j];
        j++;
        k++;
    }
  }


  console.log(animationArray)
     animate(animationArray)
  function animate(a:number[][]):void{

    // let m =0;
    let n =0;
    let k =0;

   ( function repeat(){
      setTimeout(()=>{
         BarNodeArray[a[n][0]].height =a[n][1];
        n++;
        if(n==a.length)
          return
        console.log(a[n][0])
        repeat();
      },Speed[0])
 BarNodeArray.map((v)=>{
  console.log('++++++++++++',v.height)
 })
    })();

  

  }
}


}


