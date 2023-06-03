import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FxPricesModule } from './features/fx-prices/fx-prices.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FxPricesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
