import { Component, OnInit } from '@angular/core';
import { AparmentselectionService } from '../aparmentselection.service';
import { Subscription }   from 'rxjs';
import { HomeheaderComponent } from '../layout/homeheader/homeheader.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  subscription: Subscription;
  selectedapartmentid:number = 0;

  constructor(private apartmentsectionService: AparmentselectionService,
        private homeheaderComponent: HomeheaderComponent) {
        console.log("apartmentid:",homeheaderComponent.selectedValue);
    this.subscription = apartmentsectionService.selectionChanged$.subscribe(
      selectedapartmentid => { 
        this.selectedapartmentid = selectedapartmentid;
        console.log("the selection in header changed to :",this.selectedapartmentid)
        });
   }

  ngOnInit() {
  }

}