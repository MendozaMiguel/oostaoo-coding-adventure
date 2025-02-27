import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Options } from 'selenium-webdriver';


const prefix = '/api/';


export const API_URI_CAMPAIGNS: string = prefix + 'campaigns';
export const API_URI_CAMPAIGN: string = prefix + 'campaign/:id';
export const API_URI_TECHNO: string = prefix + 'technologies';
export const API_URI_PROFILES: string = prefix + 'profiles';
export const API_URI_QUESTIONS: string = prefix + 'questions';
export const API_URI_CANDIDATS: string = prefix + 'candidats';
export const API_URI_EMAIL: string = prefix + 'email';


@Injectable()
export class ApiClientService {

  constructor(private http: HttpClient) { }

  private handleError(error: any, caught: Observable<any>): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }



  /**
   * Methode get()
   * @param path
   */
  get(path: string): Observable<any> {
    return this.http.get(path).pipe(map(this.extractData));
  }

  /**
   * Methode post()
   * @param path
   * @param payload
   */
  post(path: string, payload: any): Observable<any> {
    return this.http.post<any>(path, payload).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Methode delete()
   * @param path
   */
  delete(path: string): Observable<any> {
    return this.http.delete<any>(path).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Methode put()
   * @param path
   * @param payload
   */
  put(path: string, payload: any): Observable<any> {
    return this.http.put<any>(path, payload).pipe(
      catchError(this.handleError)
    );
  }

}


