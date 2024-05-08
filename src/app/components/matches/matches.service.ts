import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from './matches.interface';
import { AppComponent } from '../../app.component';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    //console.log(this.http.get<Match[]>(AppComponent.baseUrl + 'match-service/getAll'));
    return this.http.get<Match[]>(AppComponent.baseUrl + 'match-service/getAll');
  }
}
