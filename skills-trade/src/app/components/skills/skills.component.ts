import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills : Skill[];

  constructor(private skillService: SkillService ) {
    this.skills = skillService.listeSkills();
   }

   supprimerSkill(s: Skill)
   {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.skillService.supprimerSkill(s);
   }

  ngOnInit() {
  }

}
