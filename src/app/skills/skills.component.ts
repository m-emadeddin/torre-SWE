import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../app.component.css'],
})
export class SkillsComponent {
  ngOnInit() {
    for (let skill of this.skills) {
      if (!this.skillsByGroup.has(skill.proficiency))
        this.skillsByGroup.set(skill.proficiency, []);
      this.skillsByGroup.get(skill.proficiency).push(skill);
    }
  }

  skillsByGroup: Map<string, any> = new Map();
  groups: string[] = [
    'master',
    'expert',
    'proficient',
    'novice',
    'no-experience-interested',
  ];
  groupTitle: { [key:string]: string } = {
    master: 'Master',
    expert: 'Expert',
    proficient: 'Proficient',
    novice: 'Beginner',
    'no-experience-interested': 'No experience, but interested',
  };
  @Input() skills: any;
  @Output() onSelect = new EventEmitter<any>();
}