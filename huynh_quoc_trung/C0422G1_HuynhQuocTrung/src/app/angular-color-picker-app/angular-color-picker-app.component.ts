import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-color-picker-app',
  templateUrl: './angular-color-picker-app.component.html',
  styleUrls: ['./angular-color-picker-app.component.css']
})
export class AngularColorPickerAppComponent implements OnInit {
  color: "black"

  chanceColor(color){
    this.color = color;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
