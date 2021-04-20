import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutMeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: '**', redirectTo: '', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
