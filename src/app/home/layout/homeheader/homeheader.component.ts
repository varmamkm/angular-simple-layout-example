import { Component, OnInit, ViewChild } from '@angular/core';
import { AparmentselectionService } from '../../aparmentselection.service';

interface car {
  model:string;
  color:number;
}

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
  
  test:any[]=["A","B"];
  @ViewChild('select') select : HTMLSelectElement;
  selectedObject:string;
  selectedValue:string;
  cars:car[] = [
    {model : "Ford Mustang", color : "red"},
    {model : "Fiat 500", color : "white"},
    {model : "Volvo XC90", color : "black"}
  ];

  constructor(private apartmentsectionService: AparmentselectionService) {
    apartmentsectionService.newSelection$.subscribe(
      apartmentid => {
        this.test.push(apartmentid);
      });
    this.selectedObject = this.test[0];
   }

  ngOnInit() {
    console.log("test:",this.select.nativeElement.value);
    this.selectedValue =this.select.nativeElement.value;
    this.apartmentsectionService.annouceSelection(this.select.nativeElement.value);
  }

  onChange() {
    this.selectedValue =this.select.nativeElement.value;
    this.apartmentsectionService.annouceSelection(this.select.nativeElement.value);
    console.log(this.select.nativeElement.value)
  }

}

interface car {
  model:string;
  color:number;
}