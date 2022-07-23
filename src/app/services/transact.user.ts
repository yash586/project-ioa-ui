import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class TransactService {
    constructor (private http: HttpClient) { }

    transact( userTransaction: { operation?: string; amount?: string; accNumber?: string;}){
        const url = 'http://localhost:3000/transact';
        return this.http.post(url, userTransaction); 
    }
}