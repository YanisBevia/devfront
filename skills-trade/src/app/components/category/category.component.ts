import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category!: Categorie;


  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  onViewPost(): void {
    console.log(this.categoriesService.getCategoryById(this.category.id));
  }

}
