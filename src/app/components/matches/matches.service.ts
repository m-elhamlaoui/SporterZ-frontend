import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from './matches.interface';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    console.log(this.http.get<Match[]>(`${this.baseUrl}/match-service/getAll`));
    return this.http.get<Match[]>(`${this.baseUrl}/match-service/getAll`);
  }
}
