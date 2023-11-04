import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    {
      'name': 'express',
      'src': 'assets/icons/backend/expressjs-icon.svg'
    },
    {
      'name': 'github',
      'src': 'assets/icons/backend/github-icon.svg'
    },
    {
      'name': 'hibernate',
      'src': 'assets/icons/backend/hibernate-icon.svg'
    },
    {
      'name': 'java',
      'src': 'assets/icons/backend/java-icon.svg'
    },
    {
      'name': 'linux',
      'src': 'assets/icons/backend/linux-icon.svg'
    },
    {
      'name': 'azure',
      'src': 'assets/icons/backend/microsoft_azure-icon.svg'
    },
    {
      'name': 'node',
      'src': 'assets/icons/backend/node-svgrepo-com.svg'
    },
    {
      'name': 'open source',
      'src': 'assets/icons/backend/opensource-icon.svg'
    },
    {
      'name': 'flask',
      'src': 'assets/icons/backend/pocoo_flask-icon.svg'
    },
    {
      'name': 'python',
      'src': 'assets/icons/backend/python-icon.svg'
    },
    {
      'name': 'spring',
      'src': 'assets/icons/backend/springio-icon.svg'
    }
  ];

}