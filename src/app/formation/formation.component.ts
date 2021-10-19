import { Component, OnInit } from '@angular/core';
import { GithubService } from '../gitHub-service/github.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  
  user:any; 
  repositories:any;
  userName = "";

  constructor(private github:GithubService) { }
  getUserProfile(){
    this.github.apiRequest().then((result:any)=>{
      this.user=result
    })
    this.github.getRepositories().then((repos:any)=>{
      this.repositories = repos
    })
    this.github.getUserName(this.userName);
  }

  ngOnInit(): void {
    this. getUserProfile()
  }

}
