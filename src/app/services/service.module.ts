import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService, InterceptorService } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    SurveyService,
    InterceptorService,
  ],
  declarations: []
})
export class ServiceModule { }
