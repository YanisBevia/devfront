import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skill[] = [
    {
      id: 1,
      category: 'Graphisme/Design',
      items: ["Développeur Web", "Développeur Mobile", "DevOps"],
      imagePath: "assets/design.jpg",
    },
    {
      id: 2,
      category: 'Marketing',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/marketing.jpg",
    },
    {
      id: 3,
      category: 'Musique/Audio',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/audio.jpg",
    },
    {
      id: 4,
      category: 'Programmation/Tech',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/tech.jpg",
    },
    {
      id: 5,
      category: 'Bricolage',
      items: ["Skill 1", "Skill 2", "Skill 3"],
      imagePath: "assets/diy.jpg",
    },
  ];

  getAllSkills(): Skill[] {
    return this.skills;
  }

  getSkillById(skillId: number): Skill {
    const skill = this.skills.find(skill => skill.id === skillId);

    if (!skill) {
      throw new Error('Skill not found!');
    } else {
      return skill;
    } 
  }
}
