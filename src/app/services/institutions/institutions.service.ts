import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateInstitution, Institutions} from '../../interfaces/institutions/institutions';
import {environment} from '../../../environments/environment';
import {API_BASE_URL} from "../../auth/token";

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {

  institution_url: string;

  constructor(
      @Inject(API_BASE_URL) private base_url: string,
    private httpClient: HttpClient
  ) {
    this.institution_url = `${base_url}/institutions`
  }

  showInstitution(id): Observable<Institutions> {
    return this.httpClient.get<Institutions>(`${this.institution_url}/${id}`);
  }

  getInstitutions(page: number): Observable<any> {
    return this.httpClient.get<any>(`${this.institution_url}?page=${page}`)
  }

  createInstitution(institution: Institutions): Observable<CreateInstitution> {
    return this.httpClient.post<CreateInstitution>(`${this.institution_url}/create`, institution);
  }

}
