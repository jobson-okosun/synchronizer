import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../environments/environment";


@Injectable({ providedIn: 'root'})
export default class DataService {
    private _http = inject(HttpClient)
    private _domain = environment.apiUrl
}