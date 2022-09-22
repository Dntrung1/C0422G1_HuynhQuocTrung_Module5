import { Component, OnInit } from '@angular/core';
import {Caculator} from "./model/caculator";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  caculator: Caculator = new Caculator();

  constructor() {
  }

  getTotal(n1: number, n2: number, sign: string) {
    if (n1 == null || n2 == null || sign == null) {
      return "";
    } else
      return eval(n1 + sign + n2);
  }

  ngOnInit(): void {
  }

}
