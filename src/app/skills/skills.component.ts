import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = ["Android", "Angular", "Azure", "CSS", "Flask", "Flutter", "GIT",
    "Github", "Hibernate", "HTML", "Ionic", "Java", "Javascript", "Linux", "MySQL",
    "Node", "Postgresql", "Python", "Reactjs", "Spring", "Socket", "Tailwind", "Typescript"
  ];

  getSkillsRoute(skill: String): String {
    return "/assets/skills/" + skill.toLowerCase() + ".svg";
  }

}
