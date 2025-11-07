import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

type Greeting = { message: string };

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGreeting(): Observable<Greeting> {
    return this.http.get<Greeting>(`${this.base}/api/hello`);
  }
}

