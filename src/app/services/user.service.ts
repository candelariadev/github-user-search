import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'https://api.github.com/search/users';

  constructor(private readonly http: HttpClient) {}

  search(query: string): Observable<User[]> {
    if (!query.trim()) return of([]);
    return this.http.get<{ items: User[] }>(`${this.API_URL}?q=${query}`).pipe(
      map(res => res.items),
      catchError(err => {
        console.error('Error al buscar usuarios:', err);
        return of([]);
      })
    );
  }
}
