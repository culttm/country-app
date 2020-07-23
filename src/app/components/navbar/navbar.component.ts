import { Component, OnInit } from '@angular/core';
import {Theme, ThemeService} from "../../services/theme.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string = 'Where in the world';

  theme: Observable<Theme>;

  constructor(private readonly themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme = this.themeService.$mode
  }

  toggleTheme() {
    this.themeService.toggle();
  };

}
