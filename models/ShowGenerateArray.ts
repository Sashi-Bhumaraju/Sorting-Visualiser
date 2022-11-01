export let SGA:boolean[]=[true,false,false];

export function sortButton(i:number){
    switch(i){
      case 0:{
        SGA[0]=true;
        SGA[1]=false;
        SGA[2]=false;

      } break;
      case 1:{
        SGA.length = 0;
        SGA.push(false);
        SGA.push(true);
        SGA.push(false);
       
      } break;
      case 2:{
        SGA[0]=false;
        SGA[1]=false;
        SGA[2]=true;
      } break;
    }

  }


