import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { BillingComponent } from './billing/billing.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from'@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ServicesComponent,
    BillingComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'home', component:HomeComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'services', component:ServicesComponent},
      {path:'register', component:RegisterComponent},
      {path:'login', component:LoginComponent},
      {path:'billing', component:BillingComponent},
      {path:'details', component:DetailsComponent},
      {path:'contact-us', component:ContactUsComponent} ,
      {path:'about-us', component:AboutUsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
