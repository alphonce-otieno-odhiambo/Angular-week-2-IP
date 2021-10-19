import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl;
  tocken = environment.apiKey;
  userName:string = '' 
  apiRequest(){
    return this.http.get<any[]>(`${this. baseUrl}${this.userName}??access_token=+${this.tocken}`).toPromise();
  }
  getRepositories(){
    return this.http.get<any[]>(`${this. baseUrl}${this.userName}/repos??access_token=+${this.tocken}`).toPromise();}
  getUserName(name:string){
    this.userName = name;
  }
}

   

 
  

