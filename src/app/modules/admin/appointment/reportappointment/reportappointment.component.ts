import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportappointment',
  templateUrl: './reportappointment.component.html',
  styleUrls: ['./reportappointment.component.css']
})
export class ReportappointmentComponent implements OnInit {

  loader = true;

  constructor() { }

  ngOnInit() {
    this.loader = false
  }

}
