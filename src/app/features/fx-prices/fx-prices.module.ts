import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FxPricesComponent } from './fx-prices/fx-prices.component';
import { FxPricesService } from './fx-prices.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [FxPricesComponent],
  exports: [FxPricesComponent],
  providers: [FxPricesService],
})
export class FxPricesModule {}
