import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-category',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skill!: Skill;


  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
  }

}
