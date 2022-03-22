import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { Categorie } from '../../models/categorie.model';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  skills : Skill[] =[];
  categories !: Categorie[];
  IdCategorie !: number;


  constructor(private skillService: SkillService ) {
    this.skills = skillService.listeSkills();
    }
 
   ngOnInit(): void {
     this.categories = this.skillService.listeCategories();
   }
 
   onChange() {
     this.skills =  this.skillService.rechercherParCategorie(this.IdCategorie);
    }

}
