import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient,) { }

  ngOnInit() {

  }

  isShown: any;

  selectCity(id: any) {
    this.isShown = id.value;
  }



  title = 'FlyApp';
  myForm = false;


  openForm() {
    this.myForm = !this.myForm;
  }
  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=3d14f364f53109c68f475c97c869942d')
  }

  // document.getElementById("Arriving").addEventListener("change", function (e) {
  //   const currentCity = e.target.value;

  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=3d14f364f53109c68f475c97c869942d`)
  //     .then((resp) => resp.json())
  //     .then(function (data) {
  //       document.querySelector('.weather__city').textContent = data.name;
  //       document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
  //       document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
  //       document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  //       console.log(data);
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  //   });


}
