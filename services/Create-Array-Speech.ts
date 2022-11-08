import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class Speech{
    static lock = true;
    static myPromise;
    static async inputText(text:string):Promise<void>{
        SpeechText.next(text)
      
        if(Speech.lock)
        {

            Speech.myPromise = new Promise<void>( (resolve) =>{
            // "Producing Code" (May take some time)
          
                Speech.lock=false;
                let voices = speechSynthesis.getVoices();
                if(!voices.length){
                  let utterance = new SpeechSynthesisUtterance("");
                 window.speechSynthesis.speak(utterance);
                  voices = speechSynthesis.getVoices();
                }
                let speakData =new SpeechSynthesisUtterance(text)
                speakData.volume = 1; // From 0 to 1
                speakData.rate = 1; // From 0.1 to 10
                speakData.pitch = 2; // From 0 to 2
                // speakData.lang = 'en';;
                speakData.voice =voices[1];
                speechSynthesis.speak(speakData)

                speakData.addEventListener('end',()=>{
                    resolve();
                })
          

            // when successful
            //   myReject();  // when error
            });
        }

        Speech.myPromise.then(
                ()=>{
                    Speech.lock=true;
                },
                
            )
      
    }
}

export let SpeechText = new BehaviorSubject<string>('');
SpeechText.asObservable();