import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Branches} from "../../interfaces/institutions/branches/branches";
import {API_BASE_URL} from "../../auth/token";

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(
      @Inject(API_BASE_URL) private base_url: string,
      private httpClient: HttpClient
  ) { }



  getBranches(instId: number):Observable<Branches> {
    return this.httpClient.get<Branches>(`${this.base_url}/institutions/${instId}/branches`)
  }

}
