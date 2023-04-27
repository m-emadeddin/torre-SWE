import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  searchText :string= '';
  error:boolean=false;
  title = 'torre-project';
  userData:any;
  selectedSkill: any;


  getUserData(){
    this.selectedSkill = null;
    this.userData = null;
    this.error = false;
    this.http.get(`http://localhost:4200/api/bios/${this.searchText}`,{headers:{'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'}})
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