import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'FlyApp';
  myForm = false;
  

  openForm(){
    this.myForm = ! this.myForm;
  }
  

}
