import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe((event: NavigationStart) => {
        this.currentUrl = event.url;
      });
  }

  public openHome() {
    this.router.navigateByUrl('/');
  }

  public openCustomers() {
    this.router.navigateByUrl('/customers');
  }

  public openProducts() {
    this.router.navigateByUrl('/products');
  }

  public openInvoices() {
    this.router.navigateByUrl('/invoices');
  }

}
