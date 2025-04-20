import { Injectable } from '@angular/core';
// HttpClient needed to enable HTTP requests.
import { HttpClient } from '@angular/common/http';
// Import Flooddetail interface
import { Flooddetail } from '../interfaces/flooddetail';
// Observable needed to enable HTTP requests.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloodidService {
  
  // Inject HttpClient, calling it http, as type HttpClient
  constructor(private http: HttpClient) {}
  
  ext: string = "";

  getFlood(): Observable<Flooddetail[]> {
    return this.http.get<Flooddetail[]>(`https://environment.data.gov.uk/flood-monitoring/id/floods/` + this.ext)
  }

}
