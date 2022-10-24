import { BehaviorSubject } from "rxjs";

export let Speed:number[]=[600];
export let showSpeed:boolean=false;
export let stopTipp:boolean[]=[false];

export let AnimateDistance = new BehaviorSubject<number>(10);
AnimateDistance.asObservable();
