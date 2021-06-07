import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  constructor() { }
  url = () => 'http://localhost:8080';
}

