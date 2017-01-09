import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './accounts-new.component.html',
})
export class AccountsNewComponent {
  public account: Object = {
    bank: {}
  }

  public banks: Array<Object>;

  constructor (
    private httpService: AppHttpService,
    private router: Router,
  ) {}

  ngOnInit () {
    this.bankList();
  }

  bankList () {
    this.httpService.builder('banks')
      .list({limit: 200})
      .then((res) => {
        this.banks = res.data;
      })
  }

  save () {
    this.httpService.builder('accounts')
      .insert(this.account)
      .then((res) => {
        this.router.navigate(['/accounts']);
      })
  }
}
