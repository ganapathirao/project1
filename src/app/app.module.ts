import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './user-operations/login/login.component';
import { RegisterComponent } from './user-operations/register/register.component';
import { PasswordComponent } from './user-operations/password/password.component';
import { UsernameComponent } from './user-operations/username/username.component';
import { Route } from '@angular/compiler/src/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonComponent } from './common/common.component';

const routervar:Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'password', component:PasswordComponent},
  {path:'username', component:UsernameComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    UsernameComponent,
    HeaderComponent,
    FooterComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,      
    RouterModule.forRoot(routervar, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {
  
 }
