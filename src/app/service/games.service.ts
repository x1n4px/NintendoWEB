import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public getAllGames(): Observable<any>{
   const var2 = this.http.get<any>(`http://localhost:8080/games`);

   console.log(var2);
   return var2;
  }

}
