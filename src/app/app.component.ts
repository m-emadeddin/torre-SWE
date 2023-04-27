import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { config } from './config';

declare var process: {
  env: {
    API_URL: string
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) { }
  searchText :string= '';
  error:boolean=false;
  title = 'torre-SWE';
  userData:any;
  selectedSkill: any;


  getUserData(){
    this.selectedSkill = null;
    this.userData = null;
    this.error = false;
    this.http.get(`${config.apiUrl}/api/bios/${this.searchText}`,{
      headers:{'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET'}})
    .subscribe((res)=>{
      this.error = false;
      this.userData = res;
    },(err)=>{
      this.error = true
    })
  }

  onSkillSelected(selected: any) {
    this.selectedSkill = selected;
  }
}