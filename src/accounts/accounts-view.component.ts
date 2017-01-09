import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './accounts-view.component.html',
  styles: ['a {cursor: pointer}'],
})
export class AccountsViewComponent {
  public account: Object = {
    bank: {}
  }

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
  }

  view (id: number) {
    this.httpService.builder('accounts')
      .view(id)
      .then((res) => {
        this.account = res;
      })
  }

  delete (id: number) {
    this.httpService.builder('accounts')
      .delete(id)
      .then((res) => {
        this.router.navigate(['/accounts']);
      })
  }

}
