import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContectComponent} from './contect/contect.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
                {path:'home',component:HomeComponent}
              ,{path:'about',component:AboutComponent}
              ,{path:'contect',component:ContectComponent},
              { path: 'update/:id', component: UpdateComponent },
              {path:'student/:id',component:StudentdetailsComponent},
                  { path: '',redirectTo: 'about',pathMatch: 'full'},
                 { path: '**', component: PagenotfoundComponent }
                ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
