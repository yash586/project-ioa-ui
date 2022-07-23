import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { api_url } from "../config";

@Injectable({
    providedIn: 'root'
})

export class TransactService {
    constructor (private http: HttpClient) { }

    transact( userTransaction: { operation?: string; amount?: string; accNumber?: string;}){
        const url = `${api_url}/transact`;
        return this.http.post(url, userTransaction); 
    }
}