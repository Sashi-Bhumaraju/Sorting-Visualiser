import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'get-started',
    pathMatch:'full'
  },

  {
    path:'get-started',
    component:LandingPageComponent,
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path: '**',
     component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
