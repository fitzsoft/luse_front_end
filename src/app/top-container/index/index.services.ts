import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  baseUrl:string = "http://localhost:5000";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  get_index(){
    return this.httpClient.get(this.baseUrl + '/indexs');
    
  }
 
}