import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor( public api:ApiService ) { 

  }
  searchUsername:string;
  userList:any;
  Config:any;
  isLoaded:boolean=false
  showConfig() {
    this.api.getUserList()
      .subscribe((data) =>  {
       this.userList=data; 
       console.log('this.userList',this.userList); 
      this.isLoaded=true;
      });
  }

  ngOnInit() {
    this.showConfig();
  }
  ngAfterViewInit(){
    this.showConfig();

  }

  sortarryaz(){
    this.userList.sort((a,b) => (a.login > b.login) ? 1 : ((b.login > a.login) ? -1 : 0)); 
  }

  sortarryza(){
    this.userList.sort((a,b) => (a.login < b.login) ? 1 : ((b.login < a.login) ? -1 : 0)); 
  }

  sortarryzaidrant1(){
    this.userList.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0)); 
  }

  sortarryzaidrant2(){
    this.userList.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
  }


  compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }
  

}
