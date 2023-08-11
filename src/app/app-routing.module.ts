import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyPageComponent } from './pages/survey-page/survey-page.component';
import { NotFoundPageComponent } from './componentsPage/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'survey', component: SurveyPageComponent },
  { path: 'survey/:id', component: SurveyPageComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/not-found' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
