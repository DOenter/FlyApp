import { Component, OnInit } from '@angular/core';
import { WcagService } from '../services/wcag.service';

@Component({
  selector: 'app-wcag',
  templateUrl: './wcag.component.html',
  styleUrls: ['./wcag.component.scss']
})
export class WcagComponent implements OnInit {
  public darkModeTemp = false;
  constructor(private wcagService: WcagService) {}

  ngOnInit(): void {
  }
  darkMode() {
    this.wcagService.darkMode = !this.wcagService.darkMode;
    this.darkModeTemp = !this.darkModeTemp;
  
  }
}
