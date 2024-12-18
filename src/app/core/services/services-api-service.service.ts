import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesApiServiceService {
  register(value: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly httpClient: HttpClient) {}

  public get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<T>(url).subscribe({
        next(value) {
          resolve(value);
        },
        error(err) {
          reject(err);
        },
      });
    });
  }

  public post<T>(url: string, body: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.httpClient.post<T>(url, body).subscribe({
        next(value) {
          resolve(value);
        },
        error(err) {
          reject(err);
        },
      });
    });
  }

}
