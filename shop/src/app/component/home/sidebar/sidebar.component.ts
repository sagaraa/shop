import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // categories = [
  //   "Fantasy", "Westerns", "Romance", "Thriller", "Mystery", "Erotica", "Detective story", "Dystopia",
  //   "Memoir", "Biography", "Play", "Musical", "Satire"
  // ];
  categories = [];
  constructor(private productService: ProductService) { }

  getCategoriesList(){
    this.productService.getCategoryList()
    .subscribe(
      data => {
        this.categories = data.categories['0'].categories;
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.getCategoriesList();
  }

}
