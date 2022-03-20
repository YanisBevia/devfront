import { Injectable } from '@angular/core';
import { Skills } from '../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skills[] = [
    {
      id: 1,
      category: 'Informatique',
      items: ["Développeur Web", "Développeur Mobile", "DevOps"],
      imagePath: "assets/image-test.jpg",
    },
    {
      id: 2,
      category: 'Crea & Design',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/image-test.jpg",
    },
    {
      id: 3,
      category: 'Communication',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/image-test.jpg",
    },
    {
      id: 4,
      category: 'Marketing',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/image-test.jpg",
    },
    {
      id: 5,
      category: 'Menager',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/image-test.jpg",
    },
  ];

  getAllSkills(): Skills[] {
    return this.skills;
  }

  getSkillById(skillId: number): Skills {
    const skill = this.skills.find(skill => skill.id === skillId);

    if (!skill) {
      throw new Error('Skill not found!');
    } else {
      return skill;
    } 
  }
}
