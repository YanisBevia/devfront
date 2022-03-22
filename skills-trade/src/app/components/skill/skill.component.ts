import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill!: Skill;


  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
  }

  onViewPost(): void {
    console.log(this.skillService.getSkillById(this.skill.id));
  }

}
