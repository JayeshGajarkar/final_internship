import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  

  addUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8000/users',user).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
  
  getUsers():Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8000/users').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  editUser(user:User):Observable<any>{
    return this.http.put<any>(`http://localhost:8000/user/${user.id}`,user).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  deleteUser(user:User):Observable<any>{
    return this.http.delete<any>(`http://localhost:8000/user/${user.id}`);
  }
  
}
