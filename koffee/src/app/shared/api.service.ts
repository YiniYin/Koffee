import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    private endpoint: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public get = (dimesion: string) => {
        return this.http.get('app/stubs/coffees.json')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public getSingle = (flavour: string) => {
        return this.http.get('app/stubs/coffee_' + flavour + '.json')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}