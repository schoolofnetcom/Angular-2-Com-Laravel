import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';

@Component({
  templateUrl: './accounts.component.html',
  styles: ['tbody tr {cursor: pointer}'],
})
export class AccountsComponent {
  public accounts: Object = {
    data: []
  };

  constructor (private httpService: AppHttpService) {}

  ngOnInit () {
    this.list();
  }

  list () {
    this.httpService.builder('accounts')
      .list()
      .then((res) => {
        this.accounts = res;
      })
  }

  pageChanged(data: Object) {
    this.accounts = data;
  }
}
