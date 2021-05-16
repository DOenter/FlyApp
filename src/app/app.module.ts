import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseComponent } from './components/base/base.component';
import { MenuComponent } from './components/menu/menu.component';
import { Plane1Component } from './components/plane1/plane1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    BaseComponent,
    MenuComponent,
    Plane1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
