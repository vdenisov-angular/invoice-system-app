import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent implements OnInit {

  public id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    // this.customer$ = this.customerService.getById(this.id);
    console.log(' => ', this.id);
  }

}
