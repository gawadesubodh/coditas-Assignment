import { SortService } from './sort.service/sort.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.services/api.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public api: ApiService, public sortService: SortService) {

  }
  searchUsername: string;
  userList: any;
  singleUse: any;
  isLoaded: boolean = false;
  userdata: boolean = false;
  currentUser: string;
  selectedValue: string = "Name(A-Z)";

  showConfig() {
    this.api.getUserList()
      .subscribe((data) => {
        this.userList = data;
        this.sortService.sortAtoZ(this.userList);
        this.isLoaded = true;
      });
  }

  showSigleUser(user) {
    this.userdata = !this.userdata
    if (this.userdata) {
      this.currentUser = user
      this.api.getSingleUserList(user)
        .subscribe((data) => {
          this.singleUse = data;
          this.userdata = true;

        });
    }

  }
  ngOnInit() {
    this.showConfig();
  }

  SortChange(value: string) {
    switch (value) {
      case "Name(A-Z)":
        this.sortService.sortAtoZ(this.userList)
        break;
      case "Name(Z-A)":
        this.sortService.sortZtoA(this.userList)
        break;
      case "Rankup":
        this.sortService.sortaRankup(this.userList)
        break;
      case "Rankdown":
        this.sortService.sortaRankdown(this.userList)
        break;
    }
  }

}
