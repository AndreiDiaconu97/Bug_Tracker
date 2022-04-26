import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugTrackerApiService {

  readonly bugTrackerApiUrl = "https://localhost:7234/api"

  constructor(private http: HttpClient) { }

  // Project API
  getProjectList(): Observable<any[]> {
    return this.http.get<any[]>(this.bugTrackerApiUrl + "/Projects");
  }

  getProject(id: number | string): Observable<any> {
    return this.http.get<any>(this.bugTrackerApiUrl + `/Projects/${id}`);
  }

  addProject(data: any): Observable<any> {
    return this.http.post<any>(this.bugTrackerApiUrl + "/Projects", data);
  }

  updateProject(id: number | string, data: any): Observable<any> {
    return this.http.put<any>(this.bugTrackerApiUrl + `/Projects/${id}`, data);
  }

  deleteProject(id: number | string): Observable<any> {
    return this.http.delete<any>(this.bugTrackerApiUrl + `/Projects/${id}`);
  }

  // User API
  getUserList(): Observable<any[]> {
    return this.http.get<any[]>(this.bugTrackerApiUrl + "/Users");
  }

  getUser(id: number | string): Observable<any> {
    return this.http.get<any>(this.bugTrackerApiUrl + `/Users/${id}`);
  }
}
