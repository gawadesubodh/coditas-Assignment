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
  

}
