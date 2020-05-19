import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/app.htttp.service';
@Component({
  selector: 'app-searchproduct-component',
  templateUrl: './searchproduct.view.html'
})
export class SearchProductComponent implements OnInit {
  productId: string;
  httpService: HttpService;
  constructor(httpService : HttpService) {
      this.httpService = httpService;
  }

  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {

  }
}
