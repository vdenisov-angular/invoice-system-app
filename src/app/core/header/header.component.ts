import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

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
