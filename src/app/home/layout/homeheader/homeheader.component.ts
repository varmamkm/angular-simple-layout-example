import { Component, OnInit, ViewChild } from '@angular/core';
import { AparmentselectionService } from '../../aparmentselection.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
  
  test:any[]=["A","B"];
  @ViewChild('select') select : HTMLSelectElement

  cars = [
    {model : "Ford Mustang", color : "red"},
    {model : "Fiat 500", color : "white"},
    {model : "Volvo XC90", color : "black"}
  ];

  constructor(private apartmentsectionService: AparmentselectionService) { }

  ngOnInit() {
    this.apartmentsectionService.annouceSelection(this.select.nativeElement.value);
  }

  onChange() {
    this.apartmentsectionService.annouceSelection(this.select.nativeElement.value);
    console.log(this.select.nativeElement.value)
  }

}