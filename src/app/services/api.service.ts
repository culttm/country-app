import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../types/api";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private readonly httpService: HttpClient ) { }

  getAllCountries(): Observable<Country[]> {
    return this.httpService.get<Country[]>(`${this.baseUrl}/all`)
  }

  getByName(name: string): Observable<Country> {
    return this.httpService.get<Country[]>(`${this.baseUrl}/name/${name}`).pipe(map(([res]) => res))
  }

  getByCodes(codes: string[]): Observable<Country[]> {
    return this.httpService.get<Country[]>(`${this.baseUrl}/alpha?codes=${codes.join(';')}`)
  }
}
