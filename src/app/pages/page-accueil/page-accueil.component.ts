import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore'
import { any } from 'underscore';
import {list_products} from '../../data'

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listData = list_products;
  tabCategories = [];
  

  constructor() { }

  ngOnInit(): void {
    this.tabCategories = this.listData .push('product_breadcrumb_label');
    console.log(this.tabCategories);
    
  }

}
