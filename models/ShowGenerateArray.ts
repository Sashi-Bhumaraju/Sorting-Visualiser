export let SGA:boolean[]=[false,true];

export function sortButton(i:number){
    switch(i){
      case 0:{
        SGA[0]=true;
        SGA[1]=false;
    

      } break;
      case 1:{
        SGA.length = 0;
        SGA.push(false);
        SGA.push(true);
    
      } break;
    
    }

  }


