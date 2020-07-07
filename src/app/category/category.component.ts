import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories;
  @Input() id: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCategory(this.id).subscribe(
      (data) => {
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.categories = data['categories'];
      }
    );
  }

}
