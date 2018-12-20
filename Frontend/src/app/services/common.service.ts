import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from "../../environments/environment.prod";



@Injectable()
export class CommonService {
    baseUrl = environment.baseUrl;
 
    constructor(private http: Http) { }

    uploadFile(data: any): Observable<{}> {
      
        return this.http.post(this.baseUrl +"", data)
            .map(this.handleData)
            .catch(this.handleError);
    }

    private handleData(res: Response) {
        let data = res.json();
        return data;
    }
    private handleError(error: Response | any) {
        return Observable.throw('API failed');
    }
}