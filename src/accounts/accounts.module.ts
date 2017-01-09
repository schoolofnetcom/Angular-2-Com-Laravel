import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppPaginateComponent } from '../app/app-paginate.component';
import { AppHttpService } from '../app/app-http.service';
import { FormsModule } from '@angular/forms';

import { AccountsComponent } from './accounts.component';
import { AccountsEditComponent } from './accounts-edit.component';
import { AccountsNewComponent } from './accounts-new.component';
import { AccountsViewComponent } from './accounts-view.component';

const appRoutes: Routes = [
  {path: 'accounts', component: AccountsComponent},
  {path: 'accounts/new', component: AccountsNewComponent},
  {path: 'accounts/:id', component: AccountsViewComponent},
  {path: 'accounts/:id/edit', component: AccountsEditComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  declarations: [
    AccountsComponent,
    AccountsEditComponent,
    AccountsNewComponent,
    AccountsViewComponent,
    AppPaginateComponent
  ],
  //bootstrap: [],
  providers: [ AppHttpService ],
})

export class AccountsModule {}
