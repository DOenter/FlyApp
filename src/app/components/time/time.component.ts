import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
private daysArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
private date = new Date();
public hour: any;
public minute: any;
public seconds: any;
public ampm: any;
public day: any;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
const date = new Date();
this.updateDate(date);

    },1000);

    this.day = this.daysArray[this.date.getDay()];
  }
private updateDate(date: Date) {
  const hours = date.getHours()
  this.ampm = hours >= 12 ? 'pm' : 'am';
  this.hour = hours % 12;
this.hour = this.hour ? this.hour : 12;
this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
const minutes = date.getMinutes();
this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
const seconds = date.getSeconds();
this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();
}
}
