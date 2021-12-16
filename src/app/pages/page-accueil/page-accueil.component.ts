import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore'
import { DataService } from 'src/data.service';



@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listData: any[];
  public listCategoriesFilter: string[];
  
  

  constructor(private dataPlante : DataService) { 
    this.listData = [];
    this.listCategoriesFilter = [];
  }

  ngOnInit(): void {

    this.dataPlante.getData().subscribe(
      (data : any) => {
        //  console.log(data);
        this.listData = data;
        //  console.log(this.listData);

        // VERSION UNDERSCORE
        const tabCategories = this.listData.map(product => product.product_breadcrumb_label);
        // console.log(tabCategories);
        const listCategories = _.uniq(tabCategories);
        // console.log(listCategories);

  // VERSION JS
        //  const categorie = [...new Set(this.tabCategories)];
         this.listCategoriesFilter = listCategories;
      })


    



    
    

    
    
    }



}
