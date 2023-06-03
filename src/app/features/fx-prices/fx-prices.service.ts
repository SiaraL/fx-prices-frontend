import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FxPrice } from '../fx-price.model';

@Injectable({
  providedIn: 'root',
})
export class FxPricesService {
  private readonly HTTP_URL = 'http://localhost:8080/api/';

  constructor(private readonly _http: HttpClient) {}

  getFxPrices(): Observable<FxPrice[]> {
    const path = this.HTTP_URL + 'fx-prices';
    return this._http.get<FxPrice[]>(path);
  }
}
