import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Personal} from "../../interfaces/institutions/branches/personal/personal";
import {API_BASE_URL} from "../../auth/token";

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  personal_url: string;

  constructor(
      @Inject(API_BASE_URL) private base_url: string,
      private httpClient: HttpClient
  ) {
    this.personal_url = `${base_url}/institutions`
  }

  getPersonal(instId: number, branchId): Observable<Personal> {
    return this.httpClient.get<Personal>(`${this.personal_url}/${instId}/branches/${branchId}/personal`);
  }

  showPerson(instId:number, branchId:number, id:number): Observable<Personal> {
    return this.httpClient.get<Personal>(`${this.personal_url}/${instId}/branches/${branchId}/personal/${id}`)
  }

}
