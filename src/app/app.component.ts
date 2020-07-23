import {Component, OnInit} from '@angular/core';
import {Theme, ThemeService} from "./services/theme.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public theme: Observable<Theme>;

  constructor(
    private readonly themeService: ThemeService,
  ) {
  }

  ngOnInit(): void {
    this.theme = this.themeService.$mode;
  }
}
