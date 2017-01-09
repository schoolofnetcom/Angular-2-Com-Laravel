import { Component } from '@angular/core';

@Component({
  selector: 'paginate',
  template: `
  <div class="center-align">
    <ul class="pagination">
      <li class="active"><a href="">1</a></li>
      <li class="waves-effect"><a href="">2</a></li>
      <li class="waves-effect"><a href="">3</a></li>
      <li class="waves-effect"><a href="">4</a></li>
      <li class="waves-effect"><a href="">5</a></li>
    </ul>
    <p>Você tem um total de 100 registros, exibindo página 3 de 30</p>
  </div>
  `
})

export class AppPaginateComponent {}
