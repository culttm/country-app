import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Country} from "../../types/api";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  country$: Observable<Country>
  borderCountries$: Observable<Country[]>

  constructor(
    private readonly apiService: ApiService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country$ = this.apiService.getByName(params.country).pipe(
        mergeMap((res) => {
          !!res.borders.length && (this.borderCountries$ = this.apiService.getByCodes(res.borders))
          return of(res)
        })
      )
    })
  }

}
