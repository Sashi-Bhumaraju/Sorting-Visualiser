import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { ApplicationStateService } from 'services/application-state.service';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { MatSliderModule} from '@angular/material/slider';
const desktop_routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'get-started',
  //   pathMatch:'full'
  // },

  // {
  //   path:'get-started',
  //   component:LandingPageComponent,
  // },
  // {
  //   path:'main',
  //   component:MainComponent
  // },
  // {
  //   path: '**',
  //    component:HeaderComponent
  // }
];

const mobile_routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'get-started',
  //   pathMatch:'full'
  // },

  // {
  //   path:'get-started',
  //   component:LandingPageComponent,
  // },
  // {
  //   path:'main',
  //   component:MainComponent
  // },
  // {
  //   path: '**',
  //    component:HeaderComponent
  // }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]

  imports: [RouterModule.forRoot(desktop_routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   public constructor(private router: Router,
    ) 
{
    if (ApplicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }

}
