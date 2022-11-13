import { formatDate } from "@angular/common";
import { HtmlParser } from "@angular/compiler";
import { ElementRef } from "@angular/core";
import { BarNode } from "models/BarNode";
import { BarNodeArray } from "models/BarNodeArray"
import { SetDefault } from "models/SetDefault";
import { SGA, sortButton } from "models/ShowGenerateArray";
import { AnimateDistance, Speed } from "models/Speed";
import { Stop } from "models/Stop";
import { from, partition, repeat } from "rxjs";
import { HeaderComponent } from "src/app/header/header.component";
import { ApplicationStateService } from "./application-state.service";
import { GenerateBarNodeArray } from "./GenerateBarNodeArray";

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

        if( Stop[0] == true ){
        Stop[0]=false;
          GenerateBarNodeArray.build()    
          return
        }  

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
            sortButton(1);

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

    
      BarNodeArray[j+1].color = 'G';

      (function repeat(){
         

        setTimeout(()=>{
          if( Stop[0] == true ){
          Stop[0]=false;
          GenerateBarNodeArray.build()    
            return
          }  
         
          if( j>=0 && BarNodeArray[j].height > BarNodeArray[j+1].height )
          {
            
            BarNodeArray[j+1].right = true;
            j!=0?  BarNodeArray[j].right = false: null;
            BarNodeArray[j].left=true

        

           
              BarNodeArray[j+1].color = 'P';
             
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
            BarNodeArray[j+1].color = 'P';
            BarNodeArray[i].color = 'P';
            i++;
            j=i-1;
          
            // BarNodeArray[j+1].up = true;

            if(i==l)
            {
              sortButton(1);
              BarNodeArray.map((v)=>v.color='N')
              SetDefault.length = 0;
              SetDefault.push({
                  isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                  
              })
              return;
            }
            BarNodeArray[j+1].color = 'G';
           
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
    
        console.log(animationArray)

        let  left : number= 0;
        let right : number= tempBarNodeArray.length-1;
        repeat(left,right);


    function repeat(l: number,r: number){
      if(l>=r) return;//returns recursively  
      let m =l+ Math.floor((r-l)/2);
      repeat(l,m);
      repeat(m+1,r);
      merge(l,m,r);
    }


    function merge(l:number,m:number,r:number){

      var n1 = m - l + 1;
      var n2 = r - m;
      // Create temp arrays
      var L = new Array(n1);
      var R = new Array(n2);

      let tempL=[];
      let tempR=[];
      let tempresult=[];
      // Copy data to temp arrays L[] and R[]
      for (var i = 0; i < n1; i++){
        L[i] = tempBarNodeArray[l + i].height;
        tempL.push(i);
      }

      for (var j = 0; j < n2; j++){
        R[j] = tempBarNodeArray[m + 1 + j].height;
        tempR.push(j)
      }
         
  
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
                tempresult.push(l+i);
                tempBarNodeArray[k].height = L[i];
              i++;
          }
          else {
            tempresult.push(m+1+j);
            for(let g=i+1; g<tempL.length;g++)
                tempL[g]++;

           
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

      var i = 0;
      var j = 0;
      var k=0;

//       while(i<tempL.length && j < tempR.length)
//       {
//         animationArray.push([l+tempL[i],m + 1+tempR[j], tempresult[k]])
//         i++;
//         j++;
//         k++;
//       }

//  while (i < n1) {
//         // animationArray.push([k,L[i]])
//         animationArray.push([l+tempL[i],0, tempresult[k]])
//           i++;
//           k++;
//       }
  
//       // Copy the remaining elements of
//       // R[], if there are any
//       while (j < n2) {
//         // animationArray.push([k,R[j]])
//         animationArray.push([0,m + 1+tempR[j], tempresult[k]])
//           j++;
//           k++;
//       }


     
  }







  for(let j = 0; j< animationArray.length;j++)
  {
    
    for(let i = 0; i< BarNodeArray.length;i++)
  {
   if( BarNodeArray[i].height == animationArray[j][1])
     console.log(i,BarNodeArray[i].height)
        
      
  }
      
  }
  






console.log(BarNodeArray,"sashi")
  console.log(animationArray)
      animate(animationArray)
  function animate(a:number[][]):void{

    // let m =0;
    let n =0;
    let k =0;
    let targetIndex =animationArray[n][0];
    let value =animationArray[n][1];
    let i =0 ;
    for( i = 0; i< BarNodeArray.length;i++)
    {
     if( BarNodeArray[i].height == value)
      break;
    }
    let currentIndex = i;
    BarNodeArray[currentIndex].color='G';
    BarNodeArray[targetIndex].color='G';


   ( function repeat(){
      setTimeout(()=>{
        if( Stop[0] == true ){
          Stop[0]=false;
        
          GenerateBarNodeArray.build()    
          return
        }  
        console.log(currentIndex,targetIndex, + "lllllllllllllllllllllllll")
        if(targetIndex !== currentIndex)
        {
          BarNodeArray[currentIndex].color='P';
          BarNodeArray[currentIndex].right = true;
          console.log(targetIndex+" "+currentIndex+"mmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
          currentIndex-1!=0?  BarNodeArray[currentIndex-1].right = false: null;
          BarNodeArray[currentIndex-1].left=true


          let temp = BarNodeArray[currentIndex].height;
         let f = BarNodeArray[currentIndex-1].height;
         BarNodeArray[currentIndex].height = f;
          BarNodeArray[currentIndex-1].height = temp;
          currentIndex--;
          BarNodeArray[currentIndex].color='G';
        }
        else{

          BarNodeArray[currentIndex].color='N';
          BarNodeArray[targetIndex].color='N';
          BarNodeArray[currentIndex].color='P';
          BarNodeArray[targetIndex].color='P';
         

          

         do{

          n++;
          if(n==animationArray.length)
          {
            sortButton(1);
            BarNodeArray.map((v)=>v.color='N')
            SetDefault.length = 0;
            SetDefault.push({
                isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                
            })
            return;
          }
          targetIndex =animationArray[n][0];
          console.log(targetIndex)
          value =animationArray[n][1];
          let  i =0 ;
          for(i = 0; i< BarNodeArray.length;i++)
          {
            console.log(i,targetIndex, BarNodeArray[i].height,value)
            if( BarNodeArray[i].height === value)
                     break;
          }
          currentIndex = i;
          if(currentIndex==targetIndex)
          BarNodeArray[targetIndex].color='P';

         }while(currentIndex==targetIndex)
          
          BarNodeArray[currentIndex].color='G';
          BarNodeArray[targetIndex].color='G';

        }
        
        repeat();
      },Speed[0])
 
    })();

  

  }
}




static quickSort():void{
  let animationArray:number[][]=[];
  let tempBarNodeArray :BarNode[]=JSON.parse(JSON.stringify(BarNodeArray))
  quickSortO(tempBarNodeArray,0,tempBarNodeArray.length-1);

  function quickSortO(tempBarNodeArray:BarNode[],low:number,high:number):void{

    if(low<high)
    {
      let  pidx:number= p(tempBarNodeArray,low,high);
      quickSortO(tempBarNodeArray,low,pidx-1);
      quickSortO(tempBarNodeArray,pidx+1,high);
      
    }
    if(low == high)
    {
      animationArray.push([high,high,2])
    }
  }

  function p(tempBarNodeArray:BarNode[],low:number,high:number):number{
    let i = low-1;
      let pivot = tempBarNodeArray[high].height;
      //  animationArray.push([high,high,2])
      for(let j = low; j<high;j++)
      {
        if(tempBarNodeArray[j].height < pivot)
        {
          i++;
          animationArray.push([i,j,0]);
          let temp = tempBarNodeArray[j].height;
          tempBarNodeArray[j].height = tempBarNodeArray[i].height;
          tempBarNodeArray[i].height = temp;

        }
      }
      i++;
      animationArray.push([i,high,1]);
      // let temp = tempBarNodeArray[i];
      tempBarNodeArray[high].height=tempBarNodeArray[i].height;
      tempBarNodeArray[i].height=pivot;
    return i;
  }

console.log(BarNodeArray)

  animationArray.map((v)=>{
    console.log(v,"sashi")
  })




  // for(let i =0; i< animationArray.length;i++)
  // {
  //   BarNodeArray[animationArray[i][0]].height = animationArray[i][0];
  // }



     animateQuickSort();
  function animateQuickSort()
  {
    let n =-1;
    // BarNodeArray[animationArray[0][1]].color='P';
    let currentIndex = animationArray[0][1];
    let targetIndex = animationArray[0][0];
    let inVisible = 0;
    let rightValue = 0;

    repeat();
   function repeat():void{

        setTimeout(()=>{
          if( Stop[0] == true )
          {
          Stop[0]=false;
          GenerateBarNodeArray.build()    
            return
          }  
    
        do{
          n++;
          if(n==animationArray.length)
          {
            sortButton(1);
            BarNodeArray.map((v)=>v.color='N')
            SetDefault.length = 0;
            SetDefault.push({
                isBubbleSort: false, isBuildNewArray: true, isInsertionSort: false, isMergeSort: false, isQuickSort: false, isRunning: false,
                
            })
            return;
          }

          currentIndex = animationArray[n][1];
          targetIndex = animationArray[n][0];
        
          if(animationArray[n][2]==2)
          {
           BarNodeArray[animationArray[n][0]].color='P'
          }
          // if(animationArray[n][2]==2)
          // {
          //  BarNodeArray[animationArray[n][0]].color='P'
          // }
          //  if(currentIndex==targetIndex)
          // if(n!=0)
          // {
          
          //  BarNodeArray[animationArray[n-1][0]].color='N'
          //  BarNodeArray[animationArray[n-1][1]].color='N'
          // }
          if(n!=0)
          {
           BarNodeArray[animationArray[n-1][0]].overRight=false;
           BarNodeArray[animationArray[n-1][1]].overLeft=false;
           BarNodeArray[animationArray[n-1][0]].left=false;
           BarNodeArray[animationArray[n-1][1]].right=false;
           if(animationArray[n-1][2]==1  )
           {
             BarNodeArray[animationArray[n-1][1]].color='N'
             BarNodeArray[animationArray[n-1][0]].color='P'
            
           }
           else if( animationArray[n-1][2] == 2 )
           {
             BarNodeArray[animationArray[n-1][0]].color='P'
           }
           else{
             BarNodeArray[animationArray[n-1][0]].color='N'
             BarNodeArray[animationArray[n-1][1]].color='N'
           }
          
          }

         }while(currentIndex==targetIndex || animationArray[n][2]==2 )
          
        
         if(n!=0)
         {
          BarNodeArray[animationArray[n-1][0]].overRight=false;
          BarNodeArray[animationArray[n-1][1]].overLeft=false;
          BarNodeArray[animationArray[n-1][0]].left=false;
          BarNodeArray[animationArray[n-1][1]].right=false;
          if(animationArray[n-1][2]==1  )
          {
            BarNodeArray[animationArray[n-1][1]].color='N'
            BarNodeArray[animationArray[n-1][0]].color='P'
           
          }
          else if( animationArray[n-1][2] == 2 )
          {
            BarNodeArray[animationArray[n-1][0]].color='P'
          }
          else{
            BarNodeArray[animationArray[n-1][0]].color='N'
            BarNodeArray[animationArray[n-1][1]].color='N'
          }
         
         }
        let temp = BarNodeArray[currentIndex].height;
        BarNodeArray[currentIndex].height=BarNodeArray[targetIndex].height;
        let t = Math.abs(currentIndex-targetIndex)*36;

        if(ApplicationStateService.getIsMobileResolution())
        {
          t =  Math.abs(currentIndex-targetIndex)*15.4;
        }
        AnimateDistance.next(t);
        BarNodeArray[targetIndex].height=temp;

        BarNodeArray[targetIndex].color='G'
        BarNodeArray[currentIndex].color='G'
        if(Math.abs(currentIndex-targetIndex)>1)
        {
          BarNodeArray[targetIndex].overRight=true;
          BarNodeArray[currentIndex].overLeft=true;
        }
        else{
          BarNodeArray[targetIndex].left=true;
          BarNodeArray[currentIndex].right=true;
        }
       if(animationArray[n][2]==1)
       {
        BarNodeArray[animationArray[n][0]].color='P'
       }


  repeat();
        },Speed[0])

      
      
    }
 
  }
   }
}


