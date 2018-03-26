import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment'

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
 private username:string;
 private api_key:string = '906740accb4ed5a67231f847d279285e41b65cf9';

 constructor(private _http:HttpClient) {
   this.username = 'vicklyne';

  }

  getUser(){
   return this._http.get('https://api.github.com/users/' +this.username + '?access_token=' + this.api_key)
   .map(result => result);
  }

  getRepos(){
   return this._http.get('https://api.github.com/users/'+ this.username + '/repos' + '?access_token=' + this.api_key)
   .map(result => result);
  }

  updateUser(username:string){
   this.username = username;
  }
}
