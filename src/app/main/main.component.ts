import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'services/application-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(ApplicationStateService.getIsMobileResolution(),'nononon')
  }

}


