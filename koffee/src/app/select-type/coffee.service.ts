import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoffeeService {
    private endpoint: string;
    private headers: Headers;

  constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public get = () => {
        return this.http.get('stubs/coffees.json')
            .map((res: Response) => res.json());
    }

    public getSingle = (flavour: string) => {
        return this.http.get('stubs/coffee_' + flavour + '.json')
            .map((res: Response) => res.json());
    }

}