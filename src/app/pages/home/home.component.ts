import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Country} from "../../types/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries$: Observable<Country[]>

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.apiService.getAllCountries()
  }

}
