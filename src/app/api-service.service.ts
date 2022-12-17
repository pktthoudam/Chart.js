import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

  // marks apiUrl
 private marksApiUrl = "http://localhost:3000/marks"

  getMarks():Observable<any>{
    return this.httpClient.get<any>(this.marksApiUrl)
  }

}
