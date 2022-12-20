import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = "Pipes In Angular";
  dateDetails = Date();
  employee={
    name:"Bala",
    age:20
  };
  values=4000
  secondValue=407.987;
  item=1278;

  constructor() { }

  ngOnInit(): void {
  }

}
