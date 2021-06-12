import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WcagService } from '../services/wcag.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'FlyApp';
  
  myForm = false;
  currentCity: any;
  isShown: any;
  public weatherInfo: any;
  totalPrice: number = 0;


  public selectList = [
    {
      city: 'Warsaw',
      price: 175,
    },
    {
      city: 'Paris',
      price: 600,
    },
    {
      city: 'New York',
      price: 1700,
    },
  ];
  public selectList1 = [
    {
      city: 'Lodz',
    },
    {
      city: 'Katowice',
    },
  ];






  public currentSelectedCity: any;

  public currencies = ['CHF', 'USD', 'EUR'];
  public currentCurrency = 'CHF';
  public responseCurrency: number = 1;

  constructor(private http: HttpClient, public wcagService:WcagService) { }

  ngOnInit() {
    // this.getCurrency();
  }

  selectCity(event: any) {
    this.isShown = event.target.value;

    this.currentSelectedCity = this.selectList.find((item) => item.city === event.target.value);
    this.totalPrice = this.currentSelectedCity.price;
    this.loadWeatherByCity(this.currentSelectedCity.city);
  }

  loadWeatherByCity(currentCityValue: string) {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCityValue}&appid=3d14f364f53109c68f475c97c869942d`).subscribe(response => {
      this.weatherInfo = response;
    });
  }

  calculateDeg() {
    return Math.round(this.weatherInfo.main.temp - 273);
  }

  openForm() {
    this.myForm = !this.myForm;
  }

  selectCurrency(event: any) {
    return this.http.get(`https://api.nbp.pl/api/exchangerates/rates/a/${event.target.value}/?format=json`)
    .subscribe((response: any) => {
      console.log('currency', response);
      this.responseCurrency = response.rates[0].mid;
      console.log(this.responseCurrency);
      this.totalPrice = +(this.currentSelectedCity.price / this.responseCurrency).toFixed(1);
    });
  }











































  // getWeather() {
  //   return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=3d14f364f53109c68f475c97c869942d')
  // }

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
