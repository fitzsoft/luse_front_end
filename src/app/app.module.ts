import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LogoComponent } from './header-component/logo/logo.component';
import { NavbarComponent } from './header-component/navbar/navbar.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { SlideComponent } from './top-container/slide/slide.component';
import { IndexComponent } from './top-container/index/index.component';

import { FlexLayoutModule } from '@angular/flex-layout'



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatCarousel, MatCarouselComponent, MatCarouselModule } from '@ngmodule/material-carousel';
import { NgMarqueeModule } from 'ng-marquee';

import { AppBarComponent } from './app-bar/app-bar.component';
//import { UsersComponent } from './users/users.component';
//import { LoginComponent } from './users/login/login.component';
//import { RegisterComponent } from './users/register/register.component';
//import IndexComponent from './index/index.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './top-container/index/index.services';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components/alert.component';
//import { AlertService } from './_services/alert.service';
//import { ValidatorsComponent } from './_validators/validators.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { UserService } from './_services/user.service';
import { MobileAppComponent } from './top-container/mobile-app/mobile-app.component';
import { AdvertContainerComponent } from './top-container/advert-container/advert-container.component';
import { AlertService } from './_services';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  //{path: 'users', component: UsersComponent },
  {path: 'login', component: LoginComponent },
  {path: 'index', component: IndexComponent },
  {path: 'register', component: RegisterComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LogoComponent,
    NavbarComponent,
    FooterComponentComponent,
    TopContainerComponent,
    SlideComponent,
    IndexComponent,
    AppBarComponent,
    //UsersComponent,
    //LoginComponent,
    //RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MobileAppComponent,
    AdvertContainerComponent,
    AlertComponent
    // AlertService,
    //ValidatorsComponent,
    //   
 
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgMarqueeModule,
    HttpClientModule,
    ReactiveFormsModule,
    //CookieService,
    FormsModule,  
    MatIconModule,
    FlexLayoutModule
   
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide:  UserService},
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
