import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable()

export class Service {
    private url = 'http://192.168.51.112:4000';
    
    constructor(private http: HttpClient) {
        
    }

    public get(): Observable<string>{
        return this.http.get(this.url + '/check', {responseType: 'text'});
    }
}