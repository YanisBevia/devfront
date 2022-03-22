import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { Observable, of } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills : Skill[];
  categories : Categorie[];
  skillsRecherche !: Skill[];

  skill = new Skill();
  categorie = new Categorie();

  constructor() { 
    this.categories = [ 
      {id : 1, nom : "Graphisme"},
      {id : 2, nom : "Musique"}
      ]; 

    this.skills = [
      { id : 1,  nom : "Cours Adobe Photoshop", prix : 20, date : new Date("01/14/2011"), categorie : {id : 1, nom : "Graphisme"}, 
      image: 
      "https://pic.clubic.com/v1/images/1901235/raw"
      },
      { id : 2,  nom : "Cours de guitare", prix : 30, date : new Date("12/17/2010"), categorie : {id : 2, nom : "Musique"}, image:
      "https://www.cultura.com/cdn-cgi/image/width=2000/content/dam/cultura-one/2021/instruments-de-musique/UNI_HEAD_guitare.jpg"
      },
    ];
  }

  listeSkills():Skill[] {
    return this.skills;
  }

  listeCategories():Categorie[] {
    return this.categories;
  }

  ajouterSkill( skil: Skill){
    this.skills.push(skil);
  }

  supprimerSkill( skil: Skill){
     const index = this.skills.indexOf(skil, 0);
     if (index > -1) {
       this.skills.splice(index, 1);
     }
   }

  //  consulterSkill(id:number): Skill{    
  //   this.skill =  this.skills.find(p => p.id == id);
  //     return this.skill;
  //  }

   trierSkills(){
    this.skills = this.skills.sort((n1,n2) => {
      if (n1.id > n2.id) {
          return 1;
      }
  
      if (n1.id < n2.id) {
          return -1;
      }
  
      return 0;
    });
  }

  updateProduit(s:Skill){
      this.supprimerSkill(s);
      this.ajouterSkill(s);
      this.trierSkills();
  }

  // consulterCategorie(id:number): Categorie{    
  //   this.categorie =  this.categories.find(cat => cat.id  == id);
  //     return this.categorie;
  // }

  rechercherParCategorie(idCat: number): Skill[]{
    this.skillsRecherche = [];
   
    this.skills.forEach((cur, index) => {
     if(idCat == cur.categorie.id) {
        this.skillsRecherche.push(cur);
         }
   });
   return this.skillsRecherche;
   }
}
