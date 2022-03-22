import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Categorie[] = [
    {
      id: 1,
      name: 'Graphisme/Design',
      imagePath: "assets/design.jpg",
    },
    {
      id: 2,
      name: 'Marketing',
      imagePath: "assets/marketing.jpg",
    },
    {
      id: 3,
      name: 'Musique/Audio',
      imagePath: "assets/audio.jpg",
    },
    {
      id: 4,
      name: 'Programmation/Tech',
      imagePath: "assets/tech.jpg",
    },
    {
      id: 5,
      name: 'Bricolage',
      imagePath: "assets/diy.jpg",
    },
  ];

  getAllCategories(): Categorie[] {
    return this.categories;
  }

  getCategoryById(categoryd: number): Categorie {
    const category = this.categories.find(category => category.id === categoryd);

    if (!category) {
      throw new Error('Category not found!');
    } else {
      return category;
    } 
  }
}
