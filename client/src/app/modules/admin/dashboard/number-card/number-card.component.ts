import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {

  single: any[];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#009688';

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit() {

  }

  onSelect(event) {
    console.log(event);
  }
}

export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
  {
    "name": "UK",
    "value": 5200000
  },
  {
    "name": "Italy",
    "value": 7700000
  },
  {
    "name": "Spain",
    "value": 4300000
  }
];
