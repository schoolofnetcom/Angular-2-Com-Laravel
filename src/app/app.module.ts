import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AccountsModule } from '../accounts/accounts.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/accounts', pathMatch: 'full'},
];

@NgModule({
  imports: [
    AccountsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
