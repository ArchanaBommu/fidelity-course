import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { DemosComponent } from './pages/demos/demos.component';
import { HomeComponent } from './pages/home/home.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ManageComponent } from './pages/manage/manage.component';
import { LoginComponent } from './common/login/login.component';
import { UserComponent } from './common/user/user.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"demos",component:DemosComponent},
  {path:"offers",component:OffersComponent},
  {path:"manage",component:ManageComponent},
  {path:"manageuser",component:LoginComponent},
  {path:"register",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
