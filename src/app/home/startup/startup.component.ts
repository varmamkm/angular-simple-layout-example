import { Component, OnInit } from '@angular/core';
import { AparmentselectionService } from '../aparmentselection.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

subscription: Subscription;
selectedapartmentid:number = 0;

  constructor(private apartmentsectionService: AparmentselectionService) {
    this.subscription = apartmentsectionService.selectionChanged$.subscribe(
      selectedapartmentid => { 
        this.selectedapartmentid = selectedapartmentid;
        console.log("changed to are u serious:",this.selectedapartmentid)
        });
   }

  ngOnInit() {
  }

}