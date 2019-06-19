import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() {
   }
   sortAtoZ(userList){
     console.log('call');
    userList.sort((a,b) => (a.login.toLowerCase() > b.login.toLowerCase()) ? 1 : ((b.login.toLowerCase() > a.login.toLowerCase()) ? -1 : 0)); 
  }

  sortZtoA(userList){
    userList.sort((a,b) => (a.login.toLowerCase() < b.login.toLowerCase()) ? 1 : ((b.login.toLowerCase() < a.login.toLowerCase()) ? -1 : 0)); 
  }

  sortaRankup(userList){
    userList.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0)); 
  }

  sortaRankdown(userList){
    userList.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
  }



}
