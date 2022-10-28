import { Component, HostListener, OnInit } from '@angular/core';
import { isMobile } from 'models/IsMobile';
import { ApplicationStateService } from 'services/application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sorting-Visualiser';

  isM = ApplicationStateService.getIsMobileResolution();  
  ngOnInit(){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){

    if (window.innerWidth < 950) {
      this.isM= true;
     
    } else {
      this.isM= false;
    
    }

  }
}
