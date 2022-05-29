import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Computer } from "./computer";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ComputerService {

    constructor(private http: HttpClient){}

    protected UrlServiceV1: string = environment.url;

    getComputers() : Observable<Computer[]> {
        return this.http
        .get<Computer[]>(this.UrlServiceV1 + "computerData");
    }
}