import { Component, OnInit } from '@angular/core';
import { AparmentselectionService } from '../aparmentselection.service';
import { Subscription }   from 'rxjs';
import { ActivatedRoute,Router  } from '@angular/router';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

subscription: Subscription;
selectedapartmentid:number = 0;
newvalue:string="4";

  constructor(private apartmentsectionService: AparmentselectionService,
                   private route: ActivatedRoute,
                   private rte:Router) {
    this.subscription = apartmentsectionService.selectionChanged$.subscribe(
      selectedapartmentid => { 
        this.selectedapartmentid = selectedapartmentid;
        console.log("the selection in header changed to :",this.selectedapartmentid)
        });

        console.log("URL2",this.route.snapshot.url);
        console.log("URL1",this.rte.url);
   }

   addtoheader()
   {
 this.apartmentsectionService.addNewSelection(this.newvalue);
   }

  ngOnInit() {
   
  }

}