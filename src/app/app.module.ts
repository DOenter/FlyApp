import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { Plane1Component } from './components/plane1/plane1.component';
import {HttpClientModule} from '@angular/common/http';
import { Plane2Component } from './components/plane2/plane2.component';
import { Plane3Component } from './components/plane3/plane3.component';
import { TimeComponent } from './components/time/time.component';
import { WcagService } from './components/services/wcag.service';
import { WcagComponent } from './components/wcag/wcag.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    Plane1Component,
    Plane2Component,
    Plane3Component,
    TimeComponent,
    MainComponent,
    WcagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WcagService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
