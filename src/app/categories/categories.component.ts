import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  selectedCategory = false;
  selectedCategoryName;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCategories().subscribe(
      (data) => {
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.categories = data['categories'];
      }
    );
  }

  onSelect(category): void {
    this.selectedCategory = !this.selectedCategory;
    this.selectedCategoryName = category.name;
  }

}
