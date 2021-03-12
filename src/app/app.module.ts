import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindQueryParamDirectiveDirective } from './directive/bind-query-param-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BindQueryParamDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BindQueryParamDirectiveDirective]
})
export class AppModule { }
