import { Injectable } from '@angular/core';
// HttpClient needed to enable HTTP requests.
import { HttpClient } from '@angular/common/http';
// Import Flood interface
import { Flood } from '../interfaces/flood';
// Observable needed to enable HTTP requests.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloodService {
  
  // Inject HttpClient, calling it http, as type HttpClient
  constructor(private http: HttpClient) {}
      
  getFloods(): Observable<Flood[]> {
    return this.http.get<Flood[]>(`https://environment.data.gov.uk/flood-monitoring/id/floods`)
  }

}
