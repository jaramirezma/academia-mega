import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/?result=10';

  constructor(private http:HttpClient) {

  }

  getUsers():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
