import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private links = [
    {   name: 'Cusomers',   path: '/customers'  },
    {   name: 'Products',   path: '/products'   },
    {   name: 'Invoices',   path: '/invoices'   },
  ];

  constructor() { }

  ngOnInit() {  }

}
