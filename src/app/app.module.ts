import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SorComponent } from './sor/sor.component';
import { OszlopComponent } from './oszlop/oszlop.component';
import { SzovegComponent } from './szoveg/szoveg.component';

@NgModule({
  declarations: [
    AppComponent,
    SorComponent,
    OszlopComponent,
    SzovegComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SorComponent, OszlopComponent, SzovegComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
