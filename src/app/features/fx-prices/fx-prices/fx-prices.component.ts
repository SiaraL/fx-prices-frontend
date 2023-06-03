import { Component, OnDestroy, OnInit } from '@angular/core';
import { FxPricesService } from '../fx-prices.service';
import { Subscription } from 'rxjs';
import { FxPrice } from 'app/features/fx-price.model';

@Component({
  selector: 'fx-prices',
  templateUrl: './fx-prices.component.html',
  styleUrls: ['./fx-prices.component.scss'],
})
export class FxPricesComponent implements OnInit, OnDestroy {
  fxData: FxPrice[] = [];
  private _priceSubscription$!: Subscription;
  private _timeout: any;
  private readonly CALL_INTERVAL = 3000;

  constructor(private readonly _fxPricesService: FxPricesService) {}

  ngOnInit(): void {
    this._subscribeFxPrices();
  }

  ngOnDestroy(): void {
    this._priceSubscription$.unsubscribe();
  }

  private _setInterval(): void {
    if (typeof this._timeout === 'number') {
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      console.log('call');
      this._subscribeFxPrices();
    }, this.CALL_INTERVAL);
  }

  private _subscribeFxPrices(): void {
    this._setInterval();
    this._priceSubscription$ = this._fxPricesService
      .getFxPrices()
      .subscribe((data: FxPrice[]) => {
        this.fxData = data;
      });
  }
}
