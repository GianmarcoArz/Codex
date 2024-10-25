import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitpageComponent } from './pages/visitpage/visitpage.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, VisitpageComponent, PreferitiComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
