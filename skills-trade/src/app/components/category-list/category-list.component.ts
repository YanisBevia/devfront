import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories!: Categorie[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getAllCategories();
  }

}
