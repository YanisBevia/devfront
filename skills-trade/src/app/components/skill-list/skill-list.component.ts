import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills!: Skill[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skills = this.skillsService.getAllSkills();
  }

}
