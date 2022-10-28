import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import{ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{ StudServiceService} from './stud-service.service';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [{path:'home',component:HomeComponent},{path:'About',component:AboutComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContectComponent,
    PagenotfoundComponent,
    StudentdetailsComponent,
    UpdateComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [ StudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
