import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../types/api";

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() data: Country

  constructor() { }

  ngOnInit(): void {
  }

}
