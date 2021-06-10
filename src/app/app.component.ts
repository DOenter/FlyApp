import { Component } from '@angular/core';
import { WcagService } from './components/services/wcag.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public darkMode: any;
  constructor(public wcagService:WcagService){
  }

  ngDoCheck(){
    this.darkMode = this.wcagService.darkMode;
  }
}
