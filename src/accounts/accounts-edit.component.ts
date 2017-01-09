import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './accounts-edit.component.html',
})
export class AccountsEditComponent {
  public account: Object = {
    bank: {}
  }

  public banks: Array<Object>;

  constructor (
    private httpService: AppHttpService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit () {
    this.route.params
      .subscribe((params:any) => {
        this.view(params.id);
      })

    this.bankList();
  }

  view (id: number) {
    this.httpService.builder('accounts')
      .view(id)
      .then((res) => {
        this.account = res;
      })
  }

  bankList () {
    this.httpService.builder('banks')
      .list({limit: 200})
      .then((res) => {
        this.banks = res.data;
      })
  }

  save (id: number) {
    this.httpService.builder('accounts')
      .update(id, this.account)
      .then((res) => {
        this.router.navigate(['/accounts/' + id]);
      })
  }
}
